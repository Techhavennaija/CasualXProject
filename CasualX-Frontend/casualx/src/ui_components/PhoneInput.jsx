
function PhoneInput({ label, countryCode, mobile, onChange, error }) {
  return (
    <div>
    <label className="block font-medium">
      {label} <span className="text-red-500">*</span>
    </label>
    <div className="flex">
      <input
        type="text"
        value={countryCode || ""}
        disabled
        className="w-1/4 bg-gray-200 text-gray-700 text-sm rounded-l py-3 px-4 focus:outline-none"
      />
      <input
        type="text"
        name="mobile"
        value={mobile}
        onChange={onChange}
        placeholder="Mobile Number"
        className="w-3/4 bg-gray-200 text-gray-700 text-sm rounded-r py-3 px-4 focus:outline-none"
      />
    </div>
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
  )
}

export default PhoneInput