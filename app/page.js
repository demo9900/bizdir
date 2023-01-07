import React from 'react'
import Header from '../component/Header'
import Link from 'next/link'
const page = () => {
  const category = {
    "data":[
      {
      "name":"Spa and Facial", "title":"Show All (1020)","img":"/services/21.jpg"
      },
      {
        "name":"Hospitals", "title":"Show All (1020)","img":"/services/30.jpg"
      },
        {
          "name":"Transportation", "title":"Show All (970)","img":"/services/1.jpg"
      },
      {
        "name":"Automobile", "title":"Show All (1020)","img":"/services/21.jpg","img":"/services/4.jpg"
       },
        {
          "name":"Electricals", "title":"Show All (1020)","img":"/services/8.jpg"
      },
      {
            "name":"Education", "title":"Show All (1020)","img":"/services/7.jpeg"
      },
      {
              "name":"Pet & Animals", "title":"Show All (1020)","img":"/services/17.jpeg"
      },
      {
        "name":"Real Estate", "title":"Show All (1020)","img":"/services/29.jpeg"
      },
  ]
  };
  console.log(category);
  return (
    <>
    <section>
      <div className="str">
    <div className="hom-head" style={{ backgroundImage: "url(/promo.jpg)" }} >
     <Header/>  
    <div className="container">
    <div className="row">
    <div className="ban-tit">
      <h1>
        <b>
          Connect with the right
          <br />
          Service Experts
        </b>{" "}
        Restaurants, cafe's, and bars in New york{" "}
      </h1>
    </div>
    <div className="ban-search">
      <form name="filter_form" id="filter_form" className="filter_form">
        <ul>
          <li className="sr-cit">
            <input
              type="text"
              id="select-city"
              name="select-city"
              className="autocomplete"
              placeholder="City"
            />
          </li>
          <li className="sr-sea">
            {/*<input type="text" id="select-search" className="autocomplete"
                                         placeholder="">*/}
            <input
              type="text"
              autoComplete="off"
              id="select-search"
              placeholder="Search for services and business..."
              className="search-field"
            />
            <ul id="tser-res" className="tser-res tser-res1">
              <li>
                <div>
                  <h4>The Royal Spa Center For Womens</h4>
                  <span>No:2, 4th Avenue, Newyork, USA, Near to Airport</span>
                  <a href="all-listing.html" />
                </div>
              </li>
              <li>
                <div>
                  <h4>Real estate</h4>
                  <span>Chennai, India</span>
                  <a href="all-listing.html" />
                </div>
              </li>
              <li>
                <div>
                  <h4>Education</h4>
                  <span>
                    Schools, university, colleges, online classes, tution
                    centers, distance education..
                  </span>
                  <a href="all-listing.html" />
                </div>
              </li>
              <li>
                <div>
                  <h4>Hotel and resort booking</h4>
                  <span>
                    hotel booking online, hotel reservation, holiday room
                    booking
                  </span>
                  <a href="all-listing.html" />
                </div>
              </li>
              <li>
                <div>
                  <h4>Import and export</h4>
                  <span>Import and export to other countrys with low cost</span>
                  <a href="all-listing.html" />
                </div>
              </li>
              <li>
                <div>
                  <h4>Properties in Illunois</h4>
                  <span>Villas, Plots, House rent and buy</span>
                  <a href="all-listing.html" />
                </div>
              </li>
              <li>
                <div>
                  <h4>Schools in Adyar</h4>
                  <span>schools, adyar, education, </span>
                  <a href="all-listing.html" />
                </div>
              </li>
              <li>
                <div>
                  <h4>Laptop services near you</h4>
                  <span>laptop services, computer services</span>
                  <a href="all-listing.html" />
                </div>
              </li>
              <li>
                <div>
                  <h4>Hospital and medical services near you</h4>
                  <span>Hospital and medical services near you</span>
                  <a href="all-listing.html" />
                </div>
              </li>
            </ul>
          </li>
          <li className="sr-btn">
            <input
              type="submit"
              id="filter_submit"
              name="filter_submit"
              defaultValue="Search"
              className="filter_submit"
            />
          </li>
        </ul>
      </form>
    </div>
    <div className="ban-ql">
      <ul>
        <li>
          <div>
            <img src="/icon/1.png" alt="" />
            <h4>24 Million Business</h4>
            <p>
              Choose from a collection of handpicked luxury villas &amp;
              apartments
            </p>{" "}
            <a href="#">Explore Now</a>
          </div>
        </li>
        <li>
          <div>
            <img src="/icon/2.png" alt="" />
            <h4>1,200 Services Offered</h4>
            <p>
              Choose from a collection of handpicked luxury villas &amp;
              apartments
            </p>{" "}
            <a href="#">Explore Now</a>
          </div>
        </li>
        <li>
          <div>
            <img src="/icon/3.png" alt="" />
            <h4>05 Million Visitors</h4>
            <p>
              Choose from a collection of handpicked luxury villas &amp;
              apartments
            </p>{" "}
            <a href="#">Explore Now</a>
          </div>
        </li>
        <li>
          <div>
            <img src="/icon/4.png" alt="" />
            <h4>2k+ Premium Users</h4>
            <p>
              Choose from a collection of handpicked luxury villas &amp;
              apartments
            </p>{" "}
            <a href="#">Explore Now</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
    </div>
    </div>
    </div>
    </section>
    <section>
      <div className="str">
        <div className="container">
        <div className="products land-pack container mx-auto my-10 px-4 xl:px-0">
				<div className="home-tit">
						<h2><span>Popular Services</span> near you</h2>
						<p>lacinia viverra lectus. Fusce imperdiet ullamcorper metus eu fringilla.</p>
					</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">

        {category.data.map((item)=>{
       return <div className="product overflow-hidden  bg-white mb-5 rounded-md">

<Link href='/' className='no-underline hover:no-underline'>
   <div className='land-pack-grid-img transform transition duration-500 hover:scale-105'>
    <img
      className=" cursor-pointer object-cover bg-gray-100"
      src={item.img}
    />
    </div>
    <div class="land-pack-grid-text">
			<h4>{item.name} <span class="dir-ho-cat">{item.title}</span></h4>
		</div>
</Link>


        </div>})}
				</div>
        <a href="all-category.html" className="more">View all services</a>
			  </div>
        
        </div>
      </div>
    </section>

    <section>
  <div className="str">
    <div className="container">
      <div className="row">
        <div className="home-tit">
          <h2>
            <span>Explore City</span> Category{" "}
          </h2>
          <p>
            lacinia viverra lectus. Fusce imperdiet ullamcorper metus eu
            fringilla.
          </p>
        </div>
        <div className="home-city">
          <ul>
            <li>
              <div className="hcity">
                <div>
                  <img
                    src="https://bizbookdirectorytemplate.com/images/services/95787pexels-asad-photo-maldives-1450363.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img src="/services/1.jpg" alt="" />
                  <h4>Hotels And Resorts</h4>
                  <div className="list-rat-all">
                    {" "}
                    <b>3.0</b>
                    <label className="rat">
                      {" "}
                      <i className="material-icons">star</i>
                      <i className="material-icons">star</i>
                      <i className="material-icons">star</i>
                      <i className="material-icons ratstar">star</i>
                      <i className="material-icons ratstar">star</i>
                    </label>{" "}
                    <span>2 Reviews</span>
                  </div>
                  <p>09 Listings</p>
                </div>{" "}
                <a href="all-listing.html" className="fclick">
                  &nbsp;
                </a>
              </div>
            </li>
            <li>
              <div className="hcity">
                <div>
                  <img src="/services/9.png" alt="" />
                </div>
                <div>
                  <img src="/services/20356s7.jpeg" alt="" />
                  <h4>Automobiles</h4>
                  <div className="list-rat-all">
                    {" "}
                    <b>3.0</b>
                    <label className="rat">
                      {" "}
                      <i className="material-icons">star</i>
                      <i className="material-icons">star</i>
                      <i className="material-icons">star</i>
                      <i className="material-icons ratstar">star</i>
                      <i className="material-icons ratstar">star</i>
                    </label>{" "}
                    <span>2 Reviews</span>
                  </div>
                  <p>06 Listings</p>
                </div>
                <a href="all-listing.html" className="fclick">
                  &nbsp;
                </a>
              </div>
            </li>
            <li>
              <div className="hcity">
                <div>
                  <img src="/services/19.jpg" alt="" />
                </div>
                <div>
                  <img src="/services/20356s7.jpeg" alt="" />
                  <h4>Wedding halls</h4>
                  <div className="list-rat-all">
                    {" "}
                    <b>5.0</b>
                    <label className="rat">
                      {" "}
                      <i className="material-icons">star</i>
                      <i className="material-icons">star</i>
                      <i className="material-icons">star</i>
                      <i className="material-icons">star</i>
                      <i className="material-icons">star</i>
                    </label>{" "}
                    <span>1 Reviews</span>
                  </div>
                  <p>03 Listings</p>
                </div>{" "}
                <a href="all-listing.html" className="fclick">
                  &nbsp;
                </a>
              </div>
            </li>
            <li>
              <div className="hcity">
                <div>
                  <img src="/services/8.jpg" alt="" />
                </div>
                <div>
                  <img src="/services/445234.jpg" alt="" />
                  <h4>Digital products</h4>
                  <div className="list-rat-all">
                    {" "}
                    <b>3.3</b>
                    <label className="rat">
                      {" "}
                      <i className="material-icons">star</i>
                      <i className="material-icons">star</i>
                      <i className="material-icons">star</i>
                      <i className="material-icons">star</i>
                      <i className="material-icons ratstar">star</i>
                    </label>{" "}
                    <span>3 Reviews</span>
                  </div>
                  <p>23 Listings</p>
                </div>{" "}
                <a href="all-listing.html" className="fclick">
                  &nbsp;
                </a>
              </div>
            </li>
            <li>
              <div className="hcity">
                <div>
                  <img src="/services/2.jpeg" alt="" />
                </div>
                <div>
                  <img src="/services/20356s7.jpeg" alt="" />
                  <h4>Real Estate</h4>
                  <div className="list-rat-all">
                    {" "}
                    <b>3.3</b>
                    <label className="rat">
                      {" "}
                      <i className="material-icons">star</i>
                      <i className="material-icons">star</i>
                      <i className="material-icons">star</i>
                      <i className="material-icons">star</i>
                      <i className="material-icons ratstar">star</i>
                    </label>{" "}
                    <span>3 Reviews</span>
                  </div>
                  <p>23 Listings</p>
                </div>{" "}
                <a href="all-listing.html" className="fclick">
                  &nbsp;
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
    </section>
    <section>
  <div className="hom-mpop-ser">
    <div className="container">
      <div className="hom-mpop-main">
        <div className="home-tit">
          <h2>
            <span>Featured Services</span> in your city{" "}
          </h2>
          <p>
            lacinia viverra lectus. Fusce imperdiet ullamcorper metus eu
            fringilla.
          </p>
        </div>
        <div className="col-md-6">
          <div>
            {/*POPULAR LISTINGS*/}
            <div className="hom-mpop">
              {/*POPULAR LISTINGS IMAGE*/}
              <div className="col-md-3">
                <img src="/listings/1.jpg" alt="" />
              </div>
              {/*POPULAR LISTINGS: CONTENT*/}
              <div className="col-md-9">
                <h3>Titan Wedding Hall</h3>
                <h4>Wedding halls</h4>
                <p>Titan wedding happ, North street, No 2, Newyork, USA</p>{" "}
                <span className="rat-sh">5.0</span>
              </div>{" "}
              <a href="listing-details.html">&nbsp;</a>
            </div>
            {/*POPULAR LISTINGS*/}
            <div className="hom-mpop">
              {/*POPULAR LISTINGS IMAGE*/}
              <div className="col-md-3">
                <img src="/listings/2.jpg" alt="" />
              </div>
              {/*POPULAR LISTINGS: CONTENT*/}
              <div className="col-md-9">
                <h3>Gill Automobiles and Services</h3>
                <h4>Automobiles</h4>
                <p>Titan wedding happ, North street, No 2, Newyork, USA</p>
              </div>
            </div>
            {/*POPULAR LISTINGS*/}
            <div className="hom-mpop">
              {/*POPULAR LISTINGS IMAGE*/}
              <div className="col-md-3">
                <img src="/listings/3.jpeg" alt="" />
              </div>
              {/*POPULAR LISTINGS: CONTENT*/}
              <div className="col-md-9">
                <h3>Rolexo Villas in California</h3>
                <h4>Real Estate</h4>
                <p>
                  28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.
                </p>{" "}
                <span className="rat-sh">5.0</span>
              </div>
              <a href="listing-details.html">&nbsp;</a>
            </div>
            {/*POPULAR LISTINGS*/}
            <div className="hom-mpop">
              {/*POPULAR LISTINGS IMAGE*/}
              <div className="col-md-3">
                <img src="/listings/4.jpg" alt="" />
              </div>
              {/*POPULAR LISTINGS: CONTENT*/}
              <div className="col-md-9">
                <h3>The Spa at Mandarin Oriental</h3>
                <h4>Hospitals</h4>
                <p>No:2, 4th Avenue, Newyork, USA, Near to Airport</p>{" "}
                <span className="rat-sh">4.0</span>
              </div>
              <a href="listing-details.html">&nbsp;</a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div>
            {/*POPULAR LISTINGS*/}
            <div className="hom-mpop">
              {/*POPULAR LISTINGS IMAGE*/}
              <div className="col-md-3">
                <img src="/listings/5.jpeg" alt="" />
              </div>
              {/*POPULAR LISTINGS: CONTENT*/}
              <div className="col-md-9">
                <h3>IPM Business Software</h3>
                <h4>Digital Products</h4>
                <p>No:2, 4th Avenue, Newyork, USA, Near to Airport</p>
              </div>
              <a href="listing-details.html">&nbsp;</a>
            </div>
            {/*POPULAR LISTINGS*/}
            <div className="hom-mpop">
              {/*POPULAR LISTINGS IMAGE*/}
              <div className="col-md-3">
                <img src="/listings/6.jpg" alt="" />
              </div>
              {/*POPULAR LISTINGS: CONTENT*/}
              <div className="col-md-9">
                <h3>Rachel Taj Hotels</h3>
                <h4>Hotels And Resorts</h4>
                <p>No:2, 4th Avenue, Newyork, USA, Near to Airport</p>{" "}
                <span className="rat-sh">3.0</span>
              </div>
              <a href="listing-details.html">&nbsp;</a>
            </div>
            {/*POPULAR LISTINGS*/}
            <div className="hom-mpop">
              {/*POPULAR LISTINGS IMAGE*/}
              <div className="col-md-3">
                <img src="/listings/7.jpg" alt="" />
              </div>
              {/*POPULAR LISTINGS: CONTENT*/}
              <div className="col-md-9">
                <h3>Joseph Multispeciality Hospital</h3>
                <h4>Hospitals</h4>
                <p>No:2, 4th Avenue, Newyork, USA, Near to Airport</p>
              </div>{" "}
              <a href="listing-details.html">&nbsp;</a>
            </div>
            {/*POPULAR LISTINGS*/}
            <div className="hom-mpop">
              {/*POPULAR LISTINGS IMAGE*/}
              <div className="col-md-3">
                <img src="/listings/8.jpeg" alt="" />
              </div>
              {/*POPULAR LISTINGS: CONTENT*/}
              <div className="col-md-9">
                <h3>Green Healthcare Hospital</h3>
                <h4>Hospitals</h4>
                <p>No:2, 4th Avenue, Newyork, USA, Near to Airport</p>{" "}
                <span className="rat-sh">3.0</span>
              </div>{" "}
              <a href="listing-details.html">&nbsp;</a>
            </div>
          </div>
        </div>
      </div>
      <div className="hlead-coll">
        <div className="col-md-6">
          <div className="hom-cre-acc-left">
            <h3>
              What service do you need? <span>BizBook Directory</span>
            </h3>
            <p>
              Tell us more about your requirements so that we can connect you to
              the right service provider.
            </p>
            <ul>
              <li>
                <img src="/icon/blog.png" alt="" />
                <div>
                  <h5>Tell us more about your requirements</h5>
                  <p>
                    HI Imagine you have made your presence online through a
                    local online directory, but your competitors have..
                  </p>
                </div>
              </li>
              <li>
                <img src="/icon/shield.png" alt="" />
                <div>
                  <h5>We connect with right service provider</h5>
                  <p>
                    Advertising your business to area specific has many
                    advantages. For local businessmen, it is an opportunity..
                  </p>
                </div>
              </li>
              <li>
                <img src="/icon/general.png" alt="" />
                <div>
                  <h5>Happy with our service</h5>
                  <p>
                    Your local business too needs brand management and image
                    making. As you know the local market..
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          <div className="hom-col-req">
            <div className="log-bor">&nbsp;</div>{" "}
            <span className="udb-inst">Fill the form</span>
            <h4>What you looking for?</h4>
            <div
              id="home_enq_success"
              className="log"
              style={{ display: "none" }}
            >
              <p>Your Enquiry Is Submitted Successfully!!!</p>
            </div>
            <div id="home_enq_fail" className="log" style={{ display: "none" }}>
              <p>Something Went Wrong!!!</p>
            </div>
            <div id="home_enq_same" className="log" style={{ display: "none" }}>
              <p>You cannot make enquiry on your own listing</p>
            </div>
            <form
              name="home_enquiry_form"
              id="home_enquiry_form"
              method="post"
              encType="multipart/form-data"
            >
              <input
                type="hidden"
                className="form-control"
                name="listing_id"
                defaultValue={0}
                placeholder=""
                required=""
              />
              <input
                type="hidden"
                className="form-control"
                name="listing_user_id"
                defaultValue={0}
                placeholder=""
                required=""
              />
              <input
                type="hidden"
                className="form-control"
                name="enquiry_sender_id"
                defaultValue=""
                placeholder=""
                required=""
              />
              <input
                type="hidden"
                className="form-control"
                name="enquiry_source"
                defaultValue="Website"
                placeholder=""
                required=""
              />
              <div className="form-group">
                <input
                  type="text"
                  name="enquiry_name"
                  defaultValue=""
                  required="required"
                  className="form-control"
                  placeholder="Enter name*"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email*"
                  required="required"
                  defaultValue=""
                  name="enquiry_email"
                  pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$"
                  title="Invalid email address"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  defaultValue=""
                  name="enquiry_mobile"
                  placeholder="Enter mobile number *"
                  pattern="[7-9]{1}[0-9]{9}"
                  title="Phone number starting with 7-9 and remaing 9 digit with 0-9"
                  required=""
                />
              </div>
              <div className="form-group">
                <select
                  name="enquiry_category"
                  id="enquiry_category"
                  className="form-control"
                >
                  <option value="">Select Category</option>
                  <option value={19}>Wedding halls</option>
                  <option value={18}>Hotel &amp; Food</option>
                  <option value={17}>Pet shop</option>
                  <option value={16}>Digital Products</option>
                  <option value={15}>Spa and Facial</option>
                  <option value={10}>Real Estate</option>
                  <option value={8}>Sports</option>
                  <option value={7}>Education</option>
                  <option value={6}>Electricals</option>
                  <option value={5}>Automobiles</option>
                  <option value={3}>Transportation</option>
                  <option value={2}>Hospitals</option>
                  <option value={1}>Hotels And Resorts</option>
                </select>
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  rows={3}
                  name="enquiry_message"
                  placeholder="Enter your query or message"
                  defaultValue={""}
                />
              </div>
              <input type="hidden" id="source" />
              <button
                type="submit"
                id="home_enquiry_submit"
                name="home_enquiry_submit"
                className="btn btn-primary"
              >
                Submit Requirements
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>

  <>
  <section>
    <div className="str str-full">
      <div className="container">
        <div className="row">
          <div className="home-tit">
            <h2>
              <span>Top Service Provider</span> in city{" "}
            </h2>
            <p>
              lacinia viverra lectus. Fusce imperdiet ullamcorper metus eu
              fringilla.
            </p>
          </div>
          <div className="ho-popu-bod">
            {/*Top Branding Hotels*/}
            <div className="col-md-4">
              <div className="hot-page2-hom-pre-head">
                <h4>
                  Top Branding <span>Real Estate</span>
                </h4>
              </div>
              <div className="hot-page2-hom-pre">
                <ul>
                  {/*LISTINGS*/}
                  <li>
                    <div className="hot-page2-hom-pre-1">
                      <img src="/services/1.jpg" alt="" />
                    </div>
                    <div className="hot-page2-hom-pre-2">
                      <h5>Royal Real Estates</h5>
                      <span>
                        No:2, 4th Avenue, Newyork, USA, Near to Airport
                      </span>
                    </div>
                    <a href="listing-details.html" className="fclick" />
                  </li>
                  {/*LISTINGS*/}
                  {/*LISTINGS*/}
                  <li>
                    <div className="hot-page2-hom-pre-1">
                      <img src="/services/2.jpeg" alt="" />
                    </div>
                    <div className="hot-page2-hom-pre-2">
                      <h5>Smith Luxury Villas</h5>
                      <span>
                        No:2, 4th Avenue, Newyork, USA, Near to Airport
                      </span>
                    </div>
                    <div className="hot-page2-hom-pre-3">
                      {" "}
                      <span>2.0</span>
                    </div>
                    <a href="listing-details.html" className="fclick" />
                  </li>
                  {/*LISTINGS*/}
                  {/*LISTINGS*/}
                  <li>
                    <div className="hot-page2-hom-pre-1">
                      <img src="/services/3.jpg" alt="" />
                    </div>
                    <div className="hot-page2-hom-pre-2">
                      <h5>Appers Premium Independent Houses</h5>
                      <span>
                        No:2, 4th Avenue, Newyork, USA, Near to Airport
                      </span>
                    </div>
                    <div className="hot-page2-hom-pre-3">
                      {" "}
                      <span>3.3</span>
                    </div>
                    <a href="listing-details.html" className="fclick" />
                  </li>
                  {/*LISTINGS*/}
                  {/*LISTINGS*/}
                  <li>
                    <div className="hot-page2-hom-pre-1">
                      <img src="/services/4.jpg" alt="" />
                    </div>
                    <div className="hot-page2-hom-pre-2">
                      <h5>Asian Real Estate</h5>
                      <span>
                        No:2, 4th Avenue, Newyork, USA, Near to Airport
                      </span>
                    </div>
                    <a href="listing-details.html" className="fclick" />
                  </li>
                  {/*LISTINGS*/}
                  {/*LISTINGS*/}
                  <li>
                    <div className="hot-page2-hom-pre-1">
                      <img src="/services/5.jpeg" alt="" />
                    </div>
                    <div className="hot-page2-hom-pre-2">
                      <h5>jj</h5>
                      <span>
                        No:2, 4th Avenue, Newyork, USA, Near to Airport
                      </span>
                    </div>
                    <a href="listing-details.html" className="fclick" />
                  </li>
                  {/*LISTINGS*/}
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="hot-page2-hom-pre-head">
                <h4>
                  Top Branding <span>Digital Products</span>
                </h4>
              </div>
              <div className="hot-page2-hom-pre">
                <ul>
                  {/*LISTINGS*/}
                  <li>
                    <div className="hot-page2-hom-pre-1">
                      <img src="/services/6.jpeg" alt="" />
                    </div>
                    <div className="hot-page2-hom-pre-2">
                      <h5>BizBookBusiness Directory Template</h5>
                      <span>
                        No:2, 4th Avenue, Newyork, USA, Near to Airport
                      </span>
                    </div>
                    <a href="listing-details.html" className="fclick" />
                  </li>
                  {/*LISTINGS*/}
                  {/*LISTINGS*/}
                  <li>
                    <div className="hot-page2-hom-pre-1">
                      <img src="/services/7.jpeg" alt="" />
                    </div>
                    <div className="hot-page2-hom-pre-2">
                      <h5>Sony Music</h5>
                      <span>
                        No:2, 4th Avenue, Newyork, USA, Near to Airport
                      </span>
                    </div>
                    <a href="listing-details.html" className="fclick" />
                  </li>
                  {/*LISTINGS*/}
                  {/*LISTINGS*/}
                  <li>
                    <div className="hot-page2-hom-pre-1">
                      <img src="/services/8.jpg" alt="" />
                    </div>
                    <div className="hot-page2-hom-pre-2">
                      <h5>IPM Business Software</h5>
                      <span>
                        No:2, 4th Avenue, Newyork, USA, Near to Airport
                      </span>
                    </div>
                    <a href="listing-details.html" className="fclick" />
                  </li>
                  {/*LISTINGS*/}
                  {/*LISTINGS*/}
                  <li>
                    <div className="hot-page2-hom-pre-1">
                      <img src="/services/9.png" alt="" />
                    </div>
                    <div className="hot-page2-hom-pre-2">
                      <h5>Tour and Travel html Template</h5>
                      <span>
                        No:2, 4th Avenue, Newyork, USA, Near to Airport
                      </span>
                    </div>
                    <div className="hot-page2-hom-pre-3">
                      {" "}
                      <span>3.7</span>
                    </div>
                    <a href="listing-details.html" className="fclick" />
                  </li>
                  {/*LISTINGS*/}
                  {/*LISTINGS*/}
                  <li>
                    <div className="hot-page2-hom-pre-1">
                      <img src="/services/10.jpg" alt="" />
                    </div>
                    <div className="hot-page2-hom-pre-2">
                      <h5>Smart Digital Products</h5>
                      <span>
                        No:2, 4th Avenue, Newyork, USA, Near to Airport
                      </span>
                    </div>
                    <div className="hot-page2-hom-pre-3">
                      {" "}
                      <span>3.2</span>
                    </div>
                    <a href="listing-details.html" className="fclick" />
                  </li>
                  {/*LISTINGS*/}
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="hot-page2-hom-pre-head">
                <h4>
                  Top Branding <span>Hospitals</span>
                </h4>
              </div>
              <div className="hot-page2-hom-pre">
                <ul>
                  {/*LISTINGS*/}
                  <li>
                    <div className="hot-page2-hom-pre-1">
                      <img src="/services/11.jpg" alt="" />
                    </div>
                    <div className="hot-page2-hom-pre-2">
                      <h5>William Chil care Hospital</h5>
                      <span>
                        No:2, 4th Avenue, Newyork, USA, Near to Airport
                      </span>
                    </div>
                    <a href="listing-details.html" className="fclick" />
                  </li>
                  {/*LISTINGS*/}
                  {/*LISTINGS*/}
                  <li>
                    <div className="hot-page2-hom-pre-1">
                      <img src="/services/12.jpeg" alt="" />
                    </div>
                    <div className="hot-page2-hom-pre-2">
                      <h5>Urban Community Hospital</h5>
                      <span>
                        No:2, 4th Avenue, Newyork, USA, Near to Airport
                      </span>
                    </div>
                    <div className="hot-page2-hom-pre-3">
                      {" "}
                      <span>4.0</span>
                    </div>
                    <a href="listing-details.html" className="fclick" />
                  </li>
                  {/*LISTINGS*/}
                  {/*LISTINGS*/}
                  <li>
                    <div className="hot-page2-hom-pre-1">
                      <img src="/services/13.jpg" alt="" />
                    </div>
                    <div className="hot-page2-hom-pre-2">
                      <h5>Joseph Multispeciality Hospital</h5>
                      <span>
                        No:2, 4th Avenue, Newyork, USA, Near to Airport
                      </span>
                    </div>
                    <a href="listing-details.html" className="fclick" />
                  </li>
                  {/*LISTINGS*/}
                  {/*LISTINGS*/}
                  <li>
                    <div className="hot-page2-hom-pre-1">
                      <img src="/services/14.jpg" alt="" />
                    </div>
                    <div className="hot-page2-hom-pre-2">
                      <h5>Apolloo Hospitals UAE</h5>
                      <span>
                        No:2, 4th Avenue, Newyork, USA, Near to Airport
                      </span>
                    </div>
                    <div className="hot-page2-hom-pre-3">
                      {" "}
                      <span>4.0</span>
                    </div>
                    <a href="listing-details.html" className="fclick" />
                  </li>
                  {/*LISTINGS*/}
                  {/*LISTINGS*/}
                  <li>
                    <div className="hot-page2-hom-pre-1">
                      <img src="/services/16.jpg" alt="" />
                    </div>
                    <div className="hot-page2-hom-pre-2">
                      <h5>Green Healthcare Hospital</h5>
                      <span>
                        No:2, 4th Avenue, Newyork, USA, Near to Airport
                      </span>
                    </div>
                    <div className="hot-page2-hom-pre-3">
                      {" "}
                      <span>3.0</span>
                    </div>
                    <a href="listing-details.html" className="fclick" />
                  </li>
                  {/*LISTINGS*/}
                </ul>
              </div>
            </div>
            {/*End Top Branding Hotels*/}
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* END */}
  <section>
    <div
      id="demo"
      className="carousel slide cate-sli caro-home"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/slider/1.jpg" alt="Los Angeles" />
          <a
            href="https://bizbookdirectorytemplate.com/demo.html"
            target="_blank"
          />
        </div>
        <div className="carousel-item ">
          <img src="/slider/2.jpg" alt="Los Angeles" />
          <a
            href="https://bizbookdirectorytemplate.com/demo.html"
            target="_blank"
          />
        </div>
      </div>
      <a className="carousel-control-prev" href="#demo" data-slide="prev">
        {" "}
        <span className="carousel-control-prev-icon" />
      </a>
      <a className="carousel-control-next" href="#demo" data-slide="next">
        {" "}
        <span className="carousel-control-next-icon" />
      </a>
    </div>
  </section>
  {/* START */}
  <section>
    <div className="str count">
      <div className="container">
        <div className="row">
          <div className="home-tit">
            <h2>
              <span>Feature Events</span> in city{" "}
            </h2>
            <p>
              lacinia viverra lectus. Fusce imperdiet ullamcorper metus eu
              fringilla.
            </p>
          </div>
          <div className="hom-event">
            <div className="hom-eve-com hom-eve-lhs">
              <div className="hom-eve-lhs-1 col-md-4">
                <div className="eve-box">
                  <div>
                    <a href="event-details.html">
                      <img src="/events/1.png" alt="" />
                      <span>
                        <b>Dec 31</b>
                      </span>
                    </a>
                  </div>
                  <div>
                    <h4>
                      <a href="event-details.html">Online Marketers Meet-Up</a>
                    </h4>
                    <span className="addr">London, UK</span>
                    <span className="pho">6622442200</span>
                  </div>
                  <div>
                    <div className="auth">
                      <img src="/user/1.png" alt="" /> <b>Hosted by</b>
                      <br />
                      <h4>Directory Finder</h4>
                      <a
                        target="_blank"
                        href="profile.html"
                        className="fclick"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="hom-eve-lhs-1 col-md-4">
                <div className="eve-box">
                  <div>
                    <a href="event-details.html">
                      <img src="/events/2.jpg" alt="" />
                      <span>
                        <b>Dec 31</b>
                      </span>
                    </a>
                  </div>
                  <div>
                    <h4>
                      <a href="event-details.html">New year celebration</a>
                    </h4>
                    <span className="addr">London, UK</span>
                    <span className="pho">6622442200</span>
                  </div>
                  <div>
                    <div className="auth">
                      <img src="/user/2.jpeg" alt="" /> <b>Hosted by</b>
                      <br />
                      <h4>Chris moris</h4>
                      <a
                        target="_blank"
                        href="profile.html"
                        className="fclick"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="hom-eve-lhs-2 col-md-4">
                <ul>
                  <li>
                    <div className="eve-box-list">
                      <img src="/events/3.jpeg" alt="" />
                      <h4 title="Lunar New Year 2020">Lunar New Year 2020</h4>
                      <p>
                        Celebrate as the sights, sounds and aromas of A
                      </p>{" "}
                      <span>
                        Jan <b> 07</b>
                      </span>
                      <a href="event-details.html" className="fclick" />
                    </div>
                  </li>
                  <li>
                    <div className="eve-box-list">
                      <img src="/events/4.jpg" alt="" />
                      <h4 title="Car Fest 2020">Car Fest 2020</h4>
                      <p>
                        Celebrate as the sights, sounds and aromas of A
                      </p>{" "}
                      <span>
                        Jan <b> 10</b>
                      </span>
                      <a href="event-details.html" className="fclick" />
                    </div>
                  </li>
                  <li>
                    <div className="eve-box-list">
                      <img src="/events/5.jpg" alt="" />
                      <h4 title="Poway Winter Festival">
                        Poway Winter Festival
                      </h4>
                      <p>Celebrate as the sights, sounds and aromas of A</p>{" "}
                      <span>
                        Jan <b> 18</b>
                      </span>
                      <a href="event-details.html" className="fclick" />
                    </div>
                  </li>
                  <li>
                    <div className="eve-box-list">
                      <img src="/events/6.jpg" alt="" />
                      <h4 title="Toyota Cars 20% Offer">
                        Toyota Cars 20% Offer
                      </h4>
                      <p>Celebrate as the sights, sounds and aromas of A</p>{" "}
                      <span>
                        Mar <b> 18</b>
                      </span>
                      <a href="event-details.html" className="fclick" />
                    </div>
                  </li>
                  <li>
                    <div className="eve-box-list">
                      <img src="/events/7.jpg" alt="" />
                      <h4 title="Electrical Energy Saving Methods">
                        Electrical Energy Saving Methods
                      </h4>
                      <p>Celebrate as the sights, sounds and aromas of A</p>{" "}
                      <span>
                        Jan <b> 31</b>
                      </span>
                      <a href="event-details.html" className="fclick" />
                    </div>
                  </li>
                  <li>
                    <div className="eve-box-list">
                      <img src="/events/8.jpeg" alt="" />
                      <h4 title="Food eating challenge">
                        Food eating challenge
                      </h4>
                      <p>Celebrate as the sights, sounds and aromas of A</p>{" "}
                      <span>
                        Jan <b> 18</b>
                      </span>
                      <a href="event-details.html" className="fclick" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="how-wrks">
            <div className="home-tit">
              <h2>
                <span>How It Works</span>
              </h2>
              <p>
                Explore some of the best tips from around the world from our
                <br />
                partners and friends.lacinia viverra lectus.
              </p>
            </div>
            <div className="how-wrks-inn">
              <ul>
                <li>
                  <div>
                    {" "}
                    <span>1</span>
                    <img src="/icon/how1.png" alt="" />
                    <h4>Create an account</h4>
                    <p>
                      Fusce imperdiet ullamcorper metus eu fringilla. from
                      around the world from our partners and friends.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    {" "}
                    <span>2</span>
                    <img src="/icon/how2.png" alt="" />
                    <h4>Add your business</h4>
                    <p>
                      Fusce imperdiet ullamcorper metus eu fringilla. from
                      around the world from our partners and friends.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    {" "}
                    <span>3</span>
                    <img src="/icon/how3.png" alt="" />
                    <h4>Get more leads</h4>
                    <p>
                      Fusce imperdiet ullamcorper metus eu fringilla. from
                      around the world from our partners and friends.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    {" "}
                    <span>4</span>
                    <img src="/icon/how4.png" alt="" />
                    <h4>Archive goles</h4>
                    <p>
                      Fusce imperdiet ullamcorper metus eu fringilla. from
                      around the world from our partners and friends.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/*<div class="home-tit">
              <h2><span></span> </h2>
              <p></p>
          </div>
          <div class="inte">
              <ul>
                  <li>
                      <div class="hom-oth">
                          <div>
                              <img src="/listings/hot5.jpg" alt="">
                          </div>
                          <div>
                              <h4>Events</h4>
                              <span>Email configuration</span>
                          </div>
                          <a href="events" class="fclick"></a>
                      </div>
                  </li>
                  <li>
                      <div class="hom-oth">
                          <div>
                              <img src="/listings/re1.jpg" alt="">
                          </div>
                          <div>
                              <h4>Blog posts</h4>
                              <span>Email configuration</span>
                          </div>
                          <a href="blog-posts" class="fclick"></a>
                      </div>
                  </li>
                  <li>
                      <div class="hom-oth">
                          <div>
                              <img src="/listings/spa3.jpg" alt="">
                          </div>
                          <div>
                              <h4>How it works</h4>
                              <span>Email configuration</span>
                          </div>
                          <a href="how-to.html" class="fclick"></a>
                      </div>
                  </li>
                  <li>
                      <div class="hom-oth">
                          <div>
                              <img src="/listings/re5.jpg" alt="">
                          </div>
                          <div>
                              <h4>Pricing details</h4>
                              <span>Email configuration</span>
                          </div>
                          <a href="pricing-details.html" class="fclick"></a>
                      </div>
                  </li>
              </ul>
          </div>*/}
          {/*<div class="country">
              <div class="country-inn">
                  <h4>                            <span class="cont2"></span>
                  </h4>
                                          <iframe src="" allowfullscreen=""></iframe>
              </div>
          </div>*/}
          <div className="mob-app">
            <div className="lhs">
              <img src="/mobile.png" alt="" />
            </div>
            <div className="rhs">
              <h2>
                Looking for the Best Service Provider? <span>Get the App!</span>
              </h2>
              <ul>
                <li>HOM-APP-TITFind nearby listings</li>
                <li>Easy service enquiry</li>
                <li>Listing reviews and ratings</li>
                <li>Manage your listing, enquiry and reviews</li>
              </ul>{" "}
              <span>
                We'll send you a link, to you below provided email id &amp; open
                it on your smart phone to download the app
              </span>
              <form>
                <ul>
                  <li>
                    <input
                      type="email"
                      placeholder="Enter email id"
                      required=""
                    />
                  </li>
                  <li>
                    <input type="submit" defaultValue="Get App Link" />
                  </li>
                </ul>
              </form>
              <a href="#">
                <img src="/android.png" alt="" />
              </a>
              <a href="#">
                <img src="/apple.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* END */}
  {/* START */}
  <section>
    <div className="hom-ads">
      <div className="container">
        <div className="row">
          <div className="filt-com lhs-ads">
            <div className="ads-box">
              <a href="">
                {" "}
                <span>Ad</span>
                <img src="/ads/ads2.jpg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* END */}
  {/* START */}
  <div className="ani-quo">
    <div className="ani-q1">
      <h4>What you looking for?</h4>
      <p>We connect you to service experts.</p> <span>Get experts</span>
    </div>
    <div className="ani-q2">
      <img src="/quote.png" alt="" />
    </div>
  </div>
  {/* END */}
  {/* START */}
  <span className="btn-ser-need-ani">Help &amp; Support</span>
  <div className="ani-quo-form">
    {" "}
    <i className="material-icons ani-req-clo">close</i>
    <div className="tit">
      <h3>
        What service do you need? <span>BizBook will help you</span>
      </h3>
    </div>
    <div className="hom-col-req">
      <div
        id="home_slide_enq_success"
        className="log"
        style={{ display: "none" }}
      >
        <p>Your Enquiry Is Submitted Successfully!!!</p>
      </div>
      <div id="home_slide_enq_fail" className="log" style={{ display: "none" }}>
        <p>Something Went Wrong!!!</p>
      </div>
      <div id="home_slide_enq_same" className="log" style={{ display: "none" }}>
        <p>You cannot make enquiry on your own listing</p>
      </div>
      <form
        name="home_slide_enquiry_form"
        id="home_slide_enquiry_form"
        method="post"
        encType="multipart/form-data"
      >
        <input
          type="hidden"
          className="form-control"
          name="listing_id"
          defaultValue={0}
          placeholder=""
          required=""
        />
        <input
          type="hidden"
          className="form-control"
          name="listing_user_id"
          defaultValue={0}
          placeholder=""
          required=""
        />
        <input
          type="hidden"
          className="form-control"
          name="enquiry_sender_id"
          defaultValue=""
          placeholder=""
          required=""
        />
        <input
          type="hidden"
          className="form-control"
          name="enquiry_source"
          defaultValue="Website"
          placeholder=""
          required=""
        />
        <div className="form-group">
          <input
            type="text"
            name="enquiry_name"
            defaultValue=""
            required="required"
            className="form-control"
            placeholder="Enter name*"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Enter email*"
            required="required"
            defaultValue=""
            name="enquiry_email"
            pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$"
            title="Invalid email address"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            defaultValue=""
            name="enquiry_mobile"
            placeholder="Enter mobile number *"
            pattern="[7-9]{1}[0-9]{9}"
            title="Phone number starting with 7-9 and remaing 9 digit with 0-9"
            required=""
          />
        </div>
        <div className="form-group">
          <select
            name="enquiry_category"
            id="enquiry_category"
            className="form-control"
          >
            <option value="">Select Category</option>
            <option value={19}>Wedding halls</option>
            <option value={18}>Hotel &amp; Food</option>
            <option value={17}>Pet shop</option>
            <option value={16}>Digital Products</option>
            <option value={15}>Spa and Facial</option>
            <option value={10}>Real Estate</option>
            <option value={8}>Sports</option>
            <option value={7}>Education</option>
            <option value={6}>Electricals</option>
            <option value={5}>Automobiles</option>
            <option value={3}>Transportation</option>
            <option value={2}>Hospitals</option>
            <option value={1}>Hotels And Resorts</option>
          </select>
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            rows={3}
            name="enquiry_message"
            placeholder="Enter your query or message"
            defaultValue={""}
          />
        </div>
        <input type="hidden" id="source" />
        <button
          type="submit"
          id="home_slide_enquiry_submit"
          name="home_slide_enquiry_submit"
          className="btn btn-primary"
        >
          Submit Requirements
        </button>
      </form>
    </div>
  </div>
  {/* END */}
  {/* START */}
  <section>
    <div className="full-bot-book">
      <div className="container">
        <div className="row">
          <div className="bot-book">
            <div className="col-md-2 bb-img">
              <img src="/idea.png" alt="" />
            </div>
            <div className="col-md-7 bb-text">
              <h4>#1 Business Directory and Service Provider</h4>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour.
              </p>
            </div>
            <div className="col-md-3 bb-link">
              {" "}
              <a href="pricing-details.html">Add my business</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* END */}
  <section className=" wed-hom-footer">
    <div className="container">
      <div className="row foot-supp">
        <h2>
          <span>Free support:</span> +01 5426 24400 &nbsp;&nbsp;|&nbsp;&nbsp;{" "}
          <span>Email:</span> rn53themes@gmail.com
        </h2>
      </div>
      <div className="row wed-foot-link">
        <div className="col-md-4 foot-tc-mar-t-o">
          <h4>Top Category</h4>
          <ul>
            <li>
              <a href="all-listing.html">Digital Products</a>
            </li>
            <li>
              <a href="all-listing.html">Spa and Facial</a>
            </li>
            <li>
              <a href="all-listing.html">Real Estate</a>
            </li>
            <li>
              <a href="all-listing.html">Sports</a>
            </li>
            <li>
              <a href="all-listing.html">Education</a>
            </li>
            <li>
              <a href="all-listing.html">Electricals</a>
            </li>
            <li>
              <a href="all-listing.html">Automobiles</a>
            </li>
            <li>
              <a href="all-listing.html">Transportation</a>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <h4>Trending Category</h4>
          <ul>
            <li>
              <a href="all-listing.html">Hospitals</a>
            </li>
            <li>
              <a href="all-listing.html">Hotels And Resorts</a>
            </li>
            <li>
              <a href="all-listing.html">Automobiles</a>
            </li>
            <li>
              <a href="all-listing.html">Hotels And Resorts</a>
            </li>
            <li>
              <a href="all-listing.html">Real Estate</a>
            </li>
            <li>
              <a href="all-listing.html">Sports</a>
            </li>
            <li>
              <a href="all-listing.html">Education</a>
            </li>
            <li>
              <a href="all-listing.html">Electricals</a>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <h4>HELP &amp; SUPPORT</h4>
          <ul>
            <li>
              <a href="about.html">About us</a>
            </li>
            <li>
              <a href="faq.html">FAQ</a>
            </li>
            <li>
              <a href="feedback.html">Feedback</a>
            </li>
            <li>
              <a href="contact-us.html">Contact us</a>
            </li>
            {/*                    <li><a href="#">*/}
            {/*</a>*/}
            {/*                    </li>*/}
          </ul>
        </div>
      </div>
      {/* POPULAR TAGS */}
      <div className="row wed-foot-link-pop">
        <div className="col-md-12">
          <h4>Popular Tags</h4>
          <ul>
            <li>
              <a href="all-listing.html">Wedding halls in London</a>
            </li>
            <li>
              <a href="all-listing.html">Schools in Chennai</a>
            </li>
            <li>
              <a href="dashboard.html">Schools in NewYork</a>
            </li>
            <li>
              <a href="dashboard.html">Real estate in Illunois</a>
            </li>
            <li>
              <a href="dashboard.html">Real estate in Chennai1</a>
            </li>
            <li>
              <a href="dashboard.html">Enents in Tailand</a>
            </li>
            <li>
              <a href="dashboard.html">Flat for rent in Melborn</a>
            </li>
            <li>
              <a href="dashboard.html">Schools in NewYork</a>
            </li>
            <li>
              <a href="dashboard.html">Real estate in Illunois</a>
            </li>
            <li>
              <a href="dashboard.html">Real estate in Chennai1</a>
            </li>
            <li>
              <a href="dashboard.html">Enents in Tailand</a>
            </li>
            <li>
              <a href="dashboard.html">Flat for rent in Melborn</a>
            </li>
            <li>
              <a href="dashboard.html">Schools in NewYork</a>
            </li>
            <li>
              <a href="dashboard.html">Real estate in Illunois</a>
            </li>
            <li>
              <a href="dashboard.html">Real estate in Chennai1</a>
            </li>
            <li>
              <a href="dashboard.html">Enents in Tailand</a>
            </li>
            <li>
              <a href="dashboard.html">Flat for rent in Melborn</a>
            </li>
            <li>
              <a href="dashboard.html">Schools in NewYork</a>
            </li>
            <li>
              <a href="dashboard.html">Real estate in Illunois</a>
            </li>
            <li>
              <a href="dashboard.html">Real estate in Chennai1</a>
            </li>
          </ul>
        </div>
      </div>
      {/* POPULAR TAGS */}
      <div className="row wed-foot-link-1">
        <div className="col-md-4">
          <h4>Get In Touch</h4>
          <p>
            Address: 28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.
          </p>
          <p>
            Phone: <a href="tel:+01 5426 24400">+01 5426 24400</a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:rn53themes@gmail.com">rn53themes@gmail.com</a>
          </p>
        </div>
        <div className="col-md-4 fot-app">
          <h4>DOWNLOAD OUR FREE MOBILE APPS</h4>
          <ul>
            <li>
              <a href="">
                <img src="/gstore.png" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="/astore.png" alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4 fot-soc">
          <h4>SOCIAL MEDIA</h4>
          <ul>
            <li>
              <a target="_blank" href="">
                <img src="/social/1.png" alt="" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://twitter.com/Google?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              >
                <img src="/social/2.png" alt="" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.facebook.com/Rn53themes-1956793534579530/"
              >
                <img src="/social/3.png" alt="" />
              </a>
            </li>
            <li>
              <a target="_blank" href="">
                <img src="/social/4.png" alt="" />
              </a>
            </li>
            <li>
              <a target="_blank" href="">
                <img src="/social/5.png" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row foot-count">
        <ul>
          <li>
            <a target="_blank" href="http://www.domainname.au">
              Australia
            </a>
          </li>
          <li>
            <a target="_blank" href="http://www.domainname.uk">
              UK
            </a>
          </li>
          <li>
            <a target="_blank" href="http://www.domainname.usa">
              USA
            </a>
          </li>
          <li>
            <a target="_blank" href="http://www.domainname.in">
              India
            </a>
          </li>
          <li>
            <a target="_blank" href="http://www.domainname.ge">
              Germany
            </a>
          </li>
          <li>
            <a target="_blank" href="http://www.domainname.ch">
              China
            </a>
          </li>
          <li>
            <a target="_blank" href="http://www.domainname.fr">
              france
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
  {/* START */}
  <section>
    <div className="cr">
      <div className="container">
        <div className="row">
          <p>
            Copyright © 2017-2021{" "}
            <a href="https://rn53themes.net/" target="_blank">
              Rn53 Themes
            </a>
            . Proudly powered by{" "}
            <a href="https://rn53themes.net/" target="_blank">
              Rn53Themes.net
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
</>



    </>
  )
}

export default page
