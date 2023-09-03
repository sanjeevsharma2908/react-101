import React, { useState } from "react";
import { TodoInput } from "./TodoInput";

export const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const handleAdd = (value) => {
    setTodos([...todos, { id: Date.now(), value, isCompleted: false }]);
    //console.log(todos)
  };
  const toggleStatus = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) todo.isCompleted = !todo.isCompleted;
        return todo;
      })
    );
  };
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{maxWidth: "300px", textAlign:'center'}}>
      <h1>Todos</h1>
      <TodoInput handleAdd={handleAdd} />
      {todos.map((todo) => (
        <div key={todo.id} style={{ display:'grid',gridTemplateColumns:'1fr 1fr'}}>
          <span onClick={() => toggleStatus(todo.id)}>
            {todo.value} - {todo.isCompleted ? "Completed" : "Not Completed"}
          </span>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </div>
      ))}
 
    </div>
  );
};
