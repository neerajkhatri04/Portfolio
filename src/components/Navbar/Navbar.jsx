import React from 'react'
import {HiX, HiOutlineMenu} from "react-icons/hi";
import { useState } from "react";
import { motion } from "framer-motion"

import { images } from "../../constants"
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo}/>
      </div>
      <ul className='app__navbar-links'>
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className='app__flex p-text' key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
            <div />
          </li>
        ))}
      </ul>
      

      <div className='app__navbar-menu'>
        <HiOutlineMenu onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ y: [0, 32,-1,15, -1] }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
            {["home", "about", "work", "skills", "contact"].map((item) => (
              <li key={item}>
                <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
              </li>
            ))}
            </ul>
          </motion.div>
        )}
      </div>

    </nav>
  )
}

export default Navbar