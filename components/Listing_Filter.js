import React, { useState, useRef, useEffect } from "react";
import { client } from "@/lib/apollo";
import { gql } from "@apollo/client";
import { GetAllstates,GetCityByState,GetAreaByCity,GetStateByCity } from "@/lib/query";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/navigation";
const Listing_Filter =  ({location}) => {
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

    const [select, setSelect] = useState({
        num: null,
        isVisible: false,
    });
    const [searchState, setSearchState] = useState({
        _id:'',
        type:'',
        keyword: "",
        value: '',
    });
    const [searchCity, setSearchCity] = useState({
        _id:'',
        keyword: "",
        value: '',
    });

    const [seachArea, setSearchArea] = useState({
        _id:'',
        keyword: "",
        value: '',
    });
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await client.query({query:GetAllstates})
                const {getAllStates} =await res.data;
                if(getAllStates.code !== 200){
                    throw new Error('Failed to fetch pincode data');
                }
                const mappedstate =await getAllStates?.states?.map(state =>({_id:state._id,name:state.name}))
                setState(mappedstate);
                if(searchState._id){
                    const res1 =await client.query({
                        query: GetCityByState,
                        variables: { getCityByStateId: searchState._id }
                      });
                      const {getCityByState} =await res1.data;
                      if(getCityByState.code !== 200){
                        throw new Error('Failed to fetch pincode data');
                    }
                    const mappedcity =await getCityByState?.cities?.map(city =>({_id:city._id,name:city.name}))
                    setCity(mappedcity);
                }
                if(searchCity._id){
                    const res2 =await client.query({
                        query: GetAreaByCity,
                        variables: { cityId: searchCity._id }
                      });
                      const {getAreasByCity} =await res2.data; 
                      if(getAreasByCity.code !== 200){
                        throw new Error('Failed to fetch pincode data');
                    }
                const mappedarea =await getAreasByCity?.areas?.map(area =>({_id:area._id,name:area.name}))
                setArea(mappedarea);
                }
               
                
                
            } catch (error) {
                console.error('something went wrong:', error);
            }
           
        
        };
        fetchData();
      }, [searchState,searchCity]);
     
    
    
    
     
  
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
    
    const [searchService, setSearchService] = useState({
        keyword: "",
        value: '',
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
            setSearchState((prevState) => ({
                ...prevState,
                keyword: e.target.value,
            }));
        } else if (number === 2) {
            setSearchCity((prevState) => ({
                ...prevState,
                keyword: e.target.value,
            }));
        } else if (number === 3) {
            setSearchArea((prevState) => ({
                ...prevState,
                keyword: e.target.value,
            }));
        } else if (number === 4){
            setSearchService((prevState) => ({
                ...prevState,
                keyword: e.target.value,
            }));
        }
        setSelect((prevState) => ({
            ...prevState,
            isVisible: true,
        }));
    };

    const handleOptionClick = (option, number) => {
        if(number ===1){
            setSearchState((prevState) => ({
                ...prevState,
                _id:option._id,
                value: option.name,
            }));
        }
        else if (number === 2) {
            setSearchCity((prevState) => ({
                ...prevState,
                _id:option._id,
                value: option.name,
            }));
        } else if (number === 3) {
            setSearchArea((prevState) => ({
                ...prevState,
                _id:option._id,
                value: option.name,
            }));
        } else if (number === 4) {
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
        option.name.toLowerCase().includes(searchState.keyword.toLowerCase())
    );
    const filteredcity = city?.filter((option) =>
        option.name.toLowerCase().includes(searchCity.keyword.toLowerCase())
    );
    const filteredarea = area?.filter((option) =>
        option.name.toLowerCase().includes(seachArea.keyword.toLowerCase())
    );
    const filteredServices = services.filter((option) =>
        option.toLowerCase().includes(searchService.keyword.toLowerCase())
    );
    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault();
        // Redirect user to the desired route
        router.push(`/all-listing?category=${encodeURIComponent(searchService.value)}&state=${encodeURIComponent(searchState.value)}&city=${encodeURIComponent(searchCity.value)}&area=${encodeURIComponent(seachArea.value)}`);
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
                                            key={option._id}
                                            onClick={() =>
                                                handleOptionClick(option, 1)
                                            }
                                            className={`active-result result-selected ${
                                                option.name ===
                                                    searchState.value &&
                                                "highlighted"
                                            }`}
                                            data-option-array-index={0}
                                        >
                                            {option.name}
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
                                    {searchCity.value ? searchCity.value: "Select City"}
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
                                    {searchState.value.length > 0 ? (<>
                                        {filteredcity?.map((option) => (
                                        <li
                                            key={option._id}
                                            onClick={() =>
                                                handleOptionClick(option, 2)
                                            }
                                            className={`active-result result-selected ${
                                                option.name ===
                                                    searchCity.value &&
                                                "highlighted"
                                            }`}
                                            data-option-array-index={0}
                                        >
                                            {option.name}
                                        </li>
                                    ))}
                                    </>):(
                                        <li className="no-results">
                                        please select any state 
                                        </li>
                                    )}
                                   
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
                                        : "Select Area"}
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
                                    {searchCity?.value?.length > 0? (<>
                                        {filteredarea?.map((option) => (
                                        <li
                                            key={option._id}
                                            onClick={() =>
                                                handleOptionClick(option, 3)
                                            }
                                            className={`active-result result-selected ${
                                                option.name === seachArea.value &&
                                                "highlighted"
                                            }`}
                                            data-option-array-index={0}
                                        >
                                            {option.name}
                                        </li>
                                    ))}
                                    </>):(
                                        <li className="no-results">
                                        please select any city
                                      </li>
                                    )}
                                    
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
