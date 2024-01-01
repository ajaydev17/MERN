// creating the express server
const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.send("Hello from express");
});

app.listen(3000, function () {
    console.log("Server started listening on port 3000");
});
