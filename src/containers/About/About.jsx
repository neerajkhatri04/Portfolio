import React, {useState, useEffect} from 'react'
import {motion} from "framer-motion"

import { AppWrap, MotionWrap } from '../../wrapper';

import {FaQuoteLeft} from "react-icons/fa"
import "./About.scss";
import { urlFor, client } from '../../client';



const About = () => {

  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = "*[_type == 'abouts']";

    client.fetch(query)
    .then((data) => setAbouts(data))

  }, [])
  

  return (
    <div id="app-about" className='home'>
      <h2 className='head-text quote'> <FaQuoteLeft className='quotation' /> <span>Silence</span> <em>is not empty, <br/> it is the</em> <span>loudest</span> <em>answer.</em></h2>
      <div className='app__profiles'>
          {abouts.map((about, index)=>(
            <motion.div
              whileInView={{opacity:1}}
              whileHover={{scale:1.1}}
              transition={{duration: 0.5, type: "tween"}}
              className="app__profile-item"
              key={about.title + index}
            >
              <img src={urlFor(about.imgUrl)} alt={about.title}/>
              <h2 className='bold-text' style={{marginTop: 20}}>{about.title}</h2>
              <h2 className='p-text' style={{marginTop: 10}}>{about.description}</h2>

            </motion.div>
          ))}
      </div>
    </div>
  )
}

export default AppWrap(
  MotionWrap(About, "app__about"),
   "about",
   "app__bluebg" );