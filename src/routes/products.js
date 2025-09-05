import express from "express";
import { getProducts, getProduct } from "../controllers/productsController.js";

const router = express.Router();

// @route   GET /api/products
// @desc    Get all products
// @access  Public
router.get("/", getProducts);

// @route   GET /api/products/:id
// @desc    Get single product by ID
// @access  Public
router.get("/:id", getProduct);

export default router;
