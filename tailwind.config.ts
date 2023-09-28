import { type Config } from "tailwindcss";

export default {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#20407C",
			},
			fontSize: {
				regular: "14px",
			},
		},
	},
	plugins: [],
} satisfies Config;
