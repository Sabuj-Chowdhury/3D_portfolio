// import { useState } from "react";

// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="relative w-max flex justify-between items-center gap-6">
//       <nav className="absolute top-0 p-6 border w-screen border-amber-300 flex justify-between items-center ">
//         {/* Large Screen Links */}
//         <div className="hidden md:flex items-center space-x-5">
//           <a to="/about">About</a>
//           <a to="/projects">Projects</a>
//           <a>Contact</a>
//         </div>

//         {/* Small Screen Menu Icons */}
//         <div className="flex md:hidden items-center">
//           <button onClick={toggleMenu} className="text-3xl text-amber-400">
//             {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
//           </button>
//         </div>
//         {/* Collapsible Menu for Small Screens */}
//         {isOpen && (
//           <div className="md:hidden bg-black text-gray-300">
//             <div className="flex flex-col items-center py-4 space-y-4">
//               <a to="/about" onClick={toggleMenu}>
//                 About
//               </a>
//               <a to="/projects" onClick={toggleMenu}>
//                 Projects
//               </a>
//               <a to="/contact" onClick={toggleMenu}>
//                 Contact
//               </a>
//             </div>
//           </div>
//         )}
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
