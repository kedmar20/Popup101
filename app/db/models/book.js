const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { checkForbidenString } = require("../validators");

// model
const buecherSchema = new Schema({
  slug: {
    type: String,
    required: [true, "Feld 'slug' ist erforderlich"],
    minLength: [3, "Die Mindestanzahl an Zeichen beträgt 3"],
    validate: (value) => checkForbidenString(value, "slug"),
    trim: true,
    lowercase: true,
  },
  name: {
    type: String,
    required: [true, "Feld 'name' ist erforderlich"],
  },
  seitenzahl: {
    type: Number,
    min: 1,
    default: 1,
  },
});
// setter
// bookSchema.path('slug').set((value) => value.toLowerCase());

const Book = mongoose.model("Book", buecherSchema);
module.exports = Book;
