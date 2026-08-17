/**
 * Mini-servidor (Cloudflare Worker) que esconde a chave do Google Gemini.
 * O site chama este Worker; o Worker chama o Gemini com a chave guardada
 * como segredo no Cloudflare — a chave nunca aparece no código do site.
 *
 * Como ativar (grátis, ~5 minutos):
 *   1. Crie uma conta em https://dash.cloudflare.com (plano Free).
 *   2. No menu, vá em "Workers & Pages" → "Create" → "Create Worker" →
 *      dê um nome (ex.: assistente-gemini) → "Deploy".
 *   3. Clique em "Edit code", apague o código de exemplo, cole este arquivo
 *      inteiro e clique em "Deploy".
 *   4. Volte à página do Worker → aba "Settings" → "Variables and Secrets" →
 *      "Add" → tipo "Secret", nome GEMINI_API_KEY, valor = sua chave criada
 *      em https://aistudio.google.com/apikey → "Deploy".
 *   5. (Recomendado) Adicione também uma variável ALLOWED_ORIGINS com os
 *      endereços do site separados por vírgula, ex.:
 *      https://leirbagcr.github.io — assim só o seu site consegue usar.
 *   6. Copie a URL do Worker (ex.: https://assistente-gemini.SEU-USUARIO.workers.dev)
 *      e cole em IA_PROXY_URL no arquivo ia-config.js do site.
 */

const GEMINI_MODELO_PADRAO = "gemini-2.0-flash";

export default {
  async fetch(request, env) {
    const origem = request.headers.get("Origin") ?? "";
    const permitidas = (env.ALLOWED_ORIGINS ?? "*").split(",").map((o) => o.trim());
    const liberada = permitidas.includes("*") || permitidas.includes(origem);
    const cors = {
      "Access-Control-Allow-Origin": liberada && origem ? origem : permitidas.includes("*") ? "*" : "null",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: cors });
    }
    if (request.method !== "POST") {
      return Response.json({ error: "Use POST" }, { status: 405, headers: cors });
    }
    if (!liberada) {
      return Response.json({ error: "Origem não permitida" }, { status: 403, headers: cors });
    }
    if (!env.GEMINI_API_KEY) {
      return Response.json(
        { error: "Configure o segredo GEMINI_API_KEY no Worker" },
        { status: 500, headers: cors },
      );
    }

    const modelo = env.GEMINI_MODELO ?? GEMINI_MODELO_PADRAO;
    const resposta = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${modelo}:generateContent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": env.GEMINI_API_KEY,
        },
        body: await request.text(),
      },
    );

    return new Response(resposta.body, {
      status: resposta.status,
      headers: { "Content-Type": "application/json", ...cors },
    });
  },
};
