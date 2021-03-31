import React from 'react'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'
import { Calendar } from '@fullcalendar/core'

function GroupAlert() {

    
    const handleDateClick = (dateClickInfo) => {

            console.log(dateClickInfo.dateStr);
        }
    
    const handleEventClick = (eventClickInfo) => {
        console.log(eventClickInfo.type)
    }

    return(
        <div>

            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                dateClick={handleDateClick}
                eventClick={(e) => handleEventClick(e.event.id)}
                events={[
                    { title: 'event 1', date: '2021-04-01' , time: '20:00'},
                    { title: 'event 2', date: '2021-03-31' }]}
            />
        </div>
    )
}

export default GroupAlert;