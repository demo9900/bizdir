import { client } from "@/lib/apollo";
import { CREATE_ENQUIRY } from "@/lib/mutation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Enquiry = () => {
  const [showBox, setShowBox] = useState(false);
  const [formData, setFormData] = useState({
    enquirer_name: "",
    enquirer_email: "",
    enquirer_mobile: "",
    message: "",
  });

  const handleShowBox = () => setShowBox(!showBox);

  const handleFormChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmitEnquiry = async (e) => {
    e.preventDefault();
  
    const enquiryData = {
      ...formData,
      enquiry_type: "internal",
    };

    try {
      const { data, errors } = await client.mutate({
        mutation: CREATE_ENQUIRY,
        variables: { data: enquiryData },
      });

      console.log(data);

      if (errors || data.createEnquiry.code !== 201) {
        throw new Error("Something went wrong");
      }

      toast.success("Enquiry created successfully!!");
      console.log(data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  

  return (
    <div>
      <span className="btn-ser-need-ani" onClick={handleShowBox}>
        Help &amp; Support
      </span>
      <div className={`ani-quo-form ${showBox ? "ani-quo-form-act" : ""}`}>
        <i className="material-icons ani-req-clo" onClick={handleShowBox}>
          close
        </i>
        <div className="tit">
          <h3>
            What service do you need? <span>BizBook will help you</span>
          </h3>
        </div>
        <div className="hom-col-req">
          {/* <div
            id="home_slide_enq_success"
            className="log"
            style={{ display: "none" }}
          >
            <p>Your Enquiry Is Submitted Successfully!!!</p>
          </div>
          <div
            id="home_slide_enq_fail"
            className="log"
            style={{ display: "none" }}
          >
            <p>Oops!! Something Went Wrong Try Later!!!</p>
          </div>
          <div
            id="home_slide_enq_same"
            className="log"
            style={{ display: "none" }}
          >
            <p>You cannot make enquiry on your own listing!!</p>
          </div> */}
          <form
            // name="home_slide_enquiry_form"
            id="home_slide_enquiry_form"
            // method="post"
            // enctype="multipart/form-data"
            onSubmit={handleSubmitEnquiry}
          >
            <input
              type="hidden"
              className="form-control"
              name="listing_id"
              value="0"
              placeholder=""
              required=""
            />
            <input
              type="hidden"
              className="form-control"
              name="listing_user_id"
              value="0"
              placeholder=""
              required=""
            />
            <input
              type="hidden"
              className="form-control"
              name="enquiry_sender_id"
              value=""
              placeholder=""
              required=""
            />
            <input
              type="hidden"
              className="form-control"
              name="enquiry_source"
              value="Website"
              placeholder=""
              required=""
            />
            <div className="form-group">
              <input
                type="text"
                name="enquirer_name"
                value={formData.enquirer_name}
                onChange={handleFormChange}
                required="required"
                className="form-control"
                placeholder="Enter name*"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Enter email*"
                required="required"
                value={formData.enquirer_email}
                onChange={handleFormChange}
                name="enquirer_email"
                pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$"
                title="Invalid email address"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                value={formData.enquirer_mobile}
                onChange={handleFormChange}
                name="enquirer_mobile"
                placeholder="Enter mobile number *"
                pattern="[7-9]{1}[0-9]{9}"
                title="Phone number starting with 7-9 and remaining 9 digit with 0-9"
                required=""
              />
            </div>
            <div className="form-group">
              {/* <select
                name="enquiry_category"
                id="enquiry_category"
                onChange={handleFormChange}
                className="form-control chosen-select"
                // style={{ display: "none" }}
              >
                <option value="">Select Category</option>
                <option value="20">Restaurants</option>
                <option value="19">Wedding halls</option>
                <option value="17">Pet shop</option>
                <option value="16">Technology</option>
                <option value="15">Spa and Facial</option>
                <option value="10">Real Estate</option>
                <option value="8">Sports</option>
                <option value="7">Education</option>
                <option value="6">Electricals</option>
                <option value="5">Automobiles</option>
                <option value="3">Transportation</option>
                <option value="2">Hospitals</option>
              </select> */}
              {/* <div
                className="chosen-container chosen-container-single"
                title=""
                id="enquiry_category_chosen"
                style={{ width: "293px" }}
              >
                <a className="chosen-single">
                  <span>Select Category</span>
                  <div>
                    <b></b>
                  </div>
                </a>
                <div className="chosen-drop">
                  <div className="chosen-search">
                    <input
                      className="chosen-search-input"
                      type="text"
                      autocomplete="off"
                    />
                  </div>
                  <ul className="chosen-results">
                    <li
                      className="active-result result-selected"
                      data-option-array-index="0"
                    >
                      Select Category
                    </li>
                    <li className="active-result" data-option-array-index="1">
                      Restaurants
                    </li>
                    <li className="active-result" data-option-array-index="2">
                      Wedding halls
                    </li>
                    <li className="active-result" data-option-array-index="3">
                      Pet shop
                    </li>
                    <li className="active-result" data-option-array-index="4">
                      Technology
                    </li>
                    <li className="active-result" data-option-array-index="5">
                      Spa and Facial
                    </li>
                    <li className="active-result" data-option-array-index="6">
                      Real Estate
                    </li>
                    <li className="active-result" data-option-array-index="7">
                      Sports
                    </li>
                    <li className="active-result" data-option-array-index="8">
                      Education
                    </li>
                    <li className="active-result" data-option-array-index="9">
                      Electricals
                    </li>
                    <li className="active-result" data-option-array-index="10">
                      Automobiles
                    </li>
                    <li className="active-result" data-option-array-index="11">
                      Transportation
                    </li>
                    <li className="active-result" data-option-array-index="12">
                      Hospitals
                    </li>
                  </ul>
                </div>
              </div> */}
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                rows="3"
                value={formData.message}
                onChange={handleFormChange}
                name="message"
                placeholder="Enter your query or message"
              ></textarea>
            </div>
            <input type="hidden" id="source" value="" />
            <button
              type="submit"
              id="home_slide_enquiry_submit"
              name="home_slide_enquiry_submit"
              className="btn btn-primary"
            >
              Submit Requirements
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Enquiry;
