// src/controllers/cartController.js
import CartItem from "../models/CartItem.js";

// Get all cart items for logged-in user
export const getCart = async (req, res) => {
  try {
    const items = await CartItem.find({ user: req.user._id }).populate("product");
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Add item to cart
export const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    let item = await CartItem.findOne({ user: req.user._id, product: productId });
    if (item) {
      item.quantity += quantity || 1;
      await item.save();
      return res.status(200).json(item);
    }

    item = new CartItem({ user: req.user._id, product: productId, quantity: quantity || 1 });
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Remove item from cart
export const removeFromCart = async (req, res) => {
  try {
    const item = await CartItem.findOne({ _id: req.params.id, user: req.user._id });
    if (!item) return res.status(404).json({ message: "Cart item not found" });

    await item.deleteOne();
    res.json({ message: "Item removed from cart" });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};
