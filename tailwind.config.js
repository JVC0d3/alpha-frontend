/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'dark-blue': '#023859',
                'light-gray': '#F4F4F4',
            },
        },
    },
    plugins: [],
};

