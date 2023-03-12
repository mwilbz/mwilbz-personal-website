import './App.css';
import Adventure from './components/Adventure.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import Home from './components/Home.js';
import Resume from './components/Resume.js';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="content">
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/resume' element={<Resume/>}></Route>
          <Route path='/adventure' element={<Adventure/>}></Route>
        </Routes>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
