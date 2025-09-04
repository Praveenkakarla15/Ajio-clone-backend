import CartItem from "../models/CartItem.js";

// @desc Get all cart items for logged-in user
export const getCart = async (req, res) => {
  try {
    const items = await CartItem.find({ user: req.user._id }).populate("product");
    res.status(200).json(items);
  } catch (err) {
    console.error("Error fetching cart:", err);
    res.status(500).json({ message: "Failed to fetch cart items" });
  }
};

// @desc Add item to cart
export const addToCart = async (req, res) => {
  try {
    const { productId, quantity = 1 } = req.body;
    if (!productId) return res.status(400).json({ message: "Product ID is required" });

    let item = await CartItem.findOne({ user: req.user._id, product: productId });
    if (item) {
      item.quantity += quantity;
      await item.save();
      return res.status(200).json(item);
    }

    item = new CartItem({ user: req.user._id, product: productId, quantity });
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    console.error("Error adding to cart:", err);
    res.status(500).json({ message: "Failed to add item to cart" });
  }
};

// @desc Update quantity of a cart item
export const updateCartQuantity = async (req, res) => {
  try {
    const { quantity } = req.body;
    const item = await CartItem.findOne({ _id: req.params.id, user: req.user._id });

    if (!item) return res.status(404).json({ message: "Cart item not found" });
    if (quantity <= 0) {
      await item.deleteOne();
      return res.status(200).json({ message: "Item removed from cart" });
    }

    item.quantity = quantity;
    await item.save();
    res.status(200).json(item);
  } catch (err) {
    console.error("Error updating cart quantity:", err);
    res.status(500).json({ message: "Failed to update cart item" });
  }
};

// @desc Remove item from cart
export const removeFromCart = async (req, res) => {
  try {
    const item = await CartItem.findOne({ _id: req.params.id, user: req.user._id });
    if (!item) return res.status(404).json({ message: "Cart item not found" });

    await item.deleteOne();
    res.status(200).json({ message: "Item removed from cart" });
  } catch (err) {
    console.error("Error removing from cart:", err);
    res.status(500).json({ message: "Failed to remove item from cart" });
  }
};

// @desc Clear all items from cart for logged-in user
export const clearCart = async (req, res) => {
  try {
    await CartItem.deleteMany({ user: req.user._id });
    res.status(200).json({ message: "All items removed from cart" });
  } catch (err) {
    console.error("Error clearing cart:", err);
    res.status(500).json({ message: "Failed to clear cart" });
  }
};
