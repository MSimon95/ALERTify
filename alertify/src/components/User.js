import React, { useState, useEffect } from "react"
import Profile from './Profile'
import App from './App'

function User(){
    const [users, setUsers] = useState([]);
    const API_Users = "http://localhost:3000/users"
    const [selectedUser, setSelectedUser] = useState(9174285006);

    useEffect(()=>{
        fetch(API_Users)
          .then((res) => res.json())
          .then((data) => setUsers(data))
      }, [])

      function handleClick(currentUser){
        const updatePhone= currentUser.phone
        setSelectedUser(updatePhone)
        console.log(selectedUser)
    }

      function handleDelete (userObj){
        fetch(`http://localhost:3000/users/${userObj.id}`, {
            method: 'DELETE'
              })
              .then(res => res.text())
              .then(res => console.log(res))
        const updatedUsers = users.filter((user) => user.id !== userObj.id);
        setUsers(updatedUsers);
    }
    
      const userArr = users.map((user)=> ( 
        <ol key={user.id}>
            <ul className="user-container" id={user.id}>
                <img src={user.image} alt={user.username}></img>
                <h1>{user.username}</h1>
                <p>{user.bio}</p>  
        <button type="button" className="btn-primary" onClick={() => handleClick(user)}>
          Choose Recepient
        </button>
        <button className="button-2" onClick={() =>handleDelete(user)} >🗑</button>
            </ul>
        </ol> 
      ))  
      return (
  
        <div>
            {userArr}
            <Profile users={users} setUsers={setUsers} />
            <App selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
        </div>
    );
}

export default User;