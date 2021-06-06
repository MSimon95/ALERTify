import React, { useState } from "react";

function Profile({}) {
    const [profileForm, setProfileForm]= useState({username: "", password_digest: "", bio: "", image: ""})
 
    function updateProfileForm(event){
        const updatedProfileFormState= {...profileForm}
        updatedProfileFormState[event.target.name]=event.target.value
        setProfileForm(updatedProfileFormState)
    }

  function handleSubmit(e){

    e.preventDefault()
    console.log(profileForm)
    fetch(`http://localhost:3000/users`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(profileForm)
    })
    .then(response  => response.json())
      .then(newProfileData => 
      {
        const newUsers = [...allUsers, newProfileData]
        setAllAlerts(newUsers) 
    })
    }


  return (
    <form className="new-profile-form" onSubmit={handleSubmit}>
      <input className="input" placeholder="event" 
            name="event" 
            value={profileForm.event}    
            onChange={updateProfileForm} />
      <input className="input" placeholder="image" 
            name= "image" 
            value={profileForm.image} 
            onChange={updateProfileForm} />
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
      <input className="profile-button" type="submit" 
            value="Make This profile" />
    </form>
  );
}

export default Profile;