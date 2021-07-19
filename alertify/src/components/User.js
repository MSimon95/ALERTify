import React, { useState, useEffect } from "react"
import Profile from './Profile'

function User(){
    const [users, setUsers] = useState([]);
    const API_Users = "http://localhost:3000/users"
    const [selectedUser, setSelectedUser] = useState(null);

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
                <p>{user.phone}</p>              
        <button type="button" className="btn btn-primary" onClick={() => handleClick(user)}>
          click This
        </button>
        <button className="button-2" onClick={() =>handleDelete(user)} >🗑</button>
            </p>
        </ol>
      ))  

    return (
        <div>
            {userArr}
            <Profile users={users} setUsers={setUsers} selectedUser={selectedUser}/>
        </div>
    );
}

export default User;