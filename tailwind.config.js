const colors = require("tailwindcss/colors");

module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                "hero-pattern": "url('/src/images/blob-scene-haikei.svg')",
            }),
        },
        colors: {
            gray: colors.coolGray,
            green: colors.green,
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
