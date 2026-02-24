/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Space Grotesk', 'sans-serif'],
                heading: ['Space Grotesk', 'sans-serif'],
            },
            colors: {
                navy: '#0a0e1a',
                'navy-card': '#0f1421',
                'navy-light': '#141924',
                accent: '#f5e642',
                'accent-dim': '#c9bc00',
            },
            animation: {
                'spin-slow': 'spin 20s linear infinite',
                'marquee': 'marquee 30s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' },
                }
            }
        },
    },
    plugins: [],
}
