import React from 'react'


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
                <img src={group.image} alt={group.event}></img>
                {group.event}
                <li>{group.info}</li>
                <li>{group.date}</li>
                <li>{group.time}</li>
                <li>{group.place}</li>
                </p>
        </ol>

    return (
        <div>
        {groupArr}
        </div>
    );
}

export default Group;