import FormInput from "./FormInput";

const ExperienceInputGroup = () => {
  return (
    <div className="grid grid-cols-2">
      <FormInput label="Title" inputName="experienceTitle" />
      <FormInput label="Organization" inputName="organization" />
      <FormInput label="Location" inputName="location" />
      <FormInput label="From" inputName="from" />
      <FormInput label="To" inputName="to" />




    </div>
  );
};

export default ExperienceInputGroup;
