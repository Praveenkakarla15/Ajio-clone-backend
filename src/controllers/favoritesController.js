import Favorite from "../models/Favorite.js";

// @desc Get all favorites for logged-in user
export const getFavorites = async (req, res) => {
  try {
    const favorites = await Favorite.find({ user: req.user._id }).populate("product");
    res.json(favorites);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc Add to favorites
export const addFavorite = async (req, res) => {
  try {
    const { productId } = req.body;

    // Check if already exists
    let fav = await Favorite.findOne({ user: req.user._id, product: productId });
    if (fav) return res.status(200).json(fav);

    fav = new Favorite({ user: req.user._id, product: productId });
    await fav.save();
    res.status(201).json(fav);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc Remove from favorites
export const removeFavorite = async (req, res) => {
  try {
    const fav = await Favorite.findOne({ _id: req.params.id, user: req.user._id });
    if (!fav) return res.status(404).json({ message: "Favorite not found" });

    await fav.deleteOne();
    res.json({ message: "Favorite removed" });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};
