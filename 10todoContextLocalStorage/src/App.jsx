import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts'
import { TodoItem, TodosForm } from './components';

function App() {
  const [todos, setTodos] = useState([]);

  //To get Todos When Page is loaded (at starting)
  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length>0){
      setTodos(todos)
    }
  },[])


  //When there is a change in Todos update it in local Storage also
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])


  const addTodo = (todo) => {
    // console.log(todo)
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updatedTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };
  //USING FOR LOOP
  // const updatedTodo = (id, todo) => {
  //   setTodos((prev) => {
  //     const updatedTodos = []; // Create a new array to hold the updated todos
  //     for (let i = 0; i < prev.length; i++) {
  //       if (prev[i].id === id) {
  //         updatedTodos.push(todo); // Replace the matching todo
  //       } else {
  //         updatedTodos.push(prev[i]); // Keep the original todo
  //       }
  //     }
  //     return updatedTodos;
  //   });
  // };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  return (
    <TodoProvider
      value={{ todos, addTodo, updatedTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
              <TodosForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
              {todos.map((todo)=>(
                <div key={todo.id} className="w-full"  >
                  <TodoItem todo={todo} />
                </div>
              ))}
          </div>
        </div>
      </div>{" "}
    </TodoProvider>
  );
}

export default App

