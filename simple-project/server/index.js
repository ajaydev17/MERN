// creating the express server
const express = require("express");
const app = express();
const { createTodo, updateTodo } = require("./types");


// define the middleware
app.use(express.json())

app.get("/todos", function (req, res) {
    res.send("Hello from express");
});

app.post("/todo", function (req, res) {
    const payload = req.body;
    const parsePayload = createTodo.safeParse(payload);
    if (!parsePayload.success) {
	res.status(401).send({
	    "message": "You sent the wrong input"
	})
    }
    return;
});

app.put("/completed", function (req, res) {

});

app.listen(3000, function () {
    console.log("Server started listening on port 3000");
});
