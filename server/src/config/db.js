import mongoose from "mongoose";

const mongo_uri = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(mongo_uri);
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
