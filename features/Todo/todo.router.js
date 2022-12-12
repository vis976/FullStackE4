
const express = require("express");

const Todo = require("./todo.model");


const app = express.Router();


app.get("/", async (req, res) => {
    try {
        let todos = await Todo.find({
            user: req.userId,
        }).limit(3).populate(["todo"]);
        res.send(todos);
    }
    catch (e) {
        res.status(500).send(e.message);
    }
})


app.post("/", async (req, res) => {
    try {
        let todo = await Todo.create({
            ...req, body,
        });
        res.send(todo);
    }
    catch (e) {
        res.status(404).send(e.message);
    }
});


app.get("/todoID", async (req, res) => {
    let id = req.params.id;
    try {
        let todo = await Todo.findByIdAndUpdate(id, { ...req.body }, { new: true });
        res.send(todo);
    }
    catch (e) {
        res.status(404).send(e.message);
    }
});



app.get("/status=pending", async (req, res) => {
    try {
        let todos = await Todo.findByStatus('pending', function (err, docs) {
            if (err) {
                res.send("No Pending")
            }
            res.send(todos);
        })
    }
    catch (e) {
        res.status(500).send(e.message);
    }
})



app.get("/status=done&tag=personal", async (req, res) => {
    try {
        let todos = await Todo.findByStatus('pending', function (err, docs) {
            if (err) {
                res.send("No Pending")
            }
            res.send(todos);
        })
    }
    catch (e) {
        res.status(500).send(e.message);
    }
})



module.exports = app;
