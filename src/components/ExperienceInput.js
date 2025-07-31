import { useEffect, useState } from "react";
import FormInput from "./FormInput";

const ExperienceInput = ({ experienceData, setExperienceData }) => {
  const [experience, setExperience] = useState(experienceData);
  const [achievement, setAchievement] = useState("");

  useEffect(() => {
    setExperienceData && setExperienceData(experience);
  }, [experience, setExperienceData]);

  const updateExperienceData = (key, value) => {
    setExperience((currentData) => ({ ...currentData, [key]: value }));
  };
  const addNewAchievement = (newAchievement) => {
    if (!experience.achievements.includes(newAchievement)) {
      setExperience((currentData) => ({
        ...currentData,
        achievements: [...currentData.achievements, newAchievement],
      }));
      setAchievement("");
    }
  };
  const removeAchievement = (skill) => {
    if (experience.achievements.includes(skill)) {
      setExperience((currentData) => ({
        ...currentData,
        achievements: currentData.achievements.filter((item) => item !== skill),
      }));
     
    }
  };
  return (
    <div className="border-b mb-8 pb-8">
      <div className="grid grid-cols-2">
        <FormInput
          label="Title"
          value={experience?.title}
          inputName="experienceTitle"
          onChange={(e) => updateExperienceData("title", e.target.value)}
        />
        <FormInput
          label="Organization"
          value={experience?.organization}

          inputName="organization"
          onChange={(e) => updateExperienceData("organization", e.target.value)}
        />
        <FormInput
          label="Location"
          value={experience?.location}
          inputName="location"
          onChange={(e) => updateExperienceData("location", e.target.value)}
        />
        <FormInput
          label="From"
          inputName="from"
          value={experience?.from}

          onChange={(e) => updateExperienceData("from", e.target.value)}
        />
        <FormInput
          label="To"
          inputName="to"
          value={experience?.to}

          onChange={(e) => updateExperienceData("to", e.target.value)}
        />
      </div>
      <textarea
        onChange={(e) => updateExperienceData("description", e.target.value)}
         
        defaultValue={experience.description}
        id="summary"
        name="summary"
        rows="4"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <div className="mt-6 mb-6">
        <FormInput
          label="Achievement"
          inputName="achievement"
          value={achievement}
          onChange={(e) => setAchievement(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && achievement) {
              e.preventDefault();
              addNewAchievement(achievement);
            }
          }}
        />
      </div>
      <ul className="list-disc list-inside mt-2 text-sm">
        {experience.achievements.map((element) => (
          <li
            key={element}
            className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-lg shadow-sm mb-2"
          >
            <span>{element}</span>{" "}
            <button
              type="button"
              className="ml-4 text-sm text-red-600 hover:text-red-800 transition-colors duration-200"
              onClick={() => removeAchievement(element)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceInput;
