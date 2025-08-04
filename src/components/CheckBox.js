const CheckBox = ({ checked, onChange, label }) => {
  return (
    <label className="inline-flex items-center space-x-2 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring focus:ring-blue-300 "
      />
      <span className="text-sm text-gray-800">{label}</span>
    </label>
  );
};

export default CheckBox;
