/**
 * 慧眼拍题 AI - 全局接口配置文件 (config.js)
 * 使用说明：
 * 1. 请将本文件 (config.js) 与您的 HTML 文件 (如 ceshi.html) 放在同一个文件夹下。
 * 2. 以后如需更换接口地址、API Key 或模型名称，直接用记事本修改下面对应的值并保存即可。
 * 3. 无论谁打开网页，都会自动加载本文件中的最新配置！
 */
window.PATI_CONFIG = {
    "forceUseConfig": true,
    "provider": "openai",
    "geminiKey": "",
    "geminiBaseUrl": "https://generativelanguage.googleapis.com",
    "openaiUrl": "https://maas.qianwenaiapi.com/compatible-mode/v1/chat/completions",
    "openaiKey": "sk-ws-H.PYXIMLM.KTpw.MEYCIQDp2B45cpOwVkGjNYNGDn9woM1PJT546P2NuhQ99UpKAQIhAL6_wMf_HUwbAsKoUi206_Ad9Q6vSNvQ4t3Zfwp41ZlK",
    "openaiModel": "qwen-vl-ocr",
    "ocrReasoningModel": "qwen-plus"
};
