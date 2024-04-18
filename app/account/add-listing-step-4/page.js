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
                <Link href="/account/add-listing-step-4" className="act">
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
          <span className="steps">Step 4</span>
          <div className="log add-list-map">
            <div className="login add-list-map">
              <form
                action="add-listing-step-5"
                className="listing_form_4"
                id="listing_form_4"
                name="listing_form_4"
                method="post"
                encType="multipart/form-data"
              >
                <h4>Video Gallery</h4>
                {/* TOOL TIP */}
                <div className="ttip-com">
                  {" "}
                  <i className="material-icons">priority_high</i>
                  <div>
                    Right click on YouTube video then get your iframe code
                  </div>
                </div>
                {/* END */}
                <ul>
                  {" "}
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
                            name="listing_video[]"
                            className="form-control"
                            placeholder="Paste Your Youtube iframe Code here"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <h4>Map and 360 view</h4>
                {/* TOOL TIP */}
                <div className="ttip-com">
                  {" "}
                  <i className="material-icons">priority_high</i>
                  <div>
                    Go to Google maps -&gt; Choose your location -&gt; Click
                    share button - &gt; Copy your iframe code then paste here.
                  </div>
                </div>
                {/* END */}
                {/*FILED START*/}
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        id="google_map"
                        name="google_map"
                        className="form-control"
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
                        id="360_view"
                        name="360_view"
                        className="form-control"
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
                  {/*                                <div className="col-md-6">*/}
                  {/*                                    <div className="form-group">*/}
                  {/*                                        <input type="file" name="gallery_image[]" className="form-control">*/}
                  {/*                                    </div>*/}
                  {/*                                </div>*/}
                </div>
                {/*FILED END*/}
                {/*FILED START*/}
                {/*                            <div className="row">*/}
                {/*                                <div className="col-md-6">*/}
                {/*                                    <div className="form-group">*/}
                {/*                                        <input type="file" name="gallery_image[]" className="form-control">*/}
                {/*                                    </div>*/}
                {/*                                </div>*/}
                {/*                                <div className="col-md-6">*/}
                {/*                                    <div className="form-group">*/}
                {/*                                        <input type="file" name="gallery_image[]" className="form-control">*/}
                {/*                                    </div>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*FILED END*/}
                {/*FILED START*/}
                {/*                            <div className="row">*/}
                {/*                                <div className="col-md-6">*/}
                {/*                                    <div className="form-group">*/}
                {/*                                        <input type="file" name="gallery_image[]" className="form-control">*/}
                {/*                                    </div>*/}
                {/*                                </div>*/}
                {/*                                <div className="col-md-6">*/}
                {/*                                    <div className="form-group">*/}
                {/*                                        <input type="file" name="gallery_image[]" className="form-control">*/}
                {/*                                    </div>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*FILED END*/}
                {/*FILED START*/}
                <div className="row">
                  <div className="col-md-6">
                    <Link href="/account/add-listing-step-3">
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
                    <Link href="/account/add-listing-step-5" className="skip">
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
