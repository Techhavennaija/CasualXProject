import React, { useState } from "react";
import axios from "axios";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Card from "./Card";

function RegistrationForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    displayName: "",
    country: "",
    countryCode: "", // Add country code field
    state: "",
    city: "",
    dob: "",
    gender: "",
    mobile: "",
    education: "",
    occupation: "",
    about: "",
    ethnicity: "",
    bustSize: "",
    height: "",
    weight: "",
    build: "",
    looks: "",
    smoker: "",
    sexualOrientation: "",
    availabilityIncall: "",
    availabilityOutcall: "",
    languageSpoken: "",
    languageLevel: "",
    services: [],
    currency: "", // Add currency field
    oneHourRateIncall: "", // Add 1-hour rate fields
    oneHourRateOutcall: "",
    overnightRateIncall: "", // Add overnight rate fields
    overnightRateOutcall: "",
    weekendRateIncall: "", // Add weekend rate fields
    weekendRateOutcall: "",
    photos: [], // Add photos field
    verificationPhoto: null, // Add verification photo field
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error on change
  };

  // Handle file upload
  const handleFileUpload = (e, field) => {
    const file = e.target.files[0];
    setFormData({ ...formData, [field]: file });
  };

  // Handle multi-select for services
  const handleServiceChange = (service) => {
    let updatedServices;
    if (formData.services.includes(service)) {
      updatedServices = formData.services.filter((s) => s !== service);
    } else {
      updatedServices = [...formData.services, service];
    }
    setFormData({ ...formData, services: updatedServices });
  };

  // Validate email
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Validate step 1
  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = "Username is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.password) newErrors.password = "Password is required.";
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required.";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }
    if (!formData.displayName)
      newErrors.displayName = "Display Name is required.";
    if (!formData.bio) newErrors.bio = "Bio is required.";
    if (!formData.country) newErrors.country = "Country is required.";
    if (!formData.state) newErrors.state = "State is required.";
    if (!formData.city) newErrors.city = "City is required.";
    if (!formData.dob) newErrors.dob = "Date of Birth is required.";
    if (!formData.gender) newErrors.gender = "Gender is required.";
    if (!formData.mobile) newErrors.mobile = "Mobile Number is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Validate step 2
  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.education) newErrors.education = "Education is required.";
    if (!formData.occupation) newErrors.occupation = "Occupation is required.";
    if (!formData.about) newErrors.about = "About is required.";
    if (!formData.ethnicity) newErrors.ethnicity = "Ethnicity is required.";
    if (!formData.bustSize) newErrors.bustSize = "Bust Size is required.";
    if (!formData.height) newErrors.height = "Height is required.";
    if (!formData.weight) newErrors.weight = "Weight is required.";
    if (!formData.build) newErrors.build = "Build is required.";
    if (!formData.looks) newErrors.looks = "Looks are required.";
    if (!formData.smoker) newErrors.smoker = "Smoker status is required.";
    if (!formData.sexualOrientation)
      newErrors.sexualOrientation = "Sexual Orientation is required.";
    if (!formData.availability)
      newErrors.availability = "Availability is required.";
    if (!formData.service) newErrors.service = "Service is required.";
    if (!formData.languageSpoken)
      newErrors.languageSpoken = "Language Spoken is required.";
    if (!formData.languageLevel)
      newErrors.languageLevel = "Language Level is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Validate step 3
  const validateStep3 = () => {
    if (formData.services.length < 5) {
      setErrors({ services: "Please select at least 5 services." });
      return false;
    }
    return true;
  };

  // Validate step 4
  const validateStep4 = () => {
    const newErrors = {};
    if (!formData.currency) newErrors.currency = "Currency is required.";
    if (!formData.oneHourRate1)
      newErrors.oneHourRate1 = "1 Hour Rate is required.";
    if (!formData.overnightRate1)
      newErrors.overnightRate1 = "Overnight Rate is required.";
    if (!formData.weekendRate1)
      newErrors.weekendRate1 = "Weekend Rate is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Validate step 5
  const validateStep5 = () => {
    if (formData.photos.length < 4) {
      setErrors({ photos: "Please upload at least 4 photos." });
      return false;
    }
    return true;
  };

  // Validate step 6
  const validateStep6 = () => {
    if (!formData.verificationPhoto) {
      setErrors({ verificationPhoto: "Verification photo is required." });
      return false;
    }
    return true;
  };

  // Handle next step
  const nextStep = () => {
    let isValid = false;
    switch (step) {
      case 1:
        isValid = validateStep1();
        break;
      case 2:
        isValid = validateStep2();
        break;
      case 3:
        isValid = validateStep3();
        break;
      case 4:
        isValid = validateStep4();
        break;
      case 5:
        isValid = validateStep5();
        break;
      case 6:
        isValid = validateStep6();
        break;
      default:
        isValid = true;
    }

    if (isValid) {
      setStep(step + 1);
    }
  };

  // Handle previous step
  const prevStep = () => {
    setStep(step - 1);
  };

  // Submit form
  const submitForm = async () => {
    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        if (key === "photos" || key === "verificationPhoto") {
          formDataToSend.append(key, formData[key]);
        } else {
          formDataToSend.append(key, JSON.stringify(formData[key]));
        }
      }

      const response = await axios.post(
        "http://127.0.0.1:8000/api/register/",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Form submitted successfully:", response.data);
      alert("Registration successful!");
    } catch (error) {
      console.error(
        "Error submitting form:",
        error.response?.data || error.message
      );
      alert("Registration failed. Please try again.");
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step1
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
            errors={errors}
            setFormData={setFormData}
          />
        );
      case 2:
        return (
          <Step2
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 3:
        return (
          <Step3
            formData={formData}
            handleChange={handleChange}
            prevStep={prevStep}
          />
        );
      case 4:
        return (
          <Step4
            formData={formData}
            handleChange={handleChange}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        );
      case 5:
        return (
          <Step5
            formData={formData}
            handleChange={handleChange}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        );
      case 6:
        return (
          <Step6
            formData={formData}
            handleChange={handleChange}
            prevStep={prevStep}
            submitForm={submitForm}
          />
        );
      default:
        return (
          <Step1
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
          />
        );
    }
  };
  return <Card>{renderStep()}</Card>;
}

export default RegistrationForm;
