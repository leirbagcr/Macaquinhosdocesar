/**
 * Configuração da IA do assistente (Google Gemini).
 *
 * Como ativar:
 *   1. Crie uma chave gratuita em https://aistudio.google.com/apikey
 *   2. Cole a chave em GEMINI_API_KEY abaixo.
 *   3. (Recomendado) Em https://console.cloud.google.com/apis/credentials,
 *      restrinja a chave por "referenciador HTTP" ao domínio do site, para
 *      que ela só funcione a partir das suas páginas.
 *
 * Sem chave, o assistente continua funcionando com o mecanismo local
 * de respostas (sem IA), que roda inteiro no navegador.
 */
export const GEMINI_API_KEY = "";

export const GEMINI_MODELO = "gemini-2.0-flash";
