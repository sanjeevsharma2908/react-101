import { useState, useEffect} from 'react'
function Timer() {
    const[count,setCount] =useState(10);

    useEffect(()=>{
       const intervalId =  setInterval(()=>{
        console.log('setInterval is running',Date.now());
            setCount((prevCount)=>{
                if(prevCount<=1){
                    clearInterval(intervalId);
                    return 0;
                }
               return  prevCount-1;
            });
        },1000);
        //cleanUp Function 
        const cleanupFun=() =>{
            console.log('cleanUp is called');
            clearInterval(intervalId);
        };

        return cleanupFun;

        // return () =>{
        //     clearInterval(intervalId);
        // };
;
    }, []);

    return (
        <div>
            <h1>Time : {count}</h1>
        </div>
    );
}

export default Timer;