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
        <span className="udb-inst">All Products</span>
        <div className="ud-cen-s2">
          <h2>Product Details</h2>
          <Link href="/add-new-product" className="db-tit-btn">
            Add new Product
          </Link>
          <table className="responsive-table bordered">
            <thead>
              <tr>
                <th>No</th>
                <th>Product Name</th>
                {/*                    <th>Rating</th>*/}
                <th>Views</th>
                {/*									<th>Expiry on</th>*/}
                <th>Status</th>
                <th>Edit</th>
                <th>Delete</th>
                <th>Preview</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <img alt="demoimage" src="/products/3466audi_png1737.png" />
                  Audi q3 <span>26, Mar 2021</span>
                </td>
                {/*                        <td><span className="db-product-rat">*/}
                {/*</span></td>*/}
                <td>
                  <span className="db-list-rat">8</span>
                </td>
                {/*									<td><span className="db-product-ststus">8 June 2020</span></td>*/}
                <td>
                  <span className="db-list-ststus">Active</span>
                </td>
                <td>
                  <Link
                    href="/edit-product?code=PROD036"
                    className="db-list-edit"
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  <Link href="/#">Delete</Link>
                </td>
                <td>
                  <Link
                    href="/product-details"
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
                  <img alt="demoimage" src="/products/20234fp-263d-royal-protton-alpha-steel_interior.png" />
                  WHIRLPOOL FRIDGE <span>12, Mar 2021</span>
                </td>
                {/*                        <td><span className="db-product-rat">*/}
                {/*</span></td>*/}
                <td>
                  <span className="db-list-rat">12</span>
                </td>
                {/*									<td><span className="db-product-ststus">8 June 2020</span></td>*/}
                <td>
                  <span className="db-list-ststus">Active</span>
                </td>
                <td>
                  <Link
                    href="/edit-product?code=PROD034"
                    className="db-list-edit"
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  <Link href="/#">Delete</Link>
                </td>
                <td>
                  <Link
                    href="/product-details"
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
                  <img alt="demoimage" src="/products/6743281s+9npa5ol._ac_ul320_.jpg" />
                  DELL <span>12, Mar 2021</span>
                </td>
                {/*                        <td><span className="db-product-rat">*/}
                {/*</span></td>*/}
                <td>
                  <span className="db-list-rat">9</span>
                </td>
                {/*									<td><span className="db-product-ststus">8 June 2020</span></td>*/}
                <td>
                  <span className="db-list-ststus">Active</span>
                </td>
                <td>
                  <Link
                    href="/edit-product?code=PROD033"
                    className="db-list-edit"
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  <Link href="/#">Delete</Link>
                </td>
                <td>
                  <Link
                    href="/product-details"
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
                  <img alt="demoimage" src="/products/6009download.jfif" />
                  samsung m31 <span>12, Mar 2021</span>
                </td>
                {/*                        <td><span className="db-product-rat">*/}
                {/*</span></td>*/}
                <td>
                  <span className="db-list-rat">11</span>
                </td>
                {/*									<td><span className="db-product-ststus">8 June 2020</span></td>*/}
                <td>
                  <span className="db-list-ststus">Active</span>
                </td>
                <td>
                  <Link
                    href="/edit-product?code=PROD032"
                    className="db-list-edit"
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  <Link href="/#">Delete</Link>
                </td>
                <td>
                  <Link
                    href="/product-details"
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
                  <img alt="demoimage" src="/products/48373ac-hot-n-cold-final.png" />
                  LG AC <span>11, Mar 2021</span>
                </td>
                {/*                        <td><span className="db-product-rat">*/}
                {/*</span></td>*/}
                <td>
                  <span className="db-list-rat">8</span>
                </td>
                {/*									<td><span className="db-product-ststus">8 June 2020</span></td>*/}
                <td>
                  <span className="db-list-ststus">Active</span>
                </td>
                <td>
                  <Link
                    href="/edit-product?code=PROD031"
                    className="db-list-edit"
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  <Link href="/#">Delete</Link>
                </td>
                <td>
                  <Link
                    href="/product-details"
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
                  <img alt="demoimage" src="/products/763861bdef4927c04d3674fa22e88df97ca754db8f83e.jpeg" />
                  lenova yoga 510 <span>21, Feb 2021</span>
                </td>
                {/*                        <td><span className="db-product-rat">*/}
                {/*</span></td>*/}
                <td>
                  <span className="db-list-rat">9</span>
                </td>
                {/*									<td><span className="db-product-ststus">8 June 2020</span></td>*/}
                <td>
                  <span className="db-list-ststus">Active</span>
                </td>
                <td>
                  <Link
                    href="/edit-product?code=PROD030"
                    className="db-list-edit"
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  <Link href="/#">Delete</Link>
                </td>
                <td>
                  <Link
                    href="/product-details"
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
                  <img alt="demoimage" src="/products/74749bizpro.jpeg" />
                  Engineered Shelving Unit <span>27, Apr 2020</span>
                </td>
                {/*                        <td><span className="db-product-rat">*/}
                {/*</span></td>*/}
                <td>
                  <span className="db-list-rat">6</span>
                </td>
                {/*									<td><span className="db-product-ststus">8 June 2020</span></td>*/}
                <td>
                  <span className="db-list-ststus">Active</span>
                </td>
                <td>
                  <Link
                    href="/edit-product?code=PROD018"
                    className="db-list-edit"
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  <Link href="/#">Delete</Link>
                </td>
                <td>
                  <Link
                    href="/product-details"
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
                  <img alt="demoimage" src="/products/101211-ps4-slim-sony-yes-dualshock-4-original-imafmakaeu7xvz6a.jpeg" />
                  8 x 4 Metal Trailer - Exc Tyres <span>11, Apr 2020</span>
                </td>
                {/*                        <td><span className="db-product-rat">*/}
                {/*</span></td>*/}
                <td>
                  <span className="db-list-rat">0</span>
                </td>
                {/*									<td><span className="db-product-ststus">8 June 2020</span></td>*/}
                <td>
                  <span className="db-list-ststus">Active</span>
                </td>
                <td>
                  <Link
                    href="/edit-product?code=PROD012"
                    className="db-list-edit"
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  <Link href="/#">Delete</Link>
                </td>
                <td>
                  <Link
                    href="/product-details"
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
