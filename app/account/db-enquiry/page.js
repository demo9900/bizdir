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
        <span className="udb-inst">Leads</span>
        <div className="ud-cen-s2">
          <h2>Enquiry Details</h2>
          <table className="responsive-table bordered">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Message</th>
                <th>Page name</th>
                <th>Tracking-id</th>
                <th>URL</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  Loki <span>11, Mar 2021</span>
                </td>
                <td>thedirectoryfinder@gmail.com</td>
                <td>87654567</td>
                <td>Hi abhi</td>
                <td>LG AC</td>
                <td>Website</td>
                <td>listing-details?src=Website&amp;&amp;code=</td>
                <td>
                  <Link
                    href="/enquiry_trash?messageenquirymessageenquirymessageenquirymessageenquiry=229"
                    className="db-list-edit"
                  >
                    Delete
                  </Link>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  Loki <span>07, Feb 2021</span>
                </td>
                <td>thedirectoryfinder@gmail.com</td>
                <td>87654567</td>
                <td>
                  Hi Team, please send the pricing details for the 1 day
                  function
                </td>
                <td>Titan Wedding Hall</td>
                <td>Website</td>
                <td>listing-details?src=Website&amp;&amp;code=LIST381</td>
                <td>
                  <Link
                    href="/enquiry_trash?messageenquirymessageenquirymessageenquirymessageenquiry=223"
                    className="db-list-edit"
                  >
                    Delete
                  </Link>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  johnyyy <span>20, Jun 2020</span>
                </td>
                <td>johnitsmes@gmail.com</td>
                <td>78658765</td>
                <td>Hi get quote test</td>
                <td>Beach luxury villa gardens</td>
                <td>Website</td>
                <td>listing-details?src=Website&amp;&amp;code=LIST267</td>
                <td>
                  <Link
                    href="/enquiry_trash?messageenquirymessageenquirymessageenquirymessageenquiry=184"
                    className="db-list-edit"
                  >
                    Delete
                  </Link>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  johnyyy <span>20, Jun 2020</span>
                </td>
                <td>johnitsmes@gmail.com</td>
                <td>78658765</td>
                <td>Hi get quote message</td>
                <td>Beach luxury villa gardens</td>
                <td>Website</td>
                <td>listing-details?src=Website&amp;&amp;code=LIST267</td>
                <td>
                  <Link
                    href="/enquiry_trash?messageenquirymessageenquirymessageenquirymessageenquiry=183"
                    className="db-list-edit"
                  >
                    Delete
                  </Link>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>
                  jelotesan <span>16, Jun 2020</span>
                </td>
                <td>angelsanchezprat@gmail.com</td>
                <td>666111666</td>
                <td>fh</td>
                <td>Premium gardens</td>
                <td>Website</td>
                <td>listing-details?src=Website&amp;&amp;code=LIST268</td>
                <td>
                  <Link
                    href="/enquiry_trash?messageenquirymessageenquirymessageenquirymessageenquiry=180"
                    className="db-list-edit"
                  >
                    Delete
                  </Link>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>
                  jelotesan <span>16, Jun 2020</span>
                </td>
                <td>angelsanchezprat@gmail.com</td>
                <td>666111666</td>
                <td>gffb</td>
                <td>Premium gardens</td>
                <td>Website</td>
                <td>listing-details?src=Website&amp;&amp;code=LIST268</td>
                <td>
                  <Link
                    href="/enquiry_trash?messageenquirymessageenquirymessageenquirymessageenquiry=179"
                    className="db-list-edit"
                  >
                    Delete
                  </Link>
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td>
                  Leland K Cotter <span>22, May 2020</span>
                </td>
                <td>cotter@business.com</td>
                <td>9255886632</td>
                <td>BGHGBHGB</td>
                <td>Premium gardens</td>
                <td>Website</td>
                <td>listing-details?src=Website&amp;&amp;code=LIST268</td>
                <td>
                  <Link
                    href="/enquiry_trash?messageenquirymessageenquirymessageenquirymessageenquiry=151"
                    className="db-list-edit"
                  >
                    Delete
                  </Link>
                </td>
              </tr>
              <tr>
                <td>8</td>
                <td>
                  Leland K Cotter <span>22, May 2020</span>
                </td>
                <td>cotter@business.com</td>
                <td>9255886632</td>
                <td>VBGBGTBGB</td>
                <td>Premium gardens</td>
                <td>Website</td>
                <td>listing-details?src=Website&amp;&amp;code=LIST268</td>
                <td>
                  <Link
                    href="/enquiry_trash?messageenquirymessageenquirymessageenquirymessageenquiry=150"
                    className="db-list-edit"
                  >
                    Delete
                  </Link>
                </td>
              </tr>
              <tr>
                <td>9</td>
                <td>
                  Leland K Cotter <span>22, May 2020</span>
                </td>
                <td>cotter@business.com</td>
                <td>9255886632</td>
                <td>DFVCFVRGFV</td>
                <td>Premium gardens</td>
                <td>Website</td>
                <td>listing-details?src=Website&amp;&amp;code=LIST268</td>
                <td>
                  <Link
                    href="/enquiry_trash?messageenquirymessageenquirymessageenquirymessageenquiry=149"
                    className="db-list-edit"
                  >
                    Delete
                  </Link>
                </td>
              </tr>
              <tr>
                <td>10</td>
                <td>
                  Leland K Cotter <span>02, May 2020</span>
                </td>
                <td>cotter@business.com</td>
                <td>9255886632</td>
                <td>dfsdgfsdfgfsd</td>
                <td>Benz cars showroom</td>
                <td>Website</td>
                <td>listing-details?src=Website&amp;&amp;code=LIST238</td>
                <td>
                  <Link
                    href="/enquiry_trash?messageenquirymessageenquirymessageenquirymessageenquiry=136"
                    className="db-list-edit"
                  >
                    Delete
                  </Link>
                </td>
              </tr>
              <tr>
                <td>11</td>
                <td>
                  Leland K Cotter <span>02, May 2020</span>
                </td>
                <td>cotter@business.com</td>
                <td>9255886632</td>
                <td>svvsdfgsdg</td>
                <td>Benz cars showroom</td>
                <td>Website</td>
                <td>listing-details?src=Website&amp;&amp;code=LIST238</td>
                <td>
                  <Link
                    href="/enquiry_trash?messageenquirymessageenquirymessageenquirymessageenquiry=135"
                    className="db-list-edit"
                  >
                    Delete
                  </Link>
                </td>
              </tr>
              <tr>
                <td>12</td>
                <td>
                  Leland K Cotter <span>28, Apr 2020</span>
                </td>
                <td>cotter@business.com</td>
                <td>9255886632</td>
                <td>hey give me</td>
                <td>Smart Digital Products</td>
                <td>Website</td>
                <td>listing-details?src=Website&amp;&amp;code=LIST129</td>
                <td>
                  <Link
                    href="/enquiry_trash?messageenquirymessageenquirymessageenquirymessageenquiry=132"
                    className="db-list-edit"
                  >
                    Delete
                  </Link>
                </td>
              </tr>
              <tr>
                <td>13</td>
                <td>
                  Leland K Cotter <span>26, Apr 2020</span>
                </td>
                <td>cotter@business.com</td>
                <td>9255886632</td>
                <td />
                <td>Benz cars showroom</td>
                <td>Website</td>
                <td>listing-details?src=Website&amp;&amp;code=LIST238</td>
                <td>
                  <Link
                    href="/enquiry_trash?messageenquirymessageenquirymessageenquirymessageenquiry=129"
                    className="db-list-edit"
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      </div>
  )
}

export default page
