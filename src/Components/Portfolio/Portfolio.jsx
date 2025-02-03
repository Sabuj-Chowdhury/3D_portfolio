import { useEffect, useState } from "react";
import axios from "axios";
import LoadingSpinner from "../LoadingSpinner";
import ProjectsCard from "./ProjectsCard";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_url}/projects`)
      .then((res) => {
        setProjects(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }
  // console.log(projects);
  return (
    <div>
      <div>
        {projects.map((project, idx) => (
          <ProjectsCard key={idx} project={project}></ProjectsCard>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
