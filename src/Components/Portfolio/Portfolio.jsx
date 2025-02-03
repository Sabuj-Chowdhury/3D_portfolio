import { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import { motion, useInView, useScroll, useTransform } from "motion/react";

const items = [
  {
    id: 1,
    img: "https://i.ibb.co/M9bqHyx/Screenshot-2025-01-05-at-09-08-31.png",
    title: "CarCloud",
    desc: "This Car Rental System allows users to:\n\nAdd, update, delete, and manage cars listed for rental.\nSearch, sort, and book cars based on availability and preferences.\nView bookings with detailed summaries and modify or cancel reservations.\nThe platform offers secure authentication, responsive design, and robust backend functionalities to enhance the car rental experience.\n\n",
    link: "https://carcloud-7bc2a.web.app/",
    gitHubRepo:
      "https://github.com/Sabuj-Chowdhury/CarCloud-client?tab=readme-ov-file#project-overview",
  },
  {
    id: 2,
    img: "https://i.ibb.co/vJTstnr/Home.png",
    title: "CampFlow",
    desc: "CampFlow is a MERN stack app for managing medical camps, offering camp registration, payments, analytics, and feedback. Organizers can add, manage, and track camps, while participants can register, pay via Stripe, and submit reviews. Secure authentication with JWT & social login ensures data protection. Future improvements include better analytics, email verification, and enhanced search",
    link: "https://campflow-8fc76.web.app/",
    gitHubRepo: "https://github.com/Sabuj-Chowdhury/CampFlow_Client",
  },
  {
    id: 3,
    img: "https://i.ibb.co/GFxd6zd/Screenshot-2025-01-05-at-10-10-18.png",
    title: "Chill Gamer",
    desc: "User Watchlist: Save your favorite games to a personalized watchlist and track your gaming journey easily.\n⭐ Ratings & Reviews: View and rate the most iconic and top-rated games from multiple reviews shared by other gamers.\n🔎 Search & Discover: Explore reviews by game title, genre, or other filtering options.\n🏆 Top-Rated Games Section: Discover the most highly rated games based on user feedback.\n📆 Real-Time Updates: Experience seamless data updates for your watchlist and user preferences.",
    challenges: "mongoDB conection, error , real time update",
    link: "https://chill-gamer-f8131.firebaseapp.com/",
    gitHubRepo: "https://github.com/Sabuj-Chowdhury/chill-gamer-mongoDB",
  },
  {
    id: 4,
    img: "https://i.ibb.co/Gxgd8zP/Screenshot-2025-01-05-at-09-57-18.png",
    title: "Job Hunter",
    desc: "Responsive Design: Fully responsive across mobile, tablet, and desktop.\nAuthentication System: Email/password login, Google login, account recovery, and protected routes.\nJob Management: Add, update, delete, and view job postings.\nJob Search & Filters: Search jobs by title and filter by job type, experience level, and salary range.\nJob Applications: Apply for jobs with detailed forms and manage your applications.",
    link: "https://mental-health-tracker-18a8c.web.app/",
    gitHubRepo:
      "https://github.com/Sabuj-Chowdhury/job-hunter-mongoDB-Practice-project",
  },
  {
    id: 5,
    img: "https://i.ibb.co/yXVqTMV/Screenshot-2025-01-05-at-12-18-13.png",
    title: "Discount Pro",
    desc: "Welcome to Discount Pro, your one-stop platform for discovering the best deals, discounts, and coupons from top brands. Whether you're looking for exclusive gadget discounts or browsing for inspiration, Discount Pro has got you covered.\n\n🌟 Features\nHome Page: Showcasing top brands, featured coupons, and customer testimonials.\nBrands Directory: Explore a wide range of brands and find the best deals.\nCoupon Details: View individual coupon details securely using a private route.\nUser Profiles: Personalized user profiles with update options.\nAuthentication: Secure login and registration using email, password, and Google authentication.\nResponsive Design: Fully optimized for all devices with a modern and interactive UI.\n\nFirst Proper firsebase Authentication Implent.",
    link: "https://coupon-code-f4f9b.web.app/",
    gitHubRepo:
      "https://github.com/Sabuj-Chowdhury/Coupon-Code--Firebase-and-react-",
  },
  {
    id: 6,
    img: "https://i.ibb.co/rpmDXb3/Screenshot-2025-01-05-at-12-23-53.png",
    title: "Dream 11",
    desc: "The Cricket Player Selection App is an interactive web application designed for cricket enthusiasts to manage their fantasy teams. Users can browse through a list of available players, select their favorites based on budget constraints, and view their selected players. With an intuitive interface, this app provides a seamless experience for building a cricket team.\n\nPlayer Selection: Users can choose players from a list while ensuring they stay within their credit limits. The app validates selections and provides real-time feedback.\n\nDynamic Views: Toggle between viewing available players and selected players. The app maintains a user-friendly layout that clearly distinguishes between the two views.\n\nCredit Management: Users start with a set balance and can see their remaining credits as they select players. Alerts inform users when they have insufficient credits or exceed the player limit.\n\nwhile doing this i was just begaing to start the journey of learning React and DOM ",
    link: "https://velvety-conkies-c6f5a3.netlify.app/",
    gitHubRepo: "https://github.com/Sabuj-Chowdhury/dream-11-react",
  },
];

const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
};

const ListItem = ({ item }) => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="pItem" ref={ref}>
      <motion.div
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
        className="pImg"
      >
        <img src={item.img} alt="" />
      </motion.div>
      <motion.div
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
        className="pText"
      >
        <motion.h1 variants={textVariants}>{item.title}</motion.h1>
        <motion.p variants={textVariants}>{item.desc}</motion.p>
        <div className=" flex gap-5">
          <motion.a variants={textVariants} href={item.link}>
            <button className="bg-black text-white">View Project</button>
          </motion.a>
          <motion.a variants={textVariants} href={item.gitHubRepo}>
            <button className="bg-amber-400">gitHubRepo</button>
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

const Portfolio = () => {
  const [containerDistance, setContainerDistance] = useState(0);
  const ref = useRef(null);

  // useEffect(() => {
  //   if (ref.current) {
  //     const rect = ref.current.getBoundingClientRect();
  //     setContainerDistance(rect.left);
  //   }
  // }, []);

  // FIX: Re-calculate when screen size changes
  useEffect(() => {
    const calculateDistance = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setContainerDistance(rect.left);
      }
    };

    calculateDistance();

    window.addEventListener("resize", calculateDistance);

    return () => {
      window.removeEventListener("resize", calculateDistance);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });

  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * items.length]
  );

  return (
    <div className="portfolio" ref={ref}>
      <motion.div className="pList" style={{ x: xTranslate }}>
        <div
          className="empty"
          style={{
            width: window.innerWidth - containerDistance,
            // backgroundColor: "pink",
          }}
        />
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </motion.div>
      <section />
      <section />
      <section />
      <section />
      <section />
      <section />
      <div className="pProgress">
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#ddd"
            strokeWidth={20}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#dd4c62"
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Portfolio;
