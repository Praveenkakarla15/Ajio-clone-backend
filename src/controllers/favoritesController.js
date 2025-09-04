import Favorite from "../models/Favorite.js";

// @desc Get all favorites for logged-in user
export const getFavorites = async (req, res) => {
  try {
    const favorites = await Favorite.find({ user: req.user._id }).populate("product");
    res.status(200).json(favorites);
  } catch (err) {
    console.error("Error fetching favorites:", err);
    res.status(500).json({ message: "Failed to fetch favorites" });
  }
};

// @desc Add to favorites
export const addFavorite = async (req, res) => {
  try {
    const { productId } = req.body;
    if (!productId) return res.status(400).json({ message: "Product ID is required" });

    let fav = await Favorite.findOne({ user: req.user._id, product: productId });
    if (fav) return res.status(200).json(fav); // Already exists

    fav = new Favorite({ user: req.user._id, product: productId });
    await fav.save();
    res.status(201).json(fav);
  } catch (err) {
    console.error("Error adding to favorites:", err);
    res.status(500).json({ message: "Failed to add to favorites" });
  }
};

// @desc Remove a favorite
export const removeFavorite = async (req, res) => {
  try {
    const fav = await Favorite.findOne({ _id: req.params.id, user: req.user._id });
    if (!fav) return res.status(404).json({ message: "Favorite not found" });

    await fav.deleteOne();
    res.status(200).json({ message: "Favorite removed" });
  } catch (err) {
    console.error("Error removing favorite:", err);
    res.status(500).json({ message: "Failed to remove favorite" });
  }
};

// ✅ @desc Clear all favorites for logged-in user
export const clearFavorites = async (req, res) => {
  try {
    await Favorite.deleteMany({ user: req.user._id });
    res.status(200).json({ message: "All favorites cleared" });
  } catch (err) {
    console.error("Error clearing favorites:", err);
    res.status(500).json({ message: "Failed to clear favorites" });
  }
};
