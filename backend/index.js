const express = require("express");
const app = express();
app.listen(3000);
const {createTodo,updateTodo} = require("./types");
const {todo} = require("./db"); // table(of todos) inside db
const cors =  require("cors");

app.use(cors());

app.use(express.json());

// get all todos
app.get("/todos",async function(req,res)
{
    const todos = await todo.find({}); // await is important!!!
    res.json({
        todos
    })
}) 

// create a new todo
app.post("/todo", async function(req,res)
{
    // const title = req.body.title;
    // const description = req.body.description;
    // const response = createTodo.safeParse(title,description);
    const payload = req.body;
    const parsedPayload = createTodo.safeParse(payload);
    if(!parsedPayload.success)
    {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
    // put it in mongo db
    await todo.create({
        title: payload.title,
        description: payload.description,
    })

    res.json({
        msg:"todo created successfully!"
    })
}) 

// mark a todo with id = id as done
app.put("/completed",async function(req,res)
{
    const payload = req.body;
    const parsedPayload = updateTodo.safeParse(payload);
    if(!parsedPayload.success)
    {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
    await todo.updateOne(
        {
            _id:req.body.id
        },
        {
            completed: true
        }
    );
    res.json({
        msg: "todo marked as completed"
    })

}) 

