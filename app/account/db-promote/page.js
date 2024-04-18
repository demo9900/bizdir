'use client';
import React from 'react'
import Link from 'next/link';

const page = () => {
  return (
      <div className='ud-main-inn ud-no-rhs'>
      <div className="ud-cen">
        <div className="log-bor">&nbsp;</div>{" "}
        <span className="udb-inst">Listing promotions</span>
        <div className="ud-cen-s2">
          <h2>Promotions</h2>
          <Link href="/promote-business" className="db-tit-btn">
            Start new promotions
          </Link>
          <table className="responsive-table bordered">
            <thead>
              <tr>
                <th>No</th>
                <th>Listing name</th>
                <th>Start date</th>
                <th>End date</th>
                <th>Duration</th>
                <th>Status</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <img alt="theme" src="/listings/432063dffe1d6-e6c7-4bc8-a563-0e5687c5fe12.jpeg" />
                  dfzhfhd <span>25, Mar 2021</span>
                </td>
                {/*                            <td><span className="db-list-ststus">Listing</span></td>*/}
                <td>29, Mar 2021</td>
                <td>31, Mar 2021</td>
                <td>2 Days</td>
                <td>
                  <span className="db-list-ststus">Expired </span>
                  <br />
                  <br />
                  <Link href="/promote-business?code=LIST394&&type=listing">
                    {" "}
                    <span
                      style={{ backgroundColor: "#4caf50" }}
                      className="db-list-ststus"
                    >
                      {" "}
                      Activate{" "}
                    </span>
                  </Link>
                </td>
                <td>
                  <Link href="/promotion_trash?trash=X3BR1GX3E6S4PPLDNTXA6RVUN4UZZI30O6NC8AT40BQRIEKF67NSOE0PEPFU6RVUN4UZZI30O6NC8AT4X3BR1GX3E6S4PPLDNTXAFBQXCPEGZIP3UXDVYKPV&&code=101&&type=listing&&trashh=X3BR1GX3E6S4PPLDNTXA6RVUN4UZZI30O6NC8AT40BQRIEKF67NSOE0PEPFU6RVUN4UZZI30O6NC8AT4X3BR1GX3E6S4PPLDNTXAFBQXCPEGZIP3UXDVYKPV">
                    {" "}
                    <span
                      style={{ backgroundColor: "#f33d45" }}
                      className="db-list-ststus"
                    >
                      {" "}
                      Delete{" "}
                    </span>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <img alt="theme" src="/listings/72048pexels-francesco-ungaro-96444-(1).jpg" />
                  Iei <span>25, Mar 2021</span>
                </td>
                {/*                            <td><span className="db-list-ststus">Listing</span></td>*/}
                <td>25, Mar 2021</td>
                <td>31, Mar 2021</td>
                <td>6 Days</td>
                <td>
                  <span className="db-list-ststus">Expired </span>
                  <br />
                  <br />
                  <Link href="/promote-business?code=LIST393&&type=listing">
                    {" "}
                    <span
                      style={{ backgroundColor: "#4caf50" }}
                      className="db-list-ststus"
                    >
                      {" "}
                      Activate{" "}
                    </span>
                  </Link>
                </td>
                <td>
                  <Link href="/promotion_trash?trash=X3BR1GX3E6S4PPLDNTXA6RVUN4UZZI30O6NC8AT40BQRIEKF67NSOE0PEPFU6RVUN4UZZI30O6NC8AT4X3BR1GX3E6S4PPLDNTXAFBQXCPEGZIP3UXDVYKPV&&code=100&&type=listing&&trashh=X3BR1GX3E6S4PPLDNTXA6RVUN4UZZI30O6NC8AT40BQRIEKF67NSOE0PEPFU6RVUN4UZZI30O6NC8AT4X3BR1GX3E6S4PPLDNTXAFBQXCPEGZIP3UXDVYKPV">
                    {" "}
                    <span
                      style={{ backgroundColor: "#f33d45" }}
                      className="db-list-ststus"
                    >
                      {" "}
                      Delete{" "}
                    </span>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  <img alt="theme" src="/listings/2279bike1.jpg" />
                  Super bike showroom <span>02, May 2020</span>
                </td>
                {/*                            <td><span className="db-list-ststus">Listing</span></td>*/}
                <td>26, Mar 2021</td>
                <td>31, Mar 2021</td>
                <td>5 Days</td>
                <td>
                  <span className="db-list-ststus">Expired </span>
                  <br />
                  <br />
                  <Link href="/promote-business?code=LIST247&&type=listing">
                    {" "}
                    <span
                      style={{ backgroundColor: "#4caf50" }}
                      className="db-list-ststus"
                    >
                      {" "}
                      Activate{" "}
                    </span>
                  </Link>
                </td>
                <td>
                  <Link href="/promotion_trash?trash=X3BR1GX3E6S4PPLDNTXA6RVUN4UZZI30O6NC8AT40BQRIEKF67NSOE0PEPFU6RVUN4UZZI30O6NC8AT4X3BR1GX3E6S4PPLDNTXAFBQXCPEGZIP3UXDVYKPV&&code=99&&type=listing&&trashh=X3BR1GX3E6S4PPLDNTXA6RVUN4UZZI30O6NC8AT40BQRIEKF67NSOE0PEPFU6RVUN4UZZI30O6NC8AT4X3BR1GX3E6S4PPLDNTXAFBQXCPEGZIP3UXDVYKPV">
                    {" "}
                    <span
                      style={{ backgroundColor: "#f33d45" }}
                      className="db-list-ststus"
                    >
                      {" "}
                      Delete{" "}
                    </span>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  <img alt="theme" src="/listings/432063dffe1d6-e6c7-4bc8-a563-0e5687c5fe12.jpeg" />
                  phoenix mall <span>13, Mar 2021</span>
                </td>
                {/*                            <td><span className="db-list-ststus">Listing</span></td>*/}
                <td>26, Mar 2021</td>
                <td>27, Mar 2021</td>
                <td>1 Days</td>
                <td>
                  <span className="db-list-ststus">Expired </span>
                  <br />
                  <br />
                  <Link href="/promote-business?code=LIST392&&type=listing">
                    {" "}
                    <span
                      style={{ backgroundColor: "#4caf50" }}
                      className="db-list-ststus"
                    >
                      {" "}
                      Activate{" "}
                    </span>
                  </Link>
                </td>
                <td>
                  <Link href="/promotion_trash?trash=X3BR1GX3E6S4PPLDNTXA6RVUN4UZZI30O6NC8AT40BQRIEKF67NSOE0PEPFU6RVUN4UZZI30O6NC8AT4X3BR1GX3E6S4PPLDNTXAFBQXCPEGZIP3UXDVYKPV&&code=98&&type=listing&&trashh=X3BR1GX3E6S4PPLDNTXA6RVUN4UZZI30O6NC8AT40BQRIEKF67NSOE0PEPFU6RVUN4UZZI30O6NC8AT4X3BR1GX3E6S4PPLDNTXAFBQXCPEGZIP3UXDVYKPV">
                    {" "}
                    <span
                      style={{ backgroundColor: "#f33d45" }}
                      className="db-list-ststus"
                    >
                      {" "}
                      Delete{" "}
                    </span>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>
                  <img alt="theme" src="/listings/72048pexels-francesco-ungaro-96444-(1).jpg" />
                  Core real estates <span>11, Mar 2021</span>
                </td>
                {/*                            <td><span className="db-list-ststus">Listing</span></td>*/}
                <td>11, Mar 2021</td>
                <td>29, Mar 2021</td>
                <td>18 Days</td>
                <td>
                  <span className="db-list-ststus">Expired </span>
                  <br />
                  <br />
                  <Link href="/promote-business?code=LIST389&&type=listing">
                    {" "}
                    <span
                      style={{ backgroundColor: "#4caf50" }}
                      className="db-list-ststus"
                    >
                      {" "}
                      Activate{" "}
                    </span>
                  </Link>
                </td>
                <td>
                  <Link href="/promotion_trash?trash=X3BR1GX3E6S4PPLDNTXA6RVUN4UZZI30O6NC8AT40BQRIEKF67NSOE0PEPFU6RVUN4UZZI30O6NC8AT4X3BR1GX3E6S4PPLDNTXAFBQXCPEGZIP3UXDVYKPV&&code=97&&type=listing&&trashh=X3BR1GX3E6S4PPLDNTXA6RVUN4UZZI30O6NC8AT40BQRIEKF67NSOE0PEPFU6RVUN4UZZI30O6NC8AT4X3BR1GX3E6S4PPLDNTXAFBQXCPEGZIP3UXDVYKPV">
                    {" "}
                    <span
                      style={{ backgroundColor: "#f33d45" }}
                      className="db-list-ststus"
                    >
                      {" "}
                      Delete{" "}
                    </span>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>
                  <img alt="theme" src="/listings/72048pexels-francesco-ungaro-96444-(1).jpg" />
                  Core real estates <span>11, Mar 2021</span>
                </td>
                {/*                            <td><span className="db-list-ststus">Listing</span></td>*/}
                <td>11, Mar 2021</td>
                <td>19, Mar 2021</td>
                <td>8 Days</td>
                <td>
                  <span className="db-list-ststus">Expired </span>
                  <br />
                  <br />
                  <Link href="/promote-business?code=LIST389&&type=listing">
                    {" "}
                    <span
                      style={{ backgroundColor: "#4caf50" }}
                      className="db-list-ststus"
                    >
                      {" "}
                      Activate{" "}
                    </span>
                  </Link>
                </td>
                <td>
                  <Link href="/promotion_trash?trash=X3BR1GX3E6S4PPLDNTXA6RVUN4UZZI30O6NC8AT40BQRIEKF67NSOE0PEPFU6RVUN4UZZI30O6NC8AT4X3BR1GX3E6S4PPLDNTXAFBQXCPEGZIP3UXDVYKPV&&code=96&&type=listing&&trashh=X3BR1GX3E6S4PPLDNTXA6RVUN4UZZI30O6NC8AT40BQRIEKF67NSOE0PEPFU6RVUN4UZZI30O6NC8AT4X3BR1GX3E6S4PPLDNTXAFBQXCPEGZIP3UXDVYKPV">
                    {" "}
                    <span
                      style={{ backgroundColor: "#f33d45" }}
                      className="db-list-ststus"
                    >
                      {" "}
                      Delete{" "}
                    </span>
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
