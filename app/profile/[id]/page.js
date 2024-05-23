'use client'
import React,{useState,useEffect} from "react";
import { useSession } from "next-auth/react";
import Header from "@/components/Header";
import Link from "next/link";
const page = ({params}) => {
  const [open,setOpen] = useState(false);
  const {data:session} = useSession();
  const [user,setUser] = useState();
  const getUser = async () => {
    try {
      const res = await fetch(
        process.env.BACKEND_URL + `/api/user/${params.id}`,{
          headers: {
            authorization: "Bearer " + session.jwt,
          },
        }
      );

      const data = await res.json();
      setUser(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);
  return (
    <div>
      <section>
        <div className="str">
          <div>
            <Header transparent={false} />
          </div>
        </div>
      </section>
      <section className>
        <div className="job-prof-pg defa-prof-pg">
          <div className="container">
            <div className="row">
              <div className="lhs">
                {/*START*/}
                <div className="profile">
                  <div className="jpro-ban-bg-img">
                    <span>
                      <b>0</b> Followings
                    </span>
                    <p>
                      Join on:
                      <b>14, Nov 2021</b>
                    </p>
                    <img
                      loading="lazy"
                      src={user?.cover_image}
                      alt
                    />
                  </div>
                  <div className="jpro-ban-tit">
                    <div className="s1">
                      <img
                        src={user?.profile_image}
                        className="pro"
                        alt
                      />
                    </div>
                    <div className="s2">
                      <h1>{user?.name}</h1>
                      <span className="loc">
                        <b>City :</b> {user?.user_info?.user_city}
                      </span>
                      <p>{user?.total_listing_count} Listings | 2 Blogs | 4 Events</p>
                    </div>
                    <div className="s3">
                      <a
                        href="mailto:johnitsmes@gmail.com"
                        className="cta fol"
                        target="_blank"
                      >
                        Message
                      </a>
                      <span
                        className="cta userfollow follow-content328"
                        data-item={328}
                        data-num={323}
                      >
                        Follow
                      </span>
                    </div>
                  </div>
                </div>
                {/*END*/}
                {/*START*/}
                <div className="jb-pro-bio">
                  <h4>SOCIAL MEDIA</h4>
                  <ul className="pro-soci">
                    <li>
                      <a
                        target="_blank"
                        href="https://www.facebook.com/rn53themes"
                      >
                        <img
                          src="/images/social/3.png"
                          alt
                        />
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://twitter.com/Rn53_themes">
                        <img
                          src="/images/social/2.png"
                          alt
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://www.youtube.com/channel/UCEuC2HN5jb02knjP9o3Q8QA/videos"
                      >
                        <img
                          src="/images/social/5.png"
                          alt
                        />
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="www.rn53themes.net">
                        <img
                          src="/images/social/1.png"
                          alt
                        />
                      </a>
                    </li>
                  </ul>
                </div>
                {/*END*/}
                {/*START*/}
                <div className="jpro-bd">
                  <div className="jpro-bd-com">
                    <h4>All Listings</h4>
                    <ul>
                      <li>
                        <div className="pro-listing-box">
                          <div>
                            <img src="https://res.cloudinary.com/dncikfz66/image/upload/v1716466324/bizdir/listing/images.png" />
                            <h2>New billa villas </h2>
                            <p>
                              No:2, 4th Avenue, Newyork, USA, Near to Airport
                            </p>
                            <Link
                              href="#"
                              className="fclick"
                            >
                              &nbsp;
                            </Link>
                          </div>
                          <div>
                            <span onClick={() =>setOpen(true)}>
                              Get quote
                            </span>
                          </div>
                        </div>
                      </li>
                      <div className="pop-ups pop-quo">
                        {/* The Modal */}
                        <div className="modal fade show" id="quote"  style={{display: open ?'block':'none',paddingRight: open? '15px':'0'}}>
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <button
                                type="button"
                                onClick={()=> setOpen(false)}
                                className="close"
                                data-dismiss="modal"
                              >
                                ×
                              </button>
                              {/* Modal Header */}
                              <div className="quote-pop">
                                <h4>Get quote</h4>
                                <div
                                  id="profile_enq_success"
                                  className="log new-tnk-msg"
                                  style={{ display: "none" }}
                                >
                                  <p>
                                    Your Enquiry Is Submitted Successfully!!!
                                  </p>
                                </div>
                                <div
                                  id="profile_enq_same"
                                  className="log"
                                  style={{ display: "none" }}
                                >
                                  <p>
                                    You cannot make enquiry on your own
                                    listing!!
                                  </p>
                                </div>
                                <div
                                  id="profile_enq_fail"
                                  className="log"
                                  style={{ display: "none" }}
                                >
                                  <p>
                                    Oops!! Something Went Wrong Try Later!!!
                                  </p>
                                </div>
                                <form
                                  method="post"
                                  name="profile_enquiry_form"
                                  id="profile_enquiry_form"
                                  noValidate="novalidate"
                                >
                                  <input
                                    type="hidden"
                                    className="form-control"
                                    name="listing_id"
                                    defaultValue={664}
                                    placeholder
                                    required
                                  />
                                  <input
                                    type="hidden"
                                    className="form-control"
                                    name="listing_user_id"
                                    defaultValue={328}
                                    placeholder
                                    required
                                  />
                                  <input
                                    type="hidden"
                                    className="form-control"
                                    name="enquiry_sender_id"
                                    defaultValue={323}
                                    placeholder
                                    required
                                  />
                                  <div className="form-group">
                                    <input
                                      type="text"
                                      readOnly
                                      name="enquiry_name"
                                      defaultValue="Rn53"
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
                                      readOnly="readonly"
                                      defaultValue="rn53themes@gmail.com"
                                      name="enquiry_email"
                                      pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$"
                                      title="Invalid email address"
                                      required
                                    />
                                  </div>
                                  <div className="form-group">
                                    <input
                                      type="text"
                                      className="form-control"
                                      readOnly="readonly"
                                      defaultValue={784512765500}
                                      name="enquiry_mobile"
                                      placeholder="Enter mobile number *"
                                      pattern="[7-9]{1}[0-9]{9}"
                                      title="Phone number starting with 7-9 and remaining 9 digit with 0-9"
                                      required
                                    />
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
                                  <input
                                    type="hidden"
                                    id="source"
                                    defaultValue
                                  />
                                  <button
                                    type="submit"
                                    name="enquiry_submit"
                                    className="btn btn-primary"
                                  >
                                    Submit
                                  </button>
                                </form>
                              </div>
                              <div className="log-bor">&nbsp;</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </ul>
                  </div>
                  <div className="jpro-bd-com">
                    <h4>Events</h4>
                    <ul>
                      <li>
                        <div className="pro-eve-box pro-eve-box1">
                          <div>
                            <img
                              src="/images/events/31974pexels-nicole-michalou-5779176.jpg"
                              alt
                            />
                          </div>
                          <div>
                            <span>
                              01 <b>Jan</b>
                            </span>
                            <h2>New year 2024</h2>
                            <p>
                              28800 Orchard Lake Road, Suite 180 Farmington
                              Hills, U.S.A.
                            </p>
                          </div>
                          <a
                            href="https://bizbookdirectorytemplate.com/event/new-year-2024"
                            className="fclick"
                          >
                            &nbsp;
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="pro-eve-box pro-eve-box1">
                          <div>
                            <img
                              src="/images/events/5079pexels-matheus-bertelli-3856027.jpg"
                              alt
                            />
                          </div>
                          <div>
                            <span>
                              18 <b>Oct</b>
                            </span>
                            <h2>Microsofi seminar 2024</h2>
                            <p>
                              28800 Orchard Lake Road, Suite 180 Farmington
                              Hills, U.S.A.
                            </p>
                          </div>
                          <a
                            href="https://bizbookdirectorytemplate.com/event/microsofi-seminar-2024"
                            className="fclick"
                          >
                            &nbsp;
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="pro-eve-box pro-eve-box1">
                          <div>
                            <img
                              src="/images/events/1551525.jpg"
                              alt
                            />
                          </div>
                          <div>
                            <span>
                              01 <b>May</b>
                            </span>
                            <h2>VUX Music Event 2024</h2>
                            <p>No:24, North west street, Newyork</p>
                          </div>
                          <Link
                            href="#"
                            className="fclick"
                          >
                            &nbsp;
                          </Link>
                        </div>
                      </li>
                      <li>
                        <div className="pro-eve-box pro-eve-box1">
                          <div>
                            <img
                              src="/images/events/5792023.jpg"
                              alt
                            />
                          </div>
                          <div>
                            <span>
                              01 <b>Jan</b>
                            </span>
                            <h2>User Conference 2024</h2>
                            <p>No:24, North west street, Newyork</p>
                          </div>
                          <a
                            href="https://bizbookdirectorytemplate.com/event/user-conference-2024"
                            className="fclick"
                          >
                            &nbsp;
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="jpro-bd-com">
                    <h4>Followers</h4>
                    <div className="ud-rhs-sec-2">
                      <ul>
                        <li>
                          <div className="pro-sm-box">
                            <img
                              src="/images/user/970813.jpg"
                              alt
                            />
                            <h5>shajahan kp</h5>
                            <p>
                              City: <b> N/A</b>
                            </p>
                            <a href="https://bizbookdirectorytemplate.com/profile/shajahan-kp" />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="jpro-bd-com">
                    <h4>Share this profile</h4>
                    <div className="list-sh list-sh">
                      <span
                        className="share-new"
                        data-toggle="modal"
                        data-target="#sharepop"
                      >
                        <i className="material-icons">share</i> Share now
                      </span>
                    </div>
                  </div>
                  {/*END*/}
                </div>
              </div>
              <div className="rhs">
                <div className="ud-rhs-promo">
                  <h3>Tell us your Needs</h3>
                  <p>
                    Tell us what kind of service or experts you are looking.
                  </p>
                  <a href="https://bizbookdirectorytemplate.com/login">
                    Register for free
                  </a>
                </div>
                <div className="job-rel-pro">
                  <div className="hot-page2-hom-pre">
                    <h4>Related profiles</h4>
                    <ul>
                      <li>
                        <div className="hot-page2-hom-pre-1">
                          <img
                            src="/images/user/970813.jpg"
                            alt
                          />
                        </div>
                        <div className="hot-page2-hom-pre-2">
                          <h5>sachin</h5>
                          <span>
                            Member since <b>15, May 2024</b>
                          </span>
                        </div>
                        <a
                          href="https://bizbookdirectorytemplate.com/profile/sachin2"
                          className="fclick"
                        />
                      </li>
                      <li>
                        <div className="hot-page2-hom-pre-1">
                          <img
                            src="/images/user/970813.jpg"
                            alt
                          />
                        </div>
                        <div className="hot-page2-hom-pre-2">
                          <h5>ritesh</h5>
                          <span>
                            Member since <b>30, Apr 2024</b>
                          </span>
                        </div>
                        <a
                          href="https://bizbookdirectorytemplate.com/profile/ritesh"
                          className="fclick"
                        />
                      </li>
                      <li>
                        <div className="hot-page2-hom-pre-1">
                          <img
                            src="/images/user/970813.jpg"
                            alt
                          />
                        </div>
                        <div className="hot-page2-hom-pre-2">
                          <h5>mohammed</h5>
                          <span>
                            Member since <b>23, Apr 2024</b>
                          </span>
                        </div>
                        <a
                          href="https://bizbookdirectorytemplate.com/profile/mohammed"
                          className="fclick"
                        />
                      </li>
                      <li>
                        <div className="hot-page2-hom-pre-1">
                          <img
                            src="/images/user/970813.jpg"
                            alt
                          />
                        </div>
                        <div className="hot-page2-hom-pre-2">
                          <h5>conor</h5>
                          <span>
                            Member since <b>22, Mar 2024</b>
                          </span>
                        </div>
                        <a
                          href="https://bizbookdirectorytemplate.com/profile/conor"
                          className="fclick"
                        />
                      </li>
                      <li>
                        <div className="hot-page2-hom-pre-1">
                          <img
                            src="/images/user/970813.jpg"
                            alt
                          />
                        </div>
                        <div className="hot-page2-hom-pre-2">
                          <h5>Test test</h5>
                          <span>
                            Member since <b>13, Mar 2024</b>
                          </span>
                        </div>
                        <a
                          href="https://bizbookdirectorytemplate.com/profile/test-test"
                          className="fclick"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="job-rel-pro">
                  <div className="hot-page2-hom-pre pmenu-spri">
                    <h4>Quick access</h4>
                    <ul>
                      <li>
                        <a
                          href="https://bizbookdirectorytemplate.com/all-category"
                          className="act"
                        >
                          <img src="/images/icon/shop.png" />
                          <div className="qui-acc-short">
                            <h5>All Services</h5>
                            <p>Easy to find your nearby Services</p>
                            <span>View services</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://bizbookdirectorytemplate.com/service-experts"
                          className="act"
                        >
                          <img src="/images/icon/expert.png" />
                          <div className="qui-acc-short">
                            <h5>Service Experts</h5>
                            <p>Connect with the right Service Experts</p>
                            <span>Book service experts</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://bizbookdirectorytemplate.com/jobs"
                          className="act"
                        >
                          <img src="https://bizbookdirectorytemplate.com/jobs/images/icon/employee.png" />
                          <div className="qui-acc-short">
                            <h5> Jobs</h5>
                            <p>Find your next job now</p>
                            <span>Start finding</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="https://bizbookdirectorytemplate.com/events">
                          <img src="/images/icon/calendar.png" />
                          <div className="qui-acc-short">
                            <h5>Events</h5>
                            <p>Find upcoming events now</p>
                            <span>More info</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="https://bizbookdirectorytemplate.com/all-products">
                          <img src="/images/icon/cart.png" />
                          <div className="qui-acc-short">
                            <h5>Products</h5>
                            <p>
                              Now easy to Buy &amp; Selling your products online
                            </p>
                            <span>Start Buying</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="https://bizbookdirectorytemplate.com/coupons">
                          <img src="/images/icon/coupons.png" />
                          <div className="qui-acc-short">
                            <h5>Coupon &amp; deals</h5>
                            <p>Get the latest and up-to-date coupons</p>
                            <span>View Coupon &amp; deals</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="https://bizbookdirectorytemplate.com/blog-posts">
                          <img src="/images/icon/blog1.png" />
                          <div className="qui-acc-short">
                            <h5> Blogs</h5>
                            <p>
                              Create a unique and beautiful blog. It’s easy and
                              free.
                            </p>
                            <span>More info</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="https://bizbookdirectorytemplate.com/community">
                          <img src="/images/icon/11.png" />
                          <div className="qui-acc-short">
                            <h5>Community</h5>
                            <p>
                              Build your business community and expand your
                              business to next step.
                            </p>
                            <span>Join the Community</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
