module.exports = {
  content: [
    './index.html', // or wherever your HTML file is
    './src/**/*.{js,jsx,ts,tsx}', // Make sure the correct file extensions are specified here
  ],
  theme: {
    screens: {
      sm: '350px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [],
};
