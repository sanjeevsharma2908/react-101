
import './App.css';
import { useEffect, useState} from 'react';

function App() {
  
const [count,setCount] = useState(0);
console.log(1);
useEffect(()=>{
  console.log(`callback inside useEffect`)
  document.title = `Count is ${count}`;
  console.log(2)
})
console.log(3)
  return (
    <div className="App">
        <h1>This is A counter Application</h1>
        <h1>Count : {count}</h1>
        <button  onClick={()=>setCount(count+1)}>  Increase Count </button>
    </div>
  );
}

export default App;
