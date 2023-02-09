import "react-tooltip/dist/react-tooltip.css";
import React, {useState, useEffect} from 'react';
import {motion} from "framer-motion";
import { Tooltip as ReactTooltip } from 'react-tooltip'
import {AppWrap, MotionWrap} from "../../wrapper";
import {urlFor, client} from "../../client"

import "./Skills.scss"

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = "*[_type == 'experiences']";
    const skillsQuery = "*[_type == 'skills']";
  
    client.fetch(query)
    .then((data) =>{
      setExperiences(data);
    })

    client.fetch(skillsQuery)
    .then((data) =>{
      setSkills(data);
    })
    }, [])


  return (
    <div>
      <h2 className='head-text'>Skills & Experience</h2>

      <div className='app__skills-container'>
        <motion.div
          className='app__skills-list'
        >
          {skills?.map((skill) => (
            <motion.div
              whileInView={{opacity: [0, 1]}}
              transition={{duration: 0.5}}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div className='app__flex' style={{backgroundColor: skill.bgColor}}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className='app__skills-exp'>
            {experiences.map((experiences) => (
              <motion.div
                className='app__skills-exp-item'
                key={experiences.year}
              >
                <div className='app__skills-exp-year'>
                  <p className='bold-text'>{experiences.year}</p>
                </div>

                <motion.div className='app__skills-exp-works'>
                  {experiences.works.map((work)=>(
                    <>
                <motion.div
                  
                  whileInView={{opacity: [0, 1]}}
                  transition={{duration: 0.5}}
                  className="app__skills-exp-work"
                  data-tip
                  data-for={work.name}
                  key={work.name}
                >
                  <h4 className='bold-text' id={work.name}>{work.name}</h4>
                  <p className='p-text' id={work.name}> </p>
                </motion.div>
                
                <ReactTooltip
                    anchorId={work.name}
                    followCursor
                    place="top"
                    effect="solid"
                    arrowColor="#fff"
                    content={work.desc}
                    className="skills-tooltip"
                    
                />

              </>

                  ))}
                </motion.div>

              </motion.div>


              
            ))}
        </motion.div>
      </div>
    </div>
  )
}

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
   "skills",
   "app__bluebg" );