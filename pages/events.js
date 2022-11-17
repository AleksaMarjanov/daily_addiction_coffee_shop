import React, { useState, useEffect } from "react";
import AppWrap from "../src/wrapper/AppWrap";
import MotionWrap from "../src/wrapper/MotionWrap";
import { motion } from "framer-motion";

import { client, urlFor } from "../src/client";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/router";


const SearchBar = dynamic(() => import("../src/container/SearchBar"), {
  ssr: false,
});

const Events = () => {
  const [events, setEvents] = useState([]);
  const [eventsCopy, setEventsCopy] = useState([]);
  const [activeSelect, setActiveSelect] = useState(false);
  const router = useRouter()

  const fetchEvents = () => {
    const query = '*[_type == "events" ]';

    client.fetch(query).then((data) => {
      setEvents(data);
      console.log({data})
    });
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const onHandleSearch = (value) => {
    const filteredEvents = events.filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredEvents.length) {
      setEvents(filteredEvents);
    } else {
      setEvents(eventsCopy);
    }
  };

  const onClearSearch = () => {
    if (events.length && eventsCopy.length) {
      setEvents(eventsCopy);
    } else {
      fetchEvents();
    }
  };

  const redirectToDetails = () => {
    router.push(`/eventsInfo/${events._id}`);
  };
  console.log('get event id:',{events})

  return (
    <div className="font-poppins">
      <div className="flex justify-center items-center mx-4 xs:mx-0 sm:mx-4 minlg:mx-8 sm:flex-col sm:items-start">
        <div className="sm:w-full flex items-center justify-center flex-row sm:flex-col">
          <SearchBar
            activeSelect={activeSelect}
            setActiveSelect={setActiveSelect}
            handleSearch={onHandleSearch}
            clearSearch={onClearSearch}
          />
        </div>
      </div>
      <div>
        <section className="max-w-7xl px-8 py-10">
          <h1 className="text-4xl font-extrabold text-center text-gray-900">
            Latest Events
          </h1>
          <div className="my-10 grid gap-6 lg:grid-cols-3 xl:flex xl:flex-row sm:flex sm:flex-col">
            {events.map((event, index) => (
              <div key={event.name + index}>
                <div className="bg-white flex flex-col items-center justify-center max-w-sm rounded-xl shadow-2xl overflow-hidden">
                  <Image
                    src={`${urlFor(event.imgurl)}`}
                    width={400}
                    height={400}
                    objectFit="cover"
                    className="w-full h-56 object-cover object-center"
                    alt={event.name}
                  />
                  <div className="p-6">
                    <h2 className="text-2xl font-bold line-clamp-1 text-gray-900">
                      {event.name}
                    </h2>
                    <p className="mt-3 text-gray-700 line-clamp-3">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(Events, "events"));
