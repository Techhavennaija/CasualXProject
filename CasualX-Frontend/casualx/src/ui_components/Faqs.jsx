import React, { useState, useEffect } from "react";
import Header from './Header'
import SideNav from './SideNav'
import MainContent from './MainContent'

const FAQS = [
    {
        question: 'What is CasualX?',
        answers: [
            'CasualX is a premium companionship websites that links Escorts to Client for fun',
        ],
    },
    {
      question: 'How to get started as an Escort?',
      answers: [
        'Visit www.casualx.com',
        'Click on Register button at the top right of your screen',
        'You can choose to register as an Independent Escort or as a Client',
        'Fill out the required information to complete the Escort Details step',
        'A verification code will be sent to your email to confirm',
        'You can choose to register as an Independent Escort or as a Client',
        ],
    },
    {
      question: 'How to manage your profile?',
      answers: [
        'React is a JavaScript ',
        'React is a JavaScript ',
        'React is a JavaScript ',
        ],
    },
    {
        question: 'How to reset forgotten password?',
        answers: [
            'To perform a password reset, please make sure all temporary password you have received on your email is deleted',
            'Go to casualx.com and click on Login',
            'Click forget password and input your email to get a temporary login password',
            'You can also change your temporary password',
            'Go to the menu section on your profile',
            'Click on change password',
            'Input your temporary password and a new password',
            'Click on change password and viola you have your new password',
        ],
    },
    {
      question: 'How to deactivate your account?',
      answers: [
        'Go to the Menu section on your profile',
        'Scroll down to find Deactivate',
        'Click on Deactivate',
        'Confirm your option and your profile gets DEACTIVATED instantly',
        ],
    },
    {
      question: 'How to leave a review?',
      answers: [
        'React is a JavaScript ',
        'React is a JavaScript ',
        'React is a JavaScript ',
        ],
    },
    {
        question: 'How to report an Escort or Client?',
        answers: [
            'React is a JavaScript ',
            'React is a JavaScript ',
            'React is a JavaScript ',
        ],
    },
    {
        question: 'Can I use React with other CSS frameworks?',
        answers: [
            'React is a JavaScript ',
            'React is a JavaScript ',
            'React is a JavaScript ',
        ],
    },
  ];

function Faqs() {

    const [isSideNavOpen, setIsSideNavOpen] = useState(false);
    
        const toggleSideNav = () => {
        setIsSideNavOpen(!isSideNavOpen);
        };

    // Set the first question as open by default
    const [openIndex, setOpenIndex] = useState(0);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

  return (
    <div className="HubPage_UI">
      <SideNav isOpen={isSideNavOpen} toggleSideNav={toggleSideNav} />
      <Header isSideNavOpen={isSideNavOpen}/>
      <MainContent isSideNavOpen={isSideNavOpen}>
          <div className='min-h-screen'>
            <div className="px-6 pt-12 min-h-screen">
                <div className="faqs_Page min-h-screen">
                    <div className="faqs_Heading pt-4">
                        <h1 className="faqs_Title text-bold text-3xl py-2">FAQS</h1>
                    </div>
                    <div className="relative faqs_Banner">
                        <img
                            src=""
                            alt="Faqs Banner"
                            className="w-full h-80 object-cover"
                        />
                        <div className="absolute faqs_Content flex flex-col inset-0">
                            <div className="text-center faqs_Title">
                                <h3>
                                    We're here to help you
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                    <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
                    <ul>
        {FAQS.map((faq, index) => {
          // Ensure `answers` is an array, or default to an empty array
          const answers = Array.isArray(faq.answers) ? faq.answers : [];

          return (
            <li key={index} className="mb-4">
              <div className="bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full text-left p-2 flex justify-between items-center focus:outline-none"
                >
                  <h3 className="font-semibold">{faq.question}</h3>
                  <svg
                    className={`w-4 h-4 transform transition-transform ${
                      openIndex === index ? 'rotate-180' : 'rotate-0'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="p-3 bg-gray-50 rounded-b-lg">
                    {answers.length > 0 ? (
                      <ul className="list-disc list-inside">
                        {answers.map((answer, i) => (
                          <li key={i} className="mt-2 text-gray-700">
                            {answer}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-700">No answers available.</p>
                    )}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
                    </div>
                </div>
            </div>
          </div>
        </MainContent>
    </div>
  )
}

export default Faqs