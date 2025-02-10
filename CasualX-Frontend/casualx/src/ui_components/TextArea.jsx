function TextArea({ label, name, value, onChange, error, placeholder }) {
  return (
    <div>
      <label className="block font-medium">
        {label} <span className="text-red-500">*</span>
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows="4"
        className="w-full bg-gray-200 text-gray-700 text-sm rounded py-3 px-4 focus:outline-none resize-none"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}

export default TextArea;
