import React, {useState, useEffect} from 'react'
import { client, urlFor } from '../src/client'


const eventsInfo = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
      const query = '*[_type == "events" ]';
  
      client.fetch(query).then((data) => {
        setEvents(data);
        console.log({data})
      });
    }, []) 
   
    
    return (
      <main className='flex flex-col items-center justify-center font-poppins'>
      {events?.map((event) => {
            <div key={event._id}>
          <h1 className='text-4xl minms:text-2xl'>{event.name}</h1>
          <p>Hello</p>
            </div>
      })}
      </main>
      )
}

export default eventsInfo