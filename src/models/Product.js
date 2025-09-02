import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, default: "" },
  price: { type: Number, required: true, min: 0 },
  image: { type: String, default: "" },
  category: { type: String, default: "general" },
}, { timestamps: true });

// Optional: index for faster category queries
productSchema.index({ category: 1 });

export default mongoose.model("Product", productSchema);
