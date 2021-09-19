import React, { useState, useEffect } from "react"
import GroupForm from './GroupForm'

function Group(){
    const [groups, setGroups] = useState([]);

    const API_GROUP = "http://localhost:3000/groups"

    useEffect(()=>{
        fetch(API_GROUP)
          .then((res) => res.json())
          .then((data) => setGroups(data))
      }, [])
      function handleDelete (groupObj){
        fetch(`http://localhost:3000/users/${groupObj.id}`, {
            method: 'DELETE'
              })
              .then(res => res.text())
              .then(res => console.log(res))
        const updatedUsers = users.filter((user) => user.id !== userObj.id);
        setUsers(updatedUsers);
    }
      
      const groupArr = groups.map((group)=> (
        <ol key={group.id}>
            <p className="group-container" id={group.id}>
                <h2>{group.description}</h2>
                <h3>{group.user.username}</h3>
                <button className="button-2" onClick={() =>handleDelete()} >🗑</button>
                <br></br>   
                </p>
        </ol>
      ))
    return (
        <div>
        {groupArr}

        <GroupForm groups={groups} setGroups={setGroups}/>
        </div>
    );
}

export default Group;