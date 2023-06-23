const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var uri = process.env.DB_URI;
mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true});
const connection = mongoose.connection;
connection.once("open", function () {
    console.log("MongoDB database connection established successfully");
});

module.exports = mongoose
