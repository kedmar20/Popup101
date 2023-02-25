const User = require("../db/models/user");

class UserController {
  showRegister(req, res) {
    res.render("pages/auth/register");
  }

  async register(req, res) {
    const user = new User({
      email: req.body.email,
      password: req.body.password,
    });
    try {
      await user.save();
      res.redirect("/anmelden");
    } catch (e) {
      res.render("pages/auth/register", {
        errors: e.errors,
        form: req.body,
      });
    }
  }

  showLogin(req, res) {
    res.render("pages/auth/login");
  }

  // async login(req, res) {
  //   const user = await User.findOne({ email: req.body.email });
  //   if (!user) {
  //     return res.render("pages/auth/login", {
  //       form: req.body,
  //       errors: true,
  //     });
  //   }
  //   const isValidPassword = false; //user.comparePassword(req.body.password);
  //   if (!isValidPassword) {
  //     return res.render("pages/auth/login", {
  //       form: req.body,
  //       errors: true,
  //     });
  //   }
  // }
  // THE SAME BUT DIFFERENT WITH 'TRY/CATCH':
  async login(req, res) {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        throw new Error("user not found");
      }
      const isValidPassword = user.comparePassword(req.body.password);
      if (!isValidPassword) {
        throw new Error("password not valid");
      }
      // login:
      req.session.user = {
        _id: user._id,
        email: user.email,
      };
      res.redirect("/");
    } catch (e) {
      res.render("pages/auth/login", {
        form: req.body,
        errors: true,
      });
    }
  }

  //logout
  logout(req, res) {
    req.session.destroy();
    res.redirect("/");
  }
}
module.exports = new UserController();
