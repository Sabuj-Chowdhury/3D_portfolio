import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";
import myImg2 from "../../assets/Main.png";

const Speech = () => {
  return (
    <motion.div
      className="hidden md:flex gap-4 relative md:w-2/3 top-64 "
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="bubble">
        <TypeAnimation
          sequence={[
            1000,
            "Learning, building, and improving every day!",
            1000,
            "As a junior developer, I work with React, Next.js, Node.js, and MongoDB to create dynamic web apps.",
            1000,
            "Excited to collaborate and grow—let’s build something awesome together!",
            1000,
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          // omitDeletionAnimation
          repeat={Infinity}
        />
      </div>
      <div className="w-1/4">
        <img
          src={myImg2}
          alt=""
          className="w-20 h-20 rounded-full object-contain"
        />
      </div>
    </motion.div>
  );
};

export default Speech;
