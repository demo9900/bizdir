'use client';
import React, { useState, useEffect, useRef } from 'react'
import Header from '@/components/Header'
import { useRouter,usePathname } from 'next/navigation';
import Footer from '@/components/Footer';
import BottomMenu from '@/components/BottomMenu';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation'
import ListingCard from '@/components/ListingCard';
import { Preview } from '@mui/icons-material';

const page = () => {
  const router = useRouter()
  const pathname = usePathname();
  const [listings, setListings] = useState([]);
  const searchParams = useSearchParams();
  const area = searchParams.get('area');
  const category = searchParams.get('category');
  const subcategory = searchParams.get('subcat');
  const city = searchParams.get('city')
  const [categories,setCategories] = useState([]);
  const [subcat,setSubCat] = useState([]);
  const [checkedsubcat,setCheckedSubCat] = useState([]);
  const divRef1 = useRef(null);
  const divRef2 = useRef(null);
  const [cities, setCities] = useState();
  const [select, setSelect] = useState({
    num: null,
    isVisible: false,
  });
  const [searchCity, setSearchCity] = useState({
    keyword: "",
    value: '',
  });
  const [searchCat, setSearchCat] = useState({
    keyword: "",
    value: '',
  });
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !divRef1.current.contains(event.target) &&
        !divRef2.current.contains(event.target)

      ) {
        setSelect((prevState) => ({
          ...prevState,
          isVisible: false,
        }));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {console.log("runs", city)
    const fetchListings = async (category, city, area,subcategory) => {
      try {
        const response = await fetch(`${process.env.BACKEND_URL}/api/listing/search?${category? `category=${category}`:``}${city ? `&city=${city}` : ``}${area ? `&area=${area}` : ``}${subcategory?`&subcategory=${subcategory}`:``}`);
        if (!response.ok) {
          setListings([]);
          throw new Error('Failed to fetch listings');
        }
        const data = await response.json();
        setListings(data); // assuming data is an array of listings
      } catch (error) {
        console.error('Error fetching listings:', error);
      }
    };
    const fetchCity = async () => {
      try {
        const res = await fetch(`https://bizdir-backend.vercel.app/api/city/`);
        if (!res.ok) {
          throw new Error('Failed to fetch city data');
        }
        const data = await res.json();
        const mappedCities = await data.map(city => (city.name));
        setCities(mappedCities)

      } catch (error) {
        console.error('Error fetching pincode data:', error);
      }
    };
    const getCategories = async () => {
      try {
        const res = await fetch(`https://bizdir-backend.vercel.app/api/listing/category/all`);
        if (!res.ok) {
          throw new Error('Failed to fetch city data');
        }
        const data = await res.json();
        const mappedcategory = await data.map(category => ({cat:category.category_name,subcat:category.subcategory}));
        setCategories(mappedcategory)

      } catch (error) {
        console.error('Error fetching pincode data:', error);
      }
    };
    fetchListings(category, city, area,subcategory);
    fetchCity();
    getCategories();
    if(category ){
      setSearchCat((prevState) => ({
        ...prevState,
        value: category,
      }));
    }if(city){
      setSearchCity((prevState) => ({
        ...prevState,
        value: city,
      }));
    }
  }, [city,category,area,subcategory]);


  const filterSubCategory = (category) =>{
    const filtercat = categories.filter((option) =>
    option?.cat?.toLowerCase().includes(category.toLowerCase())).map(option =>option.subcat).flat();
    setSubCat(filtercat);
  }
  useEffect(() => {
    if (category && categories.length > 0) {
      filterSubCategory(category);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories, category]);
  
  const handleClick = (num) => {
    setSelect((prevState) => ({
      num: num,
      isVisible: !prevState.isVisible,
    }));
  };
  const stopPropagation = (e) => {
    e.stopPropagation();
  };
  const handleInputChange = (e, number) => {
    const { value, checked, type } = e.target;
    if (number === 1) {
      setSearchCity((prevState) => ({
        ...prevState,
        keyword: e.target.value,
      }));
      setSelect((prevState) => ({
        ...prevState,
        isVisible: true,
      }));
    } else if (number === 2) {
      setSearchCat((prevState) => ({
        ...prevState,
        keyword: e.target.value,
      }));
      setSelect((prevState) => ({
        ...prevState,
        isVisible: true,
      }));
    } else if (type === "checkbox") {
     setCheckedSubCat(prevState =>{
      let updatedSubCat;
      if(checked){
        updatedSubCat= [...prevState,value]
      } else {
        updatedSubCat= prevState.filter(subcategory => subcategory !==value)
      }
      return updatedSubCat;
    })
     
    }
  };
  useEffect(() => {
    router.push(`/all-listing?${city?`city=${city}`:``}${category?`&category=${category}`:``}${checkedsubcat?`&subcat=${checkedsubcat.join(',')}`:``}`);
  }, [checkedsubcat, city, category, router]);
  
  const handleOptionClick = (option, number) => {
    console.log("selected city is", searchCity)
    if (number === 1) {
      setSearchCity((prevState) => ({
        ...prevState,
        value: option,
      }));
      router.push(`/all-listing?city=${option}${category?`&category=${category}`:``}`);
      
    } else if (number === 2) {
      setSearchCat((prevState) => ({
        ...prevState,
        value: option.cat,
      }));
      setSubCat(option.subcat)
      router.push(`/all-listing?category=${option.cat}${city ?`&city=${city}`:``}`);
    }
    setSelect((prevState) => ({
      ...prevState,
      isVisible: false,
    }));
  };
  const filteredcity = cities?.filter((option) =>
    option.toLowerCase().includes(searchCity.keyword.toLowerCase())
  );
  const filteredcategory = categories.filter((option) =>
    option.cat.toLowerCase().includes(searchCat.keyword.toLowerCase())
  );


  return (
    <div>
      <section>
        <div className="str">
          <div>
            <Header transparent={false} />
          </div>
        </div>
      </section>
      <>
        <section>
          <div className="all-listing all-listing-pg">
            {/*FILTER ON MOBILE VIEW*/}
            <div className="fil-mob fil-mob-act">
              <h4>
                Listing filters <i className="material-icons">filter_list</i>
              </h4>
            </div>
            <div className="all-list-bre">
              <div className="container sec-all-list-bre">
                <div className="row">
                  <h1>Real Estate</h1>
                  <ul>
                    <li>
                      <Link href="/index">Home</Link>
                    </li>
                    <li>
                      <Link href="/all-category">All category</Link>
                    </li>
                    <li>
                      {" "}
                      <Link href="/all-listing">Real Estate</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-3 fil-mob-view">
                  <div className="all-filt">
                    {" "}
                    <span className="fil-mob-clo">
                      <i className="material-icons">close</i>
                    </span>
                    {/*START*/}
                    <div className="filt-alist-near">
                      <div className="tit">
                        <h4>Top Service Providers</h4>
                      </div>
                      <div className="near-ser-list top-ser-secti-prov">
                        <ul>
                          <li>
                            <div className="near-bx">
                              <div className="ne-1">
                                <img src="/services/1.jpg" alt='service' />
                              </div>
                              <div className="ne-2">
                                <h5>Core real estates</h5>
                                <p>
                                  City: No:2, 4th Avenue, Newyork, USA, Near to
                                  Airport
                                </p>
                              </div>
                              <div className="ne-3">
                                {" "}
                                <span>5.0</span>
                              </div>
                              <Link href="/listing-details" />
                            </div>
                          </li>
                          <li>
                            <div className="near-bx">
                              <div className="ne-1">
                                <img src="/services/12.jpeg" alt='service' />
                              </div>
                              <div className="ne-2">
                                <h5>Rolexo Villas in California</h5>
                                <p>
                                  City: 28800 Orchard Lake Road, Suite 180 Farmington
                                  Hills, U.S.A.
                                </p>
                              </div>
                              <div className="ne-3">
                                {" "}
                                <span>4.0</span>
                              </div>
                              <Link href="/listing-details" />
                            </div>
                          </li>
                          <li>
                            <div className="near-bx">
                              <div className="ne-1">
                                <img src="/services/13.jpg" alt='service' />
                              </div>
                              <div className="ne-2">
                                <h5>Orange pet shop</h5>
                                <p>
                                  City: No:2, 4th Avenue, Newyork, USA, Near to
                                  Airport
                                </p>
                              </div>
                              <div className="ne-3">
                                {" "}
                                <span>5.0</span>
                              </div>
                              <Link href="/listing-details" />
                            </div>
                          </li>
                          <li>
                            <div className="near-bx">
                              <div className="ne-1">
                                <img src="/services/14.jpg" alt='service' />
                              </div>
                              <div className="ne-2">
                                <h5>Best villas near you</h5>
                                <p>
                                  City: No:2, 4th Avenue, Newyork, USA, Near to
                                  Airport
                                </p>
                              </div>
                              <div className="ne-3">
                                {" "}
                                <span>5.0</span>
                              </div>
                              <Link href="/listing-details" />
                            </div>
                          </li>
                          <li>
                            <div className="near-bx">
                              <div className="ne-1">
                                <img src="/services/20.jpeg" alt='service' />
                              </div>
                              <div className="ne-2">
                                <h5>Ac services near you</h5>
                                <p>City: testapro 456</p>
                              </div>
                              <div className="ne-3">
                                {" "}
                                <span>4.0</span>
                              </div>
                              <Link href="/listing-details" />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/*END*/}
                    {/*START*/}
                    <div className="filt-com lhs-cate">
                      <h4>Cities</h4>
                      <div
                        className={`chosen-container chosen-container-single ${select.num === 1 && select.isVisible
                            ? "chosen-with-drop"
                            : ""
                          }`}
                        ref={divRef1}
                        id="city_check_chosen"
                        style={{ width: 200 }}
                      >
                        <a
                          className="chosen-single"
                          onClick={() => handleClick(1)}
                        >
                          <span>
                            {searchCity.value
                              ? searchCity.value
                              : "Select City"}
                          </span>
                          <div>
                            <b />
                          </div>
                        </a>
                        <div
                          className="chosen-drop"
                          onClick={stopPropagation}
                        >
                          <div className="chosen-search">
                            <input
                              className="chosen-search-input"
                              type="text"
                              value={searchCity.keyword}
                              onChange={(e) =>
                                handleInputChange(e, 1)
                              }
                              autoComplete="off"
                              onClick={stopPropagation}
                            />
                          </div>
                          <ul className="chosen-results">
                            {filteredcity?.length > 0 ? (<>
                              {filteredcity?.map((option, index) => (
                                <li
                                  key={index}
                                  onClick={() =>
                                    handleOptionClick(option, 1)
                                  }
                                  className={`active-result result-selected ${option ===
                                    searchCity.value &&
                                    "highlighted"
                                    }`}
                                  data-option-array-index={0}
                                >
                                  {option}
                                </li>
                              ))}
                            </>) : (
                              <li className="no-results">
                                city not found.
                              </li>
                            )}

                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="filt-com lhs-cate">
                      <h4>Categories</h4>
                      <div
                        className={`chosen-container chosen-container-single ${select.num === 2 && select.isVisible
                            ? "chosen-with-drop"
                            : ""
                          }`}
                        ref={divRef2}
                        id="expert_select_search_chosen"
                        style={{ width: 430 }}
                      >
                        <a
                          className="chosen-single"
                          onClick={() => handleClick(2)}
                        >
                          <span>
                            {searchCat.value
                              ? searchCat.value
                              : "What are you looking for?"}
                          </span>
                          <div>
                            <b />
                          </div>
                        </a>
                        <div
                          className="chosen-drop"
                          onClick={stopPropagation}
                        >
                          <div className="chosen-search">
                            <input
                              className="chosen-search-input"
                              type="text"
                              value={searchCat.keyword}
                              onChange={(e) =>
                                handleInputChange(e, 2)
                              }
                              autoComplete="off"
                              onClick={stopPropagation}
                            />
                          </div>
                          <ul className="chosen-results">
                            {filteredcategory?.map((option,index) => (
                              <li
                                key={index}
                                onClick={() =>
                                  handleOptionClick(option, 2)
                                }
                                className={`active-result result-selected ${option.cat ===
                                  searchCat.value &&
                                  "highlighted"
                                  }`}
                                data-option-array-index={0}
                              >
                                {option.cat}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/*END*/}
                    {/*START*/}
                    <div className="sub_cat_section filt-com lhs-sub">
                      <h4>Sub category</h4>
                      <ul>
                        {subcat.map((option,index) =>(
                          <li key={index}>
                          <div className="chbox">
                            <input
                              type="checkbox"
                              className="sub_cat_check"
                              onChange={handleInputChange}
                              name="sub_cat_check"
                              value={option}
                              id={index}
                            />
                            <label htmlFor={index}>{option}</label>
                          </div>
                        </li>
                        ) )}
                        
                      </ul>
                    </div>
                    {/*END*/}
                    {/*START*/}
                    <div className="filt-com lhs-featu">
                      <h4>Features</h4>
                      <ul>
                        <li>
                          <div className="chbox">
                            <input
                              type="checkbox"
                              defaultValue="trusted"
                              className="feature_check"
                              id="trusted"
                            />
                            <label htmlFor="trusted">Trusted services provider</label>
                          </div>
                        </li>
                        <li>
                          <div className="chbox">
                            <input
                              type="checkbox"
                              defaultValue="premium"
                              className="feature_check"
                              id="premium"
                            />
                            <label htmlFor="premium">Premium services</label>
                          </div>
                        </li>
                        <li>
                          <div className="chbox">
                            <input
                              type="checkbox"
                              defaultValue="verified"
                              className="feature_check"
                              id="verified"
                            />
                            <label htmlFor="verified">Verified services</label>
                          </div>
                        </li>
                        <li>
                          <div className="chbox">
                            <input
                              type="checkbox"
                              defaultValue="trending"
                              className="feature_check"
                              id="trending"
                            />
                            <label htmlFor="trending">Trending services</label>
                          </div>
                        </li>
                        <li>
                          <div className="chbox">
                            <input
                              type="checkbox"
                              defaultValue="offers"
                              className="feature_check"
                              id="offers"
                            />
                            <label htmlFor="offers">Offers and discounts</label>
                          </div>
                        </li>
                        <li>
                          <div className="chbox">
                            <input
                              type="checkbox"
                              defaultValue="latest"
                              className="feature_check"
                              id="latest"
                            />
                            <label htmlFor="latest">Latest updated</label>
                          </div>
                        </li>
                        <li>
                          <div className="chbox">
                            <input
                              type="checkbox"
                              defaultValue="likes"
                              className="feature_check"
                              id="likes"
                            />
                            <label htmlFor="likes">Most likes</label>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/*END*/}
                    {/*START*/}
                    <div className="filt-com lhs-rati">
                      <h4>Ratings</h4>
                      <ul>
                        <li>
                          <div className="rbbox">
                            <input
                              type="radio"
                              defaultValue={5}
                              name="rating_check"
                              className="rating_check"
                              id="rb1"
                            />
                            <label htmlFor="rb1">
                              {" "}
                              <i className="material-icons">star</i>
                              <i className="material-icons">star</i>
                              <i className="material-icons">star</i>
                              <i className="material-icons">star</i>
                              <i className="material-icons">star</i>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="rbbox">
                            <input
                              type="radio"
                              defaultValue={4}
                              name="rating_check"
                              className="rating_check"
                              id="rb2"
                            />
                            <label htmlFor="rb2">
                              {" "}
                              <i className="material-icons">star</i>
                              <i className="material-icons">star</i>
                              <i className="material-icons">star</i>
                              <i className="material-icons">star</i>
                              <i className="material-icons">star_border</i>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="rbbox">
                            <input
                              type="radio"
                              defaultValue={3}
                              name="rating_check"
                              className="rating_check"
                              id="rb3"
                            />
                            <label htmlFor="rb3">
                              {" "}
                              <i className="material-icons">star</i>
                              <i className="material-icons">star</i>
                              <i className="material-icons">star</i>
                              <i className="material-icons">star_border</i>
                              <i className="material-icons">star_border</i>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="rbbox">
                            <input
                              type="radio"
                              defaultValue={2}
                              name="rating_check"
                              className="rating_check"
                              id="rb4"
                            />
                            <label htmlFor="rb4">
                              {" "}
                              <i className="material-icons">star</i>
                              <i className="material-icons">star</i>
                              <i className="material-icons">star_border</i>
                              <i className="material-icons">star_border</i>
                              <i className="material-icons">star_border</i>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="rbbox">
                            <input
                              type="radio"
                              defaultValue={1}
                              name="rating_check"
                              className="rating_check"
                              id="rb5"
                            />
                            <label htmlFor="rb5">
                              {" "}
                              <i className="material-icons">star</i>
                              <i className="material-icons">star_border</i>
                              <i className="material-icons">star_border</i>
                              <i className="material-icons">star_border</i>
                              <i className="material-icons">star_border</i>
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/*END*/}
                    {/*START*/}
                    <div className="filt-com lhs-ads">
                      <ul>
                        <li>
                          <div className="ads-box">
                            <Link href="/">
                              {" "}
                              <span>Ad</span>
                              <img src="/ads/ads1.jpg" alt="" />
                            </Link>
                          </div>
                        </li>
                        {/*                                    <li>*/}
                        {/*                                        <div className="ads-box">*/}
                        {/*                                            */}
                        {/*                                            <Link href="/*/}
                        {/*">*/}
                        {/*                                                <span>Ad</span>*/}
                        {/**/}
                        {/*                                                <img*/}
                        {/*                                                    src="/ads/*/}
                        {/*" alt="">*/}
                        {/*                                            </Link>*/}
                        {/*                                        </div>*/}
                        {/*                                    </li>*/}
                      </ul>
                    </div>
                    {/*END*/}
                    <div className="all-list-filt-form">
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
                        <div
                          id="home_slide_enq_fail"
                          className="log"
                          style={{ display: "none" }}
                        >
                          <p>Something Went Wrong!!!</p>
                        </div>
                        <div
                          id="home_slide_enq_same"
                          className="log"
                          style={{ display: "none" }}
                        >
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
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="f2">
                    <div className="vfilter">
                      {" "}
                      <i className="material-icons ic1 " title="Grid view">
                        apps
                      </i>
                      <i className="material-icons ic2 act" title="List view">
                        format_list_bulleted
                      </i>
                      <i className="material-icons ic3" title="Map view">
                        location_on
                      </i>
                    </div>
                  </div>
                  {/* LISTING INN FILTER */}
                  <div className="list-filt-v2">
                    <ul>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            name="lfv2-all"
                            className="lfv2-all"
                            defaultValue={1}
                            id="lfv2-all"
                            defaultChecked="checked"
                          />
                          <label htmlFor="lfv2-all">All</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            name="lfv2-pop"
                            className="lfv2-pop"
                            id="lfv2-pop"
                          />
                          <label htmlFor="lfv2-pop">Popular</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            name="lfv2-op"
                            className="lfv2-op"
                            id="lfv2-op"
                          />
                          <label htmlFor="lfv2-op">Open</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            name="lfv2-tru"
                            className="lfv2-tru"
                            id="lfv2-tru"
                          />
                          <label htmlFor="lfv2-tru">Verified</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            name="lfv2-near"
                            className="lfv2-near"
                            id="lfv2-near"
                          />
                          <label htmlFor="lfv2-near">Nearby</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            name="lfv2-off"
                            className="lfv2-off"
                            id="lfv2-off"
                          />
                          <label htmlFor="lfv2-off">Offers</label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* END LISTING INN FILTER */}
                  {/*ADS*/}
                  <div className="ban-ati-com ads-all-list">
                    <Link href="/https://themeforest.net/item/bizbook-directory-listings-template/25391222">
                      <span>Ad</span>
                      <img src="/ads/1.png" alt="" />
                    </Link>
                  </div>
                  {/*ADS*/}
                  {/* Loader Image */}
                  <div id="loadingmessage" style={{ display: "none" }}>
                    <div id="loadingmessage1">&nbsp;</div>
                  </div>
                  {/* Loader Image */}
                  <div className="all-list-sh all-listing-total">
                    {listings.length > 0 ? (
                      <ul>
                        {listings.map((item, index) =>
                          (<ListingCard key={index} item={item} />)
                        )}
                      </ul>
                    ) : (<span style={{ fontSize: 21, color: '#bfbfbf', letterSpacing: 1, paddingLeft: 30, textShadow: '0px 0px 2px #fff', textTransform: 'uppercase', textAlign: 'center!important', marginTop: '5%' }}>!!! Oops No Listing Faund with the Selected Category</span>
                    )}

                    {/*ADS*/}
                    <div className="ban-ati-com ads-all-list">
                      <Link href="/https://themeforest.net/item/bizbook-directory-listings-template/25391222">
                        <span>Ad</span>
                        <img src="/ads/3.png" alt="" />
                      </Link>
                    </div>
                    {/*ADS*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
                    <Link href="/pricing-details">Add my business</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
      <Footer />
      <BottomMenu />
    </div>
  )
}

export default page
