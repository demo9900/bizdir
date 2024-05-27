"use client";
import React from "react";
import Headertwo from "@/components/Headertwo";
import Footer from "@/components/Footer";
import BottomMenu from "@/components/BottomMenu";
import Link from "next/link";
import ComingSoon from "@/components/ComingSoon";

const page = () => {
  return <ComingSoon />;
  return (
    <div className="ud-main-inn ud-no-rhs">
      <div className="ud-cen">
        <div className="log-bor">&nbsp;</div>{" "}
        <span className="udb-inst">Liked Listings</span>
        <div className="ud-cen-s2">
          <h2>All Liked Listings</h2>
          <table className="responsive-table bordered">
            <thead>
              <tr>
                <th>No</th>
                <th>Listing Name</th>
                <th>Rating</th>
                <th>Remove</th>
                <th>Preview</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <img alt="demoimage" src="/listings/41073ser6.jpg" />
                  The Royal Spa Center for Women <span>08, Dec 2019</span>
                </td>
                <td>
                  <span className="db-list-rat">4</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=148">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/all-listing"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <img
                    alt="demoimage"
                    src="/listings/4797732622rn53themes.png"
                  />
                  Wedding Venues viki <span>22, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=216">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/wedding-venues-viki"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  <img
                    alt="demoimage"
                    src="/listings/26404cvs-gift-card-476x328.png"
                  />
                  asjdklfasd <span>23, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=217">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/asjdklfasd"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  <img
                    alt="demoimage"
                    src="/listings/56271pexels-photo-713148.jpeg"
                  />
                  IPM Business Software <span>22, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=218">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/ipm-business-software"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>
                  <img
                    alt="demoimage"
                    src="/listings/20140doctor-sitting-in-front-of-his-desk-2182979.jpg"
                  />
                  Forms hospitals <span>22, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=219">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/forms-hospitals"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>
                  <img alt="demoimage" src="/listings/46980logo2.png" />
                  Test mest <span>21, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=220">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/test-mest"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td>
                  <img alt="demoimage" src="/listings/88258blog_off.jpg" />
                  New listing 2 <span>20, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=221">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/new-listing-2"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>8</td>
                <td>
                  <img alt="demoimage" src="/listings/138331.jpg" />
                  New listing <span>20, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=222">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/new-listing"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>9</td>
                <td>
                  <img alt="demoimage" src="/listings/138331.jpg" />
                  Anicuns Online <span>17, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=224">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/anicuns-online"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>10</td>
                <td>
                  <img
                    alt="demoimage"
                    src="/listings/83091accomplishment-ceremony-education-graduation-267885.jpg"
                  />
                  lll <span>16, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=225">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/lll"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>11</td>
                <td>
                  <img
                    alt="demoimage"
                    src="/listings/21604photo-of-a-boy-with-curly-hair-2929036.jpg"
                  />
                  William Chil care Hospital <span>11, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=226">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/william-chil-care-hospital"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>12</td>
                <td>
                  <img
                    alt="demoimage"
                    src="/listings/73954man-and-child-holding-baby-3279209.jpg"
                  />
                  Urban Community Hospital <span>11, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">4</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=227">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/urban-community-hospital"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>13</td>
                <td>
                  <img
                    alt="demoimage"
                    src="/listings/20140doctor-sitting-in-front-of-his-desk-2182979.jpg"
                  />
                  Joseph Multispeciality Hospital <span>11, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=228">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/joseph-multispeciality-hospital"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>14</td>
                <td>
                  <img
                    alt="demoimage"
                    src="/listings/22386pexels-photo-1157391.jpeg"
                  />
                  Apolloo Hospitals UAE <span>07, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">4</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=229">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/apolloo-hospitals-uae"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>15</td>
                <td>
                  <img
                    alt="demoimage"
                    src="/listings/43032pexels-photo-955793.jpeg"
                  />
                  Appers Premium Independent Houses <span>07, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">3.3</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=230">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/appers-premium-independent-houses"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>16</td>
                <td>
                  <img
                    alt="demoimage"
                    src="/listings/61191pexels-photo-96444.jpeg"
                  />
                  Capital five star hotels <span>07, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">4</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=231">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/capital-five-star-hotels"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>17</td>
                <td>
                  <img
                    alt="demoimage"
                    src="/listings/51803pexels-photo-1386168.jpeg"
                  />
                  Hard Rocks Hotels <span>07, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">3.8</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=232">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/hard-rocks-hotels"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>18</td>
                <td>
                  <img
                    alt="demoimage"
                    src="/listings/26318pexels-photo-594077.jpeg"
                  />
                  Taaj Five Star Hotels <span>07, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">4</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=233">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/taaj-five-star-hotels"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>19</td>
                <td>
                  <img
                    alt="demoimage"
                    src="/listings/4103pexels-photo-248547.jpeg"
                  />
                  Dial Sports Shops <span>07, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">3</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=235">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/dial-sports-shops"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>20</td>
                <td>
                  <img
                    alt="demoimage"
                    src="/listings/83091accomplishment-ceremony-education-graduation-267885.jpg"
                  />
                  Andree Education and Tuition Center <span>07, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=236">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/andree-education-and-tuition-center"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>21</td>
                <td>
                  <img
                    alt="demoimage"
                    src="/listings/25918pexels-photo-3217851.jpeg"
                  />
                  TATE Electrical Shops <span>07, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=237">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/tate-electrical-shops"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>22</td>
                <td>
                  <img
                    alt="demoimage"
                    src="/listings/68725pexels-photo-2747550.jpeg"
                  />
                  Center Automobiles <span>07, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">4</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=238">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/center-automobiles"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>23</td>
                <td>
                  <img
                    alt="demoimage"
                    src="/listings/22862pexels-photo-1250655.jpeg"
                  />
                  Green Healthcare Hospital <span>07, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">3</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=239">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/green-healthcare-hospital"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>24</td>
                <td>
                  <img
                    alt="demoimage"
                    src="/listings/9953white-bmw-e46-under-cloudy-skies-707046.jpg"
                  />
                  Lemoo Cap Services <span>07, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">3</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=240">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/lemoo-cap-services"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>25</td>
                <td>
                  <img
                    alt="demoimage"
                    src="/listings/89971pexels-photo-2096983.jpeg"
                  />
                  Rachel Taj Hotels <span>07, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">3</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=241">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/rachel-taj-hotels"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>26</td>
                <td>
                  <img alt="demoimage" src="/listings/88546images-(5).jpg" />
                  coffee shop <span>04, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">4</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=242">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/coffee-shop"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>27</td>
                <td>
                  <img
                    alt="demoimage"
                    src="/listings/47884beautiful-wooden-houses-with-lawns-1643389.jpg"
                  />
                  Asian Real Estate <span>01, Feb 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=263">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/all-listing"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>28</td>
                <td>
                  <img alt="demoimage" src="/listings/540095e27bfabcc13d.jpg" />
                  abc ltd <span>19, Feb 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=264">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/abc-ltd"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>29</td>
                <td>
                  <img alt="demoimage" src="/listings/540095e27bfabcc13d.jpg" />
                  Home <span>16, Mar 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=265">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/home"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>30</td>
                <td>
                  <img
                    alt="demoimage"
                    src="/listings/6764gettyimages-200066800-001-1.jpg"
                  />
                  Royal Real Estates <span>18, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=267">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/royal-real-estates"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>31</td>
                <td>
                  <img
                    alt="demoimage"
                    src="/listings/67634pexels-photo-208736.jpeg"
                  />
                  Della World Premium Properties <span>07, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">4</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=268">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/della-world-premium-properties"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>32</td>
                <td>
                  <img
                    alt="demoimage"
                    src="/listings/32898pexels-photo-1858175.jpeg"
                  />
                  Honey Massage Center <span>30, Mar 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=286">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/honey-massage-center"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>33</td>
                <td>
                  <img
                    alt="demoimage"
                    src="/listings/80274easy-to-install-2.png"
                  />
                  forms soft tech <span>22, Jan 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=299">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/forms-soft-tech"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>34</td>
                <td>
                  <img alt="demoimage" src="/listings/66695o.jpg" />
                  International Food Bazaar <span>03, Jun 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=309">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/international-food-bazaar"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>35</td>
                <td>
                  <img
                    alt="demoimage"
                    src="/listings/43340pexels-photo-106399.jpeg"
                  />
                  Rolexo Villas in California <span>07, Mar 2021</span>
                </td>
                <td>
                  <span className="db-list-rat">5</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=312">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/rolexo-villas-in-california"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>36</td>
                <td>
                  <img alt="demoimage" src="/listings/40913book_reading.jpg" />
                  saadsds <span>04, Jul 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=315">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/saadsds"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>37</td>
                <td>
                  <img
                    alt="demoimage"
                    src="/listings/16671tcx_pro21_white__23108.1409770848.1280.1280.jpg"
                  />
                  Hari krishna entrepreneur <span>29, Jul 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=317">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/hari-krishna-entrepreneur"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
              <tr>
                <td>38</td>
                <td>
                  <img
                    alt="demoimage"
                    src="/listings/79587loewe-technologies-4aqx0r9kucg-unsplash.jpg"
                  />
                  fghdfgfdg <span>05, May 2020</span>
                </td>
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                <td>
                  <Link href="/liked-listing-trash?likedlistinglikedlistinglikedlistinglikedlistinglikedlisting=318">
                    <span className="db-list-edit">Remove</span>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/listing/fghdfgfdg"
                    className="db-list-edit"
                    target="_blank"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;
