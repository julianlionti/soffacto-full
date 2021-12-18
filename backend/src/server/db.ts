import mongoose from "mongoose";
import Config from "../config/config";

export const connectDatabase = async () => {
  let connString = "mongodb://mongo:27017";
  if (Config.NODE_ENV) {
    connString = "mongodb://localhost:27017";
  }

  try {
    await mongoose.connect(`${connString}/${Config.NAME}`);
  } catch (err) {
    console.error("Cannot connect database");
    console.error(err);
  }
};
