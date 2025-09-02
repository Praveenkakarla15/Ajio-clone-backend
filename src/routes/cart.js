import express from "express";
import {
  getCart,
  addToCart,
  removeFromCart,
} from "../controllers/cartController.js";
import { protect } from "../middleware/authMiddleware.js"; // JWT auth middleware

const router = express.Router();

// All routes protected
router.use(protect);

router.get("/", getCart); // Get all cart items for logged-in user
router.post("/", addToCart); // Add item to cart
router.delete("/:id", removeFromCart); // Remove item from cart

export default router;
