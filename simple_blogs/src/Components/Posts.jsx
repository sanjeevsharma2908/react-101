import { useState } from "react";
import useFetch from "./useFetch";


function Posts() {
    const handleFetchBtn = ()=>{
        const {data,isLoading,error} = useFetch('https://jsonplaceholder.typicode.com/posts');
        console.log(data,isLoading,error);
    }
    return (
    <div>
      <h1>POSTS</h1>
      <button onClick={handleFetchBtn}>FETCH POSTS!</button>
      <br />
      
    </div>
  );
}
export default Posts;
