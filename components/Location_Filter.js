import React, { useState, useRef, useEffect } from "react";

const Location_Filter = ({formData,InputChange,setFormData}) => {
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
 
  const country = ["India","Usa"]
  const cities = ["Chennai", "Delhi", "Mumbai","Kolkata","Jaipur"];
  const category = [
    'Restaurants',
    'Wedding halls',
    'Pet shop',
    'Technology',
    'Spa and Facial',
    'Real Estate',
    'Sports',
    'Education',
    'Electricals',
    'Automobiles',
    'Transportation',
    'Hospitals'
  ];
  const subcategory = ["Beach House","Party Halls","Wedding Halls"];
  const [select, setSelect] = useState({
    num: null,
    isVisible: false
  });

   const [searchCity, setSearchCity] = useState({
    keyword:'',
    value:[]
  });
  const [searchCat, setSearchCat] = useState({
    keyword:'',
    value:''
  });
  const [searchSubCat, setSearchSubCat] = useState({
    keyword:'',
    value:[]
  });
  const handleClick = (num) => {
    setSelect((prevState) => ({
      num: num,
      isVisible: !prevState.isVisible
    }));
    
  };
  const handleInputChange = (e,number) => {
    if(number === 1){
      setSearchCity(prevState =>({
        ...prevState,
        keyword:e.target.value
      })); 
    }else if(number === 2){
      setSearchCat(prevState =>({
        ...prevState,
        keyword:e.target.value
      })); 
    } else if (number === 3){
      setSearchSubCat(prevState =>({
        ...prevState,
        keyword:e.target.value
      })); 
    }
    setSelect((prevState) => ({
        ...prevState,
        isVisible: true
      }));
    console.log(select.num)
  };
  const handleOptionClick = (option,number) => {
    if(number=== 1){
      setSearchCity(prevState =>({
        ...prevState,
        value: [...prevState.value, option],
        keyword:''
    }));
    setFormData((prevFormData) => ({
      ...prevFormData,
      ["cities"]:searchCity.value,
      
    }));
    
    console.log(searchCity)
    }else if(number === 2){
      setSearchCat(prevState =>({
        ...prevState,
        value:option
    }));
    setFormData((prevFormData) => ({
      ...prevFormData,
      ["category"]:searchCat.value,
      
    }));
    } else if (number === 3){
      setSearchSubCat(prevState =>({
        ...prevState,
        value: [...prevState.value, option],
        keyword:''
    }));
    setFormData((prevFormData) => ({
      ...prevFormData,
      ["sub_category"]: searchSubCat.value,
    }));
    }
  
    setSelect((prevState) => ({
        ...prevState,
        isVisible: false
      }));
  };
  const cityRef = useRef(null);
  const subcategoryRef = useRef(null);
  useEffect(() => {
    if (searchCity.value.length > 0) {
      cityRef.current.focus();
    } else if (searchSubCat.value.length > 0) {
      subcategoryRef.current.focus();
    }
  }, [searchCity.value,searchSubCat.value]);
  const handleKeyPress = (e,number) => {
    if (number === 1 && e.key === "Backspace" && searchCity.keyword === "") {
      setSearchCity(prevState => ({
        ...prevState,
        value: prevState.value.slice(0, -1) // Remove the last index value
      }));
    } else if (number === 2 && e.key === "Backspace" && searchSubCat.keyword === "") {
      setSearchSubCat(prevState => ({
        ...prevState,
        value: prevState.value.slice(0, -1) // Remove the last index value
      }));
    }
  };

  const handleRemove = (index, number) => {
    if (number === 1) {
      setSearchCity((prevState) => {
        const updatedValue = [...prevState.value]; // Create a copy of the current array
        updatedValue.splice(index, 1); // Remove the item at the specified index
        return {
          ...prevState,
          value: updatedValue, // Update the state with the modified array
        };
      });
    } else if (number === 3) {
      setSearchSubCat((prevState) => {
        const updatedValue = [...prevState.value]; // Create a copy of the current array
        updatedValue.splice(index, 1); // Remove the item at the specified index
        return {
          ...prevState,
          value: updatedValue, // Update the state with the modified array
        };
      });
    }
  };
  
  
  const filteredcity = cities.filter(option =>
    option.toLowerCase().includes(searchCity.keyword.toLowerCase())
  ).filter(option =>
    !searchCity.value.includes(option)
  );
  const filteredcat = category.filter(option =>
    option.toLowerCase().includes(searchCat.keyword.toLowerCase())
);
const filteredsubcat = subcategory.filter(option =>
  option.toLowerCase().includes(searchSubCat.keyword.toLowerCase())
).filter(option =>
  !searchSubCat.value.includes(option)
);

  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <select name="country" required="required" onChange={InputChange}  className="form-control">
              <option value>Select your Country</option>
              {country.map(option=>(
                <option  value={option}>{option}</option>
              ))}
              
            </select>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <div
              className={`chosen-container chosen-container-multi ${
                select.num === 1 && select.isVisible
                  ? "chosen-with-drop"
                  : ""
              } chosen-container-active`}
              ref={divRef1}
              title
              id="city_id_chosen"
              style={{ width: 640 }}
            >
              <ul className="chosen-choices">

              {searchCity.value.length > 0 &&
                searchCity.value.map((option, index) => {
                  return (
                    <li key={index} className="search-choice">
                      <span>{option}</span>
                      <a onClick={() => handleRemove(index,1)} className="search-choice-close" data-option-array-index={0} />
                    </li>
                  );
                })}

                <li className="search-field">
                  <input
                    ref={cityRef}
                    onKeyUp={(e)=>handleKeyPress(e,1)}
                    onClick={() => handleClick(1)}
                    className="chosen-search-input default"
                    onChange={(e)=>handleInputChange(e,1)}
                    style={{
                      width: searchCity.value.length > 0 ? "33px!important" : "137.062px"
                    }}
                    value={searchCity.keyword}
                    type="text"
                    autoComplete="off"
                    placeholder="Select your Cities"
                  />
                </li>
              </ul>
              <div className="chosen-drop">
                <ul className="chosen-results">
                  {filteredcity.map(option=>(
                  <li className="active-result" key={option}  onClick={() => handleOptionClick(option,1)} data-option-array-index={0}>
                    {option}
                  </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <div
              className={`chosen-container chosen-container-single ${
                select.num === 2 && select.isVisible
                  ? "chosen-with-drop"
                  : ""
              } chosen-container-active`}
              title
              ref={divRef2}
              id="category_id_chosen"
              style={{ width: 305 }}
            >
              <a className="chosen-single" onClick={() => handleClick(2)}>
              <span>{searchCat?.value?.length > 0 ? searchCat.value:'Select Category' }</span>
                <div>
                  <b />
                </div>
              </a>
              <div className="chosen-drop">
                <div className="chosen-search">
                  <input
                    className="chosen-search-input valid"
                    type="text"
                    autoComplete="off"
                    value={searchCat.keyword}
                    onChange={(e)=>handleInputChange(e,2)}
                  />
                </div>
                <ul className="chosen-results">
                  <li className="active-result" data-option-array-index={0}>
                    Select Category
                  </li>
                  {filteredcat.map(option =>(
                  <li key={option} onClick={() => handleOptionClick(option,2)}  className="active-result" data-option-array-index={1}>
                    {option}
                  </li>
                  ))}
                 
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <div
              className={`chosen-container chosen-container-multi ${
                select.num === 3 && select.isVisible
                  ? "chosen-with-drop"
                  : ""
              } chosen-container-active`}
              title
              ref={divRef3}
              id="city_id_chosen"
              style={{ width: 640 }}
            >
              <ul className="chosen-choices">
              {searchSubCat.value.length > 0 &&
                searchSubCat.value.map((option, index) => {
                  return (
                    <li key={index} className="search-choice">
                      <span>{option}</span>
                      <a onClick={() => handleRemove(index,3)} className="search-choice-close" data-option-array-index={0} />
                    </li>
                  );
                })}
                <li className="search-field">
                  <input
                    className="chosen-search-input default"
                    type="text"
                    ref={subcategoryRef}
                    onKeyUp={(e)=>handleKeyPress(e,2)}
                    onClick={() => handleClick(3)}
                    onChange={(e)=>handleInputChange(e,3)}
                    style={{
                      width: searchCity.value.length > 0 ? "33px!important" : "137.062px"
                    }}
                    value={searchSubCat.keyword}
                    autoComplete="off"
                    placeholder="select sub category"
                  />
                </li>
              </ul>
              <div className="chosen-drop">
                <ul className="chosen-results">
                  {filteredsubcat.map(option =>(
                  <li key={option} onClick={() => handleOptionClick(option,3)}  className="active-result" data-option-array-index={0}>
                    {option}
                  </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Location_Filter;
