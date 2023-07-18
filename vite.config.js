import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
	root: path.join(__dirname),
	plugins: [react()],
	assetsInclude: "**/*.JPG",
});
