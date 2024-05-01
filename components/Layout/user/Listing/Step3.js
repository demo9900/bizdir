import React from 'react'

const Step3 = ({formData,handleInputChange,handleStepClick}) => {
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
                                <span
                                  className="add-list-rem-btn lis-add-rem"
                                  title="remove offer"
                                >
                                  -
                                </span>
                                <ul>
                                  <li>
                                    {/*FILED START*/}
                                    <div className="row">
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <input
                                            type="text"
                                            name="service_1_name[]"
                                            className="form-control"
                                            placeholder="Offer name *"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <input
                                            type="text"
                                            name="service_1_price[]"
                                            className="form-control"
                                            onkeypress="return isNumber(event)"
                                            placeholder="Price"
                                          />
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
                                            name="service_1_detail[]"
                                            placeholder="Details about this offer"
                                            defaultValue={""}
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
                                          <input
                                            type="file"
                                            name="service_1_image[]"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    {/*FILED END*/}
                                    {/*FILED START*/}
                                    <div className="row">
                                      <div className="col-md-12">
                                        <div className="form-group">
                                          <input
                                            type="text"
                                            name="service_1_view_more[]"
                                            className="form-control"
                                            placeholder="View More Link"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    {/*FILED END*/}
                                  </li>
                                </ul>
                                <div class="row">
                                <div className="col-md-6">
                                    <button onClick={()=>handleStepClick(2)} type='button'  className="btn btn-primary">Previous</button>
                                </div>
                                <div className="col-md-6">
                                  <button onClick={()=>handleStepClick(4)} type='button'   className="btn btn-primary">Next</button>
                                </div>
                              </div>
                              </div>
                            </div>
                          </div>
     </div>
  )
}

export default Step3
