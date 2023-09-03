import React, { useReducer, useState } from "react";


const reducerFn = (state,{type,payload=1})=>{ // it's a best practice to follow useCase with the reducer function

    switch(type){
        case "INC" : {
            return state + payload;
        }
        case "DEC" : {
            return state - payload;
        }
        default : { 
            return state;
        }
    }
}
const Counter = () => {
    //const [count,setCount] = useState(0);
    const [count, dispatch] = useReducer(reducerFn,0);
    return ( 
        <div>
            <h1>
                Count : {count}
            </h1>
            <div>
                <span>By 129</span>
                <button onClick={()=> dispatch({ type: 'DEC',payload:129 })}>DEC</button>
                <button onClick= {()=> dispatch({ type: 'INC',payload:129 })}>INC</button>
            </div>
            {/* <div>
                <span>By 5</span>
                <button onClick={()=>setCount(count-5)}>DEC</button>
                <button onClick= {()=>setCount(count+5)}>INC</button>
            </div>
            <div>
                <span>By 10</span>
                <button onClick={()=>setCount(count-10)}>DEC</button>
                <button onClick= {()=>setCount(count+10)}>INC</button>
            </div>
            <div>
                <span>By 100</span>
                <button onClick={()=>setCount(count-100)}>DEC</button>
                <button onClick= {()=>setCount(count+100)}>INC</button>
            </div> */}
        </div>
     );
}
 
export default Counter;