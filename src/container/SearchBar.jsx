import { useState, useEffect } from 'react';
import Image from 'next/image';

import images from '../assets'

const SearchBar = ({ activeSelect, setActiveSelect, handleSearch, clearSearch }) => {
  const [search, setSearch] = useState('');
  const [toggle, setToggle] = useState(false);
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  useEffect(() => {
    const timer = setTimeout(() => setSearch(debouncedSearch), 1000);

    return () => clearTimeout(timer);
  }, [debouncedSearch]);

  useEffect(() => {
    if (search) {
      handleSearch(search);
    } else {
      clearSearch();
    }
  }, [search]);

  return (
    <>
      <div className="flex-1 flexCenter bg-white border border-coffee-gray-2 py-3 px-4 rounded-md">
        <Image
          src={images.search}
          objectFit="contain"
          width={20}
          height={20}
          alt="search"
        />
        <input
          type="text"
          placeholder="Search item here"
          className=" bg-white mx-4 w-full font-poppins text-coffee-black-1 font-normal text-xs outline-none"
          onChange={(e) => setDebouncedSearch(e.target.value)}
          value={debouncedSearch}
        />
      </div>

      <div
        onClick={() => setToggle(!toggle)}
        className="relative flexBetween ml-4 sm:ml-0 sm:mt-2 min-w-190 cursor-pointer bg-white border border-coffee-gray-2 py-3 px-4 rounded-md"
      >
        <p className="font-poppins text-coffee-black-1 font-normal text-xs">{activeSelect}</p>
        <Image
          src={images.arrow}
          objectFit="contain"
          width={15}
          height={15}
          alt="arrow"
        />

        {toggle && (
          <div className="absolute top-full left-0 right-0 w-full mt-3 z-10 bg-white border border-coffee-gray-2 py-3 px-4 rounded-md">
            {['Recently added', 'Oldest to newest', 'Newest to oldest'].map((item) => (
              <p
                className="font-poppins dark:text-white text-nft-black-1 font-normal text-xs my-3 cursor-pointer"
                onClick={() => setActiveSelect(item)}
                key={item}
              >
                {item}
              </p>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchBar;