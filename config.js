/**
 * config.js —— ceshi.html 的本地 API 配置（可选文件）
 *
 * 作用：本文件必须和 ceshi.html 放在同一目录，页面启动时会自动读取 window.PATI_CONFIG。
 *       之前页面引用了 ./config.js 但文件不存在，Live Server 返回的 404 页面是
 *       MIME=text/html，浏览器因此报：
 *       "Refused to execute script from '.../config.js' because its MIME type ('text/html') is not executable"
 *       本文件存在后该报错消失。
 *
 * 默认保持「全部注释」状态：此时 window.PATI_CONFIG 不会被定义，
 * 页面会回退到浏览器 localStorage 里已保存的配置（键名 smartsnap_api_config_v1）。
 *
 * 需要固定使用某个接口 / 密钥时，取消下面的注释并填入真实值。
 *
 * ⚠️ 注意：一旦这里定义了 window.PATI_CONFIG，页面会优先使用它，
 *    并在每次启动时把它写入 localStorage，覆盖掉之前保存的同名配置。
 *    也就是说：如果只填了一半（比如留空 openaiKey），原本可用的配置会被清空。
 */
// window.PATI_CONFIG = {
//     provider: "openai",
//     openaiUrl: "https://maas.qianwenaiapi.com/compatible-mode/v1/chat/completions",
//     openaiKey: "sk-在这里填入你的密钥",
//     openaiModel: "qwen-vl-max",
//     ocrReasoningModel: "qwen-plus",
// };

/**
 * 备用写法：只想覆盖单个字段时，可以在 config.js 里直接改 localStorage，
 * 不使用 window.PATI_CONFIG，从而不干扰其它已保存字段。
 */
// localStorage.setItem("smartsnap_api_config_v1", JSON.stringify({
//     provider: "openai",
//     openaiUrl: "https://maas.qianwenaiapi.com/compatible-mode/v1/chat/completions",
//     openaiKey: "sk-在这里填入你的密钥",
//     openaiModel: "qwen-vl-max",
//     ocrReasoningModel: "qwen-plus"
// }));
