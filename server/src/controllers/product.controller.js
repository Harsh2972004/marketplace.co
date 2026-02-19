import { Products } from "../models/Product.model.js";
import { User } from "../models/User.model.js";
import mongoose from "mongoose";
import { verifyToken } from "../services/jwtService.js";

export const getProducts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search || "";

    const query = {
      name: { $regex: search, $options: "i" },
    };

    const total = await Products.countDocuments(query);

    const products = await Products.find(query)
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ createdAt: -1 });

    // if Authorization header present decode token to identify user (optional)
    let user = null;
    const authHeader = req.headers.authorization;
    if (authHeader?.startsWith("Bearer ")) {
      try {
        const token = authHeader.split(" ")[1];
        const decoded = verifyToken(token);
        if (decoded?.id) user = await User.findById(decoded.id);
      } catch (err) {
        // ignore invalid token - user stays null
      }
    } else if (req.user?.id) {
      user = await User.findById(req.user.id);
    }

    const formatted = products.map((p) => ({
      ...p.toObject(),
      isFavourite: user
        ? user.favourites.some((id) => id.toString() === p._id.toString())
        : false,
    }));

    return res.status(200).json({
      products: formatted,
      page,
      totalPages: Math.ceil(total / limit),
      totalItems: total,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);

    if (!product) return res.status(404).json({ message: "Product not found" });
    // check for optional token in headers too
    let isFavourite = false;
    const authHeader = req.headers.authorization;
    let user = null;
    if (authHeader?.startsWith("Bearer ")) {
      try {
        const token = authHeader.split(" ")[1];
        const decoded = verifyToken(token);
        if (decoded?.id) user = await User.findById(decoded.id);
      } catch (err) {
        // ignore
      }
    } else if (req.user?.id) {
      user = await User.findById(req.user.id);
    }

    if (user) {
      isFavourite = user.favourites.some(
        (id) => id.toString() === product._id.toString(),
      );
    }

    return res.status(200).json({ ...product.toObject(), isFavourite });
  } catch (error) {
    return res.status(400).json({ message: "Invalid product ID" });
  }
};

export const createProduct = async (req, res) => {
  try {
    const product = await Products.create(req.body);
    return res.status(201).json(product);
  } catch (error) {
    return res.status(400).json({ message: "Invalid product data" });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid product ID" });
  }

  const product = await Products.findByIdAndUpdate(id, req.body, { new: true });

  if (!product) return res.status(404).json({ message: "Product not found" });

  return res.json(product);
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid product ID" });
  }

  const product = await Products.findByIdAndDelete(id);

  if (!product) return res.status(404).json({ message: "Product not found" });

  return res.json({ message: "Product deleted successfully" });
};
