import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDb = async () => {
  mongoose.connection.on("connected", () => {
    console.log("Database Connected");
  });

  await mongoose.connect(process.env.MONGO_URI);
};

export default connectDb;
