import dotenv from "dotenv";
import mongoose from "mongoose";
import Product from "../src/models/Product.js";
import connectDB from "../src/config/db.js";

dotenv.config();

const seedProducts = async () => {
  try {
    // Connect to MongoDB
    await connectDB();

    // Clear existing products
    await Product.deleteMany();

    // Product data without manual id, MongoDB will generate _id
    const products = [
      {
        title: "Men's Cotton Jacket",
        description: "Lightweight cotton jacket perfect for all seasons.",
        price: 55.99,
        category: "men's clothing",
        image: "https://picsum.photos/id/100/300/300",
      },
      {
        title: "Slim Fit T-Shirt",
        description: "Soft breathable slim-fit t-shirt for everyday wear.",
        price: 22.3,
        category: "men's clothing",
        image: "https://picsum.photos/id/101/300/300",
      },
      {
        title: "Elegant Women's Handbag",
        description: "Stylish handbag crafted with premium materials.",
        price: 35.5,
        category: "women's clothing",
        image: "https://picsum.photos/id/102/300/300",
      },
      {
        title: "Bluetooth Headphones",
        description: "Wireless noise-cancelling headphones with long battery life.",
        price: 89.99,
        category: "electronics",
        image: "https://picsum.photos/id/103/300/300",
      },
      {
        title: "Stainless Steel Wristwatch",
        description: "Classic water-resistant watch with leather strap.",
        price: 149.99,
        category: "jewelery",
        image: "https://dummyjson.com/image/300x300/000000/FFFFFF?text=Wristwatch",
      },
      {
        title: "Diamond Stud Earrings",
        description: "Premium sparkle diamond stud earrings.",
        price: 199.99,
        category: "jewelery",
        image: "https://dummyjson.com/image/300x300/550000/FFFFFF?text=Earrings",
      },
      {
        title: "Gaming Mechanical Keyboard",
        description: "RGB mechanical keyboard with durable keys.",
        price: 45.99,
        category: "electronics",
        image: "https://picsum.photos/id/104/300/300",
      },
      {
        title: "Classic Leather Wallet",
        description: "Elegant leather wallet with multiple card slots.",
        price: 25.99,
        category: "men's clothing",
        image: "https://dummyjson.com/image/300x300/333300/FFFFFF?text=Wallet",
      },
      {
        title: "Women's Summer Dress",
        description: "Light and breathable floral summer dress.",
        price: 29.99,
        category: "women's clothing",
        image: "https://picsum.photos/id/237/300/300",
      },
      {
        title: "Smart Fitness Band",
        description: "Track steps, heart rate, and sleep patterns.",
        price: 39.99,
        category: "electronics",
        image: "https://dummyjson.com/image/300x300/003300/FFFFFF?text=Fitness+Band",
      },
    ];

    // Insert products into MongoDB
    await Product.insertMany(products);
    console.log("✅ Products seeded successfully");
    process.exit();
  } catch (err) {
    console.error("❌ Error seeding products:", err);
    process.exit(1);
  }
};

// Run the seeding function
seedProducts();
