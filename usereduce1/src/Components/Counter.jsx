import React, { useReducer, useState } from "react";


const reducerFn = (state,action)=>{
   if(action.type === 'INC'){
    return state+1;
   }else if(action.type ==='DEC'){
    return state-1;
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
                <span>By 1</span>
                <button onClick={()=> dispatch({ type: 'DEC' })}>DEC</button>
                <button onClick= {()=> dispatch({ type: 'INC' })}>INC</button>
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