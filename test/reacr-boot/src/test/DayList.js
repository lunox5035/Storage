import React from 'react'
import dammy from './db/data.json'
function DayList() {
    
  return (
    <ul className='list_day'>
        {dammy.days.map(day=>(
        <li key={day.id}>Day {day.day}</li>
        ))} 
    </ul>
  )
}

export default DayList