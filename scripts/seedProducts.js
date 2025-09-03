import dotenv from "dotenv";
import mongoose from "mongoose";
import Product from "../src/models/Product.js";
import connectDB from "../src/config/db.js";

dotenv.config();

const seedProducts = async () => {
  try {
    await connectDB();
    await Product.deleteMany();

    const products = [
      {
        title: "Men's Slim Fit Casual Shirt",
        price: 29.99,
        description:
          "A stylish slim fit shirt perfect for casual and semi-formal occasions.",
        category: "men's clothing",
        image: "https://via.placeholder.com/200x200.png?text=Men+Shirt+1",
      },
      {
        title: "Women's Floral Summer Dress",
        price: 49.99,
        description:
          "Lightweight and breezy floral dress ideal for summer outings.",
        category: "women's clothing",
        image: "https://via.placeholder.com/200x200.png?text=Women+Dress+1",
      },
      {
        title: "Men's Denim Jacket",
        price: 59.99,
        description:
          "Classic denim jacket with modern tailoring for a casual look.",
        category: "men's clothing",
        image: "https://via.placeholder.com/200x200.png?text=Men+Jacket+1",
      },
      {
        title: "Women's Casual Sneakers",
        price: 39.99,
        description: "Comfortable sneakers for everyday wear.",
        category: "women's clothing",
        image: "https://via.placeholder.com/200x200.png?text=Women+Sneakers+1",
      },
      {
        title: "Smartwatch Series 5",
        price: 199.99,
        description:
          "Advanced smartwatch with fitness tracking and notifications.",
        category: "electronics",
        image: "https://via.placeholder.com/200x200.png?text=Smartwatch+1",
      },
      {
        title: "Gold Plated Hoop Earrings",
        price: 25.99,
        description: "Elegant gold plated hoop earrings for all occasions.",
        category: "jewelery",
        image: "https://via.placeholder.com/200x200.png?text=Earrings+1",
      },
      {
        title: "Men's Casual Shorts",
        price: 24.99,
        description: "Comfortable and breathable shorts for summer.",
        category: "men's clothing",
        image: "https://via.placeholder.com/200x200.png?text=Men+Shorts+1",
      },
      {
        title: "Women's Denim Jeans",
        price: 39.99,
        description: "Classic denim jeans with a slim fit design.",
        category: "women's clothing",
        image: "https://via.placeholder.com/200x200.png?text=Women+Jeans+1",
      },
      {
        title: "Wireless Bluetooth Earbuds",
        price: 59.99,
        description:
          "Compact and high-quality wireless earbuds for music and calls.",
        category: "electronics",
        image: "https://via.placeholder.com/200x200.png?text=Earbuds+1",
      },
      {
        title: "Silver Chain Necklace",
        price: 29.99,
        description: "Stylish silver chain necklace suitable for daily wear.",
        category: "jewelery",
        image: "https://via.placeholder.com/200x200.png?text=Necklace+1",
      },
      {
        title: "Men's Leather Belt",
        price: 19.99,
        description: "Durable leather belt for casual and formal outfits.",
        category: "men's clothing",
        image: "https://via.placeholder.com/200x200.png?text=Men+Belt+1",
      },
      {
        title: "Women's Handbag",
        price: 59.99,
        description: "Elegant handbag with multiple compartments.",
        category: "women's clothing",
        image: "https://via.placeholder.com/200x200.png?text=Handbag+1",
      },
      {
        title: "Men's Running Shoes",
        price: 49.99,
        description:
          "Lightweight and comfortable shoes for running and sports.",
        category: "men's clothing",
        image: "https://via.placeholder.com/200x200.png?text=Men+Shoes+1",
      },
      {
        title: "Women's Sunglasses",
        price: 14.99,
        description: "Stylish sunglasses with UV protection.",
        category: "women's clothing",
        image: "https://via.placeholder.com/200x200.png?text=Sunglasses+1",
      },
      {
        title: "Portable Charger 10000mAh",
        price: 29.99,
        description: "High-capacity portable charger for mobile devices.",
        category: "electronics",
        image: "https://via.placeholder.com/200x200.png?text=Charger+1",
      },
      {
        title: "Rose Gold Bracelet",
        price: 39.99,
        description: "Elegant rose gold bracelet for daily or party wear.",
        category: "jewelery",
        image: "https://via.placeholder.com/200x200.png?text=Bracelet+1",
      },
      {
        title: "Men's Hoodie",
        price: 34.99,
        description: "Warm and comfortable hoodie for casual outings.",
        category: "men's clothing",
        image: "https://via.placeholder.com/200x200.png?text=Men+Hoodie+1",
      },
      {
        title: "Women's Cardigan",
        price: 29.99,
        description: "Soft and stylish cardigan for layering.",
        category: "women's clothing",
        image: "https://via.placeholder.com/200x200.png?text=Women+Cardigan+1",
      },
      {
        title: "Bluetooth Speaker",
        price: 49.99,
        description: "Portable Bluetooth speaker with high-quality sound.",
        category: "electronics",
        image: "https://via.placeholder.com/200x200.png?text=Speaker+1",
      },
      {
        title: "Diamond Stud Earrings",
        price: 49.99,
        description: "Classic diamond stud earrings with timeless design.",
        category: "jewelery",
        image: "https://via.placeholder.com/200x200.png?text=Earrings+2",
      },
      {
        title: "Men's Polo Shirt",
        price: 24.99,
        description: "Casual polo shirt for everyday wear.",
        category: "men's clothing",
        image: "https://via.placeholder.com/200x200.png?text=Men+Polo+1",
      },
      {
        title: "Women's Maxi Dress",
        price: 54.99,
        description: "Elegant maxi dress for formal or casual events.",
        category: "women's clothing",
        image: "https://via.placeholder.com/200x200.png?text=Women+Maxi+1",
      },
      {
        title: "Smart LED TV 42 inch",
        price: 299.99,
        description: "42-inch smart LED TV with HD display and Wi-Fi.",
        category: "electronics",
        image: "https://via.placeholder.com/200x200.png?text=LED+TV+1",
      },
      {
        title: "Men's Casual Sneakers",
        price: 39.99,
        description: "Comfortable sneakers for everyday use.",
        category: "men's clothing",
        image: "https://via.placeholder.com/200x200.png?text=Men+Sneakers+1",
      },
      {
        title: "Women's Leather Wallet",
        price: 29.99,
        description: "Compact leather wallet with multiple card slots.",
        category: "women's clothing",
        image: "https://via.placeholder.com/200x200.png?text=Women+Wallet+1",
      },
    ];

    await Product.insertMany(products);
    console.log("✅ Products Seeded");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedProducts();
