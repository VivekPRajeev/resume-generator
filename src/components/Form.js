import { useAtom } from "jotai";
import FormInput from "./FormInput";
import Section from "./Section";
import SkillInputGroup from "./SkillInputGroup";
import { professionalSummery } from "../atoms/formAtoms";
import WorkExperienceInputGroup from "./WorkExperienceInputGroup";
import { EducationInputGroup } from "./EducationInputGroup";

const USERINFO_INPUTS = [
  { id: 1, label: "Name", inputName: "name" },
  { id: 2, label: "Job Title", inputName: "title" },
  { id: 3, label: "Location", inputName: "location" },
  { id: 4, label: "Phone", inputName: "phone" },
  { id: 5, label: "Email", inputName: "mail" },
  { id: 6, label: "LinkedIn", inputName: "linkedin" },
  { id: 7, label: "GitHub", inputName: "github" },
  { id: 8, label: "Date of Birth", inputName: "dob" },
  { id: 9, label: "Nationality", inputName: "nationality" },
  { id: 10, label: "Visa", inputName: "visa" },
];
const Form = () => {
  const [professionalSummeryValue, setProfessionalSummeryValue] =
    useAtom(professionalSummery);
  return (
    <div className="mx-auto ml-10 mt-10 p-6 bg-white shadow-lg rounded-xl h-screen overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-rounded-md scrollbar-thumb-gray-400 scrollbar-track-gray-100">
      <h2 className="text-2xl font-bold mb-4 text-center">Resume Content</h2>
      <form
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
          }
        }}
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="space-y-4"
      >
        <Section title="Basic Info">
          <div className="grid grid-cols-2">
            {USERINFO_INPUTS.map((inputElem) => (
              <FormInput
                key={inputElem.id}
                label={inputElem.label}
                inputName={inputElem.inputName}
              />
            ))}
          </div>
        </Section>
        <Section title="Professional Summary">
          <textarea
            onChange={(e) => setProfessionalSummeryValue(e.target.value)}
            defaultValue={professionalSummeryValue}
            id="summary"
            name="summary"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </Section>
        <Section title="Skills">
          <SkillInputGroup />
        </Section>
        <Section title="Work Experience">
          <WorkExperienceInputGroup />
        </Section>
        <Section title="Education">
          <EducationInputGroup />
        </Section>
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
