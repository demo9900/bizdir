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
        <span className="udb-inst">All Events</span>
        <div className="ud-cen-s2">
          <h2>Event Details</h2>
          <Link href="/create-new-event" className="db-tit-btn">
            Add new Event
          </Link>
          <table className="responsive-table bordered">
            <thead>
              <tr>
                <th>No</th>
                <th>Event Name</th>
                <th>Event Date</th>
                <th>Views</th>
                <th>Edit</th>
                <th>Delete</th>
                <th>Preview</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  CHAMPIONS OF INDIA RUN-RIDE-WALK <span>12, Mar 2021</span>
                </td>
                <td>21, Mar 2021</td>
                <td>
                  <span className="db-list-rat">8</span>
                </td>
                <td>
                  <Link href="/edit-event" className="db-list-edit">
                    Edit
                  </Link>
                </td>
                <td>
                  <Link href="/#" className="db-list-edit">
                    Delete
                  </Link>
                </td>
                <td>
                  <Link
                    href="/event-details"
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
                  INDIA VS ENGLAND <span>11, Mar 2021</span>
                </td>
                <td>12, Mar 2021</td>
                <td>
                  <span className="db-list-rat">9</span>
                </td>
                <td>
                  <Link href="/edit-event" className="db-list-edit">
                    Edit
                  </Link>
                </td>
                <td>
                  <Link href="/#" className="db-list-edit">
                    Delete
                  </Link>
                </td>
                <td>
                  <Link
                    href="/event-details"
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
                  IPL 2021 <span>21, Feb 2021</span>
                </td>
                <td>11, Apr 2021</td>
                <td>
                  <span className="db-list-rat">8</span>
                </td>
                <td>
                  <Link href="/edit-event" className="db-list-edit">
                    Edit
                  </Link>
                </td>
                <td>
                  <Link href="/#" className="db-list-edit">
                    Delete
                  </Link>
                </td>
                <td>
                  <Link
                    href="/event-details"
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
                  27 Health and Nutrition Tips <span>09, Apr 2020</span>
                </td>
                <td>17, Apr 2020</td>
                <td>
                  <span className="db-list-rat">9</span>
                </td>
                <td>
                  <Link href="/edit-event" className="db-list-edit">
                    Edit
                  </Link>
                </td>
                <td>
                  <Link href="/#" className="db-list-edit">
                    Delete
                  </Link>
                </td>
                <td>
                  <Link
                    href="/event-details"
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
                  Digital Marketing Seminar 2020 <span>26, Mar 2020</span>
                </td>
                <td>27, Mar 2020</td>
                <td>
                  <span className="db-list-rat">9</span>
                </td>
                <td>
                  <Link href="/edit-event" className="db-list-edit">
                    Edit
                  </Link>
                </td>
                <td>
                  <Link href="/#" className="db-list-edit">
                    Delete
                  </Link>
                </td>
                <td>
                  <Link
                    href="/event-details"
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
       )
}

export default page
