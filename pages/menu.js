import React, {useState, useEffect} from 'react'
import AppWrap from '../src/wrapper/AppWrap'
import MotionWrap from '../src/wrapper/MotionWrap'
import client from '../src/client'
import { motion } from 'framer-motion'


const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1})
  const [activeFilter, setActiveFilter] = useState("All")
  const [filterMenu, setFilterMenu] = useState([]);
  
  useEffect(() => {
    const query = '*[_type == "menu"]';

    client.fetch(query)
    .then((data) => {
      setMenu(data);
    })
  }, [])

  const handleMenuFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setMenu(menu);
      } else {
        setMenu(menu.filter((menuItem) => menuItem.tags.includes(item)));
      }
    }, 500);
  };


  return (
    <div id="menu" className='font-poppins'>
      <div className='text-2xl font-semibold uppercase'>
          
      </div>
    </div>
  )
}

export default AppWrap(MotionWrap(Menu, "menu"))