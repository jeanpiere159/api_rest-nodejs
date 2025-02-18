const express = require("express");
const router = express.Router();
const Book = require("../models/book.model");

// Obtener todos los libros
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    console.log("GET All", books);
    if (books.length === 0) {
      return res.status(204).json([]);
    }
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Middleware para obtener un libro por ID
const getBook = async (req, res, next) => {
  let book;
  const { id } = req.params;
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(404).json({
      message: "El id no es válido",
    });
  }

  try {
    book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({
        message: "El libro no existe",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
  res.book = book;
  next();
};

// Crear un nuevo libro
router.post("/", async (req, res) => {
  console.log("Solicitud POST recibida:", req.body);
  const { title, author, genre, publication_date } = req.body;
  if (!title || !author || !genre || !publication_date) {
    return res.status(400).json({
      message: "Todos los campos son obligatorios",
    });
  }

  const book = new Book({
    title,
    author,
    genre,
    publication_date,
  });

  try {
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
