require("dotenv").config();
//
module.exports = {
  port: process.env.PORT || 4444,
  database: process.env.DATABASE || "mongodb://127.0.0.1:4444/buchkatalog",
  sessionKeySecret: process.env.SESSION_KEY_SECRET,
  ssl: process.env.SSL || false,
};
