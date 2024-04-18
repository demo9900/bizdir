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
                <Link href="/account/add-listing-step-2">
                  {" "}
                  <span>Step 2</span>
                  <b>Services</b>
                </Link>
              </li>
              <li>
                <Link href="/account/add-listing-step-3" className="act">
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
              <form
                action="add-listing-step-4"
                className="listing_form_3"
                id="listing_form_3"
                name="listing_form_3"
                method="post"
                encType="multipart/form-data"
              >
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
                            placeholder="Offer name*"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="service_1_price[]"
                            onkeypress="return isNumber(event)"
                            className="form-control"
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
                            name="service_1_detail[]"
                            className="form-control"
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
                {/*FILED START*/}
                <div className="row">
                  <div className="col-md-6">
                    <Link href="/account/add-listing-step-2">
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
                    <Link href="/account/add-listing-step-4" className="skip">
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
