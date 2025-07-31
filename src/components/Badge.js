const Badge = ({ label, onClose = () => {} }) => {
  return (
    <div className="relative group">
      {/* Tooltip on hover */}
      <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-10 pointer-events-none">
        {label}
      </div>
      <div className="flex items-center bg-gray-100 text-sm font-medium text-gray-800 px-3 py-1 rounded-full gap-2 shadow-sm m-2">
        <span className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full"></span>
        <span className="truncate overflow-hidden whitespace-nowrap flex-grow">
          {label}
        </span>
        <button
          type="button"
          onClick={onClose}
          className="ml-2 flex-shrink-0 text-gray-500 hover:text-red-500 focus:outline-none"
          aria-label={`Remove ${label}`}
        >
          x
        </button>
      </div>
    </div>
  );
};

export default Badge;
