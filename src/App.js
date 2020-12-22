// Imports
import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component'
import {Switch, Route} from 'react-router-dom'

const HatsPage = () => (
  <div>
    <h1>
      HATS PAGE
    </h1>
  </div>
)

// Functional Component
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route  path='/hats' component={HatsPage}/>
      </Switch>
    </div>
  );
}

// Exports
export default App;
