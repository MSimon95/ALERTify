import React, { useState, useEffect } from "react"


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

                <li>{group.description}</li>
            
                </p>
        </ol>
      ))
    return (
        <div>
        {groupArr}
        </div>
    );
}

export default Group;