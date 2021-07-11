import React, { useEffect, useState }from 'react';
import './App.css';
import Alert from './Alert';
import GroupAlert from './GroupAlert';
import { Switch, Route } from "react-router-dom";
import NavBar from './NavBar'
import User from './User'
import Profile from './Profile'
import Group from './Group'
import About from './About'

function App() {
  const [allAlerts, setAllAlerts] = useState([]);
const API_AllAlerts = "http://localhost:3000/alerts"

    useEffect(()=>{
      fetch(API_AllAlerts)
        .then((res) => res.json())
        .then((data) => setAllAlerts(data))
    }, [])


    return (
      <div className="App">
        <div className= "header">
             <div className="header2">
               <h1></h1>
             </div>
          </div>
        <NavBar/>
          <Switch> 

          <Route exact path="/home">
            <About/>
          </Route >

          <Route exact path="/user">
            <User/> 
          </Route>

          <Route exact path="/group_alerts">
            <GroupAlert allAlerts={allAlerts}/>
          </Route>
          <Route exact path="/groups">
            <Group/> 
          </Route >
          <Route exact path="/profile">
            <Alert/> 
          </Route >

          <Route exact path="/alerts">
            <Alert/> 
          </Route >
            <Profile/>
          </Switch>
      </div>
    );
}
export default App;
