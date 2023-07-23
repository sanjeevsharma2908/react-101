import { useState } from "react";

function Counter(){
const [count, setCount] = useState(0);

const handleIncrement = () => {setCount(count+1)};
const handleDecrement = () => {setCount(count-1)};

    return (
        
        <div style={{
            border:"1px solid gray",
            width:"90%",
            margin : "auto",

        }}>
            <h1>COUNTER-APP</h1>
            <h3>Total Count is :{count}</h3>
            <button onClick={handleIncrement}>INCREMENT</button>
            <button onClick= {handleDecrement} disabled={count===0}  >DeCREMENT</button>
        </div>
    )
}
export default Counter;