const express = require("express");
const router = express.Router();
const Book = require("../models/book");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/covers");
  },
  filename: function (req, file, cb) {
    cb(null, req.body.name + "." + file.mimetype.split("/")[1]);
  },
});

const upload = multer({ storage: storage });

router.get("/", async (req, res) => {
  let books = await Book.find().limit(10);
  res.render("pages/index", { books: books });
});

router.get("/add", async (req, res) => {
  res.render("pages/add");
});

router.get("/delete", async (req, res) => {
  res.render("pages/delete", { book: null });
});

router.get("/update", async (req, res) => {
  res.render("pages/update", { book: null });
});

router.post("/find", async (req, res) => {
  try {
    console.log(req.body);
    let curr_book = await Book.find({
      name: req.body.name,
      author: req.body.author,
    });
    res.status(200).json(curr_book);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", upload.single("coverimg"), async (req, res) => {
  try {
    console.log(req.body);
    const newBook = await new Book({
      name: req.body.name,
      author: req.body.author,
      edition: req.body.edition,
      subject: req.body.subject,
      copies: req.body.copies,
      description: req.body.description,
    });
    const book = await newBook.save();
    res.status(200).json("sucess");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(200).json("Book Successfully Deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/update/:id", async (req, res) => {
  try {
    const currBook = await Book.findById(req.params.id);
    res.render("pages/update", { book: currBook });
  } catch (err) {
    res.status(500).send({ err: err });
  }
});

router.post("/update/:id", upload.single("coverimg"), async (req, res) => {
  try {
    const currBook = await Book.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).send("works");
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.get("/delete/:id", async (req, res) => {
  try {
    const currBook = await Book.findById(req.params.id);
    if (currBook) res.render("pages/delete", { book: currBook });
    else {
      res.redirect("/book/delete");
    }
  } catch (err) {
    res.status(500).send({ err: err });
  }
});

router.get("/search/:term", async(req, res) => {
  try {
    let books = [];
    let x = await Book.find({ name: req.params.term });
    books = books.concat(x);
    x = await Book.find({ author: req.params.term });
    books = books.concat(x);
    x = await Book.find({ subject: req.params.term });
    books = books.concat(x);
    res.render("pages/search", { books: books });
  } catch (err) {
    console.log(err);
    res.redirect("/");
  }
});

module.exports = router;
