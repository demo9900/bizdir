import React,{useState} from "react";
import { CldUploadWidget } from "next-cloudinary";
import { toast } from "react-toastify";
const Step3 = ({ formData, handleInputChange, setFormData, handleStepClick }) => {
  const [selectoffer, setSelectOffer] = useState();

  return (
    <div className="row">
      <div className="login-main add-list">
        <div className="log-bor">&nbsp;</div>
        <span className="steps">Step 3</span>
        <div className="log">
          <div className="login add-list-off">
            <h4>Special offers</h4>
            <span
              className="add-list-add-btn lis-add-off"
              title="add new offer"
            >
              +
            </span>
            <span className="add-list-rem-btn lis-add-rem" title="remove offer">
              -
            </span>
            <ul>
                          <li>
                            {/*FILED START*/}
                            <div className="row">
                              <div className="col-md-5">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="offer_name"
                                    className="form-control"
                                    placeholder="Offer name *"
                                    value={formData.offer?.offer_name}
                                    onChange={handleInputChange}
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="offer_amount"
                                    className="form-control"
                                    placeholder="amount"
                                    value={formData.offer?.offer_amount}
                                    onChange={handleInputChange}
                                  />
                                </div>
                              </div>
                              <div className="col-md-3">
                              <div className="form-group">
                            <select name="offer_type" required="required"  value={formData.offer.offer_type} onChange={handleInputChange}  className="form-control !w-[60px] ">
                              <option value="percent"> %</option>
                              <option value="flate"> ₹</option>
                              
                            </select>
                          </div>
                              </div>
                            </div>
                            
                            {/*FILED END*/}
                            {/*FILED START*/}
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <textarea
                                    className="form-control"
                                    name="offer_description"
                                    placeholder="Details about this offer"
                                    value={formData.offer?.offer_description}
                                    onChange={handleInputChange}
                                  />
                                </div>
                              </div>
                            </div>
                            {/*FILED END*/}
                            {/*FILED START*/}
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label>Choose offer image</label>
                                  <div className="fil-img-uplo">
                                    <span
                                      className={`dumfil ${
                                        selectoffer ? "!text-green-600" : ""
                                      }`}
                                    >
                                      {selectoffer
                                        ? selectoffer
                                        : "Upload a file"}
                                    </span>
                                    <CldUploadWidget
                                      signatureEndpoint="/api/sign-cloudinary-params"
                                      uploadPreset="listing_image"
                                      onSuccess={(result, { widget }) => {
                                        setFormData((prevFormData) => ({
                                          ...prevFormData,
                                          offer: {
                                            ...prevFormData.offer, // Spread the existing offers object
                                            offer_image:  result?.info?.secure_url, // Update the specific field
                                          },
                                        }));
                                        toast.success(
                                          "your image uploaded successfully!"
                                        );
                                        setSelectOffer(
                                          result?.info?.original_filename
                                        );
                                        widget.close();
                                      }}
                                    >
                                      {({ open }) => {
                                        function handleOnClick() {
                                          open();
                                        }
                                        return (
                                          <button
                                            type="button"
                                            onClick={handleOnClick}
                                          >
                                            upload image
                                          </button>
                                        );
                                      }}
                                    </CldUploadWidget>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/*FILED END*/}
                            {/*FILED START*/}
                            {/*FILED END*/}
                          </li>
                        </ul>
            <div className="row">
              <div className="col-md-6">
                <button
                  onClick={() => handleStepClick(2)}
                  type="button"
                  className="btn btn-primary"
                >
                  Previous
                </button>
              </div>
              <div className="col-md-6">
                <button
                  onClick={() => handleStepClick(4)}
                  type="button"
                  className="btn btn-primary"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
