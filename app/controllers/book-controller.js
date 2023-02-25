const Book = require("../db/models/book");

// class BookController {
// function BookController() {
function BookController() {
  // const ffff = "vovov"; // to jest klasa, takie rzeczy to tylko w ramach 'constructor'

  return {
    async showBuecher(req, res) {
      // this.showBuecher = async function (req, res) {
      // const showBuecher = async function (req, res) {
      const buecher = await Book.find({});

      res.render("pages/buecher/buecher", {
        buecher,
      });
    },
    // async showBook(req, res) {
    // this.showBook = async function (req, res) {
    async showBook(req, res) {
      const { name } = req.params;
      const book = await Book.findOne({ slug: name });
      console.log(book);

      res.render("pages/buecher/book", {
        name: book?.name,
        title: book?.name ?? "Keine Ergebnisse",
      });
    },
    // showCreateBookForm(req, res) {
    // this.showCreateBookForm = function (req, res) {
    showCreateBookForm(req, res) {
      res.render("pages/buecher/create");
    },
    // async createBook(req, res) {
    // this.createBook = async function (req, res) {
    async createBook(req, res) {
      const book = new Book({
        name: req.body.name,
        slug: req.body.slug,
        seitenzahl: req.body.seitenzahl,
      });
      try {
        await book.save();
        res.redirect("/buecher");
      } catch (e) {
        res.render("pages/buecher/create", {
          errors: e.errors,
          form: req.body,
        });
      }
    },
    // async showEditBookForm(req, res) {
    // this.showEditBookForm = async function (req, res) {
    async showEditBookForm(req, res) {
      const { name } = req.params;
      const book = await Book.findOne({ slug: name });

      res.render("pages/buecher/edit", {
        form: book,
      });
    },

    // async editBook(req, res) {
    // this.editBook = async function (req, res) {
    async editBook(req, res) {
      const { name } = req.params;
      const book = await Book.findOne({ slug: name });
      book.name = req.body.name;
      book.slug = req.body.slug;
      book.seitenzahl = req.body.seitenzahl;

      try {
        await book.save();
        res.redirect("/buecher");
      } catch (e) {
        res.render("pages/buecher/edit", {
          errors: e.errors,
          form: req.body,
        });
      }
    },
    // async deleteBook(req, res) {
    // this.deleteBook = async function (req, res) {
    async deleteBook(req, res) {
      const { name } = req.params;
      try {
        await Book.deleteOne({ slug: name });
        res.redirect("/buecher");
      } catch (e) {
        //
      }
    },
  };
}

// module.exports = new BookController(); // ten 'new' czy bez niego to bez znaczenia; bo przecież nie używamy tutaj tego jako faktycznego konstruktora tylko jako metoda
module.exports = BookController();
