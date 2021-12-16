import { config } from "dotenv";
config();

const env = process.env;
const { PORT } = env;

const Config = {
  PORT,
};

export default Config;
