import express from "express";
import cors from "cors";
import productRoutes from "./routes/products.js";
import cartRoutes from "./routes/cart.js";
import favoriteRoutes from "./routes/favorites.js";
import authRoutes from "./routes/auth.js";
import { logger } from "./utils/logger.js";

const app = express();

// Middleware
app.use(express.json());
app.use(logger);

// ✅ CORS for Vite dev server & deployed frontend
app.use(
  cors({
    origin: [
      process.env.FRONTEND_URL || "http://localhost:5173", // local dev
      "https://ajio-clone-frontend-git-main-praveen-ks-projects-7fbabb68.vercel.app", // deployed frontend
    ],
    credentials: true,
  })
);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/favorites", favoriteRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

export default app;
