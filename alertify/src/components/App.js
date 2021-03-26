import React, { Component } from 'react';
import './App.css';
import Alert from './Alert';
import GroupAlert from './GroupAlert';
import AlertForm from './AlertForm';

const style = {
  position: "relative",
  margin: "50px auto"
}

class App extends Component {
  onDayClick = (e, day) => {
    alert(day);
  }
  
  render() {
    return (
      <div className="App">
        <h1>Alertify</h1>
        <div className= "nav">
          <span>

          <h3>Home</h3>
          <h2>Profile</h2>
          <h4>Calendar</h4>
          <h5>Alerts</h5>
          </span>
        </div>
        
        <Alert/>    
        <GroupAlert style={style} width="302px" 
          onDayClick={(e, day)=> this.onDayClick(e, day)}/> 
      </div>
    );
  }
}

export default App;
