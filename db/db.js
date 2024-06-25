require("dotenv").config();
const mongoose = require("mongoose");
const uri = process.env.MONGO_DB_URI;

mongoose
    .connect(uri)
    .then(() => console.log("Connected To The DB"))
    .catch((err) => console.log(err));
