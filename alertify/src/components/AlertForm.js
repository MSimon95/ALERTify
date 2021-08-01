import React, { useState } from "react";


function AlertForm({allAlerts, setAllAlerts}) {
    const [alertForm, setAlertForm]= useState({event: "", image: "", info: "", date: "", time: "", place: ""})
 
    function updateAlertForm(event){
        const updatedFormState= {...alertForm}
        updatedFormState[event.target.name]=event.target.value

        setAlertForm(updatedFormState)
    }

  function handleSubmit(e){

    e.preventDefault()
    console.log(alertForm)
    fetch(`http://localhost:3000/alerts`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(alertForm)
    })
    .then(response  => response.json())
      .then(newAlertData => 
      {
        const newAlerts = [...allAlerts, newAlertData]
        setAllAlerts(newAlerts) 
    })
    }


  return (
    <form className="new-alert-form" onSubmit={handleSubmit}>
      <input className="input" placeholder="event" 
            name="event" 
            value={alertForm.event}    
            onChange={updateAlertForm} />
      <input className="input" placeholder="image" 
            name= "image" 
            value={alertForm.image} 
            onChange={updateAlertForm} />
      <input className="input" placeholder="info" 
            name= "info" 
            value={alertForm.info} 
            onChange={updateAlertForm} /> 
      <input className="input" placeholder="date" 
            name= "date" 
            value={alertForm.date} 
            onChange={updateAlertForm} />
      <input className="input" placeholder="time" 
            name= "time" 
            value={alertForm.time} 
            onChange={updateAlertForm} />  
      <input className="input" placeholder="place" 
            name= "place" 
            value={alertForm.place} 
            onChange={updateAlertForm} />         
      <input className="alert-button" type="submit" 
            value="Make This alert" />
    </form>
  );
}


export default AlertForm;