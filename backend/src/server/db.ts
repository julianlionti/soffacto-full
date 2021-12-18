import mongoose from "mongoose";
import Config from "../config/config";

export const connectDatabase = async () => {
  try {
    await mongoose.connect(`mongodb://mongo:27017/${Config.NAME}`);
  } catch (err) {
    console.error("Cannot connect database");
    console.error(err);
  }
};
