import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Update from './pages/writing/Update';
import Add from './pages/writing/Add';
import Home from './pages/Home';
import AddMusic from './pages/music/AddMusic';
import UpdateMusic from './pages/music/UpdateMusic';
import Favorite from './pages/Favorite';
import AddMusicFave from './pages/music/AddMusicFave';
import AddBooksFave from './pages/writing/AddBooksFave';
import UpdateBooksFave from './pages/writing/UpdateBooksFave';
// import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="/update/:id" element={<Update/>}/>
          <Route path="/addmusic" element={<AddMusic/>}/>
          <Route path="/updatemusic/:id" element={<UpdateMusic/>}/>
          <Route path="/favorite/" element={<Favorite/>}/>
          <Route path="/addmusicfave" element={<AddMusicFave/>}/>
          <Route path="/addbooksfave" element={<AddBooksFave/>}/>
          <Route path="/updatebooksfave" element={<UpdateBooksFave/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
