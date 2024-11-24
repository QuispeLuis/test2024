const mongoose = require("mongoose");
const URI = process.env.MONGO_URI || "mongodb://mongo:27017/tp5db";
//const URI = "mongodb://0.0.0.0/tp5db";
mongoose
  .connect(URI)
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.error(err));
module.exports = mongoose;
