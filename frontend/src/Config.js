const APP_ENV = "DEV"; // DEV, DEMO, TEST, PROD

const config = {
  ENV: APP_ENV,
  APP_URL: "http://localhost:3000/",
  API_URL: "http://localhost:8000/",
};

export const packageConfigure = {
  APP_URL: config.APP_URL,
  APP_ENV: config.ENV,
  Extension: config.EXTENSION,
};

export default config;
