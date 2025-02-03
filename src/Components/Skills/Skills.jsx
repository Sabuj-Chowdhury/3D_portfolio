import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import {
  SiMongodb,
  SiJavascript,
  SiExpress,
  SiFirebase,
  SiC,
  SiCplusplus,
  SiMysql,
} from "react-icons/si";

const Skills = () => {
  return (
    <section className="place-content-center flex flex-col gap-6 ">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-white ">
        Skills & Technologies
      </h2>

      {/* Core Skills */}
      <div className="flex flex-col gap-4 ">
        <h3 className="text-2xl font-semibold text-center text-gray-300 mb-8">
          Core Skills
        </h3>
        <div className="grid grid-cols-3  md:grid-cols-4 gap-5 items-center justify-items-center">
          <div className="flex flex-col items-center gap-2 transition-all hover:scale-110 hover:text-amber-400">
            <FaHtml5 size={40} className="text-orange-500" />
            <span className="text-gray-300 text-lg">HTML5</span>
          </div>
          <div className="flex flex-col items-center gap-2 transition-all hover:scale-110 hover:text-amber-400">
            <FaCss3Alt size={40} className="text-blue-500" />
            <span className="text-gray-300 text-lg">CSS3</span>
          </div>
          <div className="flex flex-col items-center gap-2 transition-all hover:scale-110 hover:text-amber-400">
            <SiJavascript size={40} className="text-yellow-400" />
            <span className="text-gray-300 text-lg">JavaScript</span>
          </div>
          <div className="flex flex-col items-center gap-2 transition-all hover:scale-110 hover:text-amber-400">
            <FaReact size={40} className="text-blue-300" />
            <span className="text-gray-300 text-lg">React</span>
          </div>
          <div className="flex flex-col items-center gap-2 transition-all hover:scale-110 hover:text-amber-400">
            <FaNodeJs size={40} className="text-green-500" />
            <span className="text-gray-300 text-lg">Node.js</span>
          </div>
          <div className="flex flex-col items-center gap-2 transition-all hover:scale-110 hover:text-amber-400">
            <SiExpress size={40} className="text-gray-400" />
            <span className="text-gray-300 text-lg">Express</span>
          </div>
          <div className="flex flex-col items-center gap-2 transition-all hover:scale-110 hover:text-amber-400">
            <SiMongodb size={40} className="text-green-600" />
            <span className="text-gray-300 text-lg">MongoDB</span>
          </div>
          <div className="flex flex-col items-center gap-2 transition-all hover:scale-110 hover:text-amber-400">
            <SiFirebase size={40} className="text-yellow-500" />
            <span className="text-gray-300 text-lg">Firebase</span>
          </div>
        </div>
      </div>

      {/* Familiar Technologies */}
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-semibold text-center text-gray-300 mb-8">
          Familiar With
        </h3>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-5 items-center justify-items-center">
          <div className="flex flex-col items-center gap-2 transition-all hover:scale-110 hover:text-amber-400">
            <FaJava size={40} className="text-orange-600" />
            <span className="text-gray-300 text-lg">Java</span>
          </div>
          <div className="flex flex-col items-center gap-2 transition-all hover:scale-110 hover:text-amber-400">
            <SiC size={40} className="text-blue-500" />
            <span className="text-gray-300 text-lg">C</span>
          </div>
          <div className="flex flex-col items-center gap-2 transition-all hover:scale-110 hover:text-amber-400">
            <SiCplusplus size={40} className="text-blue-400" />
            <span className="text-gray-300 text-lg">C++</span>
          </div>
          <div className="flex flex-col items-center gap-2 transition-all hover:scale-110 hover:text-amber-400">
            <SiMysql size={40} className="text-blue-600" />
            <span className="text-gray-300 text-lg">SQL</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
