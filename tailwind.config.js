import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'dark-blue': '#074EA2',
                'light-gray': '#F4F4F4',
            },
        },
    },
    plugins: [
        plugin(function ({ addVariant, e }) {
            addVariant('even-child', ({ modifySelectors, separator }) => {
                modifySelectors(({ className }) => {
                    return `.${e(`even-child${separator}${className}`)}:nth-child(even)`;
                });
            });
        }),
    ],
};

