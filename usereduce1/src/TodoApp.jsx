import React, { useReducer, useState } from "react";
import { TodoInput } from "./TodoInput";

const todoReducerFn = (state, {type, payload})=>{
    switch(type){
        case'ADD':{
            state = [...state, { id: Date.now(), value: payload, isCompleted: false }];
            return state;
        }
        case 'TOGGLE':{
            const newState = state.map((todo) => {
                if (todo.id === payload) todo.isCompleted = !todo.isCompleted;
                return todo;
              })
              return newState;
        }
        case 'DELETE' :{
            const newState = state.filter((todo) => todo.id !== payload);
            return newState;
        }
        default :{
            return state;
        }
    }
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducerFn,[]);
 

  return (
    <div>
      <h1>Todos</h1>
      <TodoInput handleAdd={(value)=>dispatch({type:"ADD",payload:value})} />
      {todos.map((todo) => (
        <div key={todo.id} style={
            { 
            width:"40%",
            textAlign:'center',
            display:'flex',
            justifyContent:'space-between',
            border:"1px solid green"
            }}
            >
          <span style={{
            textDecoration:todo.isCompleted ? "line-through":"none",
            alignItems:'center'

            }}
            >
                {todo.value}
            {/*  - {todo.isCompleted ? "Completed" : "Not Completed"} */}
          </span>
          <button onClick={() => dispatch({type:"TOGGLE",payload:todo.id})}>Toggle Status</button>
          <button onClick={() => dispatch({type:"DELETE",payload:todo.id})}>Delete</button>
        </div>
      ))}
 
    </div>

  );
};
