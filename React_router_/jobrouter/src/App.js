
import { BrowserRouter, Routes, Route,Link, NavLink} from 'react-router-dom';
//pages
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
   <BrowserRouter>
   <header>
    <nav>
      
    </nav>
   </header>
   <main>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
    </Routes>
   </main>
   </BrowserRouter>
  );
}

export default App;
