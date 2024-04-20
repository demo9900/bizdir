"use client";
import { WhatsApp } from "@mui/icons-material";
import axios from "axios";
import React from "react";
import { useState } from "react";
const page = () => {
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

    if (name === "service_name") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        service_name: value,
        services: [{ name: value, image: prevFormData.service_image }],
      }));
    } else if (name === "cities") {
      const selectedOptions = event.target.selectedOptions;
      const selectedCities = Array.from(selectedOptions).map(
        (option) => option.value
      );
      setFormData((prevFormData) => ({
        ...prevFormData,
        cities: [
          ...prevFormData.cities,
          ...selectedCities.filter(
            (city) => !prevFormData.cities.includes(city)
          ),
        ],
      }));
      console.log(formData.cities);
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send POST request to /api/listing endpoint with formData
      const response = await axios.post(
        `${process.env.BACKEND_URL}/api/listing `,
        formData
      );
      console.log(response.data); // Handle response from server
      // Optionally, you can reset the form data after successful submission
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error
    }
  };
  return (
    <section>
      <div className="ad-com">
        <div className="ad-dash leftpadd">
          <div className="login-reg">
            <div className="container">
              <form
                onSubmit={handleSubmit}
                className="listing_form"
                id="listing_form"
                name="listing_form"
                method="post"
                encType="multipart/form-data"
              >
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
                                required="required"
                                className="form-control"
                                placeholder="Listing name *"
                              />
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
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                value={formData.email}
                                onChange={handleInputChange}
                                name="email"
                                className="form-control"
                                placeholder="Email id"
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
                                placeholder="Webiste(www.rn53themes.net)"
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
                                value={formData.shop_address}
                                onChange={handleInputChange}
                                name="shop_address"
                                required="required"
                                className="form-control"
                                placeholder="Shop address"
                              />
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
                                name="listing_lat"
                                className="form-control"
                                placeholder="Latitude i.e 40.730610"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                name="listing_lng"
                                className="form-control"
                                placeholder="Longitude i.e -73.935242"
                              />
                            </div>
                          </div>
                        </div>
                        {/*FILED END*/}
                        {/*FILED START*/}
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <select
                                value={formData.country}
                                onChange={handleInputChange}
                                name="country"
                                required="required"
                                className="form-control"
                              >
                                <option value>Select your Country</option>
                                <option value="India">India</option>
                                <option value="United Kingdom">
                                  United Kingdom
                                </option>
                                <option value="United States">
                                  United States
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                        {/* <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                        <select 
                        value={formData.cities}
                        isMulti
                        onChange={handleInputChange} name="cities" required="required" className="form-control">
                            <option value>Select your city</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Gujrat">Gujrat</option>
                        </select>
                        </div>
                      </div>
                    </div> */}
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <select
                                data-placeholder="Select your Cities"
                                name="city_id[]"
                                id="city_id"
                                multiple
                                required="required"
                                className="chosen-select form-control"
                                style={{ display: "none" }}
                              >
                                <option value={48042}>Chennai</option>
                                <option value={48043}>Chennai 2</option>
                              </select>
                              <div
                                className="chosen-container chosen-container-multi"
                                title
                                id="city_id_chosen"
                                style={{ width: 640 }}
                              >
                                <ul className="chosen-choices">
                                  <li className="search-field">
                                    <input
                                      className="chosen-search-input default"
                                      type="text"
                                      autoComplete="off"
                                      defaultValue="Select your Cities"
                                      style={{ width: "137.062px" }}
                                    />
                                  </li>
                                </ul>
                                <div className="chosen-drop">
                                  <ul className="chosen-results">
                                    <li
                                      className="result-selected"
                                      data-option-array-index={0}
                                    >
                                      Chennai
                                    </li>
                                    <li
                                      className="result-selected"
                                      data-option-array-index={1}
                                    >
                                      Chennai 2
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/*FILED END*/}
                        {/*FILED START*/}
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <select
                                value={formData.category}
                                onChange={handleInputChange}
                                name="category"
                                id="category_id"
                                className="form-control"
                              >
                                <option value>Select Category</option>
                                <option value="Wedding halls">
                                  Wedding halls
                                </option>
                                <option value="Hotel &amp; Food">
                                  Hotel &amp; Food
                                </option>
                                <option value="Pet shop">Pet shop</option>
                                <option value="Digital Products">
                                  Digital Products
                                </option>
                                <option value="Spa and Facial">
                                  Spa and Facial
                                </option>
                                <option value="Real Estate">Real Estate</option>
                                <option value="Sports">Sports</option>
                                <option value="Education">Education</option>
                                <option value="Electricals">Electricals</option>
                                <option value="Automobiles">Automobiles</option>
                                <option value="Transportation">
                                  Transportation
                                </option>
                                <option value="Hospitals">Hospitals</option>
                                <option value="Hotels And Resorts">
                                  Hotels And Resorts
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                        {/*FILED END*/}
                        {/*FILED START*/}
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <select
                                data-placeholder="Select Sub Category"
                                name="sub_category_id[]"
                                id="sub_category_id"
                                multiple
                                className="chosen-select form-control"
                              >
                                <option value>Select Sub Category</option>
                                {/*                                            */}{" "}
                                {/*                                                <option */}{" "}
                                {/*                                                    value="*/}
                                {/*">*/}
                                {/*</option>*/}
                              </select>
                            </div>
                          </div>
                        </div>
                        {/*FILED END*/}
                        {/*FILED START*/}
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
                                defaultValue={""}
                              />
                            </div>
                          </div>
                        </div>
                        {/*FILED END*/}
                        {/*FILED START*/}
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>Choose profile image</label>
                              <input
                                type="file"
                                name="profile_image"
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>Choose cover image</label>
                              <input
                                type="file"
                                name="cover_image"
                                className="form-control"
                              />
                            </div>
                          </div>
                        </div>
                        {/*FILED END*/}
                        {/*FILED START*/}
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea
                                value={formData.service_location}
                                onChange={handleInputChange}
                                className="form-control"
                                id="service_locations"
                                name="service_location"
                                placeholder="Enter your service locations... 
