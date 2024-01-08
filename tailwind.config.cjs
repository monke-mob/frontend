/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {
            textColor: {
                brand: "#46EBA5",
                primary: "#ffffff",
                light: "#e5e5e5",
            },
            colors: {
                brand: "#ffad00",
                brandSecondary: "#ffd160",
                background: "#02080e",
                backgroundSecondary: "#060d15",
                border: "#000000",
            },
            borderRadius: {
                normal: "15px",
            },
            fontFamily: {
                Montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
                ZCOOLKuaiLe: ["ZCOOL KuaiLe", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};
