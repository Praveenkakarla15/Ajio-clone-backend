import Cart from "../models/cart.js";

// Get all cart items for logged-in user
export const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id }).populate("items.product");
    res.json(cart?.items || []);
  } catch (err) {
    res.status(500).json({ message: "Error fetching cart", error: err.message });
  }
};

// Add item to cart
export const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    let cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      cart = new Cart({ user: req.user._id, items: [] });
    }

    // Check if product exists in cart
    const itemIndex = cart.items.findIndex((item) => item.product.toString() === productId);

    if (itemIndex >= 0) {
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({ product: productId, quantity });
    }

    await cart.save();
    await cart.populate("items.product");

    res.json(cart.items);
  } catch (err) {
    res.status(500).json({ message: "Error adding to cart", error: err.message });
  }
};

// Update quantity of a cart item
export const updateCartQuantity = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;

    let cart = await Cart.findOne({ user: req.user._id });

    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const item = cart.items.id(id); // use subdocument _id
    if (!item) return res.status(404).json({ message: "Item not found" });

    item.quantity = quantity;
    await cart.save();
    await cart.populate("items.product");

    res.json(cart.items);
  } catch (err) {
    res.status(500).json({ message: "Error updating cart item", error: err.message });
  }
};

// Remove single item from cart
export const removeFromCart = async (req, res) => {
  try {
    const { id } = req.params; // This is the subdocument _id of the cart item
    let cart = await Cart.findOne({ user: req.user._id });

    if (!cart) return res.status(404).json({ message: "Cart not found" });

    // Filter out the item with the given _id
    cart.items = cart.items.filter((item) => item._id.toString() !== id);

    await cart.save();
    await cart.populate("items.product");

    res.json(cart.items);
  } catch (err) {
    res.status(500).json({ message: "Error removing cart item", error: err.message });
  }
};

// Clear entire cart
export const clearCart = async (req, res) => {
  try {
    let cart = await Cart.findOne({ user: req.user._id });
    if (cart) {
      cart.items = [];
      await cart.save();
    }
    res.json([]);
  } catch (err) {
    res.status(500).json({ message: "Error clearing cart", error: err.message });
  }
};
