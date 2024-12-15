import { useState, useEffect } from "react";
import './App.css'
import { TodoProvider } from './contexts/TodoContexts'
import TodoForm from "./components/Todoform";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([])

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todo"))
    if(todos && todos.length>0){
      setTodos(todos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todo",JSON.stringify(todos))
  },[todos])

  const addTodo = (todo)=>{
    // console.log(todo)
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  }

  const deleteTodo = (id)=>{
    setTodos((prevTodos)=>prevTodos.filter((prev)=>prev.id!==id))
  }

  const updateTodo = (id,todo)=>{
    setTodos((prevTodos)=>prevTodos.map((prev)=>prev.id===id?todo :prev ))
  }

  const toggleComplete = (id)=>{
    setTodos((prevTodos)=>prevTodos.map((prev)=>prev.id===id?{...prev,completed:!prev.completed} :prev ))
  }

  return (
    <TodoProvider
      value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {/* {todos.map((todo)=>(
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo}/>
              </div>
            ))} */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App

