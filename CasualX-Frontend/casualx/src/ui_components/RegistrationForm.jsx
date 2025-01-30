import React, { useState } from 'react';

function RegistrationForm() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        displayName: '',
        country: '',
        state: '',
        city: '',
        dob: '',
        gender: '',
        mobile: '',
        education: '',
        occupation: '',
        about: '',
        ethnicity: '',
        bustSize: '',
        height: '',
        weight: '',
        build: '',
        looks: '',
        smoker: '',
        sexualOrientation: '',
        availabilityIncall: '',
        availabilityOutcall: '',
        languageSpoken: '',
        languageLevel: '',
    });

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return <Step1 formData={formData} handleChange={handleChange} nextStep={nextStep} />;
            case 2:
                return <Step2 formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />;
            case 3:
                return <Step3 formData={formData} handleChange={handleChange} prevStep={prevStep} />;
            default:
                return <Step1 formData={formData} handleChange={handleChange} nextStep={nextStep} />;
        }
  };
  return (
    <Card>
      {renderStep()}
    </Card>
  )
}

export default RegistrationForm