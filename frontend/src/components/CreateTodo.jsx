import { useState } from 'react'

export function CreateTodo(props){
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    return <div>
        <input style ={{
            padding:10,
            margin:10
        }} type="text" placeholder="title" onChange={(e)=>{
            setTitle(e.target.value);
        }} /> <br />
        <input style ={{
            padding:10,
            margin:10
        }} type="text" placeholder="description" onChange={(e)=>{
            setDescription(e.target.value);
        }} /> <br />
        <button style ={{
            padding:10,
            margin:10
        }} onClick = {() => 
        {
            fetch("http://localhost:3000/todo" ,{
                method:"POST",
                body: JSON.stringify({      // have to stringify(its just syntax of fetch) [this is why axios is better :) ]
                    title:title,
                    description:description
                }),
                headers:{
                    "Content-type":"application/json" // tells the backend that we are sending JSON
                }
            }).then(async function(res)
            {
                alert("Todo added");
            })
            // now add the todo to array of existing todos
            props.setTodos([...props.todos,{
                title,
                description
            }])
        }} >Add Todo</button>
    </div>
}