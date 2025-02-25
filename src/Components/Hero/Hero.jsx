import { Canvas } from "@react-three/fiber";
import "./hero.css";
import myImg from "../../assets/MyImg2.png";
import { FaFacebookSquare, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";

import { motion } from "motion/react";
import Shape from "./Shape";
import { Suspense } from "react";
import Speech from "./Speech";

const socialVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="hSection left">
        {/* TITLE */}
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="hTitle"
        >
          Hey There,
          <span> I'm Sabuj Chowdhury!</span>
        </motion.h1>
        {/* Designation & links */}
        <motion.div
          variants={socialVariants}
          initial="initial"
          animate="animate"
          className="awards"
        >
          <motion.h2 variants={socialVariants} className="text-2xl w-full">
            Junior MERN stack Developer
          </motion.h2>
          <motion.p variants={socialVariants}>Social links</motion.p>
          <motion.div variants={socialVariants} className="awardList">
            <motion.a
              variants={socialVariants}
              href="https://github.com/Sabuj-Chowdhury"
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a
              variants={socialVariants}
              href="https://www.linkedin.com/in/sabuj-chowdhury/"
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a
              variants={socialVariants}
              href="https://www.facebook.com/sc2706r/"
            >
              <FaFacebookSquare size={24} />
            </motion.a>
          </motion.div>
        </motion.div>
        {/* SCROLL SVG */}
        <motion.a
          animate={{ y: [0, 5], opacity: [0, 1, 0] }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
          href="#services"
          className="scroll"
        >
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
              stroke="white"
              strokeWidth="1"
            />
            <motion.path
              animate={{ y: [0, 5] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              d="M12 5V8"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </motion.a>
      </div>
      <div className="hSection right">
        {/* BUBBLE */}
        <Speech />

        {/* CONTACT BUTTON */}
        <motion.AnchorLink
          href=""
          className="contactLink"
          animate={{
            x: [200, 0],
            opacity: [0, 1],
          }}
          transition={{
            duration: 2,
          }}
        >
          <button>
            <motion.div
              className="contactButton"
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <svg viewBox="0 0 200 200" width="150" height="150">
                <circle cx="100" cy="100" r="90" fill="pink" />
                <path
                  id="innerCirclePath"
                  fill="none"
                  d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                />
                <text className="circleText">
                  <textPath href="#innerCirclePath">Hire Now •</textPath>
                </text>
                <text className="circleText">
                  <textPath href="#innerCirclePath" startOffset="44%">
                    Contact Me •
                  </textPath>
                </text>
              </svg>
              <div className="arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="50"
                  height="50"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                >
                  <line x1="6" y1="18" x2="18" y2="6" />
                  <polyline points="9 6 18 6 18 15" />
                </svg>
              </div>
            </motion.div>
          </button>
        </motion.AnchorLink>
      </div>
      {/* 3d canvas */}
      <div className="bg">
        {/* 3d */}
        <Canvas>
          <Suspense fallback="loading...">
            <Shape />
          </Suspense>
        </Canvas>
        {/* my image */}
        <div className="hImg">
          <img src={myImg} alt="my Image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
