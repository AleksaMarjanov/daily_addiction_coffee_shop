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
      fetchEvents()
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
      <div className="p-4 gap-8 sm:p-2 sm:gap-4 grid grid-flow-col grid-rows-1 sm:flex sm:flex-col items-center justify-center">
        {events.map((event, index) => (
          <div
            key={event.name + index}
            className="max-w-sm mt-5 bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700 shadow-xl" 
          >
            <a href="#">
              <Image
                src={`${urlFor(event.imgurl)}`}
                alt={event.name}
                width={400}
                height={400}
                objectFit="cover"
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {event.name}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {event.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-coffee-blue rounded-lg hover:bg-secondary-color focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  aria-hidden="true"
                  className="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(Events, "events"));
