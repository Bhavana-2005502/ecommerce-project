const express = require("express");
const cors = require("cors");

console.log("Server starting...");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

// Products
const products = [
  { id: 1, name: "Laptop", price: 50000, image: "https://m.media-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg", rating: 4.5 },
  { id: 2, name: "Phone", price: 20000, image: "https://m.media-amazon.com/images/I/61-r9zOKBCL._SL1500_.jpg", rating: 4.2 },
  { id: 3, name: "Headphones", price: 2000, image: "https://m.media-amazon.com/images/I/61CGHv6kmWL._SL1500_.jpg", rating: 4.0 },
  { id: 4, name: "Smart Watch", price: 3000, image: "https://m.media-amazon.com/images/I/61y2VVWcGBL._SL1500_.jpg", rating: 4.3 },
  { id: 5, name: "Keyboard", price: 1500, image: "https://m.media-amazon.com/images/I/71kr3WAj1FL._SL1500_.jpg", rating: 4.1 },
  { id: 6, name: "Mouse", price: 800, image: "https://m.media-amazon.com/images/I/61LtuGzXeaL._SL1500_.jpg", rating: 4.4 },

  { id: 7, name: "Tablet", price: 25000, image: "https://m.media-amazon.com/images/I/61NGnpjoRDL._SL1500_.jpg", rating: 4.2 }
  
];
// API route
app.get("/products", (req, res) => {
  res.json(products);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});