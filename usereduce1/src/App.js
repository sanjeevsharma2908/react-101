// React hooks -- and there uses
//1. useState -> to create sate & variable and re-render dom when updated using the setter function
//2. useEffect -> Whenever the component is render / re-render, we can execute a function

//Data types in JS 
// Primitive DT -> var a =1 -> always binds to a value->a
// Abstract/ Non Primitive setCount = {a:1,b:'zzzz'} binds with the reference(address in memory) of a value ->b L2`
import './App.css';
import Counter from './Components/Counter';

function App() {
  return (
    <div className="App">
    < Counter />
    </div>
  );
}

export default App;
