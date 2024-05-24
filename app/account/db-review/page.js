'use client';
import React from 'react'
import Link from 'next/link';
import ComingSoon from '@/components/ComingSoon';

const page = () => {
  return <ComingSoon />
  return (
      <div className='ud-main-inn ud-no-rhs'>
      <div className="ud-cen">
        <div className="log-bor">&nbsp;</div>{" "}
        <span className="udb-inst">Reviews</span>
        <div className="ud-cen-s2">
          <h2>All Listings - Received review details</h2>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              {" "}
              <Link className="nav-link active" data-toggle="tab" href="/#received">
                All Received Reviews
              </Link>
            </li>
            <li className="nav-item">
              {" "}
              <Link className="nav-link" data-toggle="tab" href="/#sent">
                All Sent Reviews
              </Link>
            </li>
          </ul>
          {/* Tab panes */}
          <div className="tab-content">
            <div id="received" className="container tab-pane active">
              <br />
              <table className="responsive-table bordered">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Listing Name</th>
                    <th>User</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>City</th>
                    <th>Ratings</th>
                    <th>Message</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Ocha Thai Cuisine</td>
                    <td>Loki</td>
                    <td>thedirectoryfinder@gmail.com</td>
                    <td>87654567</td>
                    <td />
                    <td>
                      <label className="rat">
                        {" "}
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star_half</i>*/}
                      </label>
                    </td>
                    <td>Perfect service</td>
                    <td>
                      {" "}
                      <Link href="/review_trash?way=1&&reviewreviewreviewreviewreviewreview=104">
                        <span className="db-list-edit">Delete</span>{" "}
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Titan Wedding Hall</td>
                    <td>Loki</td>
                    <td>thedirectoryfinder@gmail.com</td>
                    <td>87654567</td>
                    <td />
                    <td>
                      <label className="rat">
                        {" "}
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star_half</i>*/}
                      </label>
                    </td>
                    <td>
                      Best service provider in wedding hall field... i
                      personally recommended this Titan Wedding Hall.
                    </td>
                    <td>
                      {" "}
                      <Link href="/review_trash?way=1&&reviewreviewreviewreviewreviewreview=101">
                        <span className="db-list-edit">Delete</span>{" "}
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Smith Luxury Villas</td>
                    <td>Leland K Cotter</td>
                    <td>cotter@business.com</td>
                    <td>9255886632</td>
                    <td />
                    <td>
                      <label className="rat">
                        {" "}
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star_half</i>*/}
                      </label>
                    </td>
                    <td>gfffff</td>
                    <td>
                      {" "}
                      <Link href="/review_trash?way=1&&reviewreviewreviewreviewreviewreview=88">
                        <span className="db-list-edit">Delete</span>{" "}
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Benz cars showroom</td>
                    <td>Betty D Friedman</td>
                    <td>friedman@business.com</td>
                    <td>8478073384</td>
                    <td />
                    <td>
                      <label className="rat">
                        {" "}
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star_half</i>*/}
                      </label>
                    </td>
                    <td>One of the best showrooms in the US.</td>
                    <td>
                      {" "}
                      <Link href="/review_trash?way=1&&reviewreviewreviewreviewreviewreview=84">
                        <span className="db-list-edit">Delete</span>{" "}
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Smith Luxury Villas</td>
                    <td>Leland K Cotter</td>
                    <td>cotter@business.com</td>
                    <td>9255886632</td>
                    <td />
                    <td>
                      <label className="rat">
                        {" "}
                        <i className="material-icons">star</i>
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star_half</i>*/}
                      </label>
                    </td>
                    <td>j</td>
                    <td>
                      {" "}
                      <Link href="/review_trash?way=1&&reviewreviewreviewreviewreviewreview=82">
                        <span className="db-list-edit">Delete</span>{" "}
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Smart Digital Products</td>
                    <td>Betty D Friedman</td>
                    <td>friedman@business.com</td>
                    <td>8478073384</td>
                    <td />
                    <td>
                      <label className="rat">
                        {" "}
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star_half</i>*/}
                      </label>
                    </td>
                    <td>
                      Good support, Very Good team, Excellent design and web
                      template. They are quick to respond for support..
                    </td>
                    <td>
                      {" "}
                      <Link href="/review_trash?way=1&&reviewreviewreviewreviewreviewreview=67">
                        <span className="db-list-edit">Delete</span>{" "}
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Tour and Travel html Template</td>
                    <td>Betty D Friedman</td>
                    <td>friedman@business.com</td>
                    <td>8478073384</td>
                    <td />
                    <td>
                      <label className="rat">
                        {" "}
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star_half</i>*/}
                      </label>
                    </td>
                    <td>
                      Good support, Very Good team, Excellent design and web
                      template. They are quick to respond for support..
                    </td>
                    <td>
                      {" "}
                      <Link href="/review_trash?way=1&&reviewreviewreviewreviewreviewreview=66">
                        <span className="db-list-edit">Delete</span>{" "}
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>Smart Digital Products</td>
                    <td>Rachel</td>
                    <td>rachel@business.com</td>
                    <td>9282922971</td>
                    <td />
                    <td>
                      <label className="rat">
                        {" "}
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star_half</i>*/}
                      </label>
                    </td>
                    <td>
                      Really good job and friendly services will uncover many
                      web sites still in their infancy. Various versions have
                      evolved over the years, sometimes by accident, sometimes
                      on purpose
                    </td>
                    <td>
                      {" "}
                      <Link href="/review_trash?way=1&&reviewreviewreviewreviewreviewreview=51">
                        <span className="db-list-edit">Delete</span>{" "}
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>Tour and Travel html Template</td>
                    <td>Rachel</td>
                    <td>rachel@business.com</td>
                    <td>9282922971</td>
                    <td />
                    <td>
                      <label className="rat">
                        {" "}
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star_half</i>*/}
                      </label>
                    </td>
                    <td>
                      Really good job and friendly services will uncover many
                      web sites still in their infancy. Various versions have
                      evolved over the years, sometimes by accident, sometimes
                      on purpose
                    </td>
                    <td>
                      {" "}
                      <Link href="/review_trash?way=1&&reviewreviewreviewreviewreviewreview=50">
                        <span className="db-list-edit">Delete</span>{" "}
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>Smart Digital Products</td>
                    <td>Directory Finder</td>
                    <td>thedirectoryfinder@gmail.com</td>
                    <td>022446688</td>
                    <td />
                    <td>
                      <label className="rat">
                        {" "}
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star_half</i>*/}
                      </label>
                    </td>
                    <td>
                      Best service provider look like readable English. Many
                      desktop publishing packages and web page editors now use
                      Lorem Ipsum as their default model text
                    </td>
                    <td>
                      {" "}
                      <Link href="/review_trash?way=1&&reviewreviewreviewreviewreviewreview=43">
                        <span className="db-list-edit">Delete</span>{" "}
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>Tour and Travel html Template</td>
                    <td>Directory Finder</td>
                    <td>thedirectoryfinder@gmail.com</td>
                    <td>022446688</td>
                    <td />
                    <td>
                      <label className="rat">
                        {" "}
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star_half</i>*/}
                      </label>
                    </td>
                    <td>
                      Good support, Very Good team, Excellent design and web
                      template. They are quick to respond for support..
                    </td>
                    <td>
                      {" "}
                      <Link href="/review_trash?way=1&&reviewreviewreviewreviewreviewreview=42">
                        <span className="db-list-edit">Delete</span>{" "}
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>Smart Digital Products</td>
                    <td>Directory Finder</td>
                    <td>thedirectoryfinder@gmail.com</td>
                    <td>022446688</td>
                    <td />
                    <td>
                      <label className="rat">
                        {" "}
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star_half</i>*/}
                      </label>
                    </td>
                    <td>
                      I found one of the best template designers every. i
                      strongly recommended this brand and well-skilled
                      developers.
                    </td>
                    <td>
                      {" "}
                      <Link href="/review_trash?way=1&&reviewreviewreviewreviewreviewreview=37">
                        <span className="db-list-edit">Delete</span>{" "}
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>Smart Digital Products</td>
                    <td>Directory Finder</td>
                    <td>thedirectoryfinder@gmail.com</td>
                    <td>022446688</td>
                    <td>Sydney</td>
                    <td>
                      <label className="rat">
                        {" "}
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star_half</i>*/}
                      </label>
                    </td>
                    <td>
                      I found one of the best template designers every. i
                      strongly recommended this brand and well-skilled
                      developers.
                    </td>
                    <td>
                      {" "}
                      <Link href="/review_trash?way=1&&reviewreviewreviewreviewreviewreview=36">
                        <span className="db-list-edit">Delete</span>{" "}
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div id="sent" className="container tab-pane fade">
              <br />
              <table className="responsive-table bordered">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Listing Name</th>
                    <th>User</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>City</th>
                    <th>Ratings</th>
                    <th>Message</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Rolexo Villas in California</td>
                    <td>Digital koncept</td>
                    <td>connect@bizdir.in</td>
                    <td>5522114422</td>
                    <td />
                    <td>
                      <label className="rat">
                        {" "}
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star_half</i>*/}
                      </label>
                    </td>
                    <td>
                      verified_userRolexo Villas is well-known to all as a
                      premier builder of villas and apartments. Even though they
                      have various departments they stay united in giving the
                      customers the best service. I really had a good service
                      right from on time delivery, quality of work, perfection
                      in work completion. The relationship does not end in just
                      in hand over but they stand strong in all tuff times for
                      the commitment given. After 3+ years of handover they
                      addressed the compound wall cracks which expanded and in a
                      week condition. They still respond to any queries / faults
                      on time and track it to closure.
                    </td>
                    <td>
                      {" "}
                      <Link href="/review_trash?way=1&&reviewreviewreviewreviewreviewreview=102">
                        <span className="db-list-edit">Delete</span>{" "}
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>The Royal Spa Center for Women</td>
                    <td>Digital koncept</td>
                    <td>connect@bizdir.in</td>
                    <td>5522114422</td>
                    <td>Sydney</td>
                    <td>
                      <label className="rat">
                        {" "}
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star</i>*/}
                        {/*                                            <i className="material-icons">star_half</i>*/}
                      </label>
                    </td>
                    <td>
                      Perfect facial.. i strongly recommended Writing great
                      reviews may help others discover the places that are just
                      apt for them. Here are a few tips to write a good review:
                    </td>
                    <td>
                      {" "}
                      <Link href="/review_trash?way=1&&reviewreviewreviewreviewreviewreview=35">
                        <span className="db-list-edit">Delete</span>{" "}
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      </div>
     
  )
}

export default page
