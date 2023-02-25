const express = require("express");
const router = new express.Router();
const BookController = require("../controllers/book-controller");
const UserController = require("../controllers/user-controller");
const PageController = require("../controllers/page-controller");
router.use(express.json());

router.get("/", PageController.showHome);
router.get("/buecher", BookController.showBuecher);
router.get("/buecher/:name", BookController.showBook);

router.get("/registrieren", UserController.showRegister);
router.post("/registrieren", UserController.register);
router.get("/anmelden", UserController.showLogin);
router.post("/anmelden", UserController.login);
router.get("/abmelden", UserController.logout);

router.get("/admin/buecher/new", BookController.showCreateBookForm);
router.post("/admin/buecher/new", BookController.createBook);
router.get("/admin/buecher/:name/edit", BookController.showEditBookForm);
router.post("/admin/buecher/:name/edit", BookController.editBook);
router.get("/admin/buecher/:name/delete", BookController.deleteBook);

router.get("*", PageController.showNotFound);

module.exports = router;
