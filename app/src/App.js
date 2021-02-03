import './App.css';
import Adventure from './Adventure.js';
import Home from './Home.js';
import Resume from './Resume.js';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/resume' component={Resume}></Route>
        <Route path='/adventure' component={Adventure}></Route>
      </Switch>
    </div>
  );
}

export default App;
