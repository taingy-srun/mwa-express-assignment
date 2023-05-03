require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")))
app.post("/", function(req, res) {
    res.json({"message" : "This is a json message!!"})
});
const server = app.listen(process.env.PORT, function() {
    console.log("Server is running on port: " + server.address().port);
});