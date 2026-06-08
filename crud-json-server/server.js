const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/booklistdb")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const bookSchema = new mongoose.Schema({
  title: String,
  author: String
});

const Book = mongoose.model("Book", bookSchema);

app.get("/posts", async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

app.post("/posts", async (req, res) => {
  const newBook = new Book({
    title: req.body.title,
    author: req.body.author
  });

  const savedBook = await newBook.save();
  res.json(savedBook);
});

app.get("/posts/:id", async (req, res) => {
  const book = await Book.findById(req.params.id);
  res.json(book);
});

app.put("/posts/:id", async (req, res) => {
  const updatedBook = await Book.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      author: req.body.author
    },
    { new: true }
  );

  res.json(updatedBook);
});

app.delete("/posts/:id", async (req, res) => {
  const deletedBook = await Book.findByIdAndDelete(req.params.id);
  res.json(deletedBook);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});