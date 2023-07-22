import { useState } from "react";
// API URL : https://jsonplaceholder.typicode.com/posts?_limit=10;

const getData = (url) => {
  return fetch(url)
    .then((res) => res.json())
    .catch((error) => console.log(error));
};
function Posts() {
  const [posts, setPosts] = useState([]);
  const [ error,setError] = useState(false);
  const [loading,setLoading] = useState(false);

  const handleFetchData = async () => {
    try {
        setLoading(true);
      // making an api request
      const data = await getData(
        `https://jsonplaceholder.typicode.com/posts?_limit=10`
      );

      console.log(data);
      setPosts(data);
      
      setLoading(false);
    } 
    
    catch (e) {
      console.log(e);
      setError(true);
    }
    if(loading) {
        return <h1>Loading...</h1>
    }
    if(error){
     return <h1>Error</h1>
    }
  };

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={handleFetchData}>CLICK HERE TO FETCH POSTS</button>
      <br />

      <ul>
        {posts.map((post)=>(
            <li key = {post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default Posts;
