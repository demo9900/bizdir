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
                <Link href="/account/add-listing-step-5">
                  {" "}
                  <span>Step 5</span>
                  <b>Other</b>
                </Link>
              </li>
              <li>
                <Link href="/account/add-listing-step-6" className="act">
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
          <span className="steps">Step 6</span>
          <div className="log">
            <div className="login add-lis-done">
              <h4>Success</h4>
              <p>Your listing has been submitted successfully.</p>
              <form>
                {/*FILED START*/}
                <div className="row">
                  <div className="col-md-12">
                    {" "}
                    <i className="material-icons succ">done</i>
                  </div>
                </div>
                {/*FILED END*/}
                {/*FILED START*/}
                <div className="row">
                  <div className="col-md-6">
                    {" "}
                    <Link href="/account" className="btn btn-primary">
                      Go to user dashboard
                    </Link>
                  </div>
                  <div className="col-md-6">
                    {" "}
                    <Link
                      target="_blank"
                      href="/listing/qwerqw"
                      className="btn btn-primary"
                    >
                      Listing preview
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
