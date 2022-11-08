import { useState, useEffect } from 'react';
import Image from 'next/image';

import { images } from '../constants'

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

  console.log(images.arrow)

  return (
    <>
      <div className="flex items-center justify-center bg-white border sm:ml-10 sm:mr-10 lg:ml-24 lg:mr-24 border-coffee-gray-2 py-3 px-4 sm:py-1 sm:px-2  rounded-md">
        {images.search && (
        <Image
          src={images.search}
          objectFit="cover"
          width={20}
          height={20}
          alt="search"
        />
        )}
        <input
          type="text"
          placeholder="Search item here"
          className=" bg-white mx-4 flex items-center justify-center w-full  font-poppins text-coffee-black-1 font-normal text-xs outline-none"
          onChange={(e) => setDebouncedSearch(e.target.value)}
          value={debouncedSearch}
        />
      </div>
    </>
  );
};

export default SearchBar;