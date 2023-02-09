
import { motion, useScroll, useSpring } from "framer-motion";

import React from 'react'

const MotionWrap = (Component, classNames) => function HOC(){

  return (
    <motion.div
        
        whileInView={{y: [100, 50, 0] ,opacity: [0, 0, 1]}}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
        default: {
          duration: 1.4,
          ease: [0, 0.71, 0.2, 1.01]
        },
        scale: {
          type: "spring",
          damping: 15,
          stiffness: 50,
          restDelta: 0.007
        }
      }}
        
        
        className={`${classNames} app__flex` }

    >

    <Component />


    </motion.div>
  )
}

export default MotionWrap