const mongoose = require("mongoose");
const { database } = require("../config");

mongoose.set("strictQuery", false);
//
mongoose.connect(database, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  // useFindAndModify: false,
  // useCreateIndex: true,
});
