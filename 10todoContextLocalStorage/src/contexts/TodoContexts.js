import {createContext,useContext} from "react";
export const TodoContext = createContext({
    todos: [
        {
            id:1,
            todo: " Todo msg",
            completed:false,
        }
    ],
    addTodo: (todo)=>{},
    updatedTodo: (id,todo)=>{},
    deleteTodo: (id)=>{},
    toggleCompleted:(id)=>{}
})

export const TodoProvider = TodoContext.Provider

const  useTodo = ()=>{
    return useContext(TodoContext)
}
export default useTodo


