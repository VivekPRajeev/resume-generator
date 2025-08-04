import { useAtom } from "jotai";
import { experienceGroup } from "../atoms/formAtoms";
import ExperienceInputGroup from "./ExperienceInputGroup";

const WorkExperienceInputGroup = () => {
  const [experienceGroupSections, setExperienceGroupSections] =
    useAtom(experienceGroup);
  return <ExperienceInputGroup experienceGroupSections={experienceGroupSections} setExperienceGroupSections={setExperienceGroupSections} />;
};

export default WorkExperienceInputGroup;
