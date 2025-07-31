
const FormInput = ({label, inputName, value,  onKeyDown=()=>{},  onChange=()=>{}, onBlur=()=>{}}) => {
  return (
    <div className="flex items-center gap-4 mb-4">
      <label className="w-20 font-medium text-left" htmlFor={inputName}>
        {label}
      </label>
      <input
        type="text"
        defaultValue={  value
             }
        onKeyDown={onKeyDown}
        id={inputName}
        name={inputName}
        onChange={onChange}
        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400 mr-6 w-20"
        required
       
        onBlur={onBlur}
      />
    </div>
  );
};

export default FormInput;
