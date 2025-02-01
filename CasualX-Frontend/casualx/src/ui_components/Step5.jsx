import React, { useState } from 'react';

function Step5({ formData, handleChange, prevStep, submitForm }) {
    const [photos, setPhotos] = useState(formData.photos || []);
  const [error, setError] = useState('');

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + photos.length > 4) {
      setError('You can only upload a maximum of 4 photos.');
    } else {
      setPhotos([...photos, ...files]);
      handleChange({ target: { name: 'photos', value: [...photos, ...files] } });
      setError('');
    }
  };

  const removePhoto = (index) => {
    const updatedPhotos = photos.filter((_, i) => i !== index);
    setPhotos(updatedPhotos);
    handleChange({ target: { name: 'photos', value: updatedPhotos } });
  };

  const validateAndProceed = () => {
    if (photos.length < 4) {
      setError('Please upload at least 4 photos.');
    } else {
      setError('');
      submitForm();
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Step 5: Photo Verification</h2>
      <div className="space-y-4">
        {/* Instructions */}
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="font-bold mb-2">Instructions:</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Upload at least 4 photos.</li>
            <li>Male clients tend to like pics of users in shirt and trousers, holiday pictures, and nice casual pictures in beautiful backgrounds.</li>
            <li>But the pics MUST BE OF YOU, NO FAKE PICS.</li>
            <li>We do not tolerate fake pictures that will result in instant disqualification and ban. Not even a second chance. Don't say you were not warned.</li>
            <li>Do not use kids' photos for face cover; use emoji instead.</li>
          </ol>
        </div>

        {/* Photo Upload */}
        <div>
          <label className="block mb-2">Upload Photos (Minimum 4)</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handlePhotoUpload}
            className="w-full p-2 border rounded"
          />
          {error && <p className="text-red-500">{error}</p>}
        </div>

        {/* Display Uploaded Photos */}
        <div className="grid grid-cols-2 gap-4">
          {photos.map((photo, index) => (
            <div key={index} className="relative">
              <img
                src={URL.createObjectURL(photo)}
                alt={`Uploaded Photo ${index + 1}`}
                className="w-full h-32 object-cover rounded"
              />
              <button
                onClick={() => removePhoto(index)}
                className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full"
              >
                &times;
              </button>
            </div>
          ))}
        </div>

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

export default Step5