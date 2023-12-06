import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import WorkSlider from "../../components/WorkSlider";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
const Work = () => {
  return (
    <div className="bg-primary/30 items-center h-full flex py-36 ">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col mb-4 lg:text-left xl:mb-0">
            <motion.h2 
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12">
              Works <span className="text-accent">.</span>
            </motion.h2>
            <motion.p 
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-4 max-w-[400px] mx-auto  lg:mx-0">
              lorem Sit labore quis incididunt ipsum duis occaecat culpa. Quis
              reprehenderit laboris eu sint nostrud proident pariatur ex ullamco
              voluptate cillum. Ipsum in adipisicing aliquip eiusmod tempor in
              non nulla sint.
            </motion.p>
          </div>
          <motion.div 
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"className="w-full xl:max-w-[65%]">
          <WorkSlider />
          </motion.div>
          
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