(i.e) London, Dallas, Wall Street, Opera House"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                        </div>
                        {/*FILED END*/}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="login-main add-list add-list-ser">
                    <div className="log-bor">&nbsp;</div>
                    <span className="steps">Step 2</span>
                    <div className="log">
                      <div className="login">
                        <h4>Services provide</h4>
                        <span
                          className="add-list-add-btn lis-ser-add-btn"
                          title="add new offer"
                        >
                          +
                        </span>
                        <span
                          className="add-list-rem-btn lis-ser-rem-btn"
                          title="remove offer"
                        >
                          -
                        </span>
                        <ul>
                          <li>
                            {/*FILED START*/}
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label>Service name:</label>
                                  <input
                                    type="text"
                                    onChange={handleInputChange}
                                    value={formData.service_name}
                                    name="service_name"
                                    className="form-control"
                                    placeholder="Ex: Plumbile"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label>Choose profile image</label>
                                  <input
                                    type="file"
                                    name="service_image[]"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                            </div>
                            {/*FILED END*/}
                          </li>
                          <li>
                            {/*FILED START*/}
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label>Service name:</label>
                                  <input
                                    type="text"
                                    name="service_id[]"
                                    className="form-control"
                                    placeholder="Ex: bike service"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label>Choose profile image</label>
                                  <input
                                    type="file"
                                    name="service_image[]"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                            </div>
                            {/*FILED END*/}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="login-main add-list">
                    <div className="log-bor">&nbsp;</div>
                    <span className="steps">Step 3</span>
                    <div className="log">
                      <div className="login add-list-off">
                        <h4>Special offers</h4>
                        <span
                          className="add-list-add-btn lis-add-off"
                          title="add new offer"
                        >
                          +
                        </span>
                        <span
                          className="add-list-rem-btn lis-add-rem"
                          title="remove offer"
                        >
                          -
                        </span>
                        <ul>
                          <li>
                            {/*FILED START*/}
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="service_1_name[]"
                                    className="form-control"
                                    placeholder="Offer name *"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="service_1_price[]"
                                    className="form-control"
                                    onkeypress="return isNumber(event)"
                                    placeholder="Price"
                                  />
                                </div>
                              </div>
                            </div>
                            {/*FILED END*/}
                            {/*FILED START*/}
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <textarea
                                    className="form-control"
                                    name="service_1_detail[]"
                                    placeholder="Details about this offer"
                                    defaultValue={""}
                                  />
                                </div>
                              </div>
                            </div>
                            {/*FILED END*/}
                            {/*FILED START*/}
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label>Choose offer image</label>
                                  <input
                                    type="file"
                                    name="service_1_image[]"
                                    className="form-control"
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
                                    name="service_1_view_more[]"
                                    className="form-control"
                                    placeholder="View More Link"
                                  />
                                </div>
                              </div>
                            </div>
                            {/*FILED END*/}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="login-main add-list">
                    <div className="log-bor">&nbsp;</div>
                    <span className="steps">Step 4</span>
                    <div className="log add-list-map">
                      <div className="login add-list-map">
                        <h4>Video Gallery</h4>
                        <ul>
                          <span
                            className="add-list-add-btn lis-add-oadvideo"
                            title="add new video"
                          >
                            +
                          </span>
                          <span
                            className="add-list-rem-btn lis-add-orevideo"
                            title="remove video"
                          >
                            -
                          </span>
                          <li>
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <textarea
                                    id="listing_video"
                                    value={formData.youtubelink}
                                    onChange={handleInputChange}
                                    name="youtubelink"
                                    className="form-control"
                                    placeholder="Paste Your Youtube Url here"
                                    defaultValue={""}
                                  />
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <h4>Map and 360 view</h4>
                        {/*FILED START*/}
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea
                                value={formData.map_url}
                                className="form-control"
                                name="map_url"
                                placeholder="Shop location"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                        </div>
                        {/*FILED END*/}
                        {/*FILED START*/}
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea
                                className="form-control"
                                name="360_view"
                                placeholder="360 view"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                        </div>
                        {/*FILED END*/}
                        <h4 className="pt30">Photo gallery</h4>
                        {/*FILED START*/}
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="file"
                                name="gallery_image[]"
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="file"
                                name="gallery_image[]"
                                className="form-control"
                              />
                            </div>
                          </div>
                        </div>
                        {/*FILED END*/}
                        {/*FILED START*/}
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="file"
                                name="gallery_image[]"
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="file"
                                name="gallery_image[]"
                                className="form-control"
                              />
                            </div>
                          </div>
                        </div>
                        {/*FILED END*/}
                        {/*FILED START*/}
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="file"
                                name="gallery_image[]"
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="file"
                                name="gallery_image[]"
                                className="form-control"
                              />
                            </div>
                          </div>
                        </div>
                        {/*FILED END*/}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="login-main add-list">
                    <div className="log-bor">&nbsp;</div>
                    <span className="steps">Step 5</span>
                    <div className="log">
                      <div className="login add-lis-oth">
                        <h4>Other informations</h4>
                        <span
                          className="add-list-add-btn lis-add-oad"
                          title="add new offer"
                        >
                          +
                        </span>
                        <span
                          className="add-list-rem-btn lis-add-ore"
                          title="remove offer"
                        >
                          -
                        </span>
                        <ul>
                          <li>
                            {/*FILED START*/}
                            <div className="row">
                              <div className="col-md-5">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="listing_info_question[]"
                                    className="form-control"
                                    placeholder="Experience"
                                  />
                                </div>
                              </div>
                              <div className="col-md-2">
                                <div className="form-group">
                                  <i className="material-icons">
                                    arrow_forward
                                  </i>
                                </div>
                              </div>
                              <div className="col-md-5">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="listing_info_answer[]"
                                    className="form-control"
                                    placeholder="20 years"
                                  />
                                </div>
                              </div>
                            </div>
                            {/*FILED END*/}
                          </li>
                          {/*FILED START*/}
                          <li>
                            <div className="row">
                              <div className="col-md-5">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="listing_info_question[]"
                                    className="form-control"
                                    placeholder="Parking"
                                  />
                                </div>
                              </div>
                              <div className="col-md-2">
                                <div className="form-group">
                                  <i className="material-icons">
                                    arrow_forward
                                  </i>
                                </div>
                              </div>
                              <div className="col-md-5">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="listing_info_answer[]"
                                    className="form-control"
                                    placeholder="yes"
                                  />
                                </div>
                              </div>
                            </div>
                          </li>
                          {/*FILED END*/}
                          {/*FILED START*/}
                          <li>
                            <div className="row">
                              <div className="col-md-5">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="listing_info_question[]"
                                    className="form-control"
                                    placeholder="Smoking"
                                  />
                                </div>
                              </div>
                              <div className="col-md-2">
                                <div className="form-group">
                                  <i className="material-icons">
                                    arrow_forward
                                  </i>
                                </div>
                              </div>
                              <div className="col-md-5">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="listing_info_answer[]"
                                    className="form-control"
                                    placeholder="yes"
                                  />
                                </div>
                              </div>
                            </div>
                          </li>
                          {/*FILED END*/}
                          {/*FILED START*/}
                          <li>
                            <div className="row">
                              <div className="col-md-5">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="listing_info_question[]"
                                    className="form-control"
                                    placeholder="Take Out"
                                  />
                                </div>
                              </div>
                              <div className="col-md-2">
                                <div className="form-group">
                                  <i className="material-icons">
                                    arrow_forward
                                  </i>
                                </div>
                              </div>
                              <div className="col-md-5">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="listing_info_answer[]"
                                    className="form-control"
                                    placeholder="yes"
                                  />
                                </div>
                              </div>
                            </div>
                          </li>
                          {/*FILED END*/}
                        </ul>
                        {/*FILED START*/}
                        <div className="row">
                          {/*                                        <div class="col-md-6">*/}
                          {/*                                            <button type="submit" class="btn btn-primary">Previous</button>*/}
                          {/*                                        </div>*/}
                          <div className="col-md-12">
                            <button
                              type="submit"
                              name="listing_submit"
                              className="btn btn-primary"
                            >
                              Submit Listing
                            </button>
                          </div>
                          <div className="col-md-12">
                            <a href="profile.html" className="skip">
                              Go to Dashboard &gt;&gt;
                            </a>
                          </div>
                        </div>
                        {/*FILED END*/}
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
