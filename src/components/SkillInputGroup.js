import SkillInput from "./SkillInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useAtom } from "jotai";
import { skillGroup } from "../atoms/formAtoms";

const sampleSkillStructure = {
  header: "Frontend",
  skills: ["ReactJS", "Redux", "Tailwind", "Angular", "SCSS", "Bootstrap"],
  occupyfullRow: false,
};

const SkillInputGroup = () => {
  const [skillSections, setSkillSections] = useAtom(skillGroup);

  const addNewSkillSection = () => {
    setSkillSections((currentData) => [...currentData, sampleSkillStructure]);
  };

  const removeSkillSection = (indexToRemove) => {
    const newList = [...skillSections];
    newList.splice(indexToRemove, 1);
    setSkillSections(newList);
  };

  const updateSkillSection = (newData, index) => {
    console.log(newData, "test");
    setSkillSections((prev) =>
      prev.map((item, i) => (i === index ? { ...item, ...newData } : item))
    );
  };

  return (
    <div>
      {skillSections.map((section, index) => (
        <div key={`section-${section.header}-${index}`}>
          {index ? (
            <div className="flex justify-end">
              <button
                onClick={() => removeSkillSection(index)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold text-xs py-2 px-4 rounded self-end"
                type="button"
              >
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
            </div>
          ) : (
            <></>
          )}
          <SkillInput
            skillInfo={section}
            updateSkillData={(skillData) =>
              updateSkillSection(skillData, index)
            }
          />
        </div>
      ))}

      <button
        type="button"
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => addNewSkillSection()}
      >
        + Add New Section
      </button>
    </div>
  );
};

export default SkillInputGroup;
