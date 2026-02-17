import mongoose, { mongo } from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: String,
      required: true,
    },
    image: String,
    category: String,
  },
  { timestamps: true },
);

export const Products = mongoose.model("Product", ProductSchema);
