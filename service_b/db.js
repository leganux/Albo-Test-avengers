const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var uri = "mongodb://localhost:27017/marvel";
mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true});
const connection = mongoose.connection;
connection.once("open", function () {
    console.log("MongoDB database connection established successfully");
});

module.exports = mongoose
