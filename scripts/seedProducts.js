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
        title: "Fjallraven - Foldsack No. 1 Backpack",
        price: 109.95,
        description:
          "Your perfect pack for everyday use and walks in the forest.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      },
      {
        title: "Mens Casual Premium Slim Fit T-Shirts",
        price: 22.3,
        description:
          "Slim-fitting style, contrast raglan long sleeve, three-button henley placket.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_UL1280_.jpg",
      },
      {
        title: "Mens Cotton Jacket",
        price: 55.99,
        description: "Great outerwear jackets for Spring/Autumn/Winter.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      },
      {
        title: "Mens Casual Slim Fit",
        price: 15.99,
        description:
          "The color could be slightly different between on the screen and in practice.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      },
      {
        title:
          "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        price: 695,
        description:
          "From our Legends Collection, inspired by the mythical dragon.",
        category: "jewelery",
        image:
          "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      },
      {
        title: "Solid Gold Petite Micropave",
        price: 168,
        description:
          "Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        category: "jewelery",
        image:
          "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      },
      {
        title: "White Gold Plated Princess",
        price: 9.99,
        description: "Classic design with timeless appeal.",
        category: "jewelery",
        image:
          "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      },
      {
        title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
        price: 10.99,
        description: "Elegant and trendy design for all occasions.",
        category: "jewelery",
        image:
          "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      },
      {
        title: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
        price: 64,
        description: "USB 3.0 and USB 2.0 compatibility.",
        category: "electronics",
        image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      },
      {
        title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        price: 109,
        description:
          "Easy upgrade for faster boot up, shutdown, application load and response.",
        category: "electronics",
        image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      },
      {
        title: "Silicon Power 256GB SSD 3D NAND A55",
        price: 109,
        description: "3D NAND flash with high transfer speed.",
        category: "electronics",
        image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
      },
      {
        title: "WD 4TB Gaming Drive",
        price: 114,
        description:
          "Expand your gaming experience with a 4TB external hard drive.",
        category: "electronics",
        image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
      },
      {
        title: "Acer SB220Q bi 21.5 inches Full HD",
        price: 599,
        description: "21.5 inches full HD display, IPS panel.",
        category: "electronics",
        image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
      },
      {
        title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor",
        price: 999.99,
        description: "Super ultrawide dual 1080p screen gaming monitor.",
        category: "electronics",
        image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
      },
      {
        title: "Men's Casual Sneakers",
        price: 39.99,
        description: "Comfortable sneakers for everyday use.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_UL1280_.jpg",
      },
      {
        title: "Women's Gold Leaf Earrings",
        price: 15.99,
        description: "Elegant gold leaf earrings for all occasions.",
        category: "jewelery",
        image:
          "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      },
      {
        title: "Women's Casual Shoes",
        price: 29.99,
        description: "Comfortable everyday casual shoes.",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      },
      {
        title: "Women's Satin Top",
        price: 24.99,
        description: "Elegant satin top perfect for evening wear.",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      },
      {
        title: "Men's Leather Belt",
        price: 19.99,
        description: "Durable leather belt for casual and formal outfits.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      },
      {
        title: "Women's Handbag",
        price: 59.99,
        description: "Elegant handbag with multiple compartments.",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_UL1280_.jpg",
      },
      {
        title: "Smart LED TV 42 inch",
        price: 299.99,
        description: "42-inch smart LED TV with HD display and Wi-Fi.",
        category: "electronics",
        image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
      },
      {
        title: "Portable Charger 10000mAh",
        price: 29.99,
        description: "High-capacity portable charger for mobile devices.",
        category: "electronics",
        image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      },
      {
        title: "Rose Gold Bracelet",
        price: 39.99,
        description: "Elegant rose gold bracelet for daily or party wear.",
        category: "jewelery",
        image:
          "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      },
      {
        title: "Men's Hoodie",
        price: 34.99,
        description: "Warm and comfortable hoodie for casual outings.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      },
      {
        title: "Women's Cardigan",
        price: 29.99,
        description: "Soft and stylish cardigan for layering.",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      },
      {
        title: "Bluetooth Speaker",
        price: 49.99,
        description: "Portable Bluetooth speaker with high-quality sound.",
        category: "electronics",
        image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
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
