export default {
    content: ['./app/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                outfit: ['Outfit', 'sans-serif'],
                shantell: ['"Shantell Sans"', 'cursive'],
                sans: ['Shantell Sans', 'ui-sans-serif', 'system-ui'],
            },
        },

        screens: {
            xs: '480px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1700',

            desktop: '1700px',
        },
    },
};
