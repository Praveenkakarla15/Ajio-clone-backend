// src/routes/favorites.js
import express from "express";
import { getFavorites, addFavorite, removeFavorite } from "../controllers/favoritesController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// All routes are protected
router.get("/", protect, getFavorites);
router.post("/", protect, addFavorite);
router.delete("/:id", protect, removeFavorite);

export default router;
