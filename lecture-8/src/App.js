
import './App.css';
import { useRef , useState} from 'react';
import Navbar from './Components/Navbar.jsx'

const ButtonWithUseRef = () =>{
  let count = useRef(0);
  console.log(count);
  
  const handleClick =()=>{
    count.current = count.current+1;
    console.log(count);
  }
  return (
    <>
    <h1>Count : {count.current}</h1>
    <button onClick={handleClick}>Button with UseRef</button>
    </>
  )
}
const ButtonWithUseState = () =>{
  const [count,setCount]=useState(0);
  console.log(count);
  
  const handleClick =()=>{
   setCount(count+1)
    console.log(count);
  }
  return (
    <>
    <h1>Count : {count}</h1>
    <button onClick={handleClick}>Button with UseRef</button>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <ButtonWithUseRef/>
      <ButtonWithUseState/>
    </div>
  );
}

export default App;
