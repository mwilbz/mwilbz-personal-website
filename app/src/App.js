import './App.css';
import Adventure from './components/Adventure.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import Home from './components/Home.js';
import Resume from './components/Resume.js';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="content">
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/resume' component={Resume}></Route>
          <Route path='/adventure' component={Adventure}></Route>
        </Switch>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
