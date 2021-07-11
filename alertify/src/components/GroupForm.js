import React, { useState } from "react";

function GroupForm({groups, setGroups}) {
    const [groupForm, setGroupForm]= useState({description: "", user: ""})
 
    function updateGroupForm(event){
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
    <form className="new-group-form" onSubmit={handleSubmit}>
      <input className="input" placeholder="description" 
            name="description" 
            value={groupForm.description}    
            onChange={updateGroupForm} />
      <input className="input" placeholder="user" 
            name= "user" 
            value={groupForm.user} 
            onChange={updateGroupForm} />
     <input className="alert-button" type="submit" 
            value="Make This Group" />
    </form>
  );
}


export default GroupForm;