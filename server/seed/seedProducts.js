import mongoose from "mongoose";
import "dotenv/config";
import { Products } from "../src/models/Product.model.js";
import productsData from "./seedProductData.js";

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    await Products.deleteMany();
    await Products.insertMany(productsData);

    console.log("Products seeded successfully");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedProducts();
