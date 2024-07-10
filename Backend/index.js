import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoutes from "./routes/books.route.js";
import userRoutes from "./routes/user.route.js";
import cors from "cors";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
// const port = process.env.PORT;
const uri = process.env.DB_URL;

// DB connection
main().catch((err) => console.log(err));

async function main() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
    //    // Seed the database
    // await Book.insertMany(books);
    // console.log("Books have been added successfully!");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  }
}

// routes

app.use("/book", bookRoutes);

app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(() => {
  console.log("Server started");
});
