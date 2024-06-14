"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { CldUploadWidget } from "next-cloudinary";
import { toast } from "react-toastify";
import DateFormatter from "@/components/DateFormatter";
import { client } from "@/lib/apollo";
import { GET_USER_DETAILS } from "@/lib/query";

const page = () => {
  const { data: session, update } = useSession();
  const [formData, setFormData] = useState({
    createdAt: "",
    email: "",
    mobile_number: "",
    name: "",
    is_verified: "",
    profile_image: "",
    profile_image: "",
    user_info: "",
    subscription: "",
  });

  const getUser = async () => {
    try {
      const { data, errors } = await client.query({
        query: GET_USER_DETAILS,
        variables: { id: params.id },
        context: {
          headers: {
            Authorization: `Bearer ${session.jwt}`,
          },
        },
      });

      console.log(data);

      if (errors || data.getUser.code !== 200) {
        throw new Error("Something went wrong");
      }

      const userData = data.getUser.user;

      setFormData((preveFormData) => ({
        ...preveFormData,
        createdAt: userData?.createdAt,
        email: userData?.email,
        mobile_number: userData?.mobile_number,
        name: userData?.name,
        user_info: userData?.user_info,
        profile_image: userData?.profile_image,
        cover_image: userData?.profile_image,
        is_verified: userData?.is_verified,
        subscription: userData?.subscription,
      }));
      setLoading(false);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name.startsWith("user_info.")) {
      const userInfoField = name.split(".")[1];
      setFormData((prevState) => ({
        ...prevState,
        user_info: {
          ...prevState.user_info,
          [userInfoField]: value,
        },
      }));
    } else
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    console.log(formData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch(
        process.env.BACKEND_URL + `/api/user/${session.user.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            authorization: "Bearer " + session?.jwt,
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      if (res.status === 200) {
        toast.success(data.message);
        update({ image: formData.profile_image });
      } else if (res.status === 400) {
        toast.error(data.message);
      }
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  console.log("formdata =", formData);
  return (
    <div className="ud-main-inn ud-no-rhs">
      <div className="ud-cen">
        <div className="log-bor">&nbsp;</div>{" "}
        <span className="udb-inst">Edit User Profile</span>
        <div className="ud-cen-s2 ud-pro-edit">
          <h2>Profile Details</h2>
          <form
            id="profile_update"
            name="profile_update"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <table className="responsive-table bordered">
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        onChange={handleChange}
                        value={formData.name}
                        name="name"
                        placeholder="Change Name"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Email Id</td>
                  <td>{formData.email}</td>
                </tr>
                <tr>
                  <td>Profile Password</td>
                  <td>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        onChange={handleChange}
                        value={formData.password}
                        name="password"
                        placeholder="Change password"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Mobile Number</td>
                  <td>
                    <div className="form-group">
                      <input
                        type="text"
                        name="mobile_number"
                        value={formData.mobile_number}
                        onChange={handleChange}
                        className="form-control"
                        defaultValue={5522114422}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Profile Picture</td>
                  <td>
                    <div className="form-group">
                      <label>Choose profile image</label>
                      <div className="fil-img-uplo">
                        <span className="dumfil">Upload a file</span>
                        <CldUploadWidget
                          signatureEndpoint="/api/sign-cloudinary-params"
                          uploadPreset="listing_image"
                          onSuccess={(result, { widget }) => {
                            setFormData({
                              ...formData,
                              profile_image: result?.info?.secure_url,
                            });
                            widget.close();
                          }}
                        >
                          {({ open }) => {
                            function handleOnClick() {
                              open();
                            }
                            return (
                              <button type="button" onClick={handleOnClick}>
                                upload image
                              </button>
                            );
                          }}
                        </CldUploadWidget>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Profile Cover Image</td>
                  <td>
                    <div className="form-group">
                      <label>Choose profile image</label>
                      <div className="fil-img-uplo">
                        <span className="dumfil">Upload a file</span>
                        <CldUploadWidget
                          signatureEndpoint="/api/sign-cloudinary-params"
                          uploadPreset="profile_image"
                          onSuccess={(result, { widget }) => {
                            setFormData({
                              ...formData,
                              cover_image: result?.info?.secure_url,
                            });
                            widget.close();
                          }}
                        >
                          {({ open }) => {
                            function handleOnClick() {
                              open();
                            }
                            return (
                              <button type="button" onClick={handleOnClick}>
                                upload image
                              </button>
                            );
                          }}
                        </CldUploadWidget>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>City</td>
                  <td>
                    <div className="form-group">
                      <input
                        type="text"
                        id="select-city"
                        value={formData?.user_info?.user_city}
                        name="user_info.user_city"
                        onChange={handleChange}
                        className="autocomplete form-control"
                        defaultValue="Sydney"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Join date</td>
                  <td>
                    {" "}
                    <DateFormatter dateString={formData?.createdAt} />{" "}
                  </td>
                </tr>
                <tr>
                  <td>Verified</td>
                  <td>
                    {formData?.is_verified?.status === true ? "Yes" : "No"}
                  </td>
                </tr>
                <tr>
                  <td>Plan Type</td>
                  <td>{formData?.subscription?.user_plan}</td>
                </tr>
                <tr>
                  <td>Facebook</td>
                  <td>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        value={formData?.user_info?.facebook}
                        onChange={handleChange}
                        name="user_info.facebook"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Twitter</td>
                  <td>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="user_info.twitter"
                        value={formData?.user_info?.twitter}
                        onChange={handleChange}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Youtube</td>
                  <td>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="user_info.youtube"
                        value={formData?.user_info?.youtube}
                        onChange={handleChange}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Website</td>
                  <td>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="user_info.website"
                        value={formData?.user_info?.website}
                        onChange={handleChange}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button
                      type="submit"
                      name="profile_update_submit"
                      className="db-pro-bot-btn"
                    >
                      Save Changes
                    </button>
                    <Link href="/db-payment" className="db-pro-bot-btn">
                      Upgrade
                    </Link>
                  </td>
                  <td />
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
