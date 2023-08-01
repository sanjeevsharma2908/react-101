import { useState , useEffect} from "react"; // useEffect/After render method -> API Call
import './App.css';
import Posts from "./Components/Post";

function App() {
 

  return (
    <div className="App">
      <Posts />
     
    </div>
  );
}

export default App;

//API Call is a  promise I=internally which is not predictable 

// it maybe-> [Promise->{success,pending,failure}, takes time]

//useEffect is a hook in React that allows you to perform side effects in function components. Side effects are anything that affects something outside of the component itself. This includes things like fetching data from an API, setting up event listeners, and updating the document title.

//The useEffect hook takes two arguments: a function that performs the side effect and an array of dependencies that determine when the effect should be run. The function is called after every render by default, but you can specify which props or state variables should trigger the effect by passing them in as dependencies.