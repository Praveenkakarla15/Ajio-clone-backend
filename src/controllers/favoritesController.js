import Favorite from "../models/Favorite.js";

// Get all favorites for logged-in user
export const getFavorites = async (req, res) => {
  try {
    let fav = await Favorite.findOne({ user: req.user._id }).populate("items.product");
    if (!fav) {
      fav = await Favorite.create({ user: req.user._id, items: [] });
    }
    res.status(200).json(fav.items);
  } catch (err) {
    console.error("Error fetching favorites:", err);
    res.status(500).json({ message: "Failed to fetch favorites" });
  }
};

// Add a product to favorites
export const addFavorite = async (req, res) => {
  try {
    const { productId } = req.body;
    if (!productId) return res.status(400).json({ message: "Product ID is required" });

    let fav = await Favorite.findOne({ user: req.user._id });
    if (!fav) fav = await Favorite.create({ user: req.user._id, items: [] });

    const exists = fav.items.find((i) => i.product.toString() === productId);
    if (!exists) {
      fav.items.push({ product: productId });
      await fav.save();
    }

    await fav.populate("items.product");
    res.status(200).json(fav.items);
  } catch (err) {
    console.error("Error adding to favorites:", err);
    res.status(500).json({ message: "Failed to add favorite" });
  }
};

// Remove a product from favorites
export const removeFavorite = async (req, res) => {
  try {
    const { id } = req.params; // product id
    const fav = await Favorite.findOne({ user: req.user._id });
    if (!fav) return res.status(404).json({ message: "Favorites not found" });

    fav.items = fav.items.filter((i) => i.product.toString() !== id);
    await fav.save();

    await fav.populate("items.product");
    res.status(200).json(fav.items);
  } catch (err) {
    console.error("Error removing favorite:", err);
    res.status(500).json({ message: "Failed to remove favorite" });
  }
};

// Clear all favorites
export const clearFavorites = async (req, res) => {
  try {
    const fav = await Favorite.findOne({ user: req.user._id });
    if (!fav) return res.status(404).json({ message: "Favorites not found" });

    fav.items = [];
    await fav.save();
    res.status(200).json({ message: "All favorites removed" });
  } catch (err) {
    console.error("Error clearing favorites:", err);
    res.status(500).json({ message: "Failed to clear favorites" });
  }
};
