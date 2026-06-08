const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/booklistdb")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const bookSchema = new mongoose.Schema({
  title: String,
  author: String
});

const Book = mongoose.model("Book", bookSchema);

const books = [
  {
    title: "Lord of The Rings",
    author: "J.R.R. Tolkien"
  },
  {
    title: "The Alchemist",
    author: "Paul Coelho"
  },
  {
    title: "Da Vinci Code",
    author: "Dan Brown"
  },
  {
    title: "A Tale of Two Cities",
    author: "Charles Dickens"
  }
];

async function seedBooks() {
  try {
    await Book.deleteMany({});
    await Book.insertMany(books);

    console.log("Book data imported successfully");
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
    mongoose.connection.close();
  }
}

seedBooks();