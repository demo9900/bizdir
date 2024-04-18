'use client';
import React from 'react'
import Headertwo from '@/components/Headertwo'
import Footer from '@/components/Footer';
import BottomMenu from '@/components/BottomMenu';
import Link from 'next/link';
const page = () => {
  return (
        <section className=" login-reg">
          <div className="container">
            <div className="row">
              <div className="add-list-ste">
                <div className="add-list-ste-inn">
                  <ul>
                    <li>
                      <Link href="/account/add-listing-step-1" className="act">
                        {" "}
                        <span>Step 1</span>
                        <b>Basic Info</b>
                      </Link>
                    </li>
                    <li>
                      <Link href="/account/add-listing-step-2">
                        {" "}
                        <span>Step 2</span>
                        <b>Services</b>
                      </Link>
                    </li>
                    <li>
                      <Link href="/account/add-listing-step-3">
                        {" "}
                        <span>Step 3</span>
                        <b>offers</b>
                      </Link>
                    </li>
                    <li>
                      <Link href="/account/add-listing-step-4">
                        {" "}
                        <span>Step 4</span>
                        <b>map</b>
                      </Link>
                    </li>
                    <li>
                      <Link href="/account/add-listing-step-5">
                        {" "}
                        <span>Step 5</span>
                        <b>Other</b>
                      </Link>
                    </li>
                    <li>
                      <Link href="/account/add-listing-step-6">
                        {" "}
                        <span>Step 6</span>
                        <b>done</b>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="login-main add-list">
                <div className="log-bor">&nbsp;</div>{" "}
                <span className="steps">Step 1</span>
                <div className="log">
                  <div className="login">
                    <h4>Listing Details</h4>
                    <form
                      action="add-listing-step-2"
                      className="listing_form_1"
                      id="listing_form_1"
                      name="listing_form_1"
                      method="post"
                      encType="multipart/form-data"
                    >
                      {/*FILED START*/}
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              id="listing_name"
                              name="listing_name"
                              type="text"
                              required="required"
                              className="form-control"
                              defaultValue=""
                              placeholder="Listing Name*"
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
                              name="listing_mobile"
                              className="form-control"
                              defaultValue=""
                              placeholder="Phone number"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              name="listing_email"
                              className="form-control"
                              defaultValue=""
                              placeholder="Email Id"
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
                              name="listing_whatsapp"
                              className="form-control"
                              defaultValue=""
                              placeholder="Whatsapp Number (e.g. +919876543210)"
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
                              name="listing_website"
                              className="form-control"
                              defaultValue=""
                              placeholder="Website(www.bizdir.in)"
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
                              name="listing_address"
                              className="form-control"
                              defaultValue=""
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
                              defaultValue=""
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
                              defaultValue=""
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
                              onchange="getCities(this.value);"
                              name="country_id"
                              required="required"
                              id="country_id"
                              className="chosen-select form-control"
                            >
                              <option value="">Select your Country</option>
                              <option value={101}>India</option>
                              <option value={230}>United Kingdom</option>
                              <option value={231}>United States</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      {/*FILED END*/}
                      {/*FILED START*/}
                      {/*                            <div className="row">*/}
                      {/*                                <div className="col-md-12">*/}
                      {/*                                    <div className="form-group">*/}
                      {/*                                        <input id="select-city" name="city_id" required="required" type="text"*/}
                      {/*                                               value="*/}
                      {/*"*/}
                      {/*                                               className="autocomplete form-control" placeholder="City name">*/}
                      {/*                                    </div>*/}
                      {/*                                </div>*/}
                      {/*                            </div>*/}
                      {/*FILED END*/}
                      {/*FILED START*/}
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <select
                              data-placeholder="Select your Cities"
                              name="city_id[]"
                              id="city_id"
                              multiple=""
                              required="required"
                              className="chosen-select form-control"
                            >
                              <option value="">Select your Cities</option>
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
                              onchange="getSubCategory(this.value);"
                              name="category_id"
                              id="category_id"
                              className="chosen-select form-control"
                            >
                              <option value="">Select Category</option>
                              <option value={19}>Wedding halls</option>
                              <option value={18}>Hotel &amp; Food</option>
                              <option value={17}>Pet shop</option>
                              <option value={16}>Digital Products</option>
                              <option value={15}>Spa and Facial</option>
                              <option value={10}>Real Estate</option>
                              <option value={8}>Sports</option>
                              <option value={7}>Education</option>
                              <option value={6}>Electricals</option>
                              <option value={5}>Automobiles</option>
                              <option value={3}>Transportation</option>
                              <option value={2}>Hospitals</option>
                              <option value={1}>Hotels And Resorts</option>
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
                              multiple=""
                              className="chosen-select form-control"
                            >
                              <option value="">Select Sub Category</option>
                              {/*                                            */}
                              {/*                                                <option */}
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
                              className="form-control"
                              id="listing_description"
                              name="listing_description"
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
                              required="required"
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
                              required="required"
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
                              className="form-control"
                              id="service_locations"
                              name="service_locations"
                              placeholder="Enter your service locations... 
(i.e) London, Dallas, Wall Street, Opera House"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>
                      {/*FILED END*/}
                      <button
                        type="submit"
                        name="listing_submit"
                        className="btn btn-primary"
                      >
                        Next
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )
}

      export default page
