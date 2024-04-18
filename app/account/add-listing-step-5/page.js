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
                <Link href="/account/add-listing-step-5" className="act">
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
              <form
                action="listing_insert"
                className="listing_form"
                id="listing_form_5"
                name="listing_form_5"
                method="post"
                encType="multipart/form-data"
              >
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
                          {" "}
                          <i className="material-icons">arrow_forward</i>
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
                  {/*                                    <li>*/}
                  {/*                                    <div className="row">*/}
                  {/*                                        <div className="col-md-5">*/}
                  {/*                                            <div className="form-group">*/}
                  {/*                                              <input type="text" name="listing_info_question[]" className="form-control" placeholder="Parking">*/}
                  {/*                                            </div>*/}
                  {/*                                        </div>*/}
                  {/*										<div className="col-md-2">*/}
                  {/*                                            <div className="form-group">*/}
                  {/*                                              <i className="material-icons">arrow_forward</i>*/}
                  {/*                                            </div>*/}
                  {/*                                        </div>*/}
                  {/*                                        <div className="col-md-5">*/}
                  {/*                                            <div className="form-group">*/}
                  {/*                                              <input type="text" name="listing_info_answer[]" className="form-control" placeholder="yes">*/}
                  {/*                                            </div>*/}
                  {/*                                        </div>*/}
                  {/*                                    </div>*/}
                  {/*                                    </li>*/}
                  {/*FILED END*/}
                  {/*FILED START*/}
                  {/*                                    <li>*/}
                  {/*                                    <div className="row">*/}
                  {/*                                        <div className="col-md-5">*/}
                  {/*                                            <div className="form-group">*/}
                  {/*                                              <input type="text" name="listing_info_question[]" className="form-control" placeholder="Smoking">*/}
                  {/*                                            </div>*/}
                  {/*                                        </div>*/}
                  {/*										<div className="col-md-2">*/}
                  {/*                                            <div className="form-group">*/}
                  {/*                                              <i className="material-icons">arrow_forward</i>*/}
                  {/*                                            </div>*/}
                  {/*                                        </div>*/}
                  {/*                                        <div className="col-md-5">*/}
                  {/*                                            <div className="form-group">*/}
                  {/*                                              <input type="text" name="listing_info_answer[]" className="form-control" placeholder="yes">*/}
                  {/*                                            </div>*/}
                  {/*                                        </div>*/}
                  {/*                                    </div>*/}
                  {/*                                    </li>*/}
                  {/*FILED END*/}
                  {/*FILED START*/}
                  {/*                                    <li>*/}
                  {/*                                    <div className="row">*/}
                  {/*                                        <div className="col-md-5">*/}
                  {/*                                            <div className="form-group">*/}
                  {/*                                              <input type="text" name="listing_info_question[]" className="form-control" placeholder="Take Out">*/}
                  {/*                                            </div>*/}
                  {/*                                        </div>*/}
                  {/*										<div className="col-md-2">*/}
                  {/*                                            <div className="form-group">*/}
                  {/*                                              <i className="material-icons">arrow_forward</i>*/}
                  {/*                                            </div>*/}
                  {/*                                        </div>*/}
                  {/*                                        <div className="col-md-5">*/}
                  {/*                                            <div className="form-group">*/}
                  {/*                                              <input type="text" name="listing_info_answer[]" className="form-control" placeholder="yes">*/}
                  {/*                                            </div>*/}
                  {/*                                        </div>*/}
                  {/*                                    </div>*/}
                  {/*                                    </li>*/}
                  {/*FILED END*/}
                </ul>
                {/*FILED START*/}
                <div className="row">
                  <div className="col-md-6">
                    <Link href="/account/add-listing-step-4">
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
                      Finish
                    </button>
                  </div>
                  {/*                                        <div className="col-md-12">*/}
                  {/*                                            <Link href="/account/add-listing-step-6" className="skip">Skip this >></Link>*/}
                  {/*                                        </div>*/}
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
