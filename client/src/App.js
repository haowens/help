import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Add from './pages/writing/Add';
import Home from './pages/Home';
import AddMusic from './pages/music/AddMusic';
import ArticleQuotes from './pages/writing/ArticleQuotes';


// import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/add" element={<Add/>}/>  
          <Route path="/addmusic" element={<AddMusic/>}/>  
          <Route path="/articlequotes" element={<ArticleQuotes/>}/>
          {/* addarticlequote */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
