import React, { useState, useEffect } from "react"
import Profile from './Profile'
import Alert from './Alert'

function User(){
    const [users, setUsers] = useState([]);
    const API_Users = "http://localhost:3000/users"
    const [selectedUser, setSelectedUser] = useState("");

    useEffect(()=>{
        fetch(API_Users)
          .then((res) => res.json())
          .then((data) => setUsers(data))
      }, [])

      function handleClick(currentUser){
        setSelectedUser(currentUser)
    }

      function handleDelete (userObj){
        fetch(`http://localhost:3000/users/${userObj.id}`, {
            method: 'DELETE'
              })
        const updatedUsers = users.filter((user) => user.id !== userObj.id);
        setUsers(updatedUsers);
    }

      const userArr = users.map((user)=> ( 
        <ol key={user.id}>
            <p className="user-container" id={user.id}>
                <img src={user.image} alt={user.username}></img>
                <h1>{user.username}</h1>
                <p>{user.bio}</p>  
                <em>{user.phone}</em>        
        <button type="button" className="btn-primary" onClick={() => handleClick(user)}>
          Choose Recepient
        </button>
        <button className="button-2" onClick={() =>handleDelete(user)} >🗑</button>
            </p>
        </ol>
      ))  

    return (
        <div>
            {userArr}
            <Profile users={users} setUsers={setUsers} selectedUser={selectedUser}/>
            {/* <Alert selectedUser={selectedUser} setSelectedUser={setSelectedUser} /> */}
        </div>
    );
}

export default User;