
const mongoose = require("mongoose");


const Todo = new mongoose.Schema({
    taskname: {
        type: String, required: true
    },
    status: {
        type: String, enum:["pending", "done"]
    },
    tag: {
        type: String, enum:["personal", "official", "family"]
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        require: true,
    },
});

const todo = mongoose.model("todo", Todo);

module.exports = todo;  