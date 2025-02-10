function TextInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  placeholder,
  icon: Icon,
  eyeIcon,
  toggleVisibility,
}) {
  return (
    <div>
      {label && <label>{label}</label>}
      <div className="flex items-center">
        {Icon && <Icon className="absolute left-3 text-gray-500" />}
        <input
          type={type}
          name={name}
          value={value || ""}
          onChange={onChange}
          placeholder={placeholder}
          className="block w-full relative bg-gray-200 text-gray-700 text-sm rounded py-3 px-4 focus:outline-none0"
        />
        {eyeIcon && (
          <button
            type="button"
            className="absolute right-0"
            onClick={toggleVisibility}
          >
            <eyeIcon className="text-gray-500" />
          </button>
        )}
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}

export default TextInput;
