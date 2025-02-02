import React from 'react'

function SearchPopUp(onClose) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-sky-900 text-white dark:bg-gray-800 p-6 rounded-lg w-11/12 max-w-md">
        <h2 className="text-xl font-bold mb-4">Escort Search</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter name"
              className="w-full p-2 border rounded-full dark:bg-gray-700 dark:border-gray-600"
            />
          </div>

          {/* Country Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Country</label>
            <select className="w-full p-2 border rounded-full dark:bg-gray-700 dark:border-gray-600">
              <option value="">Select Country</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
            </select>
          </div>

          {/* State Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">State</label>
            <select className="w-full p-2 border rounded-full dark:bg-gray-700 dark:border-gray-600">
              <option value="">Select State</option>
              <option value="California">California</option>
              <option value="Texas">Texas</option>
              <option value="New York">New York</option>
            </select>
          </div>

          {/* City Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">City</label>
            <select className="w-full p-2 border rounded-full dark:bg-gray-700 dark:border-gray-600">
              <option value="">Select City</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Houston">Houston</option>
              <option value="New York City">New York City</option>
            </select>
          </div>

          {/* Gender Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Gender</label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input type="radio" name="gender" value="male" className="mr-2" />
                Male
              </label>
              <label className="flex items-center">
                <input type="radio" name="gender" value="female" className="mr-2" />
                Female
              </label>
              <label className="flex items-center">
                <input type="radio" name="gender" value="both" className="mr-2" />
                Both
              </label>
            </div>
          </div>

          {/* Age Slider */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Age</label>
            <input
              type="range"
              min="20"
              max="60"
              defaultValue="25"
              className="w-full"
            />
            <div className="flex justify-between text-sm">
              <span>18</span>
              <span>100</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 dark:bg-gray-600 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SearchPopUp