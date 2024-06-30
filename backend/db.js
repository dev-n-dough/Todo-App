const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:%40%40Akshat1@cluster0.dkiipmz.mongodb.net/todos");

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed:{
        type:Boolean,
        default:false
    }
})

const todo = mongoose.model("todos",todoSchema);
                   
module.exports = {
    todo
}