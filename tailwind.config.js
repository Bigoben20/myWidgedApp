const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
        './node_modules/tw-elements/dist/js/**/*.js'
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            animation: {
                waves: 'waves 1s ease-in-out infinite',
            },
            keyframes: {
                waves: {
                  '0%': { filter: 'hue-rotate(0deg)' },
                  '50%': { filter: 'hue-rotate(180deg)' },
                  '100%': { filter: 'hue-rotate(360deg)' },
                }
              }
        },
    },

    plugins: [require('@tailwindcss/forms'),require("tw-elements/dist/plugin")],
};
