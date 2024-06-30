export function Todos({todos}) // take a props object as input which has a "todos" array in it . now instead of taking
                               // props as input , lets take {todos} as input directly
{
    return <div>
        {todos.map(function(todo)
        {
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed == true ? "Completed" : "Mark as comnpleted"}</button>
            </div>
        })}
    </div>
}