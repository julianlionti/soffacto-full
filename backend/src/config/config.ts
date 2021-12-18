import { config } from "dotenv";
config();

const env = process.env;
const { NAME } = env;

const Config = {
  PORT: 5000,
  NAME,
};

export default Config;
