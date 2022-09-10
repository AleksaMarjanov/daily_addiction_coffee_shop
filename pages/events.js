import React, {useState, useEffect} from 'react'
import AppWrap from '../src/wrapper/AppWrap'
import MotionWrap from '../src/wrapper/MotionWrap'

import { client, urlFor } from '../src/client'


const Events = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const query = '*[_type == "events" ]';

    client.fetch(query).then((data) => {
      setEvents(data);
    });
  }, []);

  return (
    <div className=''> 
      <p>Search...</p>
      <div>
        {events.map((event, index) => {
          <div class="max-w-sm rounded overflow-hidden shadow-lg" key={event.name + index}>
          <img class="w-full" src={`${urlFor(event.imgurl)}`} alt="Sunset in the mountains"/>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{event.name}</div>
            <p class="text-gray-700 text-base">
              {event.description}
            </p>
          </div>
        </div>
        })}
      </div>
    </div>
  )
}

export default AppWrap(MotionWrap(Events, "events"))