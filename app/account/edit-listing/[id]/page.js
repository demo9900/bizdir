"use client";
import React from "react";
import Link from "next/link";
import axios from "axios";
import { useState,useEffect } from "react";
import { useSession } from "next-auth/react";
import Step1 from "@/components/Layout/user/Listing/Step1";
import Step2 from "@/components/Layout/user/Listing/Step2";
import Step3 from "@/components/Layout/user/Listing/Step3";
import Step4 from "@/components/Layout/user/Listing/Step4";
import Step5 from "@/components/Layout/user/Listing/Step5";

const page = ({params}) => {
  const { data: session } = useSession();
  const getListing = async () => {
    try {
        console.log("inside getlisting", session.jwt);
        const res = await fetch(process.env.BACKEND_URL + `/api/listing/${params.id}`);

        const data = await res.json();

        console.log(data);
        // setListingData(data);
        console.log("listing function running")
    } catch (error) {
        console.error(error);
    }
};

useEffect(() => {
    getListing();
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [session]);
  console.log('listing id =', params.id)
  const [formData, setFormData] = useState({
    user_name: "test_user",
    listing_name: "",
    phone_number: "",
    email: "",
    whatsapp_number: "",
    website: "",
    shop_address: "",
    country: "",
    cities: [],
    category: "",
    sub_category: [],
    listing_detail: "",
    listing_profile: "",
    listing_cover: "",
    service_location: [],
    service_provided:[],
    youtubelink: "",
    map_url: "",
  });
  console.log(process.env.BACKEND_URL);

  const handleInputChange = (event,index) => {
    const { name, value } = event.target;
    if(name=== 'service_location'){
       // Update service_location with the array of locations
       const locationsArray = value.split(',');
       setFormData((prevFormData) => ({
         ...prevFormData,
         [name]: locationsArray, // Update service_location with the array of locations
       }));
       
    }else if(name=== 'service_provided') {
      const ServiceProvided = [...formData.service_provided];
    ServiceProvided[index] = event.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      service_provided: ServiceProvided,
    }));
    } else{
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
    console.log(formData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const jwt = session.jwt;
    try {
      // Send POST request to /api/listing endpoint with formData
      const response = await axios.post(
        `${process.env.BACKEND_URL}/api/listing `,
        formData,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      console.log(response.data); // Handle response from server
      // Optionally, you can reset the form data after successful submission
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error
    }
  };

  const [currentStep, setCurrentStep] = useState(0);
  const handleStepClick = (step) => {
    setCurrentStep(step - 1);
  };
  const steps = [
    <Step1 key="1"
      formData={formData}
      setFormData={setFormData}
      handleInputChange={handleInputChange}
      handleStepClick={handleStepClick}
    />,
    <Step2 key="2" handleStepClick={handleStepClick} formData={formData} setFormData={setFormData} handleInputChange={handleInputChange} />,
    <Step3 key="3" handleStepClick={handleStepClick} formData={formData} handleInputChange={handleInputChange} />,
    <Step4 key="4" handleStepClick={handleStepClick} formData={formData} handleInputChange={handleInputChange} />,
    <Step5 key="5" handleStepClick={handleStepClick} formData={formData} handleInputChange={handleInputChange} />,
  ];
  const stepNames = ["Besic Info", "Services", "Offers", "Gallery", "Others"];
  

  return (
    <section>
      <div className="ad-com">
        <div className="ad-dash leftpadd">
          <div className="login-reg">
            <div className="container">
              <div className="row">
                <div className="add-list-ste">
                  <div className="add-list-ste-inn">
                    <ul>
                      {[1, 2, 3, 4, 5].map((step, index) => (
                        <li key={index}>
                          <Link
                            href=""
                            className={`${index === currentStep ? "act" : ""}`}
                            onClick={() => handleStepClick(step)}
                          >
                            {" "}
                            <span key={step}>Step {index + 1}</span>
                            <b>{stepNames[step - 1]}</b>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <form
                onSubmit={handleSubmit}
                className="listing_form"
                id="listing_form"
                name="listing_form"
              >
                {steps[currentStep]}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
