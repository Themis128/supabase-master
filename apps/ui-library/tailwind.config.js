/** @type {import('tailwindcss').Config} */
const sharedConfig = require('../../packages/config/ui.config.js');

module.exports = {
  ...sharedConfig,
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
    // Add more paths as needed
  ],
};
