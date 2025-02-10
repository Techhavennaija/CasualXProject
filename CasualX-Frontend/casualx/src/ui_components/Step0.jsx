import React, { useState } from "react";
import { Country, State, City } from "country-state-city";
import { FaEye, FaEyeSlash, FaEnvelope } from "react-icons/fa";
import { MdLock, MdPerson, MdPhone, MdCalendarToday } from "react-icons/md";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import RadioGroup from "./RadioGroup";
import TextArea from "./TextArea";
import PhoneInput from "./PhoneInput";

function Step0({ formData = {}, setFormData, nextStep, errors = {} }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const allCountries = Country.getAllCountries().map((country) => ({
    value: country.isoCode,
    label: country.name,
    phonecode: country.phonecode,
  }));

  const getStates = () =>
    formData.country
      ? State.getStatesOfCountry(formData.country).map((state) => ({
          value: state.isoCode,
          label: state.name,
        }))
      : [];

  const getCities = (countryCode, stateCode) =>
    City.getCitiesOfState(countryCode, stateCode).map((city) => ({
      value: city.name,
      label: city.name,
    }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="bg-slate-500 text-white rounded-2xl shadow-lg p-6 sm:p-8 w-full max-w-2xl">
        {/* Step Indicator */}
        <div className="flex items-center justify-between mb-6">
          {[1, 2, 3, 4, 5, 6].map((step) => (
            <div key={step} className="flex items-center">
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
                  step === 1
                    ? "bg-blue-600 text-white border-blue-600"
                    : "border-gray-400 text-gray-500"
                }`}
              >
                {step}
              </div>
              {step < 6 && <div className="w-8 sm:w-16 h-1 bg-gray-300"></div>}
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4 text-center">Escort Details</h2>

        {/* Form Grid - 2 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <TextInput
            label="Username"
            name="username"
            value={formData.username || ""}
            onChange={handleChange}
            error={errors.username}
            placeholder="Enter Username"
            icon={MdPerson}
          />
          <TextInput
            label="Email"
            name="email"
            type="email"
            value={formData.email || ""}
            onChange={handleChange}
            error={errors.email}
            placeholder="Your email here"
            icon={FaEnvelope}
          />

          {/* Password Field with Eye Icon */}
          <TextInput
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={formData.password || ""}
            onChange={handleChange}
            error={errors.password}
            placeholder="*******"
            icon={MdLock}
            eyeIcon={showPassword ? FaEyeSlash : FaEye}
            toggleVisibility={() => setShowPassword(!showPassword)}
          />

          {/* Confirm Password Field with Eye Icon */}
          <TextInput
            label="Confirm Password"
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            value={formData.confirmPassword || ""}
            onChange={handleChange}
            error={errors.confirmPassword}
            placeholder="*******"
            icon={MdLock}
            eyeIcon={showConfirmPassword ? FaEyeSlash : FaEye}
            toggleVisibility={() =>
              setShowConfirmPassword(!showConfirmPassword)
            }
          />

          <TextInput
            label="Display Name"
            name="displayName"
            value={formData.displayName || ""}
            onChange={handleChange}
            error={errors.displayName}
            placeholder="Enter Display Name"
            icon={MdPerson}
          />
          {/* Country Code Field */}

          {/* Country, State, and City Fields */}
          <SelectInput
            label="Country"
            options={allCountries}
            value={formData.country || ""}
            onChange={handleChange}
            placeholder="Choose Country"
            error={errors.country}
          />
          <SelectInput
            label="State"
            options={getStates()}
            value={formData.state || ""}
            onChange={handleChange}
            placeholder="Choose State"
            error={errors.state}
            isDisabled={!formData.country}
          />
          <SelectInput
            label="City"
            options={getCities(formData.country, formData.state)}
            value={formData.city || ""}
            onChange={handleChange}
            placeholder="Choose City"
            error={errors.city}
            isDisabled={!formData.state}
          />

          <SelectInput
            label="Country Code"
            options={allCountries}
            value={formData.countryCode || ""}
            onChange={handleChange}
            placeholder="Select Code"
            error={errors.countryCode}
          />
          {/* Phone Number Field */}
          <PhoneInput
            label="Phone Number"
            countryCode={formData.countryCode || ""}
            mobile={formData.mobile || ""}
            onChange={handleChange}
            error={errors.mobile}
            icon={MdPhone}
          />

          {/* Date of Birth Field with Calendar Icon */}
          <TextInput
            label="Date of Birth"
            name="dob"
            type="date"
            value={formData.dob || ""}
            onChange={handleChange}
            error={errors.dob}
            placeholder="Date of Birth"
            icon={MdCalendarToday}
          />

          {/* Gender Selection */}
          <RadioGroup
            label="Gender"
            name="gender"
            options={[
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
              { value: "other", label: "Other" },
            ]}
            value={formData.gender || ""}
            onChange={handleChange}
            error={errors.gender}
          />
        </div>

        {/* Full Width Bio Field */}
        <div className="mt-4">
          <TextArea
            label="Bio"
            name="bio"
            value={formData.bio || ""}
            onChange={handleChange}
            error={errors.bio}
            placeholder="Briefly describe the services you offer to your client..."
            fullWidth
          />
        </div>

        {/* Next Button */}
        <div className="flex justify-center mt-6">
          <button
            className="w-full sm:w-auto px-6 py-2 bg-sky-700 text-white font-bold rounded-full transition-all cursor-pointer"
            onClick={nextStep}
          >
            Confirm Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default Step0;
