import React, { useState, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'
import { Calendar } from '@fullcalendar/core'

function GroupAlert() {
    const [groupEvents, setGroupEvents] = useState([])
    
    const API_Alerts = 'http://localhost:3000/alerts'


    useEffect(()=>{
        fetch(API_Alerts)
          .then((res) => res.json())
          .then((data) => setGroupEvents(data))
      }, [])



    const handleDateClick = (dateClickInfo) => {

            console.log(dateClickInfo);
        }
    
    const handleEventClick = (eventClickInfo) => {
  
        console.log(eventClickInfo)
    }

    
    const groupArr = groupEvents.map((event)=> {
        return {
            id: event.id,
            title: event.event,
            date: event.date
        }
        
    })

        
    


    return (
        <div>

            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                dateClick={handleDateClick}
                eventClick={handleEventClick}
                events={groupArr}
            />
        </div>
    )
}

export default GroupAlert;