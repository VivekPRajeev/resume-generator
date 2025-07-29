const WorkExperience = ({
  jobTitle = "Module Lead / Senior Software Engineer",
  companyName = "Aspire  Systems",
  location = "Kochi, India",
  startDate = "Mar 2021",
  endDate = "May 2024",
  description = "something something penis",
  acheivements = [
    "Led migration to React, improving performance and UX.",
    "Boosted test coverage to 75% using SonarQube.",
    "Managed CI/CD pipelines with Jenkins and resolved 100% of security vulnerabilities.",
  ],
}) => {
  return (
    <div className="mb-4">
      <h3 class="grid grid-cols-3 ">
        <span class="col-span-2 font-semibold text-lg">{jobTitle}</span>
        <span class="text-left font-regular text-sm">
          | {startDate} – {endDate}
        </span>
      </h3>

      <p className="text-sm">
        {companyName}, {location}
      </p>
      <p>{description}</p>
      <ul className="list-disc list-inside mt-2 text-sm">
        {acheivements &&
          acheivements.map((acheivement, index) => (
            <li key={index}>{acheivement}</li>
          ))}
      </ul>
    </div>
  );
};

export default WorkExperience;
