import i18nPt from "./i18n-pt.js";
import i18nEn from "./i18n-en.js";

const i18n = {
    pt: i18nPt,
    en: i18nEn,
};

function walkObject(obj, callback, prefix = '') {
    Object.keys(obj).forEach((key) => {
        const complete_key = `${(prefix != '' ? `${prefix}.` : '')}${key}`;
        if (typeof obj[key] === "object") {
            walkObject(obj[key], callback, complete_key);
        } else {
            callback(complete_key, obj[key]);
        }
    });
}

window.setLanguage = (language) => {
    walkObject(i18n[language], (key, value) => {
        document.querySelectorAll(`[i18n="${key}"]`).forEach((e) => {
            e.innerHTML = value;
        });
    });
}

function getBrowserLanguage () {
    if (/^pt\b/.test(navigator.language)) {
        window.setLanguage("pt");
    }
    window.setLanguage("en");
}

getBrowserLanguage();