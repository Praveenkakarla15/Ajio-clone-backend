import express from "express";
import {
  getFavorites,
  addFavorite,
  removeFavorite,
  clearFavorites,
} from "../controllers/favoritesController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// All routes require authentication
router.use(protect);

/**
 * @swagger
 * tags:
 *   name: Favorites
 *   description: User favorites management
 */

/**
 * @swagger
 * /api/favorites:
 *   get:
 *     summary: Get all favorite products for logged-in user
 *     tags: [Favorites]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of favorites
 */
router.get("/", getFavorites);

/**
 * @swagger
 * /api/favorites:
 *   post:
 *     summary: Add product to favorites
 *     tags: [Favorites]
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
 *     responses:
 *       201:
 *         description: Favorite added
 */
router.post("/", addFavorite);

/**
 * @swagger
 * /api/favorites/{id}:
 *   delete:
 *     summary: Remove single favorite
 *     tags: [Favorites]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Favorite ID
 *     responses:
 *       200:
 *         description: Favorite removed
 */
router.delete("/:id", removeFavorite);

/**
 * @swagger
 * /api/favorites:
 *   delete:
 *     summary: Clear all favorites
 *     tags: [Favorites]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: All favorites cleared
 */
router.delete("/", clearFavorites);

export default router;
