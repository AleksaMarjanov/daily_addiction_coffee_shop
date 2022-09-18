import React, { useState, useEffect } from "react";
import AppWrap from "../src/wrapper/AppWrap";
import MotionWrap from "../src/wrapper/MotionWrap";
import { motion } from "framer-motion";

import { client, urlFor } from "../src/client";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import isWindows from "cross-env/src/is-windows";

const SearchBar = dynamic(() => import("../src/container/SearchBar"), {
  ssr: false,
});

const Events = () => {
  const [events, setEvents] = useState([]);
  const [eventsCopy, setEventsCopy] = useState([]);
  const [activeSelect, setActiveSelect] = useState(false);

  const fetchEvents = () => {
    const query = '*[_type == "events" ]';

    client.fetch(query).then((data) => {
      setEvents(data);
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

  useEffect(() => {
    const sortedEvents = [...events];

    switch (activeSelect) {
      case "Oldest to newest":
        setEvents(sortedEvents.sort((a, b) => a.price - b.price));
        break;
      case "Newest to oldest":
        setEvents(sortedEvents.sort((a, b) => b.price - a.price));
        break;
      case "Recently added":
        setEvents(sortedEvents.sort((a, b) => b.tokenId - a.tokenId));
        break;
      default:
        setEvents(events);
        break;
    }
  }, [activeSelect]);

  return (
    <div className="font-poppins">
      <div className="flexBetween mx-4 xs:mx-0 minlg:mx-8 sm:flex-col sm:items-start">
        <div className="flex-2 sm:w-full flex flex-row sm:flex-col">
          <SearchBar
            activeSelect={activeSelect}
            setActiveSelect={setActiveSelect}
            handleSearch={onHandleSearch}
            clearSearch={onClearSearch}
          />
        </div>
      </div>
      <div >
  <section class="max-w-7xl px-8 py-10">
    <h1 class="text-4xl font-extrabold text-center text-gray-900">Latest Events</h1>
    <div class="my-10 grid gap-6 lg:grid-cols-3 md:flex-col md:flex">
      {events.map((event,index) => (
      <div key={event.name + index}>
        <div class="bg-white rounded-xl shadow-2xl overflow-hidden">
          <Image
          src={`${urlFor(event.imgurl)}`}
          width={400}
          height={400}
          objectFit="cover"
          className="w-full h-56 object-cover object-center"
          />
          <div class="p-6">
            <h2 class="text-2xl font-bold line-clamp-1 text-gray-900">{event.name}</h2>
            <p class="mt-3 text-gray-700 line-clamp-3">{event.description}</p>
            <a class="mt-4 inline-block px-4 py-1.5 bg-blue-300 rounded text-blue-900 font-semibold tracking-wide hover:bg-blue-800 hover:text-blue-100" href="#">Read more</a>
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
