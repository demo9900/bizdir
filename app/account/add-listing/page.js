"use client";
import React from "react";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { CREATE_LISTING } from "@/lib/mutation";
import { toast } from "react-toastify";
import { client } from "@/lib/apollo";
import Step1 from "@/components/Layout/user/Listing/Step1";
import Step2 from "@/components/Layout/user/Listing/Step2";
import Step3 from "@/components/Layout/user/Listing/Step3";
import Step4 from "@/components/Layout/user/Listing/Step4";
import Step5 from "@/components/Layout/user/Listing/Step5";

const page = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [formData, setFormData] = useState({
    user_name: session?.user?.name,
    listing_name: "",
    phone_number: "",
    listing_email: "",
    whatsapp_number: "",
    website: "",
    listing_address: "",
    country: "",
    state: "",
    city: "",
    area: "",
    category: "",
    subcategory: "",
    tags: [],
    listing_detail: "",
    gallery_images: [],
    listing_image: "",
    cover_image: "",
    offer: {
      offer_name: "",
      offer_amount: "",
      offer_description: "",
      offer_type: "percent",
      offer_image: "",
    },
    business_time: {
      week_off: [],
      month_off: [],
      open_time: "",
      close_time: "",
    },
    service_location: [],
    service_provided: [],
    youtube_link: "",
    map_url: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.listing_name) {
      newErrors.listing_name = "Listing Name is Required";
    }
    if (!formData.listing_email) {
      newErrors.listing_email = "email is Required";
    }
    if (!formData.phone_number) {
      newErrors.phone_number = "Phone Number is Required";
    }
    if (!formData.listing_address) {
      newErrors.listing_address = "shop address is Required";
    }
    if (!formData.country) {
      newErrors.country = "country is Required";
    }
    if (!formData.state) {
      newErrors.state = "State is Required";
    }
    if (!formData.city) {
      newErrors.city = "city is Required";
    }
    if (!formData.area) {
      newErrors.area = "area is Required";
    }
    if (!formData.category) {
      newErrors.category = "Category is Required";
    }

    if (!formData.listing_detail) {
      newErrors.listing_detail = "listing detail is Required";
    }

    // Add other validation as needed
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (event, index) => {
    const { name, value, type, checked } = event.target;
    if (name === "service_location") {
      // Update service_location with the array of locations
      const locationsArray = value.split(",");
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: locationsArray, // Update service_location with the array of locations
      }));
    } else if (name === "service_provided") {
      const updatedServiceProvided = [...formData.service_provided];

      // If the index exceeds the length of the updatedServiceProvided array,
      // it means a new service object needs to be added
      if (index >= updatedServiceProvided.length) {
        updatedServiceProvided.push({ name: "", image: "" });
      }

      // Update the corresponding field (name or image) of the service object at the specified index
      updatedServiceProvided[index] = {
        ...updatedServiceProvided[index],
        name: value,
      };

      // Update the formData state with the modified service_provided array
      setFormData((prevFormData) => ({
        ...prevFormData,
        service_provided: updatedServiceProvided,
      }));
    } else if (
      name === "offer_name" ||
      name === "offer_amount" ||
      name === "offer_description" ||
      name === "offer_type"
    ) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        offer: {
          ...prevFormData.offer, // Spread the existing offers object
          [name]: value, // Update the specific field
        },
      }));
    } else if (type === "checkbox") {
      if (checked) {
        setFormData((prevFormData) => ({
          ...prevFormData,
          business_time: {
            ...prevFormData.business_time,
            week_off: [...prevFormData.business_time.week_off, value],
          },
        }));
      } else {
        setFormData((prevFormData) => ({
          ...prevFormData,
          business_time: {
            ...prevFormData.business_time,
            week_off: prevFormData.business_time.week_off.filter(
              (item) => item !== value
            ),
          },
        }));
      }
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
      if (value) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "",
        }));
      }
    }

    console.log(formData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const jwt = session.jwt;

    try {
      // Send GraphQL mutation request to create a listing
      if (validate()) {
        const { data, errors } = await client.mutate({
          mutation: CREATE_LISTING,
          variables: { data: formData },
          context: {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          },
        });

        if (errors || data.createListing.code !== 201) {
          throw new Error("Something went wrong");
        }

        toast.success("Listing created successfully");
        router.push("/account/db-all-listing");
        console.log(data);
      } else {
        toast.error("Please fill all required fields");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error
    }
  };

  const [currentStep, setCurrentStep] = useState(0);

  const handleStepClick = (step) => {
    if (validate()) {
      setCurrentStep(step - 1);
    } else {
      toast.error("Please fill all required fields");
    }
  };

  const steps = [
    <Step1
      key="1"
      formData={formData}
      setFormData={setFormData}
      handleInputChange={handleInputChange}
      errors={errors}
      setErrors={setErrors}
      handleStepClick={handleStepClick}
    />,
    <Step2
      key="2"
      handleStepClick={handleStepClick}
      formData={formData}
      setFormData={setFormData}
      handleInputChange={handleInputChange}
    />,
    <Step3
      key="3"
      handleStepClick={handleStepClick}
      formData={formData}
      setFormData={setFormData}
      handleInputChange={handleInputChange}
    />,
    <Step4
      key="4"
      handleStepClick={handleStepClick}
      formData={formData}
      setFormData={setFormData}
      handleInputChange={handleInputChange}
    />,
  ];
  const stepNames = ["Besic Info", "Services", "Offers", "Gallery", "Others"];

  return (
    <section>
      <div className="ad-com">
        <div className="ad-dash leftpadd">
          <div className="login-reg animation-bg">
            <div className="container">
              <div className="row">
                <div className="add-list-ste">
                  <div className="add-list-ste-inn">
                    <ul>
                      {[1, 2, 3, 4].map((step, index) => (
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
