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
      
      const groupArr = groups.map((group)=> (
        <ol key={group.id}>
            <p className="group-container" id={group.id}>
                <h2>{group.description}</h2>
                <p>{group.user.username}</p>
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