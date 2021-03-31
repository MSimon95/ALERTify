import React, { useState, useEffect } from "react"
import AlertForm from './AlertForm'
import AlertUpdateForm from './AlertUpdateForm'

function Alert(){

    const [allAlerts, setAllAlerts] = useState([]);
    const [selectedAlert, setSelectedAlert] = useState(null);
    const API_AllAlerts = "http://localhost:3000/alerts"

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

    const phone = 9174285006
    function handleAlert(alertClicked) {
        console.log(alertClicked.info)
        fetch(`https://twilio-sms.p.rapidapi.com/2010-04-01/Accounts/a/Messages.json?from=%2B1(904)748-2853&body=Event:${alertClicked.event}
        Info:${alertClicked.info}
        Time:${alertClicked.time}        
        Place:${alertClicked.place}&to=${phone}&statusCallback=11377&mediaUrl=${alertClicked.image}`, {
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

    function handleClick(currentAlert){
        setSelectedAlert(currentAlert)
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
                <button className="button1" onClick={() => handleAlert(alert)}>
        Alerts 
        </button>
        <button type="button" className="btn btn-primary" onClick={() => handleClick(alert)}>
          Edit Alert
        </button>
        <button className="button-2" onClick={() =>handleDelete(alert)} >🗑</button>
            </p>
        </ol>
    ))
       
    console.log(selectedAlert)

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