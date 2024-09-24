import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mainColor: "var(--mainColor)",
        secondColor: "var(--secondColor)",
        thirdColor: "var(--thirdColor)",
        fourthColor: "var(--fourthColor)",
        fifthColor: "var(--fifthColor)",
        txt: "var(--txt)",
      },
    },
  },
  plugins: [],
};
export default config;
