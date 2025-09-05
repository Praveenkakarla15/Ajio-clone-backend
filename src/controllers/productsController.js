import mongoose from "mongoose";
import Product from "../models/Product.js";

// @desc Get all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json({
      success: true,
      data: products,
    });
  } catch (err) {
    console.error("Error fetching products:", err.message);
    return res.status(500).json({
      success: false,
      message: "Server Error. Could not fetch products.",
    });
  }
};

// @desc Get single product by ID
export const getProduct = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid product ID",
      });
    }

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: product,
    });
  } catch (err) {
    console.error("Error fetching product:", err.message);
    return res.status(500).json({
      success: false,
      message: "Server Error. Could not fetch product.",
    });
  }
};
