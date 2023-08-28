import React from 'react'

const page = () => {
  return (
 <section>
  <div className="ad-com">
    <div className="ad-dash leftpadd">
      <div className="ud-cen">
        <div className="log-bor">&nbsp;</div>
        <span className="udb-inst">All Listing Details</span>
        <div className="ud-cen-s2">
          <h2>Listing details</h2>
          <div className="ad-int-sear">
            <input type="text" id="pg-sear" placeholder="Search this page.." />
          </div>
          <a href="admin-add-new-listings.html" className="db-tit-btn">Add new listing</a>
          <table className="responsive-table bordered" id="pg-resu">
            <thead>
              <tr>
                <th>No</th>
                <th>Listing Name</th>
                <th>Rating</th>
                <th>Views</th>
                <th>Created by</th>
                {/*                            <th>Promote</th>*/}
                <th>Edit</th>
                <th>Delete</th>
                <th>Preview</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td><img src="../images/listings/82551rn53.png" />qwerqw                                    <span>09, Apr 2021</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">0</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/rn53-themes" className="db-list-ststus" target="_blank">Rn53 Themes</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST396" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST396" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/qwerqw" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td><img src="../images/listings/78776dsc09586.jpg" />test                                    <span>28, Mar 2021</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">1</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/rn53-themes" className="db-list-ststus" target="_blank">Rn53 Themes</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST395" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST395" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/test6" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td><img src="../images/listings/432063dffe1d6-e6c7-4bc8-a563-0e5687c5fe12.jpeg" />dfzhfhd                                    <span>25, Mar 2021</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">7</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/rn53-themes" className="db-list-ststus" target="_blank">Rn53 Themes</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST394" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST394" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/dfzhfhd" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td><img src="../images/listings/72048pexels-francesco-ungaro-96444-(1).jpg" />Iei                                    <span>25, Mar 2021</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">15</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/rn53-themes" className="db-list-ststus" target="_blank">Rn53 Themes</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST393" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST393" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/iei" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td><img src="../images/listings/432063dffe1d6-e6c7-4bc8-a563-0e5687c5fe12.jpeg" />phoenix mall                                    <span>13, Mar 2021</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">10</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/rn53-themes" className="db-list-ststus" target="_blank">Rn53 Themes</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST392" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST392" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/phoenix-mall" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td><img src="../images/listings/45451download-(1).jfif" />Ocha Thai Cuisine                                    <span>12, Mar 2021</span></td>
                <td><span className="db-list-rat">5</span></td>
                <td><span className="db-list-rat">9</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/rn53-themes" className="db-list-ststus" target="_blank">Rn53 Themes</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST391" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST391" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/ocha-thai-cuisine" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td><img src="../images/listings/72048pexels-francesco-ungaro-96444-(1).jpg" />Core real estates                                    <span>11, Mar 2021</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">18</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/rn53-themes" className="db-list-ststus" target="_blank">Rn53 Themes</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST389" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST389" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/core-real-estates" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>8</td>
                <td><img src="../images/listings/43340pexels-photo-106399.jpeg" />Museo Villas and Plots                                    <span>07, Mar 2021</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">10</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/joney-deep" className="db-list-ststus" target="_blank">Joney deep</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST388" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST388" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/museo-villas-and-plots" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>9</td>
                <td><img src="../images/listings/64465capture-(1).png" />Musi Wedding and Party Hall                                    <span>07, Mar 2021</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">14</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/loki" className="db-list-ststus" target="_blank">Loki</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST387" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST387" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/musi-wedding-and-party-hall" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>10</td>
                <td><img src="../images/listings/43340pexels-photo-106399.jpeg" />Rolexo Villas in California                                    <span>07, Mar 2021</span></td>
                <td><span className="db-list-rat">5</span></td>
                <td><span className="db-list-rat">20</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/loki" className="db-list-ststus" target="_blank">Loki</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST385" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST385" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/rolexo-villas-in-california" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>11</td>
                <td><img src="../images/listings/85477capture1.png" />Gill Automobiles and Services                                    <span>20, Feb 2021</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">30</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/rn53-themes" className="db-list-ststus" target="_blank">Rn53 Themes</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST384" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST384" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/gill-automobiles-and-services" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>12</td>
                <td><img src="../images/listings/64465capture-(1).png" />Titan Wedding Hall                                    <span>07, Feb 2021</span></td>
                <td><span className="db-list-rat">5</span></td>
                <td><span className="db-list-rat">28</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/rn53-themes" className="db-list-ststus" target="_blank">Rn53 Themes</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST381" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST381" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/titan-wedding-hall" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>13</td>
                <td><img src="../images/listings/72048pexels-francesco-ungaro-96444-(1).jpg" />Taj Hotels                                    <span>24, Dec 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">16</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/rn53-themes" className="db-list-ststus" target="_blank">Rn53 Themes</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST380" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST380" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/taj-hotels1" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>14</td>
                <td><img src="../images/listings/28181houses-on-body-of-water-1724424.jpg" />ccc                                    <span>29, Sep 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">10</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/rn53-themes" className="db-list-ststus" target="_blank">Rn53 Themes</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST378" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST378" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/ccc" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>15</td>
                <td><img src="../images/listings/160924449986.jpg" />aknfkl                                    <span>24, Sep 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">7</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/srikanth" className="db-list-ststus" target="_blank">Srikanth</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST377" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST377" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/aknfkl" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>16</td>
                <td><img src="../images/listings/160924449986.jpg" />Test                                    <span>23, Sep 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">12</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/clic" className="db-list-ststus" target="_blank">clic</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST376" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST376" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/test5" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>17</td>
                <td><img src="../images/listings/28181houses-on-body-of-water-1724424.jpg" />Hello                                    <span>23, Sep 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">10</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/rn53-themes" className="db-list-ststus" target="_blank">Rn53 Themes</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST375" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST375" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/hello3" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>18</td>
                <td><img src="../images/listings/93247timeline_25630708_134134.jpg" />TESTBAG                                    <span>05, Aug 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">11</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST354" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST354" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/testbag" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>19</td>
                <td><img src="../images/listings/28229mc.jpeg" />Rental App                                    <span>02, Aug 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">16</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST352" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST352" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/rental-app" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>20</td>
                <td><img src="../images/listings/36300flag-india-.jpg" />Nnbgg                                    <span>31, Jul 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">9</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/amit-bhatnagar" className="db-list-ststus" target="_blank">Amit Bhatnagar</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST351" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST351" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/nnbgg" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>21</td>
                <td><img src="../images/listings/14295auto.jpeg" />Demo List Test                                    <span>30, Jul 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">9</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST350" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST350" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/demo-list-test" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>22</td>
                <td><img src="../images/listings/36300flag-india-.jpg" />HHHAHAA                                    <span>30, Jul 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">11</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST349" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST349" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/hhhahaa" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>23</td>
                <td><img src="../images/listings/16671tcx_pro21_white__23108.1409770848.1280.1280.jpg" />Hari krishna entrepreneur                                    <span>29, Jul 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">11</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST348" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST348" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/hari-krishna-entrepreneur" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>24</td>
                <td><img src="../images/listings/36300flag-india-.jpg" />ddd                                    <span>29, Jul 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">9</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST347" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST347" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/ddd1" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>25</td>
                <td><img src="../images/listings/73881ecommerce.png" />Garhwal Media India Pvt. Ltd.                                    <span>26, Jul 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">0</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/banwari" className="db-list-ststus" target="_blank">Banwari</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST346" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST346" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/garhwal-media-india-pvt--ltd-" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>26</td>
                <td><img src="../images/listings/25918pexels-photo-3217851.jpeg" />Listing                                    <span>26, Jul 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">9</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST345" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST345" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/listing" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>27</td>
                <td><img src="../images/listings/25918pexels-photo-3217851.jpeg" />car with flowrs                                    <span>25, Jul 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">11</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST344" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST344" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/car-with-flowrs" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>28</td>
                <td><img src="../images/listings/990165ba4f53e584111537537342.jpeg" />testing New listing                                    <span>21, Jul 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">9</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/test-hector" className="db-list-ststus" target="_blank">Test Hector</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST337" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST337" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/testing-new-listing" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>29</td>
                <td><img src="../images/listings/46401carlsberg-2.jpg" />ATLETA                                    <span>20, Jul 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">8</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST336" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST336" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/atleta" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>30</td>
                <td><img src="../images/listings/36355insta1.jpg" />Cinderela                                    <span>18, Jul 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">10</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST334" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST334" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/cinderela" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>31</td>
                <td><img src="../images/listings/34818wellness-massage-relax-relaxing-56884.jpeg" />Pedro                                    <span>17, Jul 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">9</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/laxman" className="db-list-ststus" target="_blank">laxman</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST332" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST332" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/pedro" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>32</td>
                <td><img src="../images/listings/36300flag-india-.jpg" />Hello                                    <span>16, Jul 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">10</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST331" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST331" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/hello2" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>33</td>
                <td><img src="../images/listings/16671tcx_pro21_white__23108.1409770848.1280.1280.jpg" />test3                                    <span>10, Jul 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">7</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST328" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST328" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/test3" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>34</td>
                <td><img src="../images/listings/66695o.jpg" />SdF                                    <span>09, Jul 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">9</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/ravindu" className="db-list-ststus" target="_blank">Ravindu</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST326" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST326" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/sdf" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>35</td>
                <td><img src="../images/listings/1068420.jpg" />sAEDF                                    <span>09, Jul 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">7</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/asdf" className="db-list-ststus" target="_blank">asdf</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST325" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST325" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/saedf" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>36</td>
                <td><img src="../images/listings/66695o.jpg" />saadsds                                    <span>04, Jul 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">0</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/jelotesan" className="db-list-ststus" target="_blank">jelotesan</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST324" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST324" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/saadsds" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>37</td>
                <td><img src="../images/listings/40913book_reading.jpg" />saadsds                                    <span>04, Jul 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">9</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST323" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST323" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/saadsds" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>38</td>
                <td><img src="../images/listings/54473kangarooclass-brochure.png" />n mnm                                    <span>03, Jul 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">7</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST322" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST322" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/n-mnm" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>39</td>
                <td><img src="../images/listings/hot4.jpg" />                                    <span>01, Jul 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">0</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST321" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST321" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>40</td>
                <td><img src="../images/listings/314877061b168-ca0f-4198-9b70-16cad218b548.jpeg" />sdss                                    <span>01, Jul 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">5</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/shalev" className="db-list-ststus" target="_blank">shalev</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST320" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST320" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/sdss" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>41</td>
                <td><img src="../images/listings/314877061b168-ca0f-4198-9b70-16cad218b548.jpeg" />Chachawan                                    <span>27, Jun 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">5</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST319" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST319" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/chachawan" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>42</td>
                <td><img src="../images/listings/hot4.jpg" />Ganniti                                    <span>26, Jun 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">4</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/" className="db-list-ststus" target="_blank" /></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST318" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST318" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/ganniti" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>43</td>
                <td><img src="../images/listings/10731thank-you-3.jpg" />Plumbing Work                                    <span>25, Jun 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">10</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/adewale-festus" className="db-list-ststus" target="_blank">Adewale Festus</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST317" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST317" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/plumbing-work" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>44</td>
                <td><img src="../images/listings/hot4.jpg" />SpryOX                                    <span>25, Jun 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">5</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/directory-finder" className="db-list-ststus" target="_blank">Directory Finder</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST316" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST316" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/spryox" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>45</td>
                <td><img src="../images/listings/56827favicon512x512.png" />Restaurante las peñas                                    <span>24, Jun 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">12</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST315" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST315" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/restaurante-las-peñas" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>46</td>
                <td><img src="../images/listings/hot4.jpg" />                                    <span>20, Jun 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">0</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST314" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST314" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>47</td>
                <td><img src="../images/listings/5826392952391_10156909967790877_2486714359904993280_o.jpg" />gghhjghj                                    <span>18, Jun 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">5</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/1234567890" className="db-list-ststus" target="_blank">1234567890</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST313" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST313" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/gghhjghj" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>48</td>
                <td><img src="../images/listings/5826392952391_10156909967790877_2486714359904993280_o.jpg" />dsadlasf                                    <span>15, Jun 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">6</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST312" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST312" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/dsadlasf" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>49</td>
                <td><img src="../images/listings/52903mecanics---copie.jpg" />Love it                                    <span>13, Jun 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">10</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/clic" className="db-list-ststus" target="_blank">clic</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST310" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST310" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/love-it" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>50</td>
                <td><img src="../images/listings/66695o.jpg" />International Food Bazaar                                    <span>03, Jun 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">11</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST306" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST306" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/international-food-bazaar" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>51</td>
                <td><img src="../images/listings/hot4.jpg" />                                    <span>01, Jun 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">0</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST303" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST303" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>52</td>
                <td><img src="../images/listings/90776notification.png" />asf                                    <span>01, Jun 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">8</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST302" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST302" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/asf" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>53</td>
                <td><img src="../images/listings/13717screen-shot-2020-05-30-at-18.01.54.png" />xxxx                                    <span>01, Jun 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">8</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST301" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST301" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/xxxx" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>54</td>
                <td><img src="../images/listings/38201biz-network-night-feature-image-860x480-sept-18-860x480.jpg" />testa pro                                    <span>31, May 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">8</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/johnny" className="db-list-ststus" target="_blank">johnny</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST300" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST300" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/testa-pro" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>55</td>
                <td><img src="../images/listings/830975ec5077e45496.jpeg" />ddd                                    <span>30, May 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">8</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/sc" className="db-list-ststus" target="_blank">SC</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST299" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST299" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/ddd" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>56</td>
                <td><img src="../images/listings/93166alzahra2.jpg" />sddssd                                    <span>28, May 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">0</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST298" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST298" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/sddssd" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>57</td>
                <td><img src="../images/listings/830975ec5077e45496.jpeg" />sddssd                                    <span>28, May 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">9</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST297" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST297" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/sddssd" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>58</td>
                <td><img src="../images/listings/39918formation.png" />GOOD FOOD                                    <span>28, May 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">8</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/clic" className="db-list-ststus" target="_blank">clic</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST296" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST296" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/good-food" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>59</td>
                <td><img src="../images/listings/21432_img_1_640x480.jpg" />GOOD                                    <span>26, May 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">11</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/clic" className="db-list-ststus" target="_blank">clic</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST295" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST295" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/good" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>60</td>
                <td><img src="../images/listings/56295pexels-photo-3155726.jpeg" />vbhjc                                    <span>25, May 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">10</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/zame" className="db-list-ststus" target="_blank">Zame</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST294" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST294" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/vbhjc" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>61</td>
                <td><img src="../images/listings/61846download.jpg" />sdfdsgf                                    <span>25, May 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">10</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST293" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST293" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/sdfdsgf" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>62</td>
                <td><img src="../images/listings/16671tcx_pro21_white__23108.1409770848.1280.1280.jpg" />test                                    <span>25, May 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">0</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST292" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST292" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/test" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>63</td>
                <td><img src="../images/listings/hot4.jpg" />                                    <span>24, May 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">27</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST288" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST288" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>64</td>
                <td><img src="../images/listings/830975ec5077e45496.jpeg" />asfja                                    <span>24, May 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">7</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST287" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST287" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/asfja" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>65</td>
                <td><img src="../images/listings/698531.png" />sdfsdgdfsgsdf                                    <span>24, May 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">9</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST286" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST286" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/sdfsdgdfsgsdf" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>66</td>
                <td><img src="../images/listings/3498920200518_114248.jpg" />Bharat cs coaching center                                    <span>22, May 2020</span></td>
                <td><span className="db-list-rat">3</span></td>
                <td><span className="db-list-rat">19</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/nagarjun" className="db-list-ststus" target="_blank">Nagarjun</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST282" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST282" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/bharat-cs-coaching-center" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>67</td>
                <td><img src="../images/listings/3731820200122_124723.jpg" />web services company                                    <span>21, May 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">8</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/josh" className="db-list-ststus" target="_blank">josh</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST278" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST278" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/web-services-company" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>68</td>
                <td><img src="../images/listings/25918pexels-photo-3217851.jpeg" />newsd                                    <span>19, May 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">8</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST275" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST275" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/newsd" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>69</td>
                <td><img src="../images/listings/32898pexels-photo-1858175.jpeg" />qEAES                                    <span>17, May 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">7</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST270" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST270" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/qeaes" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>70</td>
                <td><img src="../images/listings/56295pexels-photo-3155726.jpeg" />Premium gardens                                    <span>16, May 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">9</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/rn53-themes" className="db-list-ststus" target="_blank">Rn53 Themes</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST268" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST268" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/premium-gardens" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>71</td>
                <td><img src="../images/listings/55800pexels-photo-258154.jpeg" />Beach luxury villa gardens                                    <span>16, May 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">14</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/rn53-themes" className="db-list-ststus" target="_blank">Rn53 Themes</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST267" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST267" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/beach-luxury-villa-gardens" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>72</td>
                <td><img src="../images/listings/75352house-luxury-villa-swimming-pool-32870.jpg" />GOS Villas                                    <span>16, May 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">10</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/rn53-themes" className="db-list-ststus" target="_blank">Rn53 Themes</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST266" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST266" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/gos-villas" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>73</td>
                <td><img src="../images/listings/18581a.png" />Test4343                                    <span>16, May 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">8</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/bahroz" className="db-list-ststus" target="_blank">Bahroz</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST265" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST265" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/test4343" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>74</td>
                <td><img src="../images/listings/3549professional-profile-picture.jpg" />a                                    <span>15, May 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">9</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST264" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST264" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/a" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>75</td>
                <td><img src="../images/listings/18581a.png" />Dalkom                                    <span>13, May 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">10</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/fuad" className="db-list-ststus" target="_blank">Fuad</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST263" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST263" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/dalkom" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>76</td>
                <td><img src="../images/listings/54473kangarooclass-brochure.png" />rdgt                                    <span>13, May 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">9</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST262" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST262" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/rdgt" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>77</td>
                <td><img src="../images/listings/48413bizbooktry.png" />Yours Firm Ltd                                    <span>07, May 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">7</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST259" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST259" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/yours-firm-ltd" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>78</td>
                <td><img src="../images/listings/3549professional-profile-picture.jpg" />Hanging with mr. cooper                                    <span>06, May 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">8</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST257" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST257" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/hanging-with-mr.-cooper" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>79</td>
                <td><img src="../images/listings/79587loewe-technologies-4aqx0r9kucg-unsplash.jpg" />deepak                                    <span>06, May 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">0</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST256" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST256" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/deepak" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>80</td>
                <td><img src="../images/listings/25918pexels-photo-3217851.jpeg" />deepak                                    <span>06, May 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">0</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST255" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST255" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/deepak" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>81</td>
                <td><img src="../images/listings/54473kangarooclass-brochure.png" />deepak                                    <span>06, May 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">8</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/deneme" className="db-list-ststus" target="_blank">deneme</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST254" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST254" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/deepak" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>82</td>
                <td><img src="../images/listings/79587loewe-technologies-4aqx0r9kucg-unsplash.jpg" />fghdfgfdg                                    <span>05, May 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">9</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST253" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST253" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/fghdfgfdg" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>83</td>
                <td><img src="../images/listings/54473kangarooclass-brochure.png" />dndndn                                    <span>04, May 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">8</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST252" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST252" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/dndndn" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>84</td>
                <td><img src="../images/listings/821141549259269353_default.jpg" />vxcvxcvxcvx                                    <span>04, May 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">8</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST251" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST251" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/vxcvxcvxcvx" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>85</td>
                <td><img src="../images/listings/579391549259269353_default.jpg" />ML TEST                                    <span>04, May 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">8</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST250" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST250" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/ml-test" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>86</td>
                <td><img src="../images/listings/54473kangarooclass-brochure.png" />kjhgf                                    <span>03, May 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">7</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST249" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST249" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/kjhgf" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>87</td>
                <td><img src="../images/listings/2279bike1.jpg" />Super bike showroom                                    <span>02, May 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">9</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/rn53-themes" className="db-list-ststus" target="_blank">Rn53 Themes</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST247" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST247" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/super-bike-showroom" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>88</td>
                <td><img src="../images/listings/54473kangarooclass-brochure.png" />Ronaldparmar                                    <span>01, May 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">7</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST245" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST245" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/ronaldparmar" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>89</td>
                <td><img src="../images/listings/24100photo-of-white-limousine-3821424.jpg" />Lemo Taxi                                    <span>27, Apr 2020</span></td>
                <td><span className="db-list-rat">5</span></td>
                <td><span className="db-list-rat">12</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/betty-d-friedman" className="db-list-ststus" target="_blank">Betty D Friedman</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST241" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST241" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/lemo-taxi" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>90</td>
                <td><img src="../images/listings/2279bike1.jpg" />Benz cars showroom                                    <span>25, Apr 2020</span></td>
                <td><span className="db-list-rat">5</span></td>
                <td><span className="db-list-rat">12</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/rn53-themes" className="db-list-ststus" target="_blank">Rn53 Themes</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST238" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST238" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/benz-cars-showroom" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>91</td>
                <td><img src="../images/listings/78973104682512.jpg" />mmmm                                    <span>25, Apr 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">9</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/deneme" className="db-list-ststus" target="_blank">deneme</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST236" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST236" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/mmmm" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>92</td>
                <td><img src="../images/listings/63792woman-lying-on-blue-textile-3997993.jpg" />Online Casino                                    <span>21, Apr 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">9</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST233" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST233" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/online-casino" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>93</td>
                <td><img src="../images/listings/64562c40c6a136e99fce7da1ea2f26cc7e482g.jpg" />Deneme                                    <span>20, Apr 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">10</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/sinan" className="db-list-ststus" target="_blank">sinan</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST232" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST232" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/deneme" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>94</td>
                <td><img src="../images/listings/32898pexels-photo-1858175.jpeg" />hhh                                    <span>08, Apr 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">9</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST221" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST221" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/hhh" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>95</td>
                <td><img src="../images/listings/56271pexels-photo-713148.jpeg" />Sony Musics 2                                    <span>04, Apr 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">7</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/claude-d-dial" className="db-list-ststus" target="_blank">Claude D Dial</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST216" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST216" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/sony-musics-2" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>96</td>
                <td><img src="../images/listings/56271pexels-photo-713148.jpeg" />Sony Music                                    <span>04, Apr 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">7</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/claude-d-dial" className="db-list-ststus" target="_blank">Claude D Dial</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST215" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST215" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/sony-music" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>97</td>
                <td><img src="../images/listings/32898pexels-photo-1858175.jpeg" />1                                    <span>03, Apr 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">7</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST214" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST214" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/1" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>98</td>
                <td><img src="../images/listings/32898pexels-photo-1858175.jpeg" />Honey Massage Center                                    <span>30, Mar 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">8</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST211" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST211" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/honey-massage-center" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>99</td>
                <td><img src="../images/listings/56300pexels-photo-667838.jpeg" />jj                                    <span>22, Mar 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">9</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/ninjacoder1" className="db-list-ststus" target="_blank">ninjacoder1</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST209" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST209" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/jj" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>100</td>
                <td><img src="../images/listings/56300pexels-photo-667838.jpeg" />Smith Luxury Villas                                    <span>19, Mar 2020</span></td>
                <td><span className="db-list-rat">2</span></td>
                <td><span className="db-list-rat">9</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/rn53-themes" className="db-list-ststus" target="_blank">Rn53 Themes</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST207" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST207" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/smith-luxury-villas" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>101</td>
                <td><img src="../images/listings/84987real-estate-1024x614.jpeg" />Colors Real Estate and Villas                                    <span>05, Feb 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">9</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/rachel" className="db-list-ststus" target="_blank">Rachel</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST179" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST179" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/colors-real-estate-and-villas" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>102</td>
                <td><img src="../images/listings/hot4.jpg" />A List                                    <span>04, Feb 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">5</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/laxman" className="db-list-ststus" target="_blank">laxman</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST178" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST178" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/a-list" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>103</td>
                <td><img src="../images/listings/47884beautiful-wooden-houses-with-lawns-1643389.jpg" />Asian Real Estate                                    <span>01, Feb 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">68</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/rachel" className="db-list-ststus" target="_blank">Rachel</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST172" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST172" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/asian-real-estate" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>104</td>
                <td><img src="../images/listings/34818wellness-massage-relax-relaxing-56884.jpeg" />Modern SPA for Men                                    <span>01, Feb 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">9</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/rachel" className="db-list-ststus" target="_blank">Rachel</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST171" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST171" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/modern-spa-for-men" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>105</td>
                <td><img src="../images/listings/22862pexels-photo-1250655.jpeg" />The Spa at Mandarin Oriental                                    <span>30, Jan 2020</span></td>
                <td><span className="db-list-rat">4</span></td>
                <td><span className="db-list-rat">32</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/rachel" className="db-list-ststus" target="_blank">Rachel</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST168" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST168" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/the-spa-at-mandarin-oriental" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>106</td>
                <td><img src="../images/listings/78973104682512.jpg" />Ø§Ø¨Ù†Ù‰ Ù…ÙˆÙ‚Ø¹Ùƒ Ù…Ø¹Ù†Ø§                                    <span>25, Jan 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">9</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/rn53-themes" className="db-list-ststus" target="_blank">Rn53 Themes</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST164" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST164" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/Ø§Ø¨Ù†Ù‰-Ù…ÙˆÙ‚Ø¹Ùƒ-Ù…Ø¹Ù†Ø§" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>107</td>
                <td><img src="../images/listings/2060201_preview.jpg" />BizBookBusiness Directory Template                                    <span>24, Jan 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">9</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/rn53-themes" className="db-list-ststus" target="_blank">Rn53 Themes</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST163" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST163" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/bizbookbusiness-directory-template" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>108</td>
                <td><img src="../images/listings/26404cvs-gift-card-476x328.png" />asjdklfasd                                    <span>23, Jan 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">7</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/adem" className="db-list-ststus" target="_blank">Adem</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST162" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST162" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/asjdklfasd" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>109</td>
                <td><img src="../images/listings/56271pexels-photo-713148.jpeg" />IPM Business Software                                    <span>22, Jan 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">9</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/claude-d-dial" className="db-list-ststus" target="_blank">Claude D Dial</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST161" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST161" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/ipm-business-software" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>110</td>
                <td><img src="../images/listings/4797732622rn53themes.png" />Wedding Venues viki                                    <span>22, Jan 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">8</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/directory-finder" className="db-list-ststus" target="_blank">Directory Finder</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST160" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST160" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/wedding-venues-viki" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>111</td>
                <td><img src="../images/listings/80274easy-to-install-2.png" />forms soft tech                                    <span>22, Jan 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">9</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/directory-finder" className="db-list-ststus" target="_blank">Directory Finder</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST159" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST159" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/forms-soft-tech" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>112</td>
                <td><img src="../images/listings/20140doctor-sitting-in-front-of-his-desk-2182979.jpg" />Forms hospitals                                    <span>22, Jan 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">11</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/directory-finder" className="db-list-ststus" target="_blank">Directory Finder</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST158" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST158" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/forms-hospitals" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>113</td>
                <td><img src="../images/listings/6764gettyimages-200066800-001-1.jpg" />Royal Real Estates                                    <span>18, Jan 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">8</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/claude-d-dial" className="db-list-ststus" target="_blank">Claude D Dial</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST154" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST154" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/royal-real-estates" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>114</td>
                <td><img src="../images/listings/21604photo-of-a-boy-with-curly-hair-2929036.jpg" />William Chil care Hospital                                    <span>11, Jan 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">7</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/directory-finder" className="db-list-ststus" target="_blank">Directory Finder</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST149" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST149" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/william-chil-care-hospital" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>115</td>
                <td><img src="../images/listings/73954man-and-child-holding-baby-3279209.jpg" />Urban Community Hospital                                    <span>11, Jan 2020</span></td>
                <td><span className="db-list-rat">4</span></td>
                <td><span className="db-list-rat">7</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/directory-finder" className="db-list-ststus" target="_blank">Directory Finder</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST148" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST148" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/urban-community-hospital" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>116</td>
                <td><img src="../images/listings/20140doctor-sitting-in-front-of-his-desk-2182979.jpg" />Joseph Multispeciality Hospital                                    <span>11, Jan 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">8</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/directory-finder" className="db-list-ststus" target="_blank">Directory Finder</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST147" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST147" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/joseph-multispeciality-hospital" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>117</td>
                <td><img src="../images/listings/22386pexels-photo-1157391.jpeg" />Apolloo Hospitals UAE                                    <span>07, Jan 2020</span></td>
                <td><span className="db-list-rat">4</span></td>
                <td><span className="db-list-rat">7</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/directory-finder" className="db-list-ststus" target="_blank">Directory Finder</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST144" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST144" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/apolloo-hospitals-uae" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>118</td>
                <td><img src="../images/listings/43032pexels-photo-955793.jpeg" />Appers Premium Independent Houses                                    <span>07, Jan 2020</span></td>
                <td><span className="db-list-rat">3.3</span></td>
                <td><span className="db-list-rat">9</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/claude-d-dial" className="db-list-ststus" target="_blank">Claude D Dial</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST143" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST143" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/appers-premium-independent-houses" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>119</td>
                <td><img src="../images/listings/61191pexels-photo-96444.jpeg" />Capital five star hotels                                    <span>07, Jan 2020</span></td>
                <td><span className="db-list-rat">4</span></td>
                <td><span className="db-list-rat">10</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/claude-d-dial" className="db-list-ststus" target="_blank">Claude D Dial</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST142" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST142" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/capital-five-star-hotels" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>120</td>
                <td><img src="../images/listings/51803pexels-photo-1386168.jpeg" />Hard Rocks Hotels                                    <span>07, Jan 2020</span></td>
                <td><span className="db-list-rat">3.8</span></td>
                <td><span className="db-list-rat">12</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/claude-d-dial" className="db-list-ststus" target="_blank">Claude D Dial</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST141" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST141" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/hard-rocks-hotels" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>121</td>
                <td><img src="../images/listings/26318pexels-photo-594077.jpeg" />Taaj Five Star Hotels                                    <span>07, Jan 2020</span></td>
                <td><span className="db-list-rat">4</span></td>
                <td><span className="db-list-rat">10</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/claude-d-dial" className="db-list-ststus" target="_blank">Claude D Dial</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST140" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST140" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/taaj-five-star-hotels" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>122</td>
                <td><img src="../images/listings/4103pexels-photo-248547.jpeg" />Dial Sports Shops                                    <span>07, Jan 2020</span></td>
                <td><span className="db-list-rat">3</span></td>
                <td><span className="db-list-rat">10</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/claude-d-dial" className="db-list-ststus" target="_blank">Claude D Dial</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST138" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST138" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/dial-sports-shops" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>123</td>
                <td><img src="../images/listings/83091accomplishment-ceremony-education-graduation-267885.jpg" />Andree Education and Tuition Center                                    <span>07, Jan 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">10</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST137" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST137" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/andree-education-and-tuition-center" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>124</td>
                <td><img src="../images/listings/25918pexels-photo-3217851.jpeg" />TATE Electrical Shops                                    <span>07, Jan 2020</span></td>
                <td><span className="db-list-rat">0</span></td>
                <td><span className="db-list-rat">10</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST136" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST136" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/tate-electrical-shops" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>125</td>
                <td><img src="../images/listings/68725pexels-photo-2747550.jpeg" />Center Automobiles                                    <span>07, Jan 2020</span></td>
                <td><span className="db-list-rat">4</span></td>
                <td><span className="db-list-rat">9</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/betty-d-friedman" className="db-list-ststus" target="_blank">Betty D Friedman</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST135" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST135" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/center-automobiles" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>126</td>
                <td><img src="../images/listings/9953white-bmw-e46-under-cloudy-skies-707046.jpg" />Lemoo Cap Services                                    <span>07, Jan 2020</span></td>
                <td><span className="db-list-rat">3</span></td>
                <td><span className="db-list-rat">8</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/betty-d-friedman" className="db-list-ststus" target="_blank">Betty D Friedman</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST134" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST134" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/lemoo-cap-services" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>127</td>
                <td><img src="../images/listings/22862pexels-photo-1250655.jpeg" />Green Healthcare Hospital                                    <span>07, Jan 2020</span></td>
                <td><span className="db-list-rat">3</span></td>
                <td><span className="db-list-rat">73</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/rachel" className="db-list-ststus" target="_blank">Rachel</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST133" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST133" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/green-healthcare-hospital" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>128</td>
                <td><img src="../images/listings/89971pexels-photo-2096983.jpeg" />Rachel Taj Hotels                                    <span>07, Jan 2020</span></td>
                <td><span className="db-list-rat">3</span></td>
                <td><span className="db-list-rat">24</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/rachel" className="db-list-ststus" target="_blank">Rachel</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST132" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST132" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/rachel-taj-hotels" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>129</td>
                <td><img src="../images/listings/88546images-(5).jpg" />coffee shop                                    <span>04, Jan 2020</span></td>
                <td><span className="db-list-rat">4</span></td>
                <td><span className="db-list-rat">8</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/directory-finder" className="db-list-ststus" target="_blank">Directory Finder</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST131" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST131" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/coffee-shop" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>130</td>
                <td><img src="../images/listings/76808tour-travel-html-template.jpg" />Tour and Travel html Template                                    <span>29, Dec 2019</span></td>
                <td><span className="db-list-rat">3.7</span></td>
                <td><span className="db-list-rat">12</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/rn53-themes" className="db-list-ststus" target="_blank">Rn53 Themes</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST130" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST130" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/tour-and-travel-html-template" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>131</td>
                <td><img src="../images/listings/657791_f1cdikgosfn0gg0a96jsdw.png" />Smart Digital Products                                    <span>15, Dec 2019</span></td>
                <td><span className="db-list-rat">3.2</span></td>
                <td><span className="db-list-rat">8</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/rn53-themes" className="db-list-ststus" target="_blank">Rn53 Themes</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST129" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST129" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/smart-digital-products" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              <tr>
                <td>132</td>
                <td><img src="../images/listings/41073ser6.jpg" />The Royal Spa Center for Women                                    <span>08, Dec 2019</span></td>
                <td><span className="db-list-rat">4</span></td>
                <td><span className="db-list-rat">10</span>
                </td>
                <td><a href="http://localhost/directory/bizbook/profile/directory-finder" className="db-list-ststus" target="_blank">Directory Finder</a></td>
                {/*                                <td><a href="admin-promote-now.html?code=*/}{/*&&type=listing" class="db-list-edit">*/}{/*</a></td>*/}
                <td><a href="admin-edit-listings.html?code=LIST128" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-listings.html?code=LIST128" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/listing/the-royal-spa-center-for-women" className="db-list-edit" target="_blank">Preview</a>
                </td>
              </tr>
              {/*								<tr>*/}
              {/*                                    <td>2</td>*/}
              {/*									<td><img src="../images/listings/car3.jpg" alt="">National Auto Care <span>28 Feb 2019</span></td>*/}
              {/*									<td><span class="db-list-rat">3.5</span></td>*/}
              {/*									<td><span class="db-list-rat">12</span></td>*/}
              {/*                                    <td><a href="../profile.html" class="db-list-ststus" target="_blank">John smith</a></td>*/}
              {/*									<td><a href="admin-edit-listings.html" class="db-list-edit">Edit</a></td>*/}
              {/*									<td><span class="db-list-edit">Delete</span></td>*/}
              {/*									<td><a href="../listing-details.html" class="db-list-edit" target="_blank">Preview</a></td>*/}
              {/*								</tr>*/}
              {/*								<tr>*/}
              {/*                                    <td>3</td>*/}
              {/*                                    <td><img src="../images/listings/spa3.jpg" alt=""> Pearl Perfumes <span>04 Mar 2019</span></td>*/}
              {/*									<td><span class="db-list-rat">3.8</span></td>*/}
              {/*									<td><span class="db-list-rat">232</span></td><td><a href="../profile.html" class="db-list-ststus" target="_blank">William</a></td>*/}
              {/*									<td><a href="admin-edit-listings.html" class="db-list-edit">Edit</a></td>*/}
              {/*									<td><span class="db-list-edit">Delete</span></td>*/}
              {/*									<td><a href="../listing-details.html" class="db-list-edit" target="_blank">Preview</a></td>*/}
              {/*								</tr>*/}
              {/*								<tr>*/}
              {/*                                    <td>4</td>*/}
              {/*                                    <td><img src="../images/listings/car4.jpg" alt=""> MG SUV Cars <span>04 Mar 2019</span></td>*/}
              {/*									<td><span class="db-list-rat">4.2</span></td>*/}
              {/*									<td><span class="db-list-rat">232</span></td>*/}
              {/*									<td><a href="../profile.html" class="db-list-ststus" target="_blank">Peter parker</a></td>*/}
              {/*									<td><a href="admin-edit-listings.html" class="db-list-edit">Edit</a></td>*/}
              {/*									<td><span class="db-list-edit">Delete</span></td>*/}
              {/*									<td><a href="../listing-details.html" class="db-list-edit" target="_blank">Preview</a></td>*/}
              {/*								</tr>*/}
              {/*								<tr>*/}
              {/*                                    <td>5</td>*/}
              {/*                                    <td><img src="../images/listings/bike4.jpg" alt="">Ducati Bike 310 <span>16 March 2018</span></td>*/}
              {/*									<td><span class="db-list-rat">4.8</span></td>*/}
              {/*									<td><span class="db-list-rat">1052</span></td>*/}
              {/*									<td><a href="../profile.html" class="db-list-ststus" target="_blank">Steve jobs</a></td>*/}
              {/*									<td><a href="admin-edit-listings.html" class="db-list-edit">Edit</a></td>*/}
              {/*									<td><span class="db-list-edit">Delete</span></td>*/}
              {/*									<td><a href="../listing-details.html" class="db-list-edit" target="_blank">Preview</a></td>*/}
              {/*								</tr>*/}
              {/*								<tr>*/}
              {/*                                    <td>6</td>*/}
              {/*                                    <td><img src="../images/listings/food1.jpg" alt="">Forca hotels and resorts <span>5 May 2016</span></td>*/}
              {/*									<td><span class="db-list-rat">4.4</span></td>*/}
              {/*									<td><span class="db-list-rat">1052</span></td>*/}
              {/*									<td><a href="../profile.html" class="db-list-ststus" target="_blank">Hendry</a></td>*/}
              {/*									<td><a href="admin-edit-listings.html" class="db-list-edit">Edit</a></td>*/}
              {/*									<td><span class="db-list-edit">Delete</span></td>*/}
              {/*									<td><a href="../listing-details.html" class="db-list-edit" target="_blank">Preview</a></td>*/}
              {/*								</tr>*/}
              {/*								<tr>*/}
              {/*                                    <td>7</td>*/}
              {/*                                    <td><img src="../images/listings/hot6.jpg" alt="">Taj Luxury Hotel <span>12 Jan 2019</span></td>*/}
              {/*									<td><span class="db-list-rat">4.2</span></td>*/}
              {/*									<td><span class="db-list-rat">76</span></td>*/}
              {/*									<td><a href="../profile.html" class="db-list-ststus" target="_blank">Andru russul</a></td>*/}
              {/*									<td><a href="admin-edit-listings.html" class="db-list-edit">Edit</a></td>*/}
              {/*									<td><span class="db-list-edit">Delete</span></td>*/}
              {/*									<td><a href="../listing-details.html" class="db-list-edit" target="_blank">Preview</a></td>*/}
              {/*								</tr>*/}
              {/*								<tr>*/}
              {/*                                    <td>8</td>*/}
              {/*									<td><img src="../images/listings/re6.jpg" alt="">National Auto Care <span>28 Feb 2019</span></td>*/}
              {/*									<td><span class="db-list-rat">3.5</span></td>*/}
              {/*									<td><span class="db-list-rat">12</span></td>*/}
              {/*									<td><a href="../profile.html" class="db-list-ststus" target="_blank">Liase</a></td>*/}
              {/*									<td><a href="admin-edit-listings.html" class="db-list-edit">Edit</a></td>*/}
              {/*									<td><span class="db-list-edit">Delete</span></td>*/}
              {/*									<td><a href="../listing-details.html" class="db-list-edit" target="_blank">Preview</a></td>*/}
              {/*								</tr>*/}
              {/*								<tr>*/}
              {/*                                    <td>9</td>*/}
              {/*                                    <td><img src="../images/listings/re2.jpg" alt=""> Pearl Perfumes <span>04 Mar 2019</span></td>*/}
              {/*									<td><span class="db-list-rat">3.8</span></td>*/}
              {/*									<td><span class="db-list-rat">232</span></td>*/}
              {/*									<td><a href="../profile.html" class="db-list-ststus" target="_blank">Andriya</a></td>*/}
              {/*									<td><a href="admin-edit-listings.html" class="db-list-edit">Edit</a></td>*/}
              {/*									<td><span class="db-list-edit">Delete</span></td>*/}
              {/*									<td><a href="../listing-details.html" class="db-list-edit" target="_blank">Preview</a></td>*/}
              {/*								</tr>*/}
              {/*								<tr>*/}
              {/*                                    <td>10</td>*/}
              {/*                                    <td><img src="../images/listings/list1.jpg" alt=""> MG SUV Cars <span>04 Mar 2019</span></td>*/}
              {/*									<td><span class="db-list-rat">4.2</span></td>*/}
              {/*									<td><span class="db-list-rat">232</span></td>*/}
              {/*									<td><a href="../profile.html" class="db-list-ststus" target="_blank">Andriya</a></td>*/}
              {/*									<td><a href="admin-edit-listings.html" class="db-list-edit">Edit</a></td>*/}
              {/*									<td><span class="db-list-edit">Delete</span></td>*/}
              {/*									<td><a href="../listing-details.html" class="db-list-edit" target="_blank">Preview</a></td>*/}
              {/*								</tr>*/}
              {/*								<tr>*/}
              {/*                                    <td>11</td>*/}
              {/*                                    <td><img src="../images/listings/spa1.jpg" alt="">Ducati Bike 310 <span>16 March 2018</span></td>*/}
              {/*									<td><span class="db-list-rat">4.8</span></td>*/}
              {/*									<td><span class="db-list-rat">1052</span></td>*/}
              {/*									<td><a href="../profile.html" class="db-list-ststus" target="_blank">Andriya</a></td>*/}
              {/*									<td><a href="admin-edit-listings.html" class="db-list-edit">Edit</a></td>*/}
              {/*									<td><span class="db-list-edit">Delete</span></td>*/}
              {/*									<td><a href="../listing-details.html" class="db-list-edit" target="_blank">Preview</a></td>*/}
              {/*								</tr>*/}
              {/*								<tr>*/}
              {/*                                    <td>12</td>*/}
              {/*                                    <td><img src="../images/listings/spa5.jpg" alt="">Forca hotels and resorts <span>5 May 2016</span></td>*/}
              {/*									<td><span class="db-list-rat">4.4</span></td>*/}
              {/*									<td><span class="db-list-rat">1052</span></td>*/}
              {/*									<td><a href="../profile.html" class="db-list-ststus" target="_blank">Andriya</a></td>*/}
              {/*									<td><a href="admin-edit-listings.html" class="db-list-edit">Edit</a></td>*/}
              {/*									<td><span class="db-list-edit">Delete</span></td>*/}
              {/*									<td><a href="../listing-details.html" class="db-list-edit" target="_blank">Preview</a></td>*/}
              {/*								</tr>*/}
            </tbody>
          </table>
        </div>
      </div>
      <div className="ad-pgnat">
        <ul className="pagination">
          <li className="page-item"><a className="page-link" href="#">Previous</a></li>
          <li className="page-item active"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item"><a className="page-link" href="#">Next</a></li>
        </ul>
      </div>
    </div>
  </div>
</section>

  )
}

export default page
