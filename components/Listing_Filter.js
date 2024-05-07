import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
const Listing_Filter = () => {
    const divRef1 = useRef(null);
    const divRef2 = useRef(null);
    const divRef3 = useRef(null);
    const divRef4 = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                !divRef1.current.contains(event.target) &&
                !divRef2.current.contains(event.target) &&
                !divRef3.current.contains(event.target) && 
                !divRef4.current.contains(event.target)

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
    const [state,setState] = useState();
    const [city,setCity] = useState();
    const [area,setArea] = useState();

    const fetchCity = async () => {
        try {
          const res1 = await fetch('https://bizdir-backend.vercel.app/api/state/');
          const res2 = await fetch('https://bizdir-backend.vercel.app/api/city/');
          const res3 = await fetch('https://bizdir-backend.vercel.app/api/area/');
          if (!res1.ok && !res2.ok && !res3.ok ) {
            throw new Error('Failed to fetch pincode data');
          }
          const data1 = await res1.json();
          const data2 = await res2.json();
          const data3 = await res3.json();
          const stateName = await data1.map(state => state.name);
          const cityNames = await data2.map(city => city.name);
          const areaName = await data3.map(area => area.name);
          setState(stateName)
          setCity(cityNames);
          setArea(areaName)

        } catch (error) {
          console.error('Error fetching pincode data:', error);
        }
      };
    useEffect(() => {
        
        fetchCity();
      }, []);
      console.log(city)
      console.log(typeof city)
    const category = [
        "All Services",
        "Service Experts",
        "Jobs",
        "Explore Travel",
        "News & Magazines",
        "Events",
        "Products",
        "Coupon & deals",
        "Blogs",
    ];
    const services = [
        "What are you looking for?",
        "Automobiles",
        "Technology",
        "Electricals",
        "Education",
        "Sports",
        "Real Estate",
        "Wedding halls",
        "Hospitals",
        "Pet shop",
        "Restaurants",
        "Spa and Facial",
        "Transportation",
    ];
    
    const [select, setSelect] = useState({
        num: null,
        isVisible: false,
    });
    const [searchState, setSearchState] = useState({
        keyword: "",
        value: null,
    });
    const [searchCity, setSearchCity] = useState({
        keyword: "",
        value: null,
    });
    const [seachArea, setSearchArea] = useState({
        keyword: "",
        value: null,
    });
   
    const [searchService, setSearchService] = useState({
        keyword: "",
        value: null,
    });
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
        if (number === 1) {
            setSearchCity((prevState) => ({
                ...prevState,
                keyword: e.target.value,
            }));
        } else if (number === 2) {
            setSearchArea((prevState) => ({
                ...prevState,
                keyword: e.target.value,
            }));
        } else if (number === 3) {
            setSearchService((prevState) => ({
                ...prevState,
                keyword: e.target.value,
            }));
        }
        setSelect((prevState) => ({
            ...prevState,
            isVisible: true,
        }));
        console.log(select.num);
    };

    const handleOptionClick = (option, number) => {
        if (number === 1) {
            setSearchCity((prevState) => ({
                ...prevState,
                value: option,
            }));
        } else if (number === 2) {
            setSearchArea((prevState) => ({
                ...prevState,
                value: option,
            }));
        } else if (number === 3) {
            setSearchService((prevState) => ({
                ...prevState,
                value: option,
            }));
        }

        setSelect((prevState) => ({
            ...prevState,
            isVisible: false,
        }));
    };

  
    const filteredstate = state?.filter((option) =>
        option.toLowerCase().includes(searchState.keyword.toLowerCase())
    );
    const filteredcity = city?.filter((option) =>
        option.toLowerCase().includes(searchCity.keyword.toLowerCase())
    );
    const filteredarea = area?.filter((option) =>
        option.toLowerCase().includes(seachArea.keyword.toLowerCase())
    );
    const filteredServices = services.filter((option) =>
        option.toLowerCase().includes(searchService.keyword.toLowerCase())
    );
    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault();
        // Redirect user to the desired route
        router.push(`/all-listing?category=${encodeURIComponent(searchService.value)}&city=${encodeURIComponent(searchCity.value)}`);
      };
    return (
        <div className="ban-search ban-sear-all">
            <form onSubmit={handleSubmit} name="filter_form" id="filter_form" className="filter_form">
                <ul>
                    <li className="sr-state">
                        <div
                            className={`chosen-container chosen-container-single ${
                                select.num === 1 && select.isVisible
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
                                    {searchState.value
                                        ? searchState.value
                                        : "Select State"}
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
                                        value={searchState.keyword}
                                        onChange={(e) =>
                                            handleInputChange(e, 1)
                                        }
                                        autoComplete="off"
                                        onClick={stopPropagation}
                                    />
                                </div>
                                <ul className="chosen-results">
                                    {filteredstate?.map((option) => (
                                        <li
                                            key={option}
                                            onClick={() =>
                                                handleOptionClick(option, 1)
                                            }
                                            className={`active-result result-selected ${
                                                option ===
                                                    searchState.value &&
                                                "highlighted"
                                            }`}
                                            data-option-array-index={0}
                                        >
                                            {option}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="sr-cit">
                        <div
                            className={`chosen-container chosen-container-single ${
                                select.num === 2 && select.isVisible
                                    ? "chosen-with-drop"
                                    : ""
                            }`}
                            ref={divRef2}
                            id="city_check_chosen"
                            style={{ width: 200 }}
                        >
                            <a
                                className="chosen-single"
                                onClick={() => handleClick(2)}
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
                                            handleInputChange(e, 2)
                                        }
                                        autoComplete="off"
                                        onClick={stopPropagation}
                                    />
                                </div>
                                <ul className="chosen-results">
                                    {filteredcity?.map((option) => (
                                        <li
                                            key={option}
                                            onClick={() =>
                                                handleOptionClick(option, 2)
                                            }
                                            className={`active-result result-selected ${
                                                option ===
                                                    searchCity.value &&
                                                "highlighted"
                                            }`}
                                            data-option-array-index={0}
                                        >
                                            {option}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="sr-area">
                        <div
                            className={`chosen-container chosen-container-single ${
                                select.num === 3 && select.isVisible
                                    ? "chosen-with-drop"
                                    : ""
                            }`}
                            ref={divRef3}
                            id="explor_select_chosen"
                            style={{ width: 200 }}
                        >
                            <a
                                className="chosen-single"
                                onClick={() => handleClick(3)}
                            >
                                <span>
                                    {seachArea.value
                                        ? seachArea.value
                                        : "Select Services"}
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
                                        value={seachArea.keyword}
                                        onChange={(e) =>
                                            handleInputChange(e, 3)
                                        }
                                        autoComplete="off"
                                        onClick={stopPropagation}
                                    />
                                </div>
                                <ul className="chosen-results">
                                    {filteredarea?.map((option) => (
                                        <li
                                            key={option}
                                            onClick={() =>
                                                handleOptionClick(option, 3)
                                            }
                                            className={`active-result result-selected ${
                                                option === seachArea.value &&
                                                "highlighted"
                                            }`}
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
                                select.num === 4 && select.isVisible
                                    ? "chosen-with-drop"
                                    : ""
                            }`}
                            ref={divRef4}
                            id="expert_select_search_chosen"
                            style={{ width: 430 }}
                        >
                            <a
                                className="chosen-single"
                                onClick={() => handleClick(4)}
                            >
                                <span>
                                    {searchService.value
                                        ? searchService.value
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
                                        value={searchService.keyword}
                                        onChange={(e) =>
                                            handleInputChange(e, 4)
                                        }
                                        autoComplete="off"
                                        onClick={stopPropagation}
                                    />
                                </div>
                                <ul className="chosen-results">
                                    {filteredServices.map((option) => (
                                        <li
                                            key={option}
                                            onClick={() =>
                                                handleOptionClick(option, 4)
                                            }
                                            className={`active-result result-selected ${
                                                option ===
                                                    searchService.value &&
                                                "highlighted"
                                            }`}
                                            data-option-array-index={0}
                                        >
                                            {option}
                                        </li>
                                    ))}
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
