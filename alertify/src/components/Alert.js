import React, { useState, useEffect } from "react"
import AlertForm from './AlertForm'
import AlertUpdateForm from './AlertUpdateForm'

function Alert({selectedUser, setSelectedUser}){

    const [allAlerts, setAllAlerts] = useState([]);
    const [selectedAlert, setSelectedAlert] = useState(null);
    const API_AllAlerts = "http://localhost:3000/alerts"
    const [currentPhone, setCurrentPhone] = useState(9174285006);

  
    useEffect(()=>{
      fetch(API_AllAlerts)
      .then((res) => res.json())
      .then((data) => setAllAlerts(data))
    }, [])
    
    function handleChangeForm(name, value) {
      setSelectedAlert({
        ...selectedAlert,
        [name]: value,
      });
    }
    
    function handleEditAlert(updatedAlert) {
      const updatedAlerts = allAlerts.map((alert) =>
      alert.id === updatedAlert.id ? updatedAlert : alert
      );
      setSelectedAlert(updatedAlert);
      setAllAlerts(updatedAlerts);
    }
    
    function handleAlert(alertClicked) {
      
      fetch(`https://twilio-sms.p.rapidapi.com/2010-04-01/Accounts/a/Messages.json?from=%2B1(904)748-2853&body=Event:${alertClicked.event}
      Info:${alertClicked.info}
      Date:${alertClicked.date}
      Time:${alertClicked.time}        
      Place:${alertClicked.place}&to=${currentPhone}&statusCallback=11377&mediaUrl=${alertClicked.image}`, {
        "method": "POST",
        "headers": {
          "x-rapidapi-key": "933e774a35msh8bc92379d6f01adp1f20d5jsnc1c191a09591",
          "x-rapidapi-host": "twilio-sms.p.rapidapi.com"
        }
      })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.error(err);
      });
    }
    console.log(selectedUser)
    
    function handleClick(currentAlert){
      setSelectedAlert(currentAlert)
    }
    
    
    function handleDelete (alertObj){
      fetch(`http://localhost:3000/alerts/${alertObj.id}`, {
          method: 'DELETE',
        })
        const updatedAlerts = allAlerts.filter((alert) => alert.id !== alertObj.id);
        setAllAlerts(updatedAlerts);
    }
    
    const alertArr = allAlerts.map((alert)=> (
        <ol key={alert.id}>
            <div className="alert-container" id={alert.id}> 
               <em><h2>{alert.event}</h2></em> 
                <img src={alert.image} alt={alert.event}></img>
                <p>Info:  {alert.info}</p>
                <p>Date: {alert.date}</p>
                <p>Time:{alert.time}</p>
                <p>Location: {alert.place}</p>
                <button className="button2" onClick={() => handleAlert(alert)}>
        Send Alerts 
        </button>
        <button type="button" className="button2" onClick={() => handleClick(alert)}>
          Edit Alert
        </button>
        
        <button className="button2" onClick={() =>handleDelete(alert)} >🗑</button>
            </div>
        </ol>
    ))
       


    return (
        <div>
         {alertArr}
         <AlertUpdateForm
        alert={selectedAlert}
        onChangeForm={handleChangeForm}
        onEditAlert={handleEditAlert}
      />
        <AlertForm allAlerts={allAlerts} setAllAlerts={setAllAlerts}/>
        </div>
    )
}

export default Alert;