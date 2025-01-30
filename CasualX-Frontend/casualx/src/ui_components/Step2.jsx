import React from 'react'

function Step2({ formData, handleChange, nextStep, prevStep }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Additional Details</h2>
      <div className="space-y-4">
        {/* Education, Occupation, About */}
        <input
          type="text"
          name="education"
          value={formData.education}
          onChange={handleChange}
          placeholder="Education"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="occupation"
          value={formData.occupation}
          onChange={handleChange}
          placeholder="Occupation"
          className="w-full p-2 border rounded"
        />
        <textarea
          name="about"
          value={formData.about}
          onChange={handleChange}
          placeholder="About"
          className="w-full p-2 border rounded"
          rows="4"
        />

        {/* Body Details */}
        <h1 className="text-xl font-bold mt-6 mb-4">Body Details</h1>
        <select
          name="ethnicity"
          value={formData.ethnicity}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Ethnicity</option>
          <option value="asian">Asian</option>
          <option value="african">African</option>
          <option value="caucasian">Caucasian</option>
          <option value="hispanic">Hispanic</option>
          <option value="other">Other</option>
        </select>
        <select
          name="bustSize"
          value={formData.bustSize}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Choose Bust Size</option>
          <option value="large">None</option>
          <option value="enormous">Enormous E+</option>
          <option value="large">Very Large DD-cup</option>
          <option value="large">Large C-cup</option>
          <option value="large">Large D-cup</option>
          <option value="large">Medium B-cup</option>
          <option value="large">Small A</option>
          <option value="medium">Very Small</option>
        </select>
        <select
          name="height"
          value={formData.height}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Height</option>
          <option value="average">Very Tall</option>
          <option value="average">Tall</option>
          <option value="average">Average</option>
          <option value="average">Medium</option>
          <option value="tall">Short</option>
          <option value="portable">Dwarf</option>
        </select>
        <select
          name="weight"
          value={formData.weight}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Weight</option>
          <option value="average">BBW</option>
          <option value="average">Heavy Duty</option>
          <option value="average">Heavy</option>
          <option value="average">Average</option>
          <option value="light">Light</option>
        </select>
        <select
          name="build"
          value={formData.build}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Looks</option>
          <option value="beautiful">Athletic</option>
          <option value="ugly">Curvy</option>
          <option value="beautiful">Chubby</option>
          <option value="ugly">Elegant</option>
          <option value="beautiful">Fat</option>
          <option value="ugly">Fluffy</option>
          <option value="beautiful">Heavy</option>
          <option value="ugly">Huge</option>
          <option value="beautiful">Masculine</option>
          <option value="ugly">Regular</option>
          <option value="beautiful">Robust</option>
          <option value="ugly">Skinny</option>
          <option value="beautiful">Slender</option>
          <option value="ugly">Slim</option>
        </select>
        <select
          name="looks"
          value={formData.looks}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Looks</option>
          <option value="beautiful">Corporate Type</option>
          <option value="ugly">Goddess</option>
          <option value="beautiful">Naughty Teacher</option>
          <option value="ugly">Pornstar</option>
          <option value="beautiful">Sexy</option>
          <option value="ugly">Hot</option>
          <option value="beautiful">Slutty</option>
          <option value="ugly">Stripper</option>
        </select>

        {/* Smoker */}
        <div>
          <label className="block mb-2">Smoker?</label>
          <div className="flex space-x-4">
            <label>
              <input
                type="radio"
                name="smoker"
                value="yes"
                checked={formData.smoker === 'yes'}
                onChange={handleChange}
              /> Yes
            </label>
            <label>
              <input
                type="radio"
                name="smoker"
                value="no"
                checked={formData.smoker === 'no'}
                onChange={handleChange}
              /> No
            </label>
          </div>
        </div>

        {/* Sexual Orientation */}
        <select
          name="sexualOrientation"
          value={formData.sexualOrientation}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Sexual Orientation</option>
          <option value="mistress">Straight</option>
          <option value="master">Bisexual</option>
          <option value="mistress">Lesbian</option>
          <option value="master">Gay</option>
          <option value="mistress">Trans Sexual</option>
        </select>

        {/* Availability */}
        <div>
          <label className="block mb-2">Availability for Incall</label>
          <div className="flex space-x-4">
            <label>
              <input
                type="radio"
                name="availabilityIncall"
                value="yes"
                checked={formData.availability === 'yes'}
                onChange={handleChange}
              /> Yes
            </label>
            <label>
              <input
                type="radio"
                name="availabilityIncall"
                value="no"
                checked={formData.availability === 'no'}
                onChange={handleChange}
              /> No
            </label>
          </div>
        </div>

        {/* Service */}
        <div>
          <label className="block mb-2">Availability for Outcall</label>
          <div className="flex space-x-4">
            <label>
              <input
                type="radio"
                name="availabilityOutcall"
                value="yes"
                checked={formData.service === 'yes'}
                onChange={handleChange}
              /> Yes
            </label>
            <label>
              <input
                type="radio"
                name="service"
                value="no"
                checked={formData.service === 'no'}
                onChange={handleChange}
              /> No
            </label>
          </div>
        </div>

        {/* Language Spoken */}
        <select
          name="languageSpoken"
          value={formData.languageSpoken}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Language Spoken</option>
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
        </select>

        {/* Language Level */}
        <select
          name="languageLevel"
          value={formData.languageLevel}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Language Level</option>
          <option value="minimal">Minimal</option>
          <option value="fluent">Fluent</option>
          <option value="conversational">Conversational</option>
        </select>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={prevStep}
            className="bg-gray-500 text-white p-2 rounded"
          >
            Previous
          </button>
          <button
            onClick={nextStep}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default Step2