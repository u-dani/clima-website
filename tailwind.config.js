/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'primary-light': '#EC6316',
                'secondary-light': '#F5F5F5',

                'primary-dark': '#8A2BE2',
                'secondary-dark': '#1B1A1D',

                'light-gray': '#A4A4A4',
                'medium-gray': '#222',
                'dark-gray': '#101014',
            },
        },
    },
    plugins: [],
}
