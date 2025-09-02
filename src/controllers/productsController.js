import Product from "../models/Product.js";

// @desc Get all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json({ success: true, data: products });
  } catch (err) {
    console.error("Error fetching products:", err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// @desc Get single product
export const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) 
      return res.status(404).json({ success: false, message: "Product not found" });
    res.json({ success: true, data: product });
  } catch (err) {
    console.error("Error fetching product:", err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
