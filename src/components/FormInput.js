
const FormInput = ({label, inputName}) => {
  return (
    <div className="flex items-center gap-4 mb-4">
      <label className="w-20 font-medium text-left" htmlFor={inputName}>
        {label}
      </label>
      <input
        type="text"
        id={inputName}
        name={inputName}
        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400 mr-6 w-20"
        required
      />
    </div>
  );
};

export default FormInput;
