# Ajio Clone Backend

This is the backend for the **Ajio Clone** project, built with **Node.js**, **Express**, and **MongoDB**.  
It provides APIs for user authentication, product management, wishlist, and cart features.

---

## Features
- User authentication (JWT-based)
- Product CRUD APIs
- Wishlist & Cart APIs (add, update, remove, clear)
- MongoDB Atlas integration
- Secure routes with middleware

---

## Tech Stack
- **Node.js** + **Express.js** – Backend framework
- **MongoDB** + **Mongoose** – Database
- **JWT** – Authentication
- **Cors** – Cross-origin requests
- **Dotenv** – Environment variables

---

## Installation

```bash
# Clone the repository
git clone <repo-url>

# Go to backend folder
cd ajio-clone-backend

# Install dependencies
npm install

## 📡 API Endpoints
## Auth
POST /api/auth/register → Register a new user
POST /api/auth/login → Login user

## Products
GET /api/products → Get all products
GET /api/products/:id → Get product by ID

## Wishlist
GET /api/favorites → Get wishlist
POST /api/favorites → Add to wishlist
DELETE /api/favorites/:id → Remove item
DELETE /api/favorites → Clear wishlist

## Cart
GET /api/cart → Get cart items
POST /api/cart → Add item to cart
PUT /api/cart/:id → Update item quantity
DELETE /api/cart/:id → Remove item
DELETE /api/cart → Clear cart
