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

// All routes require authentication
router.use(protect);

/**
 * @swagger
 * tags:
 *   name: Cart
 *   description: User cart management
 */

/**
 * @swagger
 * /api/cart:
 *   get:
 *     summary: Get all cart items for logged-in user
 *     tags: [Cart]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of cart items
 */
router.get("/", getCart);

/**
 * @swagger
 * /api/cart:
 *   post:
 *     summary: Add item to cart
 *     tags: [Cart]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productId:
 *                 type: string
 *               quantity:
 *                 type: number
 *     responses:
 *       201:
 *         description: Item added
 */
router.post("/", addToCart);

/**
 * @swagger
 * /api/cart/{id}:
 *   put:
 *     summary: Update quantity of a cart item
 *     tags: [Cart]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Cart item ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               quantity:
 *                 type: number
 *     responses:
 *       200:
 *         description: Quantity updated
 */
router.put("/:id", updateCartQuantity);

/**
 * @swagger
 * /api/cart/{id}:
 *   delete:
 *     summary: Remove a single product from cart
 *     tags: [Cart]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Cart item ID
 *     responses:
 *       200:
 *         description: Item removed
 */
router.delete("/:id", removeFromCart);

/**
 * @swagger
 * /api/cart:
 *   delete:
 *     summary: Clear the entire cart
 *     tags: [Cart]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Cart cleared
 */
router.delete("/", clearCart);

export default router;
