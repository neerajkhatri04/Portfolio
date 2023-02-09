import React from 'react'
import {motion} from "framer-motion";
import {AppWrap} from "../../wrapper"
import {images} from "../../constants"
import "./Header.scss"

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut"
    }
  }
}

const Header = () => {
  return (
    <div className='app__header app__flex' id="app">
      <motion.div
      whileInView={{x: [-100, 0], opacity: [0, 1]}}
      transition={{duration: 1.5}}
      className="app__header-info"
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            
            <div className='myName' style={{marginLeft: 20}}>
              <p className='p-text'><img src="https://www.enji.dev/_next/image?url=%2Fassets%2Femojis%2Flove-you-gesture.png&w=48&q=75" alt='hi-emoji'/> hi!!</p>
              <h1 className='head-text'>I'm <span style={{color:"#8b56f6"}}>Neeraj</span> Khatri<span>,</span></h1>
            </div>
          </div>
          <div className='tag-cmp app__flex'>
          <p className='p-text'>a <span>Web Developer</span> and </p>
          <p className='p-text'><span>Programmer</span></p>

          </div>
        </div>
      </motion.div>
      
      <motion.div
        whileInView={{opacity: [0, 1]}}
        transition={{duration: 1, delayChildren: 1}}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile-img"/>
        <motion.img
            whileInView={{scale: [0, 1]}}
            transition={{duration: 1, ease: "easeInOut"}}
            className="overlay_circle"
            src={images.neoncircle}
            alt="profile-circle"
        />

      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.planet2, images.planet1].map((circle, index)=>(
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt={circle} />
          </div>
        )
        )}

      </motion.div>
    </div>
  )
}

export default AppWrap(Header, "home" )