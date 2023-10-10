import './App.css';
import Home from './paginas/Home';
import Sobre from './paginas/Sobre';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
<div className="App">
  <header className="App-header">
  <Router>
    <div className="App">
  <Routes>
    <Route path='/' element={ <Sobre/> }/>
    <Route path='/Home' element={ <Home/> }/>
    
  </Routes>
    </div>
  </Router>
  </header>
</div>
  );
}

export default App;
