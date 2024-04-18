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
        <span className="udb-inst">Setting</span>
        <div className="ud-cen-s2 ud-sett">
          <h2>Profile Setting</h2>
          <form
            id="setting_update"
            name="setting_update"
            action="setting_update"
            method="post"
            encType="multipart/form-data"
          >
            <div className="log-error">
              <p style={{ display: "none" }} className=" delete-message-box">
                Close Account will Delete your account permanently!! Think
                before submitting!!
              </p>
            </div>
            <table className="responsive-table bordered">
              <tbody>
                <tr>
                  <td>Account status</td>
                  <td>:</td>
                  <td>
                    <div className="form-group">
                      <select
                        name="setting_user_status"
                        className="setting_user_status form-control"
                      >
                        <option selected="selected" value={0}>
                          Active
                        </option>
                        <option value={1}>In-Active</option>
                        <option value={2}>Close account</option>
                      </select>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Listing reviews</td>
                  <td>:</td>
                  <td>
                    <div className="form-group">
                      <select name="setting_review" className=" form-control">
                        <option selected="selected" value={0}>
                          Active
                        </option>
                        <option value={1}>In-Active</option>
                      </select>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Listing share</td>
                  <td>:</td>
                  <td>
                    <div className="form-group">
                      <select name="setting_share" className=" form-control">
                        <option selected="selected" value={0}>
                          Active
                        </option>
                        <option value={1}>In-Active</option>
                      </select>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Show my profile on listing page</td>
                  <td>:</td>
                  <td>
                    <div className="form-group">
                      <select
                        name="setting_profile_show"
                        className=" form-control"
                      >
                        <option selected="selected" value={0}>
                          Active
                        </option>
                        <option value={1}>In-Active</option>
                      </select>
                    </div>
                  </td>
                </tr>
                {/*            <tr>*/}
                {/*                <td>Listing guarantee show on listing page</td>*/}
                {/*                <td>:</td>*/}
                {/*                <td>*/}
                {/*                    <div className="form-group">*/}
                {/*                        <select name="setting_guarantee_show" className=" form-control">*/}
                {/*                            <option */}
                {/* value="0">Enable</option>*/}
                {/*                            <option */}
                {/* value="1">Disable</option>*/}
                {/*                        </select>*/}
                {/*                    </div>*/}
                {/*                </td>*/}
                {/*            </tr>*/}
                {/*            <tr>*/}
                {/*                <td>User type</td>*/}
                {/*                <td>:</td>*/}
                {/*                <td>*/}
                {/*                    <div className="form-group">*/}
                {/*                        <select className="form-control">*/}
                {/*                            <option>Service provider</option>*/}
                {/*                            <option>General users</option>*/}
                {/*                        </select>*/}
                {/*                    </div>*/}
                {/*                </td>*/}
                {/*            </tr>*/}
                <tr>
                  <td>
                    <button
                      type="submit"
                      name="setting_update_submit"
                      className="sub-btn"
                    >
                      Save changes
                    </button>
                  </td>
                  <td />
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
      </div>
  )
}

export default page
