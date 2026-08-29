import { defineConfig } from "cypress";

export default defineConfig({
  allowCypressEnv: false,
  expose: {
    featureFlag: true,
    apiVersion: "v1",
    publicApiUrl: "http://localhost:3001/",
    pluginConfig: "development",
  },
  e2e: {
    baseUrl: "http://localhost:3000",
    env: {
      apiUrl: "http://localhost:3001",
    },
  },
});
