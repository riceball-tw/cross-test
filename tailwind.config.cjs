/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            serif: ['EB Garamond', ...defaultTheme.fontFamily.serif],
            sans: ['jf-jinxuan', ...defaultTheme.fontFamily.sans],
        },
        colors: {
            gray: colors.gray,
            transparent: 'transparent',
            current: 'currentColor',
            black: 'black',
            white: 'white',
            debug: 'red',
            primary: {
                50: 'var(--primary-color-50)',
                100: 'var(--primary-color-100)',
                200: 'var(--primary-color-200)',
                300: 'var(--primary-color-300)',
                400: 'var(--primary-color-400)',
                500: 'var(--primary-color-500)',
                600: 'var(--primary-color-600)',
                700: 'var(--primary-color-700)',
                800: 'var(--primary-color-800)',
                900: 'var(--primary-color-900)',
            },
            accent: {
                DEFAULT: 'rgba(var(--accent-color) / <alpha-value>)',
            },
        },
    },
    plugins: [require('tailwindcss-touch')(), require('@tailwindcss/typography')],
};
