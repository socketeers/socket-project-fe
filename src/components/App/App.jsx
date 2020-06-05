import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from '../Home/Home';
import Game from '../Game/Game';


export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/game' component={Game} />
      </Switch>
    </Router>
  )
}
  