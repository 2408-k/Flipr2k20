import React from 'react';
import './App.css';
import Contact from './Contact';
import { Route, NavLink } from 'react-router-dom';
import Notification from './Notification';
import Hospital from './Hospital';
import Medical from './Medical';
import Deceased from './Deceased';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <div className="navBar">
          <NavLink exact to="/" activeClassName="ac"><h3 className="hh">Home</h3></NavLink>
          <NavLink exact to="/helpline" activeClassName="ac"><h3 className="hh">Helpline</h3></NavLink>
          <NavLink exact to="/notification" activeClassName="ac"><h3 className="hh">Notification</h3></NavLink>
          <NavLink exact to="/hosp" activeClassName="ac"><h3 className="hh">Hospitals</h3></NavLink>
          <NavLink exact to="/med" activeClassName="ac"><h3 className="hh">Medical Colleges</h3></NavLink>
          <NavLink exact to="/d" activeClassName="ac"><h3 className="hh">Daily Reports</h3></NavLink>
      </div>

      <switch>
        <Route exact path="/helpline" component={Contact} />
        <Route exact path="/notification" component={Notification} />
        <Route exact path="/hosp" component={Hospital} />
        <Route exact path="/med" component={Medical} />
        <Route exact path="/d" component={Deceased} />
        <Route exact path="/" component={Home} />

      </switch>
    </div>
  );
}

export default App;
