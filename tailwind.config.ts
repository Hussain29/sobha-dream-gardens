import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
			colors:{
				primary: "#BF7301",
				secondary: "#F9E9D2"
			},
			fontSize: {
				regular: "14px"
			}
		},
  },
  plugins: [],
} satisfies Config;
