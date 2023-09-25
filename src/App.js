// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cats from './pages/cats';
import Home from './pages';
import Upload from './pages/formUploadCat';
// import CatCard from './components/CatCard';
function App() {
  return (
    <Routes>
      <Route exact path ="/" element={<Home/>}></Route>
      <Route exact path ="/cat" element={<Cats/>}></Route>
      <Route exact path ="/upload" element={<Upload/>}></Route>
    </Routes>
  );
}

export default App;
