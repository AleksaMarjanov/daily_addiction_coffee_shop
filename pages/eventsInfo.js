import React, {useState, useEffect} from 'react'
import { client, urlFor } from '../src/client'


const eventsInfo = () => {
    const [event, setEvent] = useState([]);

    useEffect(() => {
      const query = '*[_type == "events" ]';
  
      client.fetch(query).then((data) => {
        setEvent(data);
        console.log({data})
      });
    }, []) 
   
    
    return (
      <main className='flex flex-col items-center justify-center font-poppins'>
      {event?.map((item) => {
            <div key={item._id}>
          <h1 className='text-4xl minms:text-2xl'>{item.name}</h1>
          <p>Hello</p>
            </div>
      })}
      </main>
      )
}

export default eventsInfo