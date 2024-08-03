const mongoose = require("mongoose");
const Product = require("./models/product");

mongoose
  .connect("mongodb://127.0.0.1/shop_db")
  .then((result) => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

const seedProducts = [
  {
    name: "Nike Air Force 1",
    price: 100,
    brand: "Nike",
    color: "white",
    size: "L",
  },
  {
    name: "Adidas Superstar",
    brand: "Adidas",
    price: 80,
    color: "black",
    size: "M",
  },
  {
    name: "Vans Old Skool",
    brand: "Vans",
    price: 60,
    color: "black",
    size: "S",
  },
  {
    name: "Converse Chuck Taylor",
    brand: "Converse",
    price: 70,
    color: "red",
    size: "XL",
  },
  {
    name: "Reebok Classic",
    brand: "Reebok",
    price: 90,
    color: "white",
    size: "M",
  },
  {
    name: "Puma Suede",
    brand: "Puma",
    price: 75,
    color: "blue",
    size: "L",
  },
];

Product.insertMany(seedProducts)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
