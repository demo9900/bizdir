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
                <Link href="/account/add-listing-step-1">
                  {" "}
                  <span>Step 1</span>
                  <b>Basic Info</b>
                </Link>
              </li>
              <li>
                <Link href="/account/add-listing-step-2" className="act">
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
        <div className="login-main add-list add-list-ser">
          <div className="log-bor">&nbsp;</div>{" "}
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
              <form
                action="add-listing-step-3"
                className="listing_form_2"
                id="listing_form_2"
                name="listing_form_2"
                method="post"
                encType="multipart/form-data"
              >
                <input
                  id="listing_name"
                  name="listing_name"
                  type="hidden"
                  defaultValue="qwerqw"
                  required="required"
                  className="validate"
                />
                <input
                  id="listing_mobile"
                  name="listing_mobile"
                  type="hidden"
                  defaultValue={89769876}
                  required="required"
                  className="validate"
                />
                <input
                  id="listing_email"
                  name="listing_email"
                  type="hidden"
                  defaultValue="hgfjhg@JHgfjh.in"
                  required="required"
                  className="validate"
                />
                <input
                  id="listing_website"
                  name="listing_website"
                  type="hidden"
                  defaultValue="qwerqw.asdfasdf.in"
                  required="required"
                  className="validate"
                />
                <input
                  id="category_id"
                  name="category_id"
                  type="hidden"
                  defaultValue={19}
                  required="required"
                  className="validate"
                />
                <input
                  id="sub_category_id"
                  name="sub_category_id"
                  type="hidden"
                  defaultValue="Array"
                  required="required"
                  className="validate"
                />
                <input
                  id="listing_description"
                  name="listing_description"
                  type="hidden"
                  defaultValue="<p>asaDasd</p>
"
                  required="required"
                  className="validate"
                />
                <input
                  id="mobile_number"
                  readOnly=""
                  name="mobile_number"
                  defaultValue={5522114422}
                  required="required"
                  type="hidden"
                  className="validate"
                />
                <input
                  id="email_id"
                  readOnly=""
                  name="email_id"
                  defaultValue="connect@bizdir.in"
                  required="required"
                  type="hidden"
                  className="validate"
                />
                <input
                  id="listing_address"
                  name="listing_address"
                  defaultValue="adsfa adfas"
                  required="required"
                  type="hidden"
                  className="validate"
                />
                <input
                  id="city_id"
                  name="city_id"
                  defaultValue="Array"
                  required="required"
                  type="hidden"
                  className="validate"
                />
                <input
                  id="country_id"
                  name="country_id"
                  defaultValue={101}
                  required="required"
                  type="hidden"
                  className="validate"
                />
                <input
                  id="profile_image"
                  name="profile_image"
                  defaultValue="82551rn53.png"
                  required="required"
                  type="hidden"
                  className="validate"
                />
                <input
                  id="cover_image"
                  name="cover_image"
                  defaultValue="36220user-type.png"
                  required="required"
                  type="hidden"
                  className="validate"
                />
                <ul>
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
                          <label>Service name</label>
                          <input
                            type="text"
                            name="service_id[]"
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
                </ul>
                {/*FILED START*/}
                <div className="row">
                  <div className="col-md-6">
                    <Link href="/account/add-listing-step-1">
                      <button type="button" className="btn btn-primary">
                        Previous
                      </button>
                    </Link>
                  </div>
                  <div className="col-md-6">
                    <button
                      type="submit"
                      name="listing_submit"
                      className="btn btn-primary"
                    >
                      Next
                    </button>
                  </div>
                  <div className="col-md-12">
                    {" "}
                    <Link href="/account/add-listing-step-3" className="skip">
                      Skip this &gt;&gt;
                    </Link>
                  </div>
                </div>
                {/*FILED END*/}
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
