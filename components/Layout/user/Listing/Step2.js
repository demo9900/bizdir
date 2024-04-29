import React from 'react'

const Step2 = ({formData,handleInputChange}) => {
  return (
    <div className="row">
                          <div className="login-main add-list add-list-ser">
                            <div className="log-bor">&nbsp;</div>
                            <span className="steps">Step 2</span>
                            <div className="log">
                              <div className="login">
                                <h4>Services provide</h4>
                                <span
                                  className="add-list-add-btn lis-ser-add-btn"
                                  title="add new offer"
                                >
                                  +
                                </span>
                                <span
                                  className="add-list-rem-btn lis-ser-rem-btn"
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
                                          <label>Service name:</label>
                                          <input
                                            type="text"
                                            onChange={handleInputChange}
                                            value={formData.service_name}
                                            name="service_name"
                                            className="form-control"
                                            placeholder="Ex: Plumbile"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <label>Choose profile image</label>
                                          <input
                                            type="file"
                                            name="service_image[]"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    {/*FILED END*/}
                                  </li>
                                  <li>
                                    {/*FILED START*/}
                                    <div className="row">
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <label>Service name:</label>
                                          <input
                                            type="text"
                                            name="service_id[]"
                                            className="form-control"
                                            placeholder="Ex: bike service"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <label>Choose profile image</label>
                                          <input
                                            type="file"
                                            name="service_image[]"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    {/*FILED END*/}
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
  )
}

export default Step2
