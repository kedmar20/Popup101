const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const { validateEmail } = require("../validators");

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "E-Mail Adresse ist erforderlich"],
    lowercase: true,
    trim: true,
    unique: true,
    validate: [validateEmail, "E-Mail Adresse ist ungültig"],
  },
  password: {
    type: String,
    required: true,
    minLength: [4, "Die Mindestanzahl an Zeichen beträgt 4"],
  },
});

userSchema.path("password").set((value) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(value, salt);
  return hash;
});

// userSchema.pre("save", function (next) {
//   const user = this;
//   const salt = bcrypt.genSaltSync(10);
//   const hash = bcrypt.hashSync(value, salt);
//   user.password = hash;
//   next();
// });

userSchema.post("save", function (error, doc, next) {
  if (error.code === 11000) {
    error.errors = {
      email: { message: "Diese E-Mail Adresse ist schon in Benutzung" },
    };
  }
  next(error);
});

userSchema.methods = {
  comparePassword(password) {
    return bcrypt.compareSync(password, this.password);
  },
};

const User = mongoose.model("User", userSchema);

module.exports = User;
