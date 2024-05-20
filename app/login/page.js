"use client";
import React, { useState } from "react";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import axios from "axios";
import { Suspense } from "react";
import { useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import { toast } from "react-toastify";
import Footer from "@/components/Footer";
import UnAuth from "@/components/UnAuth";

const page = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const token = searchParams.get("token");
  const email = searchParams.get("email");

window.recaptchaVerifier()

  const { data: session, status } = useSession();
  console.log("user session from login", session);

  useEffect(() => {
    console.log(token, email);
    const verifyUser = async () => {
      try {
        const response = await axios.post(
          `http://localhost:8080/api/auth/verify/?token=${token}&email=${email}`
        );
        if (response.status === 200) {
          toast.success("Successfully verified!");
          router.push("/login");
          // Redirect to login page or any other page
        }
      } catch (error) {
        toast.error("Failed to verify user");
        console.error("Error verifying user:", error.message);
        // Redirect to error page or handle error accordingly
      }
    };
    if (token && email) {
      verifyUser();
    }
  }, [token, email]);
useEffect(() =>{
 toast.error(error)
},[error])
  async function handleSubmit(event) {
    event.preventDefault();
    const email = formData.email;
    const password = formData.password;
    if (!email || !password) {
      toast.error("Email and password are required");
      return;
    }
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result.error) {
      toast.error(result.error)
      console.log(result.error);
    } else {
      router.push("/");
    }
  }

  return (
    <UnAuth>
      <>
        <section>
          <div className="str">
            <div>
              <Header transparent={false} />
            </div>
          </div>
        </section>
        <section className=" login-reg animation-bg">
          <div className="container">
            <div className="row">
              <div className="login-main">
                <div className="log-bor">&nbsp;</div>
                <div className="log log-1">
                  <div className="login">
                    <h4>Member Login</h4>
                    <form
                      onSubmit={handleSubmit}
                      id="login_form"
                      name="login_form"
                    >
                      <div className="form-group">
                        <input
                          type="email"
                          autoComplete="off"
                          name="email"
                          id="email_id"
                          className="form-control"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              email: e.target.value,
                            }))
                          }
                          placeholder="Enter email*"
                          pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$"
                          title="Enter email address"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          name="password"
                          id="password"
                          className="form-control"
                          value={formData.password}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              password: e.target.value,
                            }))
                          }
                          placeholder="Enter password*"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        name="login_submit"
                        value="submit"
                        className="btn btn-primary"
                      >
                        Sign in
                      </button>
                    </form>
                    {/* SOCIAL MEDIA LOGIN */}
                    <div className="soc-log">
                      <ul>
                        <li>
                          <div
                            className="g-signin2"
                            data-onsuccess="onSignIn"
                          ></div>
                        </li>
                        <li>
                          <Link
                            href=""
                            onClick={() => signIn('google')}
                            className="login-goog"
                          >
                            <img src="/images/icon/seo.png" alt="google" />
                            Continue with Google
                          </Link>
                        </li>
                        <li>
                          <Link
                            href=""
                            onClick={(e) => microsoftAuth(e)}
                            className="login-micro"
                          >
                            <img src="/icon/microsoft.svg" alt="" />
                            Continue with Microsoft
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* END SOCIAL MEDIA LOGIN */}
                  </div>
                </div>

                <div className="log-bot">
                  <ul>
                    <li>
                      <Link href={"/login"}>
                        <span className="ll-1">Login?</span>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/register"}>
                        <span className="ll-2">Create an account?</span>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/signup"}>
                        <span className="ll-3">Forgot password?</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <span className="btn-ser-need-ani">Help &amp; Support</span>
        <div className="ani-quo-form">
          {" "}
          <i className="material-icons ani-req-clo">close</i>
          <div className="tit">
            <h3>
              What service do you need? <span>BizBook will help you</span>
            </h3>
          </div>
          <div className="hom-col-req">
            <div
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
              <p>Something Went Wrong!!!</p>
            </div>
            <div
              id="home_slide_enq_same"
              className="log"
              style={{ display: "none" }}
            >
              <p>You cannot make enquiry on your own listing</p>
            </div>
            <form
              name="home_slide_enquiry_form"
              id="home_slide_enquiry_form"
              method="post"
              encType="multipart/form-data"
            >
              <input
                type="hidden"
                className="form-control"
                name="listing_id"
                defaultValue={0}
                required
              />
              <input
                type="hidden"
                className="form-control"
                name="listing_user_id"
                defaultValue={0}
                required
              />
              <input
                type="hidden"
                className="form-control"
                name="enquiry_sender_id"
                defaultValue
                required
              />
              <input
                type="hidden"
                className="form-control"
                name="enquiry_source"
                defaultValue="Website"
                required
              />
              <div className="form-group">
                <input
                  type="text"
                  name="enquiry_name"
                  defaultValue
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
                  defaultValue
                  name="enquiry_email"
                  pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$"
                  title="Invalid email address"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  defaultValue
                  name="enquiry_mobile"
                  placeholder="Enter mobile number *"
                  pattern="[7-9]{1}[0-9]{9}"
                  title="Phone number starting with 7-9 and remaing 9 digit with 0-9"
                  required
                />
              </div>
              <div className="form-group">
                <select
                  name="enquiry_category"
                  id="enquiry_category"
                  className="form-control"
                >
                  <option value>Select Category</option>
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
              <div className="form-group">
                <textarea
                  className="form-control"
                  rows={3}
                  name="enquiry_message"
                  placeholder="Enter your query or message"
                  defaultValue={""}
                />
              </div>
              <input type="hidden" id="source" />
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
        {/* END */}
        {/* START */}
        <section>
          <div className="full-bot-book">
            <div className="container">
              <div className="row">
                <div className="bot-book">
                  <div className="col-md-2 bb-img">
                    <img src="images/idea.png" alt="idea" />
                  </div>
                  <div className="col-md-7 bb-text">
                    <h4>#1 Business Directory and Service Provider</h4>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour.
                    </p>
                  </div>
                  <div className="col-md-3 bb-link">
                    {" "}
                    <a href="pricing-details.html">Add my business</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </>
    </UnAuth>
  );
};

export default page;
