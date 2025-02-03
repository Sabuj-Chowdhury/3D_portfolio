const Education = () => {
  const educations = [
    {
      year_start: 2022,
      year_end: "2025 (expected to finish in August)",
      institution: "University of Burdwan",
      degree: "B.Sc (Hons.) in Computer Science",
      location: "Burdwan, West Bengal",
    },
    {
      year_start: 2011,
      year_end: 2013,
      institution: "Chittagong Science College",
      degree: "Higher Secondary Certification (H.S.C)",
      gpa: "3.9 out of 5",
      location: "Chittagong",
    },
    {
      year_start: 2008,
      year_end: 2010,
      institution: "Nasirabad Govt. Boys High School",
      degree: "Secondary School Certificate (S.S.C)",
      gpa: "4.63 out of 5",
      location: "Chittagong",
    },
  ];

  return (
    <section className=" place-content-center flex flex-col gap-8">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-white">
        Education
      </h2>
      <div className=" relative flex flex-col gap-3 items-center ">
        {educations.map((edu, index) => (
          <div
            key={index}
            className=" flex flex-col gap-2 border border-dotted text-center w-full md:w-1/2 "
          >
            <h3 className="text-lg md:text-2xl font-semibold text-gray-300">
              {edu.degree}
            </h3>
            <p className="text-md text-amber-500">{edu.institution}</p>
            <p className="text-sm text-gray-400">
              {edu.year_start} - {edu.year_end} | {edu.location}
            </p>
            {edu.gpa && <p className="text-sm text-gray-400">GPA: {edu.gpa}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
