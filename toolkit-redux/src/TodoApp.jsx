import { useGetTodosQuery, useGetTodoByIdQuery } from "./store/apis/todosApi"
import { useState } from "react";

export const TodoApp = () => {

// const { data: todos = [], isLoading } = useGetTodosQuery();
    
    const [todoId, setTodoId] = useState(1);
   const { data: todo , isLoading } = useGetTodoByIdQuery(todoId);

    const nextTodo = () => {
        setTodoId(todoId + 1)
    }
    const prevTodo = () => {
        if ( todoId === 1) return;
        setTodoId(todoId - 1)
    }

  return (
   <><h1>Todos - RTK query</h1>
   <hr/>
   <h4>isLoading: {isLoading ? 'true' : 'false' }</h4>

   <pre>{JSON.stringify(todo)}</pre>
    
   <button onClick={prevTodo}>
    Previus todo
   </button>
   <button onClick={nextTodo}>
    Next todo
   </button>

 {/*}  <ul>
    { todos.map( todo => (
        <li key={ todo.id }>
        <strong>{ todo.completed ? 'Done' : 'Pending' }: </strong>
        { todo.title }
        </li>
    )) }
   </ul> */}
  
   </>
  )
}
