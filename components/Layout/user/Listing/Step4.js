import React from 'react'

const Step4 = ({formData,handleInputChange}) => {
  return (
    <div className="row">
                          <div className="login-main add-list">
                            <div className="log-bor">&nbsp;</div>
                            <span className="steps">Step 4</span>
                            <div className="log add-list-map">
                              <div className="login add-list-map">
                                <h4>Video Gallery</h4>
                                <ul>
                                  <span
                                    className="add-list-add-btn lis-add-oadvideo"
                                    title="add new video"
                                  >
                                    +
                                  </span>
                                  <span
                                    className="add-list-rem-btn lis-add-orevideo"
                                    title="remove video"
                                  >
                                    -
                                  </span>
                                  <li>
                                    <div className="row">
                                      <div className="col-md-12">
                                        <div className="form-group">
                                          <textarea
                                            id="listing_video"
                                            value={formData.youtubelink}
                                            onChange={handleInputChange}
                                            name="youtubelink"
                                            className="form-control"
                                            placeholder="Paste Your Youtube Url here"
                                            defaultValue={""}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                                <h4>Map and 360 view</h4>
                                {/*FILED START*/}
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="form-group">
                                      <textarea
                                        value={formData.map_url}
                                        className="form-control"
                                        name="map_url"
                                        placeholder="Shop location"
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
                                      <textarea
                                        className="form-control"
                                        name="360_view"
                                        placeholder="360 view"
                                        defaultValue={""}
                                      />
                                    </div>
                                  </div>
                                </div>
                                {/*FILED END*/}
                                <h4 className="pt30">Photo gallery</h4>
                                {/*FILED START*/}
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <input
                                        type="file"
                                        name="gallery_image[]"
                                        className="form-control"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <input
                                        type="file"
                                        name="gallery_image[]"
                                        className="form-control"
                                      />
                                    </div>
                                  </div>
                                </div>
                                {/*FILED END*/}
                                {/*FILED START*/}
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <input
                                        type="file"
                                        name="gallery_image[]"
                                        className="form-control"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <input
                                        type="file"
                                        name="gallery_image[]"
                                        className="form-control"
                                      />
                                    </div>
                                  </div>
                                </div>
                                {/*FILED END*/}
                                {/*FILED START*/}
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <input
                                        type="file"
                                        name="gallery_image[]"
                                        className="form-control"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <input
                                        type="file"
                                        name="gallery_image[]"
                                        className="form-control"
                                      />
                                    </div>
                                  </div>
                                </div>
                                {/*FILED END*/}
                              </div>
                            </div>
                          </div>
                        </div>
  )
}

export default Step4
