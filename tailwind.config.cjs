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
                background: {
                    DEFAULT: "#02080E",
                    50: "#90C0EF",
                    100: "#7EB5ED",
                    200: "#5AA1E8",
                    300: "#378DE2",
                    400: "#1E78D2",
                    500: "#1964AF",
                    600: "#144F8B",
                    700: "#0F3B67",
                    800: "#0A2744",
                    900: "#051220",
                    950: "#02080E",
                },
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
