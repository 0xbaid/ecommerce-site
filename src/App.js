import React from 'react';
import './App.css';
import HomePage from './pages/homepage.component';
import { Switch, Route } from 'react-router-dom';

const Hats = () => {
  return(
    <div>
      <h1>Hats Page</h1>
    </div>
  )  
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/hats' component={Hats}/>
      </Switch>
    </div>
  );
}

export default App;
