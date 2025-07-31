import { useAtom } from "jotai";
import { experienceGroup } from "../atoms/formAtoms";
import ExperienceInput from "./ExperienceInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const sampleExperienceGroup = {
  title: "",
  organization: "",
  location: "",
  from: "",
  to: "",
  description: "",
  achievements: [],
};

const ExperienceInputGroup = () => {
  const [experienceGroupSections, setExperienceGroupSections] =
    useAtom(experienceGroup);
  const addNewExperienceSection = () => {
    setExperienceGroupSections((currentData) => [
      ...currentData,
      sampleExperienceGroup,
    ]);
  };
  const removeExperienceSection = (indexToRemove) => {
    const newList = [...experienceGroupSections];
    newList.splice(indexToRemove, 1);
    setExperienceGroupSections(newList);
  };
  const updateExperienceSection = (newData, index) => {
    setExperienceGroupSections((prev) =>
      prev.map((item, i) => (i === index ? { ...item, ...newData } : item))
    );
  };

  return (
    <>
      {experienceGroupSections.map((experienceGroupSection, index) => (
        <div key={index}>
          {index ? (
            <div className="flex justify-end m-2">
              <button
                onClick={() => removeExperienceSection(index)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold text-xs py-2 px-4 rounded self-end"
                type="button"
              >
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
            </div>
          ) : (
            <></>
          )}
          <ExperienceInput
            experienceData={experienceGroupSection}
            setExperienceData={(data) => updateExperienceSection(data, index)}
          />
        </div>
      ))}
      <button
        type="button"
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => addNewExperienceSection()}
      >
        + Add More
      </button>
    </>
  );
};

export default ExperienceInputGroup;
