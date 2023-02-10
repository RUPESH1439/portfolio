/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        colors: {
            background: '#020c1b',
            blue: '#1fb6ff',
            purple: '#7e5bef',
            pink: '#ff49db',
            'orange-light': '#FF7700',
            'orange-dark': '#E04D01',
            white: '#EEEEE',
            'blue-light': '#2A2550',
            'blue-dark': '#251D3A',
            green: '#13ce66',
            yellow: '#ffc82c',
            'gray-dark': '#273444',
            gray: '#ccd6f6',
            'gray-light': '#d3dce6',
        },
        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
        extend: {
            spacing: {
                '8xl': '96rem',
                '9xl': '128rem',
            },
            borderRadius: {
                '4xl': '2rem',
            },
        },
    },
    plugins: [],
};
