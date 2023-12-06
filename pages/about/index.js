// icons
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma } from "react-icons/fa";
import ParticlesContainer from "../../components/ParticlesContainer";
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { useState } from "react";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Webby Awards - Honoree",
        stage: "2011 - 2012",
      },
      {
        title: "Adobe Design Achievement Awards - Finalist",
        stage: "2009 - 2010",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "UX/UI Designer - XYZ Company",
        stage: "2012 - 2023",
      },
      {
        title: "Web Developer - ABC Agency",
        stage: "2010 - 2012",
      },
      {
        title: "Intern - DEF Corporation",
        stage: "2008 - 2010",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development - ABC University, LA, CA",
        stage: "2011",
      },
      {
        title: "Computer Science Diploma - AV Technical Institute",
        stage: "2009",
      },
      {
        title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
        stage: "2006",
      },
    ],
  },
];

const About = () => {
  const [index, setindex] = useState(0);
 
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <ParticlesContainer />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex flex-1 flex-col justify-center ">
          <motion.h2 
           variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
          className="h2">
            Captivating <span className="text-accent">Stories</span> birth
            magnificent designs.
          </motion.h2>
          <motion.p 
           variants={fadeIn("right", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
          className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 ">
            10 years agr , I began freelancing as a developer ,Since then , I've
            done remote work for agencies , counsulted for startup, and
            collaborted on digital products for busniess and consumer use{" "}
          </motion.p>
          <motion.div  variants={fadeIn("right", 0.6)}
        initial="hidden"
        animate="show"
        exit="hidden" className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
          <div className="flex flex-1  xl:gap-x-6">
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
              <CountUp start={0} end={2} duration={12}/> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]  ">
                Years of experience
              </div>
            </div>
         
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
              <CountUp start={0} end={100} duration={5}/> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]  ">
                Satisfied Clients
              </div>
            </div>

            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
              <CountUp start={0} end={250} duration={5}/> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]  ">
                Finished Projects
              </div>
            </div>

            
            <div className="relative flex-1 ">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
              <CountUp start={0} end={8} duration={5}/> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]  ">
           Winning awards
              </div>
            </div>

          </div>
          </motion.div>
        </div>
        <div className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
          <motion.div   variants={fadeIn("right", 0.8)}
        initial="hidden"
        animate="show"
        exit="hidden" className="flex gap-x-4 xl:gap-x-8 mb-5 mx-auto xl:mx-0 ">
            {aboutData.map((item, itemindex) => {
              return (
                  <div key={itemindex}
                    className={`${index === itemindex && "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                    } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[3px] after:bg-white after:absolute after:-bottom-2 after:left-0`}
                    onClick={() => setindex(itemindex)}
                  >
                    {item.title}
                  </div>
              
              );
            })}
          </motion.div>
          <motion.div  variants={fadeIn("left", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden" className=" py-2 xl:py-6 flex flex-col gap-y-2 items-center xl:gap-y-4 xl:items-start">
            {aboutData[index].info.map((item, itemindex2) => {
              return (
                <>
                  <div
                    key={itemindex2}
                    className="flex flex-1 flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60  "
                  >
                    {item.title}
                  </div>
                  <div className="hidden md:flex">-</div>
                  <div className="">{item.stage}</div>
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, itemindex1) => {
                      return (
                        <>
                          <div className="text-2xl" key={itemindex1}>
                            {icon}
                          </div>
                        </>
                      );
                    })}
                  </div>
                </>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
