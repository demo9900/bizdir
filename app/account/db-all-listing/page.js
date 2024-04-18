'use client';
import React from 'react'
import Headertwo from '@/components/Headertwo'
import Footer from '@/components/Footer';
import BottomMenu from '@/components/BottomMenu';
import Link from 'next/link';

const page = () => {
  return (
    <div className='ud-main-inn ud-no-rhs'>
      <div className="ud-cen">
        <div className="log-bor">&nbsp;</div>{" "}
        <span className="udb-inst">All Listings</span>
        <div className="ud-cen-s2">
          <h2>Listing Details</h2>
          <Link href="/account/add-listing-start" className="db-tit-btn">
            Add New Listing
          </Link>
          <div className="table-responsive">
            <table className="table bordered">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Listing Name</th>
                  <th>Rating</th>
                  <th>Views</th>
                  {/*									<th>Expiry on</th>*/}
                  <th>Status</th>
                  <th>Edit</th>
                  <th>Delete</th>
                  {/*                                    <th>*/}
                  {/*</th>*/}
                  <th>Preview</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <img alt="demo-image" src="/listings/78776dsc09586.jpg" />
                    test <span>28, Mar 2021</span>
                  </td>
                  <td>
                    <span className="db-list-rat">0</span>
                  </td>
                  <td>
                    <span className="db-list-rat">1</span>
                  </td>
                  {/*									<td><span className="db-list-ststus">8 June 2020</span></td>*/}
                  <td>
                    <span className="db-list-ststus">Active</span>
                  </td>
                  <td>
                    <Link
                      href="/edit-listing-step-1?row=LIST395"
                      className="db-list-edit"
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <Link
                      href="/delete-listing?row=LIST395"
                      className="db-list-edit"
                    >
                      Delete
                    </Link>
                  </td>
                  {/*									<td><Link href="/promote-business?code=*/}
                  {/*&&type=listing" className="db-list-edit">*/}
                  {/*</Link></td>*/}
                  <td>
                    <Link
                      href="/listing/test6"
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
                    <img alt="demo-image" src="/listings/432063dffe1d6-e6c7-4bc8-a563-0e5687c5fe12.jpeg" />
                    dfzhfhd <span>25, Mar 2021</span>
                  </td>
                  <td>
                    <span className="db-list-rat">0</span>
                  </td>
                  <td>
                    <span className="db-list-rat">7</span>
                  </td>
                  {/*									<td><span className="db-list-ststus">8 June 2020</span></td>*/}
                  <td>
                    <span className="db-list-ststus">Active</span>
                  </td>
                  <td>
                    <Link
                      href="/edit-listing-step-1?row=LIST394"
                      className="db-list-edit"
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <Link
                      href="/delete-listing?row=LIST394"
                      className="db-list-edit"
                    >
                      Delete
                    </Link>
                  </td>
                  {/*									<td><Link href="/promote-business?code=*/}
                  {/*&&type=listing" className="db-list-edit">*/}
                  {/*</Link></td>*/}
                  <td>
                    <Link
                      href="/listing/dfzhfhd"
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
                    <img alt="demo-image" src="/listings/72048pexels-francesco-ungaro-96444-(1).jpg" />
                    Iei <span>25, Mar 2021</span>
                  </td>
                  <td>
                    <span className="db-list-rat">0</span>
                  </td>
                  <td>
                    <span className="db-list-rat">15</span>
                  </td>
                  {/*									<td><span className="db-list-ststus">8 June 2020</span></td>*/}
                  <td>
                    <span className="db-list-ststus">Active</span>
                  </td>
                  <td>
                    <Link
                      href="/edit-listing-step-1?row=LIST393"
                      className="db-list-edit"
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <Link
                      href="/delete-listing?row=LIST393"
                      className="db-list-edit"
                    >
                      Delete
                    </Link>
                  </td>
                  {/*									<td><Link href="/promote-business?code=*/}
                  {/*&&type=listing" className="db-list-edit">*/}
                  {/*</Link></td>*/}
                  <td>
                    <Link
                      href="/listing/iei"
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
                    <img alt="demo-image" src="/listings/432063dffe1d6-e6c7-4bc8-a563-0e5687c5fe12.jpeg" />
                    phoenix mall <span>13, Mar 2021</span>
                  </td>
                  <td>
                    <span className="db-list-rat">0</span>
                  </td>
                  <td>
                    <span className="db-list-rat">10</span>
                  </td>
                  {/*									<td><span className="db-list-ststus">8 June 2020</span></td>*/}
                  <td>
                    <span className="db-list-ststus">Active</span>
                  </td>
                  <td>
                    <Link
                      href="/edit-listing-step-1?row=LIST392"
                      className="db-list-edit"
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <Link
                      href="/delete-listing?row=LIST392"
                      className="db-list-edit"
                    >
                      Delete
                    </Link>
                  </td>
                  {/*									<td><Link href="/promote-business?code=*/}
                  {/*&&type=listing" className="db-list-edit">*/}
                  {/*</Link></td>*/}
                  <td>
                    <Link
                      href="/listing/phoenix-mall"
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
                    <img alt="demo-image" src="/listings/45451download-(1).jfif" />
                    Ocha Thai Cuisine <span>12, Mar 2021</span>
                  </td>
                  <td>
                    <span className="db-list-rat">5</span>
                  </td>
                  <td>
                    <span className="db-list-rat">9</span>
                  </td>
                  {/*									<td><span className="db-list-ststus">8 June 2020</span></td>*/}
                  <td>
                    <span className="db-list-ststus">Active</span>
                  </td>
                  <td>
                    <Link
                      href="/edit-listing-step-1?row=LIST391"
                      className="db-list-edit"
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <Link
                      href="/delete-listing?row=LIST391"
                      className="db-list-edit"
                    >
                      Delete
                    </Link>
                  </td>
                  {/*									<td><Link href="/promote-business?code=*/}
                  {/*&&type=listing" className="db-list-edit">*/}
                  {/*</Link></td>*/}
                  <td>
                    <Link
                      href="/listing/ocha-thai-cuisine"
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
                    <img alt="demo-image" src="/listings/72048pexels-francesco-ungaro-96444-(1).jpg" />
                    Core real estates <span>11, Mar 2021</span>
                  </td>
                  <td>
                    <span className="db-list-rat">0</span>
                  </td>
                  <td>
                    <span className="db-list-rat">18</span>
                  </td>
                  {/*									<td><span className="db-list-ststus">8 June 2020</span></td>*/}
                  <td>
                    <span className="db-list-ststus">Active</span>
                  </td>
                  <td>
                    <Link
                      href="/edit-listing-step-1?row=LIST389"
                      className="db-list-edit"
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <Link
                      href="/delete-listing?row=LIST389"
                      className="db-list-edit"
                    >
                      Delete
                    </Link>
                  </td>
                  {/*									<td><Link href="/promote-business?code=*/}
                  {/*&&type=listing" className="db-list-edit">*/}
                  {/*</Link></td>*/}
                  <td>
                    <Link
                      href="/listing/core-real-estates"
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
                    <img alt="demo-image" src="/listings/85477capture1.png" />
                    Gill Automobiles and Services <span>20, Feb 2021</span>
                  </td>
                  <td>
                    <span className="db-list-rat">0</span>
                  </td>
                  <td>
                    <span className="db-list-rat">30</span>
                  </td>
                  {/*									<td><span className="db-list-ststus">8 June 2020</span></td>*/}
                  <td>
                    <span className="db-list-ststus">Active</span>
                  </td>
                  <td>
                    <Link
                      href="/edit-listing-step-1?row=LIST384"
                      className="db-list-edit"
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <Link
                      href="/delete-listing?row=LIST384"
                      className="db-list-edit"
                    >
                      Delete
                    </Link>
                  </td>
                  {/*									<td><Link href="/promote-business?code=*/}
                  {/*&&type=listing" className="db-list-edit">*/}
                  {/*</Link></td>*/}
                  <td>
                    <Link
                      href="/listing/gill-automobiles-and-services"
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
                    <img alt="demo-image" src="/listings/64465capture-(1).png" />
                    Titan Wedding Hall <span>07, Feb 2021</span>
                  </td>
                  <td>
                    <span className="db-list-rat">5</span>
                  </td>
                  <td>
                    <span className="db-list-rat">27</span>
                  </td>
                  {/*									<td><span className="db-list-ststus">8 June 2020</span></td>*/}
                  <td>
                    <span className="db-list-ststus">Active</span>
                  </td>
                  <td>
                    <Link
                      href="/edit-listing-step-1?row=LIST381"
                      className="db-list-edit"
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <Link
                      href="/delete-listing?row=LIST381"
                      className="db-list-edit"
                    >
                      Delete
                    </Link>
                  </td>
                  {/*									<td><Link href="/promote-business?code=*/}
                  {/*&&type=listing" className="db-list-edit">*/}
                  {/*</Link></td>*/}
                  <td>
                    <Link
                      href="/listing/titan-wedding-hall"
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
                    <img alt="demo-image" src="/listings/72048pexels-francesco-ungaro-96444-(1).jpg" />
                    Taj Hotels <span>24, Dec 2020</span>
                  </td>
                  <td>
                    <span className="db-list-rat">0</span>
                  </td>
                  <td>
                    <span className="db-list-rat">16</span>
                  </td>
                  {/*									<td><span className="db-list-ststus">8 June 2020</span></td>*/}
                  <td>
                    <span className="db-list-ststus">Active</span>
                  </td>
                  <td>
                    <Link
                      href="/edit-listing-step-1?row=LIST380"
                      className="db-list-edit"
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <Link
                      href="/delete-listing?row=LIST380"
                      className="db-list-edit"
                    >
                      Delete
                    </Link>
                  </td>
                  {/*									<td><Link href="/promote-business?code=*/}
                  {/*&&type=listing" className="db-list-edit">*/}
                  {/*</Link></td>*/}
                  <td>
                    <Link
                      href="/listing/taj-hotels1"
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
                    <img alt="demo-image" src="/listings/28181houses-on-body-of-water-1724424.jpg" />
                    ccc <span>29, Sep 2020</span>
                  </td>
                  <td>
                    <span className="db-list-rat">0</span>
                  </td>
                  <td>
                    <span className="db-list-rat">10</span>
                  </td>
                  {/*									<td><span className="db-list-ststus">8 June 2020</span></td>*/}
                  <td>
                    <span className="db-list-ststus">Active</span>
                  </td>
                  <td>
                    <Link
                      href="/edit-listing-step-1?row=LIST378"
                      className="db-list-edit"
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <Link
                      href="/delete-listing?row=LIST378"
                      className="db-list-edit"
                    >
                      Delete
                    </Link>
                  </td>
                  {/*									<td><Link href="/promote-business?code=*/}
                  {/*&&type=listing" className="db-list-edit">*/}
                  {/*</Link></td>*/}
                  <td>
                    <Link
                      href="/listing/ccc"
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
                    <img alt="demo-image" src="/listings/28181houses-on-body-of-water-1724424.jpg" />
                    Hello <span>23, Sep 2020</span>
                  </td>
                  <td>
                    <span className="db-list-rat">0</span>
                  </td>
                  <td>
                    <span className="db-list-rat">10</span>
                  </td>
                  {/*									<td><span className="db-list-ststus">8 June 2020</span></td>*/}
                  <td>
                    <span className="db-list-ststus">Active</span>
                  </td>
                  <td>
                    <Link
                      href="/edit-listing-step-1?row=LIST375"
                      className="db-list-edit"
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <Link
                      href="/delete-listing?row=LIST375"
                      className="db-list-edit"
                    >
                      Delete
                    </Link>
                  </td>
                  {/*									<td><Link href="/promote-business?code=*/}
                  {/*&&type=listing" className="db-list-edit">*/}
                  {/*</Link></td>*/}
                  <td>
                    <Link
                      href="/listing/hello3"
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
                    <img alt="demo-image" src="/listings/56295pexels-photo-3155726.jpeg" />
                    Premium gardens <span>16, May 2020</span>
                  </td>
                  <td>
                    <span className="db-list-rat">0</span>
                  </td>
                  <td>
                    <span className="db-list-rat">9</span>
                  </td>
                  {/*									<td><span className="db-list-ststus">8 June 2020</span></td>*/}
                  <td>
                    <span className="db-list-ststus">Active</span>
                  </td>
                  <td>
                    <Link
                      href="/edit-listing-step-1?row=LIST268"
                      className="db-list-edit"
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <Link
                      href="/delete-listing?row=LIST268"
                      className="db-list-edit"
                    >
                      Delete
                    </Link>
                  </td>
                  {/*									<td><Link href="/promote-business?code=*/}
                  {/*&&type=listing" className="db-list-edit">*/}
                  {/*</Link></td>*/}
                  <td>
                    <Link
                      href="/listing/premium-gardens"
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
                    <img alt="demo-image" src="/listings/55800pexels-photo-258154.jpeg" />
                    Beach luxury villa gardens <span>16, May 2020</span>
                  </td>
                  <td>
                    <span className="db-list-rat">0</span>
                  </td>
                  <td>
                    <span className="db-list-rat">14</span>
                  </td>
                  {/*									<td><span className="db-list-ststus">8 June 2020</span></td>*/}
                  <td>
                    <span className="db-list-ststus">Active</span>
                  </td>
                  <td>
                    <Link
                      href="/edit-listing-step-1?row=LIST267"
                      className="db-list-edit"
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <Link
                      href="/delete-listing?row=LIST267"
                      className="db-list-edit"
                    >
                      Delete
                    </Link>
                  </td>
                  {/*									<td><Link href="/promote-business?code=*/}
                  {/*&&type=listing" className="db-list-edit">*/}
                  {/*</Link></td>*/}
                  <td>
                    <Link
                      href="/listing/beach-luxury-villa-gardens"
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
                    <img alt="demo-image" src="/listings/75352house-luxury-villa-swimming-pool-32870.jpg" />
                    GOS Villas <span>16, May 2020</span>
                  </td>
                  <td>
                    <span className="db-list-rat">0</span>
                  </td>
                  <td>
                    <span className="db-list-rat">10</span>
                  </td>
                  {/*									<td><span className="db-list-ststus">8 June 2020</span></td>*/}
                  <td>
                    <span className="db-list-ststus">Active</span>
                  </td>
                  <td>
                    <Link
                      href="/edit-listing-step-1?row=LIST266"
                      className="db-list-edit"
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <Link
                      href="/delete-listing?row=LIST266"
                      className="db-list-edit"
                    >
                      Delete
                    </Link>
                  </td>
                  {/*									<td><Link href="/promote-business?code=*/}
                  {/*&&type=listing" className="db-list-edit">*/}
                  {/*</Link></td>*/}
                  <td>
                    <Link
                      href="/listing/gos-villas"
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
                    <img alt="demo-image" src="/listings/2279bike1.jpg" />
                    Super bike showroom <span>02, May 2020</span>
                  </td>
                  <td>
                    <span className="db-list-rat">0</span>
                  </td>
                  <td>
                    <span className="db-list-rat">9</span>
                  </td>
                  {/*									<td><span className="db-list-ststus">8 June 2020</span></td>*/}
                  <td>
                    <span className="db-list-ststus">Active</span>
                  </td>
                  <td>
                    <Link
                      href="/edit-listing-step-1?row=LIST247"
                      className="db-list-edit"
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <Link
                      href="/delete-listing?row=LIST247"
                      className="db-list-edit"
                    >
                      Delete
                    </Link>
                  </td>
                  {/*									<td><Link href="/promote-business?code=*/}
                  {/*&&type=listing" className="db-list-edit">*/}
                  {/*</Link></td>*/}
                  <td>
                    <Link
                      href="/listing/super-bike-showroom"
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
                    <img alt="demo-image" src="/listings/2279bike1.jpg" />
                    Benz cars showroom <span>25, Apr 2020</span>
                  </td>
                  <td>
                    <span className="db-list-rat">5</span>
                  </td>
                  <td>
                    <span className="db-list-rat">12</span>
                  </td>
                  {/*									<td><span className="db-list-ststus">8 June 2020</span></td>*/}
                  <td>
                    <span className="db-list-ststus">Active</span>
                  </td>
                  <td>
                    <Link
                      href="/edit-listing-step-1?row=LIST238"
                      className="db-list-edit"
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <Link
                      href="/delete-listing?row=LIST238"
                      className="db-list-edit"
                    >
                      Delete
                    </Link>
                  </td>
                  {/*									<td><Link href="/promote-business?code=*/}
                  {/*&&type=listing" className="db-list-edit">*/}
                  {/*</Link></td>*/}
                  <td>
                    <Link
                      href="/listing/benz-cars-showroom"
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
                    <img alt="demo-image" src="/listings/56300pexels-photo-667838.jpeg" />
                    Smith Luxury Villas <span>19, Mar 2020</span>
                  </td>
                  <td>
                    <span className="db-list-rat">2</span>
                  </td>
                  <td>
                    <span className="db-list-rat">9</span>
                  </td>
                  {/*									<td><span className="db-list-ststus">8 June 2020</span></td>*/}
                  <td>
                    <span className="db-list-ststus">Active</span>
                  </td>
                  <td>
                    <Link
                      href="/edit-listing-step-1?row=LIST207"
                      className="db-list-edit"
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <Link
                      href="/delete-listing?row=LIST207"
                      className="db-list-edit"
                    >
                      Delete
                    </Link>
                  </td>
                  {/*									<td><Link href="/promote-business?code=*/}
                  {/*&&type=listing" className="db-list-edit">*/}
                  {/*</Link></td>*/}
                  <td>
                    <Link
                      href="/listing/smith-luxury-villas"
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
                    <img alt="demo-image" src="/listings/78973104682512.jpg" />
                    Ø§Ø¨Ù†Ù‰ Ù…ÙˆÙ‚Ø¹Ùƒ Ù…Ø¹Ù†Ø§ <span>25, Jan 2020</span>
                  </td>
                  <td>
                    <span className="db-list-rat">0</span>
                  </td>
                  <td>
                    <span className="db-list-rat">9</span>
                  </td>
                  {/*									<td><span className="db-list-ststus">8 June 2020</span></td>*/}
                  <td>
                    <span className="db-list-ststus">Active</span>
                  </td>
                  <td>
                    <Link
                      href="/edit-listing-step-1?row=LIST164"
                      className="db-list-edit"
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <Link
                      href="/delete-listing?row=LIST164"
                      className="db-list-edit"
                    >
                      Delete
                    </Link>
                  </td>
                  {/*									<td><Link href="/promote-business?code=*/}
                  {/*&&type=listing" className="db-list-edit">*/}
                  {/*</Link></td>*/}
                  <td>
                    <Link
                      href="/listing/Ø§Ø¨Ù†Ù‰-Ù…ÙˆÙ‚Ø¹Ùƒ-Ù…Ø¹Ù†Ø§"
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
                    <img alt="demo-image" src="/listings/2060201_preview.jpg" />
                    BizBookBusiness Directory Template <span>24, Jan 2020</span>
                  </td>
                  <td>
                    <span className="db-list-rat">0</span>
                  </td>
                  <td>
                    <span className="db-list-rat">9</span>
                  </td>
                  {/*									<td><span className="db-list-ststus">8 June 2020</span></td>*/}
                  <td>
                    <span className="db-list-ststus">Active</span>
                  </td>
                  <td>
                    <Link
                      href="/edit-listing-step-1?row=LIST163"
                      className="db-list-edit"
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <Link
                      href="/delete-listing?row=LIST163"
                      className="db-list-edit"
                    >
                      Delete
                    </Link>
                  </td>
                  {/*									<td><Link href="/promote-business?code=*/}
                  {/*&&type=listing" className="db-list-edit">*/}
                  {/*</Link></td>*/}
                  <td>
                    <Link
                      href="/listing/bizbookbusiness-directory-template"
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
                    <img alt="demo-image" src="/listings/76808tour-travel-html-template.jpg" />
                    Tour and Travel html Template <span>29, Dec 2019</span>
                  </td>
                  <td>
                    <span className="db-list-rat">3.7</span>
                  </td>
                  <td>
                    <span className="db-list-rat">12</span>
                  </td>
                  {/*									<td><span className="db-list-ststus">8 June 2020</span></td>*/}
                  <td>
                    <span className="db-list-ststus">Active</span>
                  </td>
                  <td>
                    <Link
                      href="/edit-listing-step-1?row=LIST130"
                      className="db-list-edit"
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <Link
                      href="/delete-listing?row=LIST130"
                      className="db-list-edit"
                    >
                      Delete
                    </Link>
                  </td>
                  {/*									<td><Link href="/promote-business?code=*/}
                  {/*&&type=listing" className="db-list-edit">*/}
                  {/*</Link></td>*/}
                  <td>
                    <Link
                      href="/listing/tour-and-travel-html-template"
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
                    <img alt="demo-image" src="/listings/657791_f1cdikgosfn0gg0a96jsdw.png" />
                    Smart Digital Products <span>15, Dec 2019</span>
                  </td>
                  <td>
                    <span className="db-list-rat">3.2</span>
                  </td>
                  <td>
                    <span className="db-list-rat">8</span>
                  </td>
                  {/*									<td><span className="db-list-ststus">8 June 2020</span></td>*/}
                  <td>
                    <span className="db-list-ststus">Active</span>
                  </td>
                  <td>
                    <Link
                      href="/edit-listing-step-1?row=LIST129"
                      className="db-list-edit"
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <Link
                      href="/delete-listing?row=LIST129"
                      className="db-list-edit"
                    >
                      Delete
                    </Link>
                  </td>
                  {/*									<td><Link href="/promote-business?code=*/}
                  {/*&&type=listing" className="db-list-edit">*/}
                  {/*</Link></td>*/}
                  <td>
                    <Link
                      href="/listing/smart-digital-products"
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
    </div>
  )
}

export default page
