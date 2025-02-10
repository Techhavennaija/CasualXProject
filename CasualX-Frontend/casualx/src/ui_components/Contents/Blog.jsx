import React, { useState, useEffect } from "react";

function Blog() {
  return (
    <div class="bg-white font-sans">
      <div class="mx-auto p-4">
        <div class="text-center">
          <h2 class="text-3xl font-extrabold text-gray-800 inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-pink-400 after:rounded-lg-full">
            LATEST BLOGS
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-lg:max-w-3xl max-md:max-w-md mx-auto">
          <div class="bg-white cursor-pointer rounded-lg overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
            <img
              src="https://readymadeui.com/images/food.webp"
              alt="Blog Post 1"
              class="w-full h-96 object-cover"
            />
            <div class="p-6 absolute bottom-0 left-0 right-0 bg-pink-200 opacity-90">
              <span class="text-sm block text-gray-800 mb-2">
                10 FEB 2023 | BY JOHN DOE
              </span>
              <h3 class="text-xl font-bold text-gray-800">
                Igniting Your Imagination
              </h3>
              <div class="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                <p class="text-gray-800 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  accumsan, nunc et tempus blandit, metus mi consectetur felis
                  turpis vitae ligula.
                </p>
              </div>
            </div>
          </div>
          <div class="bg-white cursor-pointer rounded-lg overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
            <img
              src="https://readymadeui.com/images/food11.webp"
              alt="Blog Post 2"
              class="w-full h-96 object-cover"
            />
            <div class="p-6 absolute bottom-0 left-0 right-0 bg-pink-200 opacity-90">
              <span class="text-sm block text-gray-800 mb-2">
                7 JUN 2023 | BY MARK ADAIR
              </span>
              <h3 class="text-xl font-bold text-gray-800">
                Hacks to Supercharge Your Day
              </h3>
              <div class="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                <p class="text-gray-800 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  accumsan, nunc et tempus blandit, metus mi consectetur felis
                  turpis vitae ligula.
                </p>
              </div>
            </div>
          </div>
          <div class="bg-white cursor-pointer rounded-lg overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
            <img
              src="https://readymadeui.com/images/food22.webp"
              alt="Blog Post 3"
              class="w-full h-96 object-cover"
            />
            <div class="p-6 absolute bottom-0 left-0 right-0 bg-pink-200 opacity-90">
              <span class="text-sm block text-gray-800 mb-2">
                5 OCT 2023 | BY SIMON KONECKI
              </span>
              <h3 class="text-xl font-bold text-gray-800">
                Trends and Predictions
              </h3>
              <div class="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                <p class="text-gray-800 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  accumsan, nunc et tempus blandit, metus mi consectetur felis
                  turpis vitae ligula.
                </p>
              </div>
            </div>
          </div>
          <div class="bg-white cursor-pointer rounded-lg overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
            <img
              src="https://readymadeui.com/images/food33.webp"
              alt="Blog Post 3"
              class="w-full h-96 object-cover"
            />
            <div class="p-6 absolute bottom-0 left-0 right-0 bg-pink-200 opacity-90">
              <span class="text-sm block text-gray-800 mb-2">
                5 OCT 2023 | BY SIMON KONECKI
              </span>
              <h3 class="text-xl font-bold text-gray-800">
                Trends and Predictions
              </h3>
              <div class="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                <p class="text-gray-800 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  accumsan, nunc et tempus blandit, metus mi consectetur felis
                  turpis vitae ligula.
                </p>
              </div>
            </div>
          </div>
          <div class="bg-white cursor-pointer rounded-lg overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
            <img
              src="https://readymadeui.com/images/food44.webp"
              alt="Blog Post 3"
              class="w-full h-96 object-cover"
            />
            <div class="p-6 absolute bottom-0 left-0 right-0 bg-pink-200 opacity-90">
              <span class="text-sm block text-gray-800 mb-2">
                5 OCT 2023 | BY SIMON KONECKI
              </span>
              <h3 class="text-xl font-bold text-gray-800">
                Trends and Predictions
              </h3>
              <div class="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                <p class="text-gray-800 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  accumsan, nunc et tempus blandit, metus mi consectetur felis
                  turpis vitae ligula.
                </p>
              </div>
            </div>
          </div>
          <div class="bg-white cursor-pointer rounded-lg overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
            <img
              src="https://readymadeui.com/images/food55.webp"
              alt="Blog Post 3"
              class="w-full h-96 object-cover"
            />
            <div class="p-6 absolute bottom-0 left-0 right-0 bg-pink-200 opacity-90">
              <span class="text-sm block text-gray-800 mb-2">
                5 OCT 2023 | BY SIMON KONECKI
              </span>
              <h3 class="text-xl font-bold text-gray-800">
                Trends and Predictions
              </h3>
              <div class="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                <p class="text-gray-800 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  accumsan, nunc et tempus blandit, metus mi consectetur felis
                  turpis vitae ligula.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
