// src/app.js
import express from "express";
import productRoutes from "./routes/products.js";
import cartRoutes from "./routes/cart.js";
import favoriteRoutes from "./routes/favorites.js";
import { logger } from "./utils/logger.js";

const app = express();

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/favorites", favoriteRoutes);

export default app;
