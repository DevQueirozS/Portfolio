import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, rgba(32,32,32,1) 35%, rgba(44,44,44,1) 100%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
export default config;
