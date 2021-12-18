import { config } from "dotenv";

config({
  path: process.env.NODE_ENV === "development" ? "../.env" : undefined,
});

const env = process.env;
const { NAME, NODE_ENV } = env;

const Config = {
  PORT: 5000,
  NODE_ENV,
  NAME,
};

export default Config;
