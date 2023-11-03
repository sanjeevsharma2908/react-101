// React hooks -- and there uses
//1. useState -> to create sate & variable and re-render dom when updated using the setter function
//2. useEffect -> Whenever the component is render / ////re-render, we can execute a function
//Data types in JS 
// Primitive DT -> var a =1 -> always binds to a value->a
// Abstract/ Non Primitive setCount = {a:1,b:'zzzz'} binds with the reference(address in memory) of a value ->b L2`



//a = 5;...L3
//b = {...b,a:6} //false
// {} === {} //false
// let a = {b:{c:1}}: ...L5
// let b = {}; ..L6
//  a=== b //false
//  let c = a; ..L5
//  c === a //true
//  c = {...a}; L7
//  c===a//false
//  c.b === a.b //true

//pure function
// for the same input give the sane output
// a function that does not depends on anything outside its scope

import './App.css';
import Counter from './Components/Counter';
import { TodoApp } from './TodoApp';
import AppProvider from './context/AppContext';

function App() {
  return (
    <div className="App">
      <AppProvider>
        < Counter />
        <TodoApp />
      </AppProvider>
      {/* <Counter />
      <TodoApp /> */}
    </div>
  );
}

export default App;
