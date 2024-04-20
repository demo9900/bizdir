import React, { useState, useRef, useEffect } from "react";

const Listing_Filter = () => {
  const divRef1 = useRef(null);
  const divRef2 = useRef(null);
  const divRef3 = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !divRef1.current.contains(event.target) &&
        !divRef2.current.contains(event.target) &&
        !divRef3.current.contains(event.target)
      ) {
        setSelect((prevState) => ({
          ...prevState,
          isVisible: false
        }));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const options = [
    'All Services',
    'Service Experts',
    'Jobs',
    'Explore Travel',
    'News & Magazines',
    'Events',
    'Products',
    'Coupon & deals',
    'Blogs'
  ];
  const [select, setSelect] = useState({
    num: null,
    isVisible: false
  });
  const [searchTerm, setSearchTerm] = useState({
    keyword:'',
    value:null
  });

  const handleClick = (num) => {
    setSelect((prevState) => ({
      num: num,
      isVisible: !prevState.isVisible
    }));
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const handleInputChange = (e) => {
    setSearchTerm(prevState =>({
        ...prevState,
        keyword:e.target.value
    }));

    setSelect((prevState) => ({
        ...prevState,
        isVisible: true
      }));
  };

  const handleOptionClick = (option) => {
    setSearchTerm(prevState =>({
        ...prevState,
        value:option
    }));
    setSelect((prevState) => ({
        ...prevState,
        isVisible: false
      }));
  };
  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchTerm.keyword.toLowerCase())
);


  return (
    <div className="ban-search ban-sear-all">
      <form name="filter_form" id="filter_form" className="filter_form">
        <ul>
        <li className="sr-cit">
            <div
              className={`chosen-container chosen-container-single ${
                select.num === 2 && select.isVisible
                  ? "chosen-with-drop"
                  : ""
              }`}
              ref={divRef2}
              title
              id="city_check_chosen"
              style={{ width: 200 }}
            >
              <a className="chosen-single" onClick={() => handleClick(2)}>
                <span>Select City</span>
                <div>
                  <b />
                </div>
              </a>
              <div className="chosen-drop" onClick={stopPropagation}>
                <div className="chosen-search">
                  <input
                    className="chosen-search-input"
                    type="text"
                    autoComplete="off"
                    onClick={stopPropagation}
                  />
                </div>
                <ul className="chosen-results">
                  <li
                    className="active-result result-selected highlighted"
                    data-option-array-index={0}
                  >
                    Select City
                  </li>
                  <li className="active-result" data-option-array-index={1}>
                    New York
                  </li>
                  <li className="active-result" data-option-array-index={2}>
                    Illunois city
                  </li>
                  <li className="active-result" data-option-array-index={3}>
                    Seattle
                  </li>
                  <li className="active-result" data-option-array-index={4}>
                    Atlanta
                  </li>
                  <li className="active-result" data-option-array-index={5}>
                    Chennai
                  </li>
                  <li className="active-result" data-option-array-index={6}>
                    Chennai 2
                  </li>
                </ul>
              </div>
            </div>
        </li>
          <li className="sr-cate">
            <div
              className={`chosen-container chosen-container-single ${
                select.num === 1 && select.isVisible ? "chosen-with-drop" : ""
              }`}
              title
              ref={divRef1}
              id="explor_select_chosen"
              style={{ width: 200 }}
            >
              <a className="chosen-single" onClick={() => handleClick(1)}>
                <span>{searchTerm.value ? searchTerm.value:'Select Services'}</span>
                <div>
                  <b />
                </div>
              </a>
              <div className="chosen-drop" onClick={stopPropagation}>
                <div className="chosen-search">
                  <input
                    className="chosen-search-input"
                    type="text"
                    value={searchTerm.keyword}
                    onChange={handleInputChange}
                    autoComplete="off"
                    onClick={stopPropagation}
                  />
                </div>
                <ul className="chosen-results">
                    {filteredOptions.map(option =>(
                        <li
                        key={option}
                        onClick={() => handleOptionClick(option)}
                        className={`active-result result-selected ${option=== searchTerm.value && 'highlighted'}` }
                        data-option-array-index={0}
                      >
                        {option}
                      </li>
                    ))}
                  
                </ul>
              </div>
            </div>
          </li>
          <li className="sr-nor">
            <div
              className={`chosen-container chosen-container-single ${
                select.num === 3 && select.isVisible
                  ? "chosen-with-drop"
                  : ""
              }`}
              ref={divRef3}
              title
              id="expert_select_search_chosen"
              style={{ width: 430 }}
            >
              <a className="chosen-single" onClick={() => handleClick(3)}>
                <span>What are you looking for?</span>
                <div>
                  <b />
                </div>
              </a>
              <div className="chosen-drop" onClick={stopPropagation}>
                <div className="chosen-search">
                  <input
                    className="chosen-search-input"
                    type="text"
                    autoComplete="off"
                    onClick={stopPropagation}
                  />
                </div>
                <ul className="chosen-results">
                  <li
                    className="active-result result-selected highlighted"
                    data-option-array-index={0}
                  >
                    What are you looking for?
                  </li>
                  <li className="active-result" data-option-array-index={1}>
                    Automobiles
                  </li>
                  <li className="active-result" data-option-array-index={2}>
                    Technology
                  </li>
                  <li className="active-result" data-option-array-index={3}>
                    Electricals
                  </li>
                  <li className="active-result" data-option-array-index={4}>
                    Education
                  </li>
                  <li className="active-result" data-option-array-index={5}>
                    Sports
                  </li>
                  <li className="active-result" data-option-array-index={6}>
                    Real Estate
                  </li>
                  <li className="active-result" data-option-array-index={7}>
                    Wedding halls
                  </li>
                  <li className="active-result" data-option-array-index={8}>
                    Hospitals
                  </li>
                  <li className="active-result" data-option-array-index={9}>
                    Pet shop
                  </li>
                  <li className="active-result" data-option-array-index={10}>
                    Restaurants
                  </li>
                  <li className="active-result" data-option-array-index={11}>
                    Spa and Facial
                  </li>
                  <li className="active-result" data-option-array-index={12}>
                    Transportation
                  </li>
                </ul>
              </div>
            </div>
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
  );
};

export default Listing_Filter;
