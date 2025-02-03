import ComputerModelContainer from "./computer/ComputerModelContainer";
import { motion } from "motion/react";
const textVariants = {
  initial: {
    x: -100,

    opacity: 0,
  },
  animate: {
    x: 0,

    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const AboutMe = () => {
  return (
    // main
    <div className="h-[100vh] grid grid-cols-1 ">
      {/* left */}
      <div className="text-center w-full  grid gap-3">
        {/* Content Section */}
        <motion.h2
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="text-4xl   grid  justify-center items-center md:text-5xl font-bold  md:text-left text-white "
        >
          About Me
        </motion.h2>
        <motion.p
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="text-lg md:text-xl font-light text-gray-300 leading-relaxed"
        >
          Hello! I'm a passionate developer currently pursuing my studies at
          <span className="text-amber-500"> Burdwan University </span> under the{" "}
          <span className="text-amber-500">ICCR Scholarship</span>. I enjoy
          creating innovative projects and diving into cutting-edge
          technologies.
        </motion.p>

        <motion.p
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="mt-4 text-lg md:text-xl font-light text-gray-300 leading-relaxed"
        >
          I'm a quick learner and love tackling challenges head-on. Coding keeps
          me busy and helps me stay focused and positive—it’s like therapy with
          syntax! I adapt quickly to new environments and enjoy the thrill of
          learning new technologies. Whether it’s mastering a new framework or
          debugging a tricky issue, I’m always up for the challenge.
        </motion.p>
      </div>
      {/* right 3d */}
      <div className="w-11/12 h-4/5 ">
        <ComputerModelContainer></ComputerModelContainer>
      </div>
    </div>
  );
};

export default AboutMe;
