import { useState } from "react";
import Badge from "./Badge";
import FormInput from "./FormInput";
import CheckBox from "./CheckBox";

const mockData = {
  header: "Frontend",
  skills: ["ReactJS", "Redux", "Tailwind", "Angular", "SCSS", "Bootstrap"],
  occupyfullRow: false,
};
const SkillInput = ({ skillInfo = mockData, updateSkillData }) => {
  const [skillData, setskillData] = useState(skillInfo);
  const [groupName, setGroupName] = useState(skillInfo.header);
  const [skillInputValue, setSkillInputValue] = useState("");

  const addNewSkill = (newSkill) => {
    if (!skillData.skills.includes(newSkill)) {
      setskillData((currentData) => {
        updateSkillData({
          ...currentData,
          skills: [...currentData.skills, newSkill],
        });
        return {
          ...currentData,
          skills: [...currentData.skills, newSkill],
        };
      });
      setSkillInputValue("");
    }
  };

  const removeSkill = (skill) => {
    if (skillData.skills.includes(skill)) {
      setskillData((currentData) => {
        updateSkillData({
          ...currentData,
          skills: currentData.skills.filter((item) => item !== skill),
        });
        return {
          ...currentData,
          skills: currentData.skills.filter((item) => item !== skill),
        };
      });
    }
  };
  return (
    <div className="border-b mb-8 pb-8">
      <div className="grid  grid-cols-2">
        <FormInput
          label="Group Name"
          inputname="skillHeading"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          onBlur={(e) =>
            setskillData((currentData) => {
              updateSkillData({
                ...currentData,
                header: e.target.value,
              });
              return {
                ...currentData,
                header: e.target.value,
              };
            })
          }
        />
        <CheckBox
          checked={skillData.occupyfullRow}
          label="Fill Row ?"
          onChange={(e) =>
            setskillData((currentData) => {
              updateSkillData({
                ...currentData,
                occupyfullRow: !currentData.occupyfullRow,
              });
              return {
                ...currentData,
                occupyfullRow: !currentData.occupyfullRow,
              };
            })
          }
        />
      </div>
      <FormInput
        label="Add Skill"
        inputname="skill"
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
          <Badge label={skill} key={skill} onClose={() => removeSkill(skill)} />
        ))}
      </div>
    </div>
  );
};

export default SkillInput;
