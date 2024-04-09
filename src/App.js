import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Add from './components/Add';
import Search from './components/Search';
import Delete from './components/Delete';
import { BrowserRouter , Routes , Route } from 'react-router-dom';

function App() {
  return (

      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<Home/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/add' element={<Add/>}/>
          <Route path='/delete' element={<Delete/>}/>

        </Routes>
      </BrowserRouter>


  );
}

export default App;
