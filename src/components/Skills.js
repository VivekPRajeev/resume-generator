const mockData = [
  {
    header: "Frontend",
    skills: ["ReactJS", "Redux", "Tailwind", "Angular", "SCSS", "Bootstrap"],
    occupyfullRow: false,
  },
  {
    header: "Backend",
    skills: ["NodeJs", "Laravel", "Python"],
    occupyfullRow: false,
  },
  {
    header: "Other",
    skills: [
      "CI/CD",
      "Jenkins",
      "Docker",
      "Jira",
      "Bitbucket",
      "Git",
      "SonarQube",
      "Webpack",
      "Storybook",
      "Typescript",
      "ES6",
      "GraphQL",
      "Microfrontend",
      "Javascript",
      "TDD",
      "Jest",
      "React testing library",
      "D3Js",
      "Figma",
      "Code Review",
      "AWS",
      "Data Analytics",
    ],
    occupyfullRow: true,
  },
];
const Skills = () => {
  return (
    <div className="grid grid-cols-2 text-sm gap-y-1">
      {mockData.map((element) => (
        <div className={`${element.occupyfullRow ? "col-span-2" : ""}`}>
          {element.header && (
            <h2 className="text-mb font-semibold ">{element.header}</h2>
          )}
          <div className=" text-sm gap-y-1">
            <span>{element.skills?.join(", ")} </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
