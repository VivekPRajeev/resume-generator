import { useState } from "react";
import Badge from "./Badge";

const mockData = [
  {
    header: "Frontend",
    skills: ["ReactJS", "Redux", "Tailwind", "Angular", "SCSS", "Bootstrap"],
    occupyfullRow: false,
  },
];
const SkillInput = () => {
  const [skillData, setskillData] = useState(mockData);
  return (
    <div>
      <div className="grid grid-cols-5">
        {mockData[0].skills.map((skill) => (
          <Badge label={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillInput;
