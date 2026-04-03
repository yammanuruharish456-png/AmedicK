const mongoose = require("mongoose");
require("dotenv").config();

const uri =
  process.env.MONGODB_URI ||
  process.env.MONGO_URI ||
  process.env.MONGODB ||
  process.env.MONGO_URL ||
  process.env.mongodb ||
  "mongodb://127.0.0.1:27017/amedick";

const connection = mongoose
  .connect(uri, {
    serverSelectionTimeoutMS: 5000,
  })
  .then(() => {
    console.log("MongoDB connected successfully to", uri.includes('@') ? "MongoDB Atlas" : "Local MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1); // Stop the server if the DB doesn't connect
  });

module.exports = connection;
