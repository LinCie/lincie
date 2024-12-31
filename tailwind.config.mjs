/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            animation: {
                meteor: 'meteor 5s linear infinite',
            },
            keyframes: {
                meteor: {
                    '0%': {
                        transform: 'rotate(215deg) translateX(0)',
                        opacity: '1',
                    },
                    '70%': {
                        opacity: '1',
                    },
                    '100%': {
                        transform: 'rotate(215deg) translateX(-500px)',
                        opacity: '0',
                    },
                },
            },
            fontFamily: {
                sans: ['Fira Code Variable', 'monospace'],
                winter: ['Mountains of Christmas', 'system-ui'],
            },
            colors: {
                polar: {
                    0: '#2e3440',
                    1: '#3b4252',
                    2: '#434c5e',
                    3: '#4c566a',
                },
                snow: {
                    0: '#d8dee9',
                    1: '#e5e9f0',
                    2: '#eceff4',
                },
                frost: {
                    0: '#8fbcbb',
                    1: '#88c0d0',
                    2: '#81a1c1',
                    3: '#5e81ac',
                },
                aurora: {
                    0: '#bf616a',
                    1: '#d08770',
                    2: '#ebcb8b',
                    3: '#a3be8c',
                    4: '#b48ead',
                },
            },
        },
    },
}
