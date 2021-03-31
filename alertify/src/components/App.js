import React from 'react';
import './App.css';
import Alert from './Alert';
import GroupAlert from './GroupAlert';
import AlertForm from './AlertForm';
import { Switch, Route } from "react-router-dom";
import NavBar from './NavBar'
import User from './User'

function App() {




    return (
      <div className="App">
        <h1>Alertify</h1>
        <NavBar/>
          <Switch> 

          <Route exact path="/home">
            <User/> 
          </Route >

          <Route exact path="/group_alerts">
            <GroupAlert/>
          </Route>

          <Route exact path="/alerts">
            <Alert/> 
          </Route >
          
          </Switch>
       
        
   
         
      </div>
    );
}
export default App;
