

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
    .use(HttpApi) // Загрузка переводов из файлов
    .use(LanguageDetector) // Автоопределение языка
    .use(initReactI18next) // Инициализация i18next в React
    .init({
        supportedLngs: ["en", "ru", "kg"], // Доступные языки
        fallbackLng: "en", // Язык по умолчанию
        lng: 'kg',
        detection: {
            order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag"],
            caches: ["cookie", "localStorage"],
        },
        backend: {
            loadPath: "/locales/{{lng}}/translation.json", // Путь к файлам перевода
        },
        interpolation: {
            escapeValue: false, // Отключаем экранирование HTML
        },
    });

export default i18n;
