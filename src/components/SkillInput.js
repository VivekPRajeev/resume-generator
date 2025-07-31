import { useState } from "react";
import Badge from "./Badge";
import FormInput from "./FormInput";

const mockData = {
  header: "Frontend",
  skills: ["ReactJS", "Redux", "Tailwind", "Angular", "SCSS", "Bootstrap"],
  occupyfullRow: false,
};
const SkillInput = () => {
  const [skillData, setskillData] = useState(mockData);
  const [skillInputValue, setSkillInputValue] = useState("");

  const addNewSkill = (newSkill) => {
    if (!skillData.skills.includes(newSkill)) {
      setskillData((currentData) => ({
        ...currentData,
        skills: [...currentData.skills, newSkill],
      }));
      setSkillInputValue("");
    }
  };

  const removeSkill = (skill) =>{
    if (skillData.skills.includes(skill)) {
        setskillData((currentData) => ({
        ...currentData,
        skills: currentData.skills.filter(item => item !== skill),
      }));
    }
  }
  return (
    <div>
      <FormInput
        label="Group Name"
        inputname="skillHeading"
        onChange={(e) => {
          setSkillInputValue(e.target.value);
        }}
        value={skillInputValue}
        onKeyDown={(e) => {
          if (e.key === "Enter" && skillInputValue) {
            e.preventDefault();
            addNewSkill(skillInputValue);
          }
        }}
      />
      <div className="grid grid-cols-5">
        {skillData.skills.map((skill) => (
          <Badge label={skill} key={skill}  onClose={()=>removeSkill(skill)}/>
        ))}
      </div>
    </div>
  );
};

export default SkillInput;
