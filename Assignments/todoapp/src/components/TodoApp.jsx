import React, {useState} from 'react';
import useMyReducer from './useMyReducer';

function todoReducer(state, action){
    switch(action.type){
        case 'ADD_TODO':
            return[...state,action.payload];
        case 'REMOVE_TODO':
            return state.filter((todo)=>todo.id !=action.payload);
        default:
            return state;
    }
}

const TodoApp = () => {
    const [todo,setTodo] = useState('');
    const [input,setInput] = useMyReducer(todoReducer,[]);

    const addTodo =() =>{
        if(input.trim() === '') return ;
        const newTodo = {id: Date.now(), text: input};
        dispatchEvent({type: 'ADD_TODO',payload:newTodo});
        setInput('');
    };
    const removeTodo=(id) =>{dispatch({type: 'REMOVE_TODO',payload:id})};
  return (
    <div>
         <h1>Todo App</h1>
      <input
        type="text"
        placeholder="Add a new todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoApp;