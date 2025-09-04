import express from "express";
import {
  getCart,
  addToCart,
  updateCartQuantity,
  removeFromCart,
  clearCart
} from "../controllers/cartController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// All cart routes require authentication
router.use(protect);

// Get all cart items for logged-in user
router.get("/", getCart);

// Add item to cart
router.post("/", addToCart);

// Update quantity of a cart item (increase/decrease)
router.put("/:id", updateCartQuantity);

// Remove a single product from cart
router.delete("/:id", removeFromCart);

// Clear the entire cart
router.delete("/", clearCart);

export default router;
