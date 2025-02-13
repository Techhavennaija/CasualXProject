import React, { useState, useEffect } from "react";



function Faqs() {
  
  return (
    <div class="font-sans divide-y rounded-lg max-w-4xl mx-auto px-4">
    <div class="mb-8">
      <h2 class="text-2xl font-bold text-gray-800">Frequently asked questions</h2>
    </div>
    <div class="accordion" role="accordion">
      <button type="button"
        class="toggle-button w-full text-base outline-none text-left font-semibold py-6 text-blue-600 hover:text-blue-600 flex items-center">
        <span class="mr-4">Are there any special discounts or promotions available during the event.</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42" class="w-3 fill-current ml-auto shrink-0">
          <path class="plus hidden"
            d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" />
          <path
            d="M37.059 16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5h32.118C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" />
        </svg>
      </button>
      <div class="content pb-6 max-h-[1000px] overflow-hidden transition-all duration-300">
        <p class="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor
          arcu,
          at fermentum dui. Maecenas
          vestibulum a turpis in lacinia. Proin aliquam turpis at erat venenatis malesuada. Sed semper, justo vitae
          consequat fermentum, felis diam posuere ante, sed fermentum quam justo in dui. Nulla facilisi. Nulla aliquam
          auctor purus, vitae dictum dolor sollicitudin vitae. Sed bibendum purus in efficitur consequat. Fusce et
          tincidunt arcu. Curabitur ac lacus lectus. Morbi congue facilisis sapien, a semper orci facilisis in.
        </p>
      </div>
    </div>
    <div class="accordion" role="accordion">
      <button type="button"
        class="toggle-button w-full text-base outline-none text-left font-semibold py-6 text-gray-800 hover:text-blue-600 flex items-center">
        <span class="mr-4">What are the dates and locations for the product launch events?</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42" class="w-3 fill-current ml-auto shrink-0">
          <path class="plus"
            d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" />
          <path
            d="M37.059 16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5h32.118C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" />
        </svg>
      </button>
      <div class="content invisible max-h-0 overflow-hidden transition-all duration-300">
        <p class="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor
          arcu,
          at fermentum dui. Maecenas ongue facilisis sapien, a semper orci facilisis in.
        </p>
      </div>
    </div>
    <div class="accordion" role="accordion">
      <button type="button"
        class="toggle-button w-full text-base outline-none text-left font-semibold py-6 text-gray-800 hover:text-blue-600 flex items-center">
        <span class="mr-4">Can I bring a guest with me to the product launch event?</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42" class="w-3 fill-current ml-auto shrink-0">
          <path class="plus"
            d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" />
          <path
            d="M37.059 16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5h32.118C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" />
        </svg>
      </button>
      <div class="content invisible max-h-0 overflow-hidden transition-all duration-300">
        <p class="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor
          arcu,
          at fermentum dui. Maecenas ongue facilisis sapien, a semper orci facilisis in.
        </p>
      </div>
    </div>
    <div class="accordion" role="accordion">
      <button type="button"
        class="toggle-button w-full text-base outline-none text-left font-semibold py-6 text-gray-800 hover:text-blue-600 flex items-center">
        <span class="mr-4">How can I register for the event?</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42" class="w-3 fill-current ml-auto shrink-0">
          <path class="plus"
            d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" />
          <path
            d="M37.059 16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5h32.118C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" />
        </svg>
      </button>
      <div class="content invisible max-h-0 overflow-hidden transition-all duration-300">
        <p class="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor
          arcu,
          at fermentum dui. Maecenas ongue facilisis sapien, a semper orci facilisis in.
        </p>
      </div>
    </div>
    <div class="accordion" role="accordion">
      <button type="button"
        class="toggle-button w-full text-base outline-none text-left font-semibold py-6 text-gray-800 hover:text-blue-600 flex items-center">
        <span class="mr-4">Is there parking available at the venue?</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42" class="w-3 fill-current ml-auto shrink-0">
          <path class="plus"
            d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" />
          <path
            d="M37.059 16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5h32.118C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" />
        </svg>
      </button>
      <div class="content invisible max-h-0 overflow-hidden transition-all duration-300">
        <p class="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor
          arcu,
          at fermentum dui. Maecenas ongue facilisis sapien, a semper orci facilisis in.
        </p>
      </div>
    </div>
    <div class="accordion" role="accordion">
      <button type="button"
        class="toggle-button w-full text-base outline-none text-left font-semibold py-6 text-gray-800 hover:text-blue-600 flex items-center">
        <span class="mr-4">How can I contact the event organizers?</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42" class="w-3 fill-current ml-auto shrink-0">
          <path class="plus"
            d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" />
          <path
            d="M37.059 16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5h32.118C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" />
        </svg>
      </button>
      <div class="content invisible max-h-0 overflow-hidden transition-all duration-300">
        <p class="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor
          arcu,
          at fermentum dui. Maecenas ongue facilisis sapien, a semper orci facilisis in.
        </p>
      </div>
    </div>
  </div>
  );
}

export default Faqs;
