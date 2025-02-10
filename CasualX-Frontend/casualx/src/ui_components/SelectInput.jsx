import Select from "react-select";

function SelectInput({ label, options, value, onChange, placeholder, error, isDisabled = false }) {

    const customStyles = {
        option: (provided, state) => ({
          ...provided,
          backgroundColor: state.isFocused ? "#3b82f6" : "white",
          color: state.isFocused ? "white" : "black",
          cursor: "pointer",
        }),
        control: (provided) => ({
          ...provided,
          border: "1px solid #e2e8f0",
          borderRadius: "0.375rem",
          padding: "0.2rem",
        }),
        dropdownIndicator: (provided) => ({
          ...provided,
          padding: "0",
          "&:hover": { color: "#3b82f6" },
        }),
        indicatorSeparator: () => ({ display: "none" }),
      };
  return (
    
    <div>
          <label className="block font-medium">
            {label} <span className="text-red-500">*</span>
          </label>
          <Select
            options={options}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            styles={customStyles}
            isDisabled={isDisabled}
            className="w-full"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
  );
};

export default SelectInput