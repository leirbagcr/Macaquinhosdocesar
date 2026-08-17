/**
 * Configuração da IA do assistente (Google Gemini).
 *
 * Jeito recomendado — mini-servidor que esconde a chave:
 *   1. Siga o passo a passo em worker/gemini-proxy.js (Cloudflare Workers,
 *      grátis). A chave do Gemini fica guardada como segredo no Cloudflare.
 *   2. Cole a URL do Worker em IA_PROXY_URL abaixo.
 *
 * Alternativa simples (a chave fica visível no código do site):
 *   1. Crie uma chave gratuita em https://aistudio.google.com/apikey
 *   2. Cole em GEMINI_API_KEY abaixo e restrinja a chave por domínio em
 *      https://console.cloud.google.com/apis/credentials
 *
 * Sem nada configurado, o assistente continua funcionando com o mecanismo
 * local de respostas (sem IA), que roda inteiro no navegador.
 */
export const IA_PROXY_URL = "";

export const GEMINI_API_KEY = "";

export const GEMINI_MODELO = "gemini-2.0-flash";
