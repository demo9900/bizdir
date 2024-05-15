'use client';
import React,{useState,useEffect} from 'react'
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import DateFormatter from '@/components/DateFormatter';

const page = () => {
  const {data:session} = useSession();
  const [formData,setFormData] = useState({
    createdAt:'',
    email:'',
    mobile_number:'',
    name:'',
    profile_image:'',
    user_info:'',
    plan_type:'',
    facebook:'',
    youtube:'',
    twitter:'',
    website:''    

  });

  const getUser = async () => {
    try {
      const res = await fetch(
        process.env.BACKEND_URL + `/api/user/${session.user.id}`,
        {
          headers: {
            authorization: "Bearer " + session.jwt,
          },
        }
      );

      const data = await res.json();
      setFormData((preveFormData) => ({
        ...preveFormData,
        createdAt:data?.createdAt,
        email:data?.email,
        mobile_number:data?.mobile_number,
        name:data?.name,
        user_info:data?.user_info,
        profile_image:data?.profile_image,
        is_verified:data?.is_verified?.status,
        plan_type:data?.subscription?.user_plan,
        facebook:data?.user_info.facebook,
        youtube:data?.user_info.youtube,
        twitter:data?.user_info.twitter,
        website:data?.user_info.website 
      }))
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);
  const handleChange = (event) => {
    const {name,value} = event.target;
    if (name.startsWith('user_info.')) {
      const userInfoField = name.split('.')[1];
      setFormData(prevState => ({
        ...prevState,
        user_info: {
          ...prevState.user_info,
          [userInfoField]: value
        }
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
        method:'PATCH',
        headers: {
          'Content-Type': 'application/json',
          authorization: "Bearer " + session?.jwt,
        },
        body: JSON.stringify(formData)
      }
    );
    const data = await res.json();
    if(res.status ===200){
      toast.success(data.message)
    } else if(res.status === 400) {
      toast.error(data.message);
    }
    console.log(res);
  } catch (error) {
    console.error(error);
  }
};
  console.log("formdata =", formData)
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
                  <td>{formData.name}</td>
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
                      <input
                        type="file"
                        name="profile_image"
                        className="form-control"
                      />
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
                  <td> <DateFormatter dateString={formData?.createdAt}/> </td>
                </tr>
                <tr>
                  <td>Verified</td>
                  <td>{formData?.is_verified === true ? 'Yes': 'No'}</td>
                </tr>
                <tr>
                  <td>Plan Type</td>
                  <td>{formData?.plan_type}</td>
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
                        defaultValue="https://www.facebook.com/53themes"
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
                        defaultValue="https://twitter.com/53themes"
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
                        defaultValue="https://www.youtube.com/channel/UC3wN3O2GXTt7ZZniIoMZumg"
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
                        defaultValue="www.bizdir.in"
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
  )
}

export default page
