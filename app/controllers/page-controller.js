class PageController {
  showHome(req, res) {
    res.render("pages/home", {
      title: "Homepage",
      // user: req.session.user,
    });
  }

  showNotFound(req, res) {
    res.render("errors/404", {
      title: "nicht gefunden",
      layout: "layouts/minimalistic",
    });
  }
}

module.exports = new PageController();
