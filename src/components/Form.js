import { useAtom } from "jotai";
import FormInput from "./FormInput";
import Section from "./Section";
import SkillInputGroup from "./SkillInputGroup";
import { professionalSummery } from "../atoms/formAtoms";

const Form = () => {
  const [professionalSummeryValue, setProfessionalSummeryValue] = useAtom(professionalSummery)
  return (
    <div className="mx-auto ml-10 mt-10 p-6 bg-white shadow-lg rounded-xl">
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
            <FormInput label="Name" inputName="name" />
            <FormInput label="Job Title" inputName="title" />
            <FormInput label="Location" inputName="location" />
            <FormInput label="Phone" inputName="phone" />
            <FormInput label="Email" inputName="mail" />
            <FormInput label="LinkedIn" inputName="linkedin" />
            <FormInput label="GitHub" inputName="github" />
            <FormInput label="Date of Birth" inputName="dob" />
            <FormInput label="Nationality" inputName="nationality" />
            <FormInput label="Visa" inputName="visa" />
          </div>
        </Section>
        <Section title="Professional Summary">
          <textarea
            onChange={(e)=>setProfessionalSummeryValue(e.target.value)}
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
