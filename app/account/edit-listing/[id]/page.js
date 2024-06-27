"use client";
import React from "react";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";
import { CldUploadWidget } from "next-cloudinary";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";
import { GETLISTING } from "@/lib/query";
import { UPDATE_LISTING } from "@/lib/mutation";
import { client } from "@/lib/apollo";
import Step1 from "@/components/Layout/user/Listing/Step1";
import Step2 from "@/components/Layout/user/Listing/Step2";
import Step3 from "@/components/Layout/user/Listing/Step3";
import Step4 from "@/components/Layout/user/Listing/Step4";
import Step5 from "@/components/Layout/user/Listing/Step5";

const page = ({ params }) => {
    const { data: session } = useSession();
    const [loading,setLoading] = useState();
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
        state:"",
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
          offer_type:"percent",
          offer_image: "",
        },
        service_location: [],
        service_provided:[],
        youtube_link: "",
        map_url: "",
      });

    const [errors, setErrors] = useState({});
    const validate = () => {
      const newErrors = {};
      if (!formData.listing_name) {
        newErrors.listing_name = 'Listing Name is Required';
      }
      if (!formData.listing_email) {
        newErrors.listing_email = 'email is Required';
      }
      if (!formData.phone_number) {
        newErrors.phone_number = 'Phone Number is Required';
      }
      if (!formData.listing_address) {
        newErrors.listing_address = 'shop address is Required';
      }
      if (!formData.country) {
        newErrors.country = 'country is Required';
      }
      if (!formData.state) {
        newErrors.state = 'State is Required';
      }
      if (!formData.city) {
        newErrors.city = 'city is Required';
      }
      if (!formData.area) {
        newErrors.area = 'area is Required';
      }
      if (!formData.category) {
        newErrors.category = 'Category is Required';
      }
    
      if (!formData.listing_detail) {
        newErrors.listing_detail = 'listing detail is Required';
      }
         
      // Add other validation as needed
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
   
    const getListing = async () => {
        setLoading(true)
        try {
          const { data, errors } = await client.query({
            query: GETLISTING,
            variables: { id: params.id },
          });
    
          if (errors || data.getListing.code !== 200) {
            throw new Error("Something went wrong");
          }
          const {listing} = await data.getListing;
          setFormData((prevFormData) => ({
            ...prevFormData,
        listing_name: listing.listing_name,
        phone_number: listing.phone_number,
        listing_email: listing.listing_email,
        whatsapp_number: listing.whatsapp_number,
        website: listing.website,
        listing_address: listing.listing_address,
        listing_image: listing.listing_image,
        cover_image: listing.cover_image,
        country: listing.country,
        state: listing.state,
        subcategory: listing.subcategory,
        area: listing.area,
        city: listing.city,
        category: listing.category,
        gallery_images: listing.gallery_images,
        subcategory: listing.subcategory,
        tags: listing.tags,
        listing_detail: listing.listing_detail,
        service_location: listing.service_location,
        service_provided: listing.service_provided.map(item =>({name:item.name})),
        offer: {
          offer_name: listing.offer.offer_name,
          offer_amount: listing.offer.offer_amount,
          offer_description: listing.offer.offer_description,
          offer_type: listing.offer.offer_type,
          offer_image: listing.offer.offer_image,
        },
        youtube_link: listing.youtube_link,
        map_url: listing.map_url,
        }));
          console.log(data);
          setLoading(false);
        } catch (error) {
          console.error("Error submitting form:", error);
        }
      };

    useEffect(() => {
        getListing();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [session]);

    const handleInputChange = (event, index) => {
        const { name, value } = event.target;
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
        const id = params.id;
        try {
          // Send GraphQL mutation request to create a listing
          if (validate()) {
            const { data, errors } = await client.mutate({
              mutation: UPDATE_LISTING,
              variables: { id, data: formData },
              context: {
                headers: {
                  Authorization: `Bearer ${session.jwt}`,
                },
              },
            });
    
            if (errors || data.updateListing.code !== 200) {
              throw new Error("Something went wrong");
            }
            toast.success("Listing update successfully");
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
        setCurrentStep(step - 1);
    };
    const steps = [
        <Step1 key="1"
          formData={formData}
          setFormData={setFormData}
          handleInputChange={handleInputChange}
          errors={errors}
          setErrors={setErrors}
          handleStepClick={handleStepClick}
        />,
        <Step2 key="2" handleStepClick={handleStepClick} formData={formData} setFormData={setFormData} handleInputChange={handleInputChange} />,
        <Step3 key="3" handleStepClick={handleStepClick} formData={formData} setFormData={setFormData} handleInputChange={handleInputChange} />,
        <Step4 key="4" handleStepClick={handleStepClick} formData={formData} setFormData={setFormData} handleInputChange={handleInputChange} />
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
                                            {[1, 2, 3, 4, 5].map(
                                                (step, index) => (
                                                    <li key={index}>
                                                        <Link
                                                            href=""
                                                            className={`${
                                                                index ===
                                                                currentStep
                                                                    ? "act"
                                                                    : ""
                                                            }`}
                                                            onClick={() =>
                                                                handleStepClick(
                                                                    step
                                                                )
                                                            }
                                                        >
                                                            {" "}
                                                            <span key={step}>
                                                                Step {index + 1}
                                                            </span>
                                                            <b>
                                                                {
                                                                    stepNames[
                                                                        step - 1
                                                                    ]
                                                                }
                                                            </b>
                                                        </Link>
                                                    </li>
                                                )
                                            )}
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
