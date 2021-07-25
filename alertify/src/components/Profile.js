import React, { useState } from "react";

function Profile({users, setUsers}) {
    const [profileForm, setProfileForm]= useState({username: "", password_digest: "", phone: "", bio: "", image: ""})
 
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
        const newUsers = [...users, newProfileData]
        setUsers(newUsers) 
    })
    }


  return (
    <form className="new-profile-form" onSubmit={handleSubmit}>
      <input className="input" placeholder="Username" 
            name="username" 
            value={profileForm.username}    
            onChange={updateProfileForm} />
      <input className="input" placeholder="password" 
            name= "password_digest" 
            value={profileForm.password_digest} 
            onChange={updateProfileForm} /> 
      <input className="input" placeholder="bio" 
            name= "bio" 
            value={profileForm.bio} 
            onChange={updateProfileForm} />         
      <input className="input" placeholder="image" 
            name= "image" 
            value={profileForm.image} 
            onChange={updateProfileForm} />
      <input className="profile-button" type="submit" 
            value="Make This profile" />
    </form>
  );
}

export default Profile;