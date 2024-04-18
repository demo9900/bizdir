'use client';
import React from 'react'
import Link from 'next/link';

const page = () => {
  return (
    <div className='ud-main-inn ud-no-rhs'>
      <div className="ud-cen">
        <div className="log-bor">&nbsp;</div>{" "}
        <span className="udb-inst">User Profile</span>
        <div className="ud-cen-s2">
          <h2>Profile Details</h2>
          <Link href="/db-my-profile-edit" className="db-tit-btn">
            Edit profile page
          </Link>
          <Link href="/db-payment" className="db-tit-btn db-tit-btn-1">
            Upgrade
          </Link>
          <table className="responsive-table bordered">
            <tbody>
              <tr>
                <td>Profile Expiry(Listing exp)</td>
                <td>8 June 2025</td>
              </tr>
              <tr>
                <td>Name</td>
                <td>Digital koncept</td>
              </tr>
              <tr>
                <td>Email Id</td>
                <td>connect@bizdir.in</td>
              </tr>
              <tr>
                <td>Profile Password</td>
                <td>*********</td>
              </tr>
              <tr>
                <td>Mobile Number</td>
                <td>5522114422</td>
              </tr>
              <tr>
                <td>Profile Picture</td>
                <td>
                  <img src="/user/62736rn53themes.png" alt="" />
                </td>
              </tr>
              <tr>
                <td>City</td>
                <td>Sydney</td>
              </tr>
              <tr>
                <td>Join date</td>
                <td>26, Mar 2021</td>
              </tr>
              <tr>
                <td>Verified</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Premium service provider</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Profile Link</td>
                <td>
                  <Link href="/profile" target="_blank">
                    profile
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Facebook</td>
                <td>https://www.facebook.com/53themes</td>
              </tr>
              <tr>
                <td>Twitter</td>
                <td>https://twitter.com/53themes</td>
              </tr>
              <tr>
                <td>Youtube</td>
                <td>
                  https://www.youtube.com/channel/UC3wN3O2GXTt7ZZniIoMZumg
                </td>
              </tr>
              <tr>
                <td>Website</td>
                <td>www.bizdir.in</td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <Link href="/db-my-profile-edit" className="db-pro-bot-btn">
                    Edit profile page
                  </Link>
                  <Link href="/db-payment" className="db-pro-bot-btn">
                    Upgrade
                  </Link>
                </td>
                <td />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      </div>
  )
}

export default page
