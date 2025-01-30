import React from 'react'

function Step1({ formData, handleChange, nextStep }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Profile Details</h2>
      <div className="space-y-4">
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="displayName"
          value={formData.displayName}
          onChange={handleChange}
          placeholder="Display Name"
          className="w-full p-2 border rounded"
        />
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Country</option>
          {/* Populate with countries */}
        </select>
        <select
          name="state"
          value={formData.state}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Select State</option>
          {/* Populate with states based on country */}
        </select>
        <select
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Select City</option>
          {/* Populate with cities based on state */}
        </select>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <div>
          <label className="block mb-2">Gender</label>
          <div className="flex space-x-4">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleChange}
              /> Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleChange}
              /> Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="other"
                checked={formData.gender === 'other'}
                onChange={handleChange}
              /> Other
            </label>
          </div>
        </div>
        <input
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          placeholder="Mobile Number"
          className="w-full p-2 border rounded"
        />
        <button
          onClick={nextStep}
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Step1