"use client";
import React from "react";
import Link from "next/link";
import Location_Filter from "@/components/Location_Filter";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Step1 from "@/components/Layout/user/Listing/Step1";
import Step2 from "@/components/Layout/user/Listing/Step2";
import Step3 from "@/components/Layout/user/Listing/Step3";
import Step4 from "@/components/Layout/user/Listing/Step4";
import Step5 from "@/components/Layout/user/Listing/Step5";

const page = () => {
  const { data: session } = useSession();
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
    service_location: "",
    service_name: "",
    service_image: "",
    youtubelink: "",
    map_url: "",
  });
  console.log(process.env.BACKEND_URL);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
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
  const steps = [
    <Step1 key="1"
      formData={formData}
      setFormData={setFormData}
      handleInputChange={handleInputChange}
    />,
    <Step2 key="2" formData={formData} handleInputChange={handleInputChange} />,
    <Step3 key="3" formData={formData} handleInputChange={handleInputChange} />,
    <Step4 key="4" formData={formData} handleInputChange={handleInputChange} />,
    <Step5 key="5" formData={formData} handleInputChange={handleInputChange} />,
  ];
  const stepNames = ["Besic Info", "Services", "Offers", "Gallery", "Others"];
  const handleStepClick = (step) => {
    setCurrentStep(step - 1);
  };

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
