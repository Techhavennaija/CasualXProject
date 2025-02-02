import React, { useState } from 'react';
import Select from 'react-select';
import { Country, State, City } from 'country-state-city';

function Step1({ formData, handleChange, nextStep, errors, setFormData}) {

  // Custom styles for the dropdown
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#3b82f6' : 'white', // Blue background on hover
      color: state.isFocused ? 'white' : 'black', // White text on hover
      cursor: 'pointer',
    }),
    control: (provided) => ({
      ...provided,
      border: '1px rounded solid #e2e8f0',
      borderRadius: '0.375rem',
      padding: '0.2rem',
    }),
  };

  // Get all countries
  const allCountries = Country.getAllCountries().map((country) => ({
    value: country.isoCode,
    label: country.name,
  }));

  // Get states for the selected country
  const getStates = () => {
    if (!formData.country) return [];
    return State.getStatesOfCountry(formData.country).map((state) => ({
      value: state.isoCode,
      label: state.name,
    }));
  };

  // Get cities for the selected state
  const getCities = () => {
    if (!formData.country || !formData.state) return [];
    return City.getCitiesOfState(formData.country, formData.state).map((city) => ({
      value: city.name,
      label: city.name,
    }));
  };

   // Handle country selection
   const handleCountryChange = (selectedOption) => {
    setFormData({
      ...formData,
      country: selectedOption.value,
      state: '', // Reset state when country changes
      city: '', // Reset city when country changes
    });
  };

  // Handle state selection
  const handleStateChange = (selectedOption) => {
    setFormData({
      ...formData,
      state: selectedOption.value,
      city: '', // Reset city when state changes
    });
  };

  // Handle city selection
  const handleCityChange = (selectedOption) => {
    setFormData({
      ...formData,
      city: selectedOption.value,
    });
  };

  // Handle phone number input (only allow numbers)
  const handlePhoneNumberChange = (e) => {
    const { value } = e.target;
    if (/^\d*$/.test(value)) { // Only allow numbers
      setFormData({
        ...formData,
        mobile: value,
      });
    }
  };


  // Find the selected country, state, and city objects
  const selectedCountry = allCountries.find((c) => c.value === formData.country);
  const selectedState = getStates().find((s) => s.value === formData.state);
  const selectedCity = getCities().find((c) => c.value === formData.city);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Escort Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Username */}
        <div>
          <label className="block mb-2">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter Username"
              className="block w-full bg-gray-200 text-gray-700 text-sm rounded py-3 px-4 focus:outline-none focus:bg-white"
            /> {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2">Email</label>
            <input
              ype="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="block w-full bg-gray-200 text-gray-700 text-sm rounded py-3 px-4 focus:outline-none focus:bg-white"
            /> {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        {/* Password */}
        <div>
          <label className="block mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="block w-full bg-gray-200 text-gray-700 text-sm rounded py-3 px-4 focus:outline-none focus:bg-white"
            /> {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block mb-2">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="block w-full bg-gray-200 text-gray-700 text-sm rounded py-3 px-4 focus:outline-none focus:bg-white"
            /> {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
        </div>

        {/* Display Name */}
        <div>
          <label className="block mb-2">Display Name</label>
            <input
              type="text"
              name="displayName"
              value={formData.displayName}
              onChange={handleChange}
              placeholder="Display Name"
              className="block w-full bg-gray-200 text-gray-700 text-sm rounded py-3 px-4 focus:outline-none focus:bg-white"
            /> {errors.displayName && <p className="text-red-500 text-sm">{errors.displayName}</p>}
        </div>

        {/* Country Dropdown */}
        <div>
          <label className="block mb-2">Country</label>
            <Select
              options={allCountries}
              value={selectedCountry}
              onChange={handleCountryChange}
              placeholder="Select Country"
              styles={customStyles} // Apply custom styles
              className="w-full"
            /> {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
        </div>

        {/* State Dropdown */}
        <div>
          <label className="block mb-2">State</label>
            <Select
              options={getStates()}
              value={selectedState}
              onChange={handleStateChange}
              placeholder="Select State"
              styles={customStyles} // Apply custom styles
              isDisabled={!formData.country} // Disable if no country is selected
              className="w-full"
            /> {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
        </div>

        {/* City Dropdown */}
        <div>
          <label className="block mb-2">City</label>
            <Select
              options={getCities()}
              value={selectedCity}
              onChange={handleCityChange}
              placeholder="Select City"
              styles={customStyles} // Apply custom styles
              isDisabled={!formData.state} // Disable if no state is selected
              className="w-full"
            /> {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block mb-2">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="block w-full bg-gray-200 text-gray-700 text-sm rounded py-3 px-4 focus:outline-none focus:bg-white"
            />{errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
        </div>

        {/* Gender */}
        <div>
          <label className="block mb-3">Gender</label>
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
            </div> {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
        </div>

        {/* Bio */}
        <div className="md:col-span-2">
          <label className="block mb-2">Heading</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Briefly describe to your clients, services you offer!!"
              rows="4"
              className="block w-full bg-gray-200 text-gray-700 text-sm rounded py-3 px-4 focus:outline-none focus:bg-white resize-none"
            /> {errors.bio && <p className="text-red-500 text-sm">{errors.bio}</p>}
        </div>

        {/* Country Code */}
        <div>
          <label className="block mb-2">Country Code</label>
            <input
              type="text"
              value={formData.countryCode || ''}
              disabled
              className="block w-full bg-gray-200 text-gray-700 text-sm rounded py-3 px-4 focus:outline-none focus:bg-white"
            />
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block mb-2">Mobile Number</label>
            
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handlePhoneNumberChange}
              placeholder="Mobile Number"
              className="block w-full bg-gray-200 text-gray-700 text-sm rounded py-3 px-4 focus:outline-none focus:bg-white"
            /> {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
        </div>
      </div>

      {/* Next Button */}
      <div className="mt-6 flex justify-center">
        <button
          onClick={nextStep}
          className="bg-blue-500 text-white px-12 py-2 rounded-full md:w-auto"
        > Next
        </button>
      </div>
    </div>
  )
}

export default Step1