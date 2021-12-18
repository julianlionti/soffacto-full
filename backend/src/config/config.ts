import { config } from "dotenv";
config();

const env = process.env;
// const { PORT } = env;

const Config = {
  PORT: 5000,
};

export default Config;
