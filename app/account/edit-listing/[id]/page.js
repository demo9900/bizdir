"use client";
import React from "react";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";
import { CldUploadWidget } from "next-cloudinary";
import { useSession } from "next-auth/react";
import Step1 from "@/components/Layout/user/Listing/Step1";
import Step2 from "@/components/Layout/user/Listing/Step2";
import Step3 from "@/components/Layout/user/Listing/Step3";
import Step4 from "@/components/Layout/user/Listing/Step4";
import Step5 from "@/components/Layout/user/Listing/Step5";

const page = ({ params }) => {
    const { data: session } = useSession();
    const [formData, setFormData] = useState({
        user_name: session?.user?.name,
        listing_name: "",
        phone_number: "",
        email: "",
        whatsapp_number: "",
        listing_image:"",
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
        service_provided: [],
        youtube_link: "",
        map_url: "",
    });

    const getListing = async () => {
        try {
            const res = await fetch(
                process.env.BACKEND_URL + `/api/listing/${params.id}`
            );

            const data = await res.json();
            console.log(data);
            setFormData((prevFormData) => ({
                ...prevFormData,
                listing_name: data.listing_name,
                phone_number: data.phone_number,
                email: data.email,
                whatsapp_number: data.whatsapp_number,
                website: data.website,
                shop_address: data.shop_address,
                country: data.country,
                cities: data.cities,
                category: data.category,
                sub_category: data.sub_category,
                listing_detail: data.listing_detail,
                service_location: data.service_location,
                service_provided: data.service_provided,
                youtube_link: data.youtube_link,
                map_url: data.map_url,
            }));
            console.log("listing function running");
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getListing();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [session]);
    console.log("listing id =", params.id);

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
            const ServiceProvided = [...formData.service_provided];
            ServiceProvided[index] = event.target.value;
            setFormData((prevFormData) => ({
                ...prevFormData,
                service_provided: ServiceProvided,
            }));
        } else {
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
            const response = await axios.patch(
                `${process.env.BACKEND_URL}/api/listing/${params.id}`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            );
            console.log(response.data);
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    const [currentStep, setCurrentStep] = useState(0);
    const handleStepClick = (step) => {
        setCurrentStep(step - 1);
    };
    const steps = [
        <Step1
            key="1"
            formData={formData}
            setFormData={setFormData}
            handleInputChange={handleInputChange}
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
            handleInputChange={handleInputChange}
        />,
        <Step4
            key="4"
            handleStepClick={handleStepClick}
            formData={formData}
            handleInputChange={handleInputChange}
        />,
        <Step5
            key="5"
            handleStepClick={handleStepClick}
            formData={formData}
            handleInputChange={handleInputChange}
        />,
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
