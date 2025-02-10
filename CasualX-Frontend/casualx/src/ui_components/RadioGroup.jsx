

function RadioGroup({ label, name, options, value, onChange, error }) {
  return (
    <div>
    <label className="block font-medium">
      {label} <span className="after:ml-0.5 text-red-500">*</span>
    </label>
    <div className="flex space-x-4">
      {options.map((option) => (
        <label key={option.value} className="flex items-center space-x-2">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={onChange}
            className="form-radio h-4 w-4 text-blue-600"
          />
          {option.label}
        </label>
      ))}
    </div>
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
  )
}

export default RadioGroup