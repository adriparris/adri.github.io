/** @type {import('tailwindcss').Config} */

const colors = ["amber", "sky", "purple"];
const shades = ["400", "500"];

export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], 
    safelist: [
      ...colors.flatMap(color =>
        shades.map(shade => [`bg-${color}-${shade}`, `border-${color}-${shade}`, `dark:bg-${color}-${shade}`])
      ).flat(),
      'p-0',
      'p-1',
      'p-2',
      'p-4',
      'p-8',
      'px-0',
      'px-1',
      'px-2',
      'px-4',
      'px-8',
      'py-0',
      'py-1',
      'py-2',
      'py-4',
      'py-8',
      'm-0',
      'm-1',
      'm-2',
      'm-4',
      'm-8',
      'mb-0',
      'mb-1',
      'mb-2',
      'mb-4',
      'mb-8'
    ],
    theme: {
      extend: {
        fontFamily: {
          body: ["geist", "sans-serif"],
          code: ["Source Code Pro", "monospace"],
        },
        spacing: {
          '0': '0',
          '1': '0.25rem',
          '2': '0.5rem',
          '4': '1rem',
          '8': '2rem',
        }
      },
    },
    plugins: [],
  };
  