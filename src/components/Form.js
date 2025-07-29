import FormInput from "./FormInput";
import Section from "./Section";

const Form = () => {
  return (
    <div className="mx-auto ml-10 mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Resume Content</h2>
      <form onSubmit={() => {}} className="space-y-4">
          <FormInput label="Name" inputName="name" />
          <FormInput label="Job Title" inputName="title" />
          <FormInput label="Location" inputName="location" />
          <FormInput label="Phone" inputName="phone" />
          <FormInput label="Email" inputName="mail" />
          <FormInput label="LinkedIn" inputName="linkedin" />
          <FormInput label="GitHub" inputName="github" />

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
