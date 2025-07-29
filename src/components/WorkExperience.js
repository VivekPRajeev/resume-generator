const WorkExperience = ({
  jobTitle = "Module Lead / Senior Software Engineer",
  companyName = "Aspire  Systems",
  location = "Kochi, India",
  startDate = "Mar 2021",
  endDate = "May 2024",
  description = 'something something penis',
  acheivements = [
    "Led migration to React, improving performance and UX.",
    "Boosted test coverage to 75% using SonarQube.",
    "Managed CI/CD pipelines with Jenkins and resolved 100% of security vulnerabilities.",
  ],
}) => {
  return (
    <div className="mb-4">
      <h3 className="font-semibold text-lg">
        {companyName}, {location}
      </h3>
      <p className="text-sm">
        {jobTitle} | {startDate} – {endDate}
      </p>
      <p>{description}</p>
      <ul className="list-disc list-inside mt-2 text-sm">
        {acheivements &&
          acheivements.map((acheivement, index) => <li key={index}>{acheivement}</li>)}
      </ul>
    </div>
  );
};

export default WorkExperience;
