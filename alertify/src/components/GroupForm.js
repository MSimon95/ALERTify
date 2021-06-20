import React, { useState } from "react";
import App from './App';
import Group from './Group'

function GroupForm({groups, setGroups}) {
    const [groupForm, setGroupForm]= useState({description: "", user: ""})
 
    function updateAlertForm(event){
        const updatedFormState= {...groupForm}
        updatedFormState[event.target.name]=event.target.value
        setGroupForm(updatedFormState)
    }

  function handleSubmit(e){

    e.preventDefault()
    fetch(`http://localhost:3000/groups`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(groupForm)
    })
    .then(response  => response.json())
      .then(newGroupData => 
      {
        const newGroups = [...groups, newGroupData]
        setGroups(newGroups) 
    })
    }


  return (
   
  );
}


export default GroupForm;