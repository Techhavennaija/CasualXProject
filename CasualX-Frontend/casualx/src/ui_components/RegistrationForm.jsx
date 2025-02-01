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
        services: [],
        currency: '', // Add currency field
        oneHourRateIncall: '', // Add 1-hour rate fields
        oneHourRateOutcall: '',
        overnightRateIncall: '', // Add overnight rate fields
        overnightRateOutcall: '',
        weekendRateIncall: '', // Add weekend rate fields
        weekendRateOutcall: '',
        photos: [], // Add photos field
        verificationPhoto: null, // Add verification photo field
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
            case 4:
                return <Step4 formData={formData} handleChange={handleChange} prevStep={prevStep} nextStep={nextStep} />;
            case 5:
                return <Step5 formData={formData} handleChange={handleChange} prevStep={prevStep} nextStep={nextStep} />;
            case 6:
                return <Step6 formData={formData} handleChange={handleChange} prevStep={prevStep} submitForm={submitForm} />;
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