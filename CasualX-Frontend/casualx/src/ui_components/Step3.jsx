import React, { useState } from 'react';

function Step3({ formData, handleChange, prevStep, submitForm }) {

    const [selectedServices, setSelectedServices] = useState(formData.services || []);
    const [error, setError] = useState('');

    const servicesList = [
        'CIM',
        'COF',
        'DFK',
        'Worship',
        'Massage',
        'Modelling',
        'Couples',
        'Dinner Dates',
        'COB',
        'OWO',
        'PSE',
    ];

    const handleServiceChange = (service) => {
        let updatedServices;
            if (selectedServices.includes(service)) {
                updatedServices = selectedServices.filter((s) => s !== service);
            } else {
                updatedServices = [...selectedServices, service];
            }
        setSelectedServices(updatedServices);
        handleChange({ target: { name: 'services', value: updatedServices } });
        };

    const validateAndProceed = () => {
        if (selectedServices.length < 5) {
            setError('Please select at least 5 services.');
        } else {
            setError('');
            submitForm();
        }
        };


  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Step 3: Services</h2>
      <div className="space-y-4">
        <p className="text-gray-600">Please select at least 5 services:</p>
        {servicesList.map((service) => (
          <label key={service} className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="services"
              value={service}
              checked={selectedServices.includes(service)}
              onChange={() => handleServiceChange(service)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span>{service}</span>
          </label>
        ))}
        {error && <p className="text-red-500">{error}</p>}
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

export default Step3