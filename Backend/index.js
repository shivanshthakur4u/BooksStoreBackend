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
const port = process.env.PORT;
const uri = `mongodb+srv://boylikes2play:${process.env.UserPassword}@cluster0.prryekd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

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

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
