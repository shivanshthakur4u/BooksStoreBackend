import mongoose from "mongoose";

const BooksModel = mongoose.Schema({
  name: String,
  title: String,
  price: Number,
  category: String,
  image: String,
});

const Model = mongoose.model("Book", BooksModel);

export default Model;
