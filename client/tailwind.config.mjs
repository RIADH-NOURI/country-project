export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-mode-secondary': 'hsl(209, 23%, 22%)',
        'dark-mode-primary': 'hsl(207, 26%, 17%)',
        'light-mode-text': 'hsl(200, 15%, 8%)',
        'ligth-mode-background': 'hsl(209, 23%, 22%)',
        'light-mode-primary': 'hsl(0, 0%, 98%)',
        'light-mode-input': 'hsl(0, 0%, 52%)',
        'white': 'hsl(0, 0%, 100%)',
      },
    },
  },
  plugins: [],
};
