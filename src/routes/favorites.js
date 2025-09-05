import express from "express";
import {
  getFavorites,
  addFavorite,
  removeFavorite,
  clearFavorites,
} from "../controllers/favoritesController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// All favorites routes require authentication
router.use(protect);

router.get("/", getFavorites);        // Get all favorites
router.post("/", addFavorite);        // Add to favorites
router.delete("/:id", removeFavorite); // Remove single favorite
router.delete("/", clearFavorites);   // Clear all favorites

export default router;
