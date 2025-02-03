import PropTypes from "prop-types";

const Cards = ({ project }) => {
  const {
    projectTitle,
    imageUrl,
    technologyUsed,

    description,
    liveLink,
    githubRepo,
  } = project || {};

  return (
    <div className="flex relative">
      <a
        to={liveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:scale-105 shadow-xl rounded-xl overflow-hidden"
      >
        <figure className="w-full h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={projectTitle}
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="p-4">
          <h1 className="text-xl font-bold">{projectTitle}</h1>
          <p className="text-sm text-gray-500">{description?.split("\n")[0]}</p>
          <p className="text-sm font-semibold">Technologies:</p>
          <p className="text-sm text-gray-600">{technologyUsed?.join(", ")}</p>
          <div className="flex gap-4 mt-2">
            <a
              href={githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              GitHub
            </a>
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 underline"
            >
              Live Demo
            </a>
          </div>
        </div>
      </a>
    </div>
  );
};

Cards.propTypes = {
  project: PropTypes.object,
  handleRemove: PropTypes.func,
};

export default Cards;
