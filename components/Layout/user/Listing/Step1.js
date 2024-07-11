import React, { useState } from "react";
import Location_Filter from "@/components/Location_Filter";
import { CldUploadWidget } from "next-cloudinary";
import { toast } from "react-toastify";
import MultiDatePicker from "@/components/MultiDatePicker";
import BasicTimePicker from "@/components/TimePicker";
import BasicTimePicker2 from "@/components/TimePicker2";

const Step1 = ({
  formData,
  handleInputChange,
  setFormData,
  handleStepClick,
  errors,
  setErrors,
}) => {
  const [selectprofile, setSelectProfile] = useState();
  const [selectcover, setSelectCover] = useState();

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return (
    <div className="row">
      <div className="login-main add-list posr">
        <div className="log-bor">&nbsp;</div>
        <span className="udb-inst">step 1</span>
        <div className="log log-1">
          <div className="login">
            <h4>Listing Details</h4>
            {/*FILED START*/}
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <input
                    id="listing_name"
                    value={formData.listing_name}
                    onChange={handleInputChange}
                    name="listing_name"
                    type="text"
                    className="form-control"
                    placeholder="Listing name *"
                  />
                  {errors.listing_name && (
                    <label htmlFor="listing_name" className="error">
                      {errors.listing_name}
                    </label>
                  )}
                </div>
              </div>
            </div>
            {/*FILED END*/}
            {/*FILED START*/}
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    value={formData.phone_number}
                    onChange={handleInputChange}
                    name="phone_number"
                    className="form-control"
                    placeholder="Phone number"
                  />
                  {errors.phone_number && (
                    <label htmlFor="phone_number" className="error">
                      {errors.phone_number}
                    </label>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    value={formData.listing_email}
                    onChange={handleInputChange}
                    name="listing_email"
                    className="form-control"
                    placeholder="Email id"
                  />
                  {errors.listing_email && (
                    <label htmlFor="listing_email" className="error">
                      {errors.listing_email}
                    </label>
                  )}
                </div>
              </div>
            </div>
            {/*FILED END*/}
            {/*FILED START*/}
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <input
                    type="text"
                    value={formData.whatsapp_number}
                    onChange={handleInputChange}
                    name="whatsapp_number"
                    className="form-control"
                    placeholder="Whatsapp Number"
                  />
                </div>
              </div>
            </div>
            {/*FILED END*/}
            {/*FILED START*/}
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <input
                    type="text"
                    value={formData.website}
                    onChange={handleInputChange}
                    name="website"
                    className="form-control"
                    placeholder="Enter Website"
                  />
                </div>
              </div>
            </div>
            {/*FILED END*/}
            {/*FILED START*/}
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <input
                    type="text"
                    value={formData.listing_address}
                    onChange={handleInputChange}
                    name="listing_address"
                    className="form-control"
                    placeholder="Shop address"
                  />
                  {errors.listing_address && (
                    <label htmlFor="listing_address" className="error">
                      {errors.listing_address}
                    </label>
                  )}
                </div>
              </div>
            </div>
            {/*FILED END*/}
            {/*FILED START*/}

            <Location_Filter
              errors={errors}
              setErrors={setErrors}
              formData={formData}
              InputChange={handleInputChange}
              setFormData={setFormData}
            />
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <textarea
                    value={formData.listing_detail}
                    onChange={handleInputChange}
                    className="form-control"
                    id="listing_description"
                    name="listing_detail"
                    placeholder="Details about your listing"
                  />
                  {errors.listing_detail && (
                    <label htmlFor="listing_detail" className="error">
                      {errors.listing_detail}
                    </label>
                  )}
                </div>
              </div>
            </div>
            {/*FILED END*/}
            {/*FILED START*/}
            <div className="row px-4">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Choose profile image</label>
                  <div className="fil-img-uplo">
                    <span
                      className={`dumfil ${
                        selectprofile ? "!text-green-600" : ""
                      }`}
                    >
                      {selectprofile ? selectprofile : "Upload a file"}
                    </span>
                    <CldUploadWidget
                      signatureEndpoint="/api/sign-cloudinary-params"
                      uploadPreset="listing_image"
                      onSuccess={(result, { widget }) => {
                        setFormData((prevFormData) => ({
                          ...prevFormData,
                          listing_image: result?.info?.secure_url,
                        }));
                        toast.success("your image uploaded successfully!");
                        setSelectProfile(result?.info?.original_filename);
                        console.log(result?.info);
                        widget.close();
                      }}
                    >
                      {({ open }) => {
                        function handleOnClick() {
                          open();
                        }
                        return (
                          <button type="button" onClick={handleOnClick}>
                            upload image
                          </button>
                        );
                      }}
                    </CldUploadWidget>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Choose cover image</label>
                  <div className="fil-img-uplo">
                    <span
                      className={`dumfil ${
                        selectcover ? "!text-green-600" : ""
                      }`}
                    >
                      {selectcover ? selectcover : " Upload a file"}
                    </span>
                    <CldUploadWidget
                      signatureEndpoint="/api/sign-cloudinary-params"
                      uploadPreset="listing_image"
                      onSuccess={(result, { widget }) => {
                        setFormData((prevFormData) => ({
                          ...prevFormData,
                          cover_image: result?.info?.secure_url,
                        }));
                        toast.success("your image uploaded successfully!");
                        setSelectCover(result?.info?.original_filename);
                        widget.close();
                      }}
                    >
                      {({ open }) => {
                        function handleOnClick() {
                          open();
                        }
                        return (
                          <button type="button" onClick={handleOnClick}>
                            upload image
                          </button>
                        );
                      }}
                    </CldUploadWidget>
                  </div>
                </div>
              </div>
            </div>
            {/*FILED END*/}
            {/*FILED START*/}

            <div className="row bor-box">
              <div className="col-md-12">
                <div className="form-group">
                  <label>
                    Enter your service locations... (ex:) Rohini, Vaishali,
                    Indirapuram
                  </label>
                  <textarea
                    value={formData.service_location}
                    onChange={handleInputChange}
                    className="form-control valid"
                    id="service_locations"
                    name="service_location"
                    placeholder="Enter your service locations... 
        (i.e) London, Dallas, Wall Street, Opera House"
                  />
                </div>
              </div>
            </div>
            <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <label>Weekly Off</label>
                <ul>
                  {days.map((item, index) => (
                    <li key={index}>
                      <div className="chbox">
                        <input
                          type="checkbox"
                          name="admin_user_options"
                          checked={formData?.business_time?.week_off.includes(
                            item
                          )}
                          value={item}
                          onChange={handleInputChange}
                          id={index}
                        />
                        <label htmlFor={index}>{item} </label>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <div className="form-group">
                  <label className="mr-2">Monthly Off</label>
                  <MultiDatePicker
                    formData={formData}
                    setFormData={setFormData}
                  />
                </div>
                <div className="form-group">
                  <BasicTimePicker
                    title="open on"
                    formData={formData}
                    setFormData={setFormData}
                  />
                </div>
                <div className="form-group">
                  <BasicTimePicker2
                    title="close on"
                    formData={formData}
                    setFormData={setFormData}
                  />
                </div>
              </div>
            </div>
            </div>
            <button
              type="button"
              onClick={() => handleStepClick(2)}
              name="listing_submit"
              className="btn btn-primary"
            >
              Next
            </button>
          </div>
          {/*FILED END*/}
        </div>
      </div>
    </div>
  );
};

export default Step1;
