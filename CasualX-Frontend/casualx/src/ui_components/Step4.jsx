import React, { useState } from 'react';

function Step4({ formData, handleChange, prevStep, submitForm }) {
    const [error, setError] = useState('');

    const currencies = ['USD', 'GBP', 'NGN']; // Example currencies
    const rateOptions = [1, 10, 100, 1000]; // First input box options
    const rateMultipliers = [2, 20, 200, 2000]; // Second input box options

    const validateAndProceed = () => {
    const { currency, oneHourRate1, oneHourRate2, overnightRate1, overnightRate2, weekendRate1, weekendRate2 } = formData;

    // Check if at least one rate is provided
    if (!oneHourRate1 && !overnightRate1 && !weekendRate1) {
      setError('Please provide at least one rate.');
    } else {
      setError('');
      submitForm();
    }
  };
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Step 4: Rates</h2>
      <div className="space-y-4">
        {/* Currency Selection */}
        <div>
          <label className="block mb-2">Currency</label>
          <select
            name="currency"
            value={formData.currency}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Currency</option>
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>

        {/* 1 Hour Rate */}
        <div>
          <label className="block mb-2">1 Hour Rate</label>
          <div className="flex space-x-4">
            <select
              name="oneHourRateIncall"
              value={formData.oneHourRateIncall}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Select</option>
              {rateOptions.map((rate) => (
                <option key={rate} value={rate}>
                  {rate}
                </option>
              ))}
            </select>
            <select
              name="oneHourRateOutcall"
              value={formData.oneHourRateOutcall}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Select</option>
              {rateMultipliers.map((rate) => (
                <option key={rate} value={rate}>
                  {rate}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Overnight Rate */}
        <div>
          <label className="block mb-2">Overnight Rate</label>
          <div className="flex space-x-4">
            <select
              name="overnightRateIncall"
              value={formData.overnightRateIncall}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Select</option>
              {rateOptions.map((rate) => (
                <option key={rate} value={rate}>
                  {rate}
                </option>
              ))}
            </select>
            <select
              name="overnightRateOutcall"
              value={formData.overnightRateOutcall}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Select</option>
              {rateMultipliers.map((rate) => (
                <option key={rate} value={rate}>
                  {rate}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Weekend Rate */}
        <div>
          <label className="block mb-2">Weekend Rate</label>
          <div className="flex space-x-4">
            <select
              name="weekendRateIncall"
              value={formData.weekendRateIncall}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Select</option>
              {rateOptions.map((rate) => (
                <option key={rate} value={rate}>
                  {rate}
                </option>
              ))}
            </select>
            <select
              name="weekendRateOutcall"
              value={formData.weekendRateOutcall}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Select</option>
              {rateMultipliers.map((rate) => (
                <option key={rate} value={rate}>
                  {rate}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500">{error}</p>}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={prevStep}
            className="bg-gray-500 text-white p-2 rounded"
          >
            Previous
          </button>
          <button
            onClick={validateAndProceed}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default Step4