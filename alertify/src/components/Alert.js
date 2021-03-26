import React, { useState, useEffect } from "react"
import AlertForm from './AlertForm'

function Alert(){

    const [allAlerts, setAllAlerts] = useState([])

    const API_AllAlerts = "http://localhost:3000/alerts"

    useEffect(()=>{
      fetch(API_AllAlerts)
        .then((res) => res.json())
        .then((data) => setAllAlerts(data))
    }, [])

    
    function handleAlert() {
        
        fetch("https://twilio-sms.p.rapidapi.com/2010-04-01/Accounts/a/Messages.json?from=%2B19047482853&body=HI%20just%20Testing%20MyAPP&to=9174285006&statusCallback=11377", {
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


    function handleDelete (alertObj){
        fetch(`http://localhost:3000/alerts/${alertObj.id}`, {
            method: 'DELETE'
              })
        const updatedAlerts = allAlerts.filter((alert) => alert.id !== alertObj.id);
        setAllAlerts(updatedAlerts);
    }

    
    const alertArr = allAlerts.map((alert)=> (
        <ol key={alert.id}>
            <p className="alert-container" id={alert.id}>
                <img src={alert.image} alt={alert.event}></img>
                {alert.event}
                <li>{alert.info}</li>
                <li>{alert.time}</li>
                <li>{alert.place}</li>
                <button className="button1" onClick={handleAlert}>
        Alerts 
        </button>
        <button className="button-2" onClick={() =>handleDelete(alert)} >🗑</button>
            </p>
        </ol>
    ))
       

    return (
        <div>
       
         {alertArr}
        
        <AlertForm allAlerts={allAlerts} setAllAlerts={setAllAlerts}/>
        </div>
    )
}

export default Alert;