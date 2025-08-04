import { useAtom } from "jotai";
import ExperienceInputGroup from "./ExperienceInputGroup";
import { educationGroup } from "../atoms/formAtoms";

export const EducationInputGroup = () => {
  const [experienceGroupSections, setExperienceGroupSections] =
    useAtom(educationGroup);
  return (
    <ExperienceInputGroup
      experienceGroupSections={experienceGroupSections}
      setExperienceGroupSections={setExperienceGroupSections}
    />
  );
};
