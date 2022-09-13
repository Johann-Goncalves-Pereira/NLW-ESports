import { defineConfig, loadEnv } from "vite";

import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react";

import { addEnvOnSass } from "./src/Environment/sassEnv";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  addEnvOnSass(mode);

  return {
    plugins: [
      react(),
      legacy({
        targets: ["defaults", "not IE 11"],
      }),
    ],
    server: {
      host: "0.0.0.0",
      port: 3000,
    },
    preview: {
      port: 8080,
    },
    define: {
      env: env.APP_ENV,
    },
  };
});
