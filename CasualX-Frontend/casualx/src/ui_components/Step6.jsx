import React, { useState } from 'react';

function Step6({ formData, handleChange, prevStep, submitForm }) {
    const [verificationPhoto, setVerificationPhoto] = useState(formData.verificationPhoto || null);
  const [error, setError] = useState('');

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVerificationPhoto(file);
      handleChange({ target: { name: 'verificationPhoto', value: file } });
      setError('');
    }
  };

  const validateAndProceed = () => {
    if (!verificationPhoto) {
      setError('Please upload a verification photo.');
    } else {
      setError('');
      submitForm();
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Step 6: Verification</h2>
      <div className="space-y-4">
        {/* Display Username */}
        <div className="bg-gray-100 p-4 rounded">
          <p className="font-bold">Your username is: <span className="text-blue-500">{formData.username}</span></p>
        </div>

        {/* Instructions */}
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="font-bold mb-2">Instructions:</h3>
          <p className="mb-4">
            Write your username (e.g., <span className="font-bold">{formData.username}</span>) and <span className="font-bold">CASUALX</span> on a piece of paper, take a selfie holding the paper up.
          </p>
          <ol className="list-decimal list-inside space-y-2">
            <li>Your full face, eyes, and neck must be clearly visible.</li>
            <li>No wig or weavon covering your face.</li>
            <li>The hand holding your paper must be visible.</li>
            <li>The verification photo must be bright and clearly visible.</li>
            <li>Please strictly adhere to these instructions, else your account will be rejected.</li>
          </ol>
        </div>

        {/* Example Image */}
        <div>
          <h3 className="font-bold mb-2">Example:</h3>
          <img
            src="https://via.placeholder.com/300x400.png?text=Example+Verification+Photo"
            alt="Example Verification Photo"
            className="w-full max-w-xs border rounded"
          />
        </div>

        {/* Photo Upload */}
        <div>
          <label className="block mb-2">Upload Verification Photo</label>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
            className="w-full p-2 border rounded"
          />
          {error && <p className="text-red-500">{error}</p>}
        </div>

        {/* Display Uploaded Photo */}
        {verificationPhoto && (
          <div>
            <h3 className="font-bold mb-2">Uploaded Photo:</h3>
            <img
              src={URL.createObjectURL(verificationPhoto)}
              alt="Verification Photo"
              className="w-full max-w-xs border rounded"
            />
          </div>
        )}

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

export default Step6