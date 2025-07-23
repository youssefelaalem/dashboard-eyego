import type { Config } from "tailwindcss";

const config: Config = {
  content: [
"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",  // Add this line
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",      
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        Sky: "#C3EBFA",
        SkyLight: "#EDF9FD",
        Purple: "#CFCEFF",
        PurpleLight: "#F1F0FF",
        Yellow: "#FAE27C",
        YellowLight: "#FEFCE8",
      },
    },
  },
  plugins: [],
};
export default config;