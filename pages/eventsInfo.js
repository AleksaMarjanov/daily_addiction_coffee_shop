import React, {useState, useEffect} from 'react'
import { client, urlFor } from '../src/client'


const eventsInfo = () => {
    const [event, setEvent] = useState([]);

    useEffect(() => {
      const query = '*[_type == "events" ]';
  
      client.fetch(query).then((data) => {
        setEvents(data);
      });
    }) 
   
    
    return (
      <main className='flex flex-col items-center justify-center font-poppins'>
          <h1 className='text-4xl minms:text-2xl'>{event.name}</h1>
      </main>
      )
}

export default eventsInfo