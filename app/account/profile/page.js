'use client';
import React,{useState,useEffect} from 'react'
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import DateFormatter from '@/components/DateFormatter';

const page = () => {
  const [user,setUser] = useState();
  const {data:session} = useSession();

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
      setUser(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);
  return (
    <div className='ud-main-inn ud-no-rhs'>
      <div className="ud-cen">
        <div className="log-bor">&nbsp;</div>{" "}
        <span className="udb-inst">User Profile</span>
        <div className="ud-cen-s2">
          <h2>Profile Details</h2>
          <Link href="/db-my-profile-edit" className="db-tit-btn">
            Edit profile page
          </Link>
          <Link href="/db-payment" className="db-tit-btn db-tit-btn-1">
            Upgrade
          </Link>
          <table className="responsive-table bordered">
            <tbody>
                {user?.subscription?.user_plan !== 'lite' && (
              <tr>
                <td>Plan Expiry(Listing exp)</td>
                <td><DateFormatter dateString={user?.subscription?.plan_expiry_date} /> </td>
              </tr>
              )}
              <tr>
                <td>Name</td>
                <td>{user?.name}</td>
              </tr>
              <tr>
                <td>Email Id</td>
                <td>{user?.email}</td>
              </tr>
              <tr>
                <td>Profile Password</td>
                <td>*********</td>
              </tr>
              <tr>
                <td>Mobile Number</td>
                <td>{user?.mobile_number}</td>
              </tr>
              <tr>
                <td>Profile Picture</td>
                <td>
                  <img src={user?.profile_image} alt="" />
                </td>
              </tr>
              <tr>
                <td>City</td>
                <td>{user?.user_info?.user_city}</td>
              </tr>
              <tr>
                <td>Join date</td>
                <td><DateFormatter dateString={user?.createdAt} /> </td>
              </tr>
              <tr>
                <td>Verified</td>
                <td>{user?.is_verified?.status === true ? 'Yes':'No'}</td>
              </tr>
              <tr>
                <td>Plan Type</td>
                <td>{user?.subscription?.user_plan}</td>
              </tr>
              <tr>
                <td>Profile Link</td>
                <td>
                  <Link href="/profile" target="_blank">
                    profile
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Facebook</td>
                <td>https://www.facebook.com/</td>
              </tr>
              <tr>
                <td>Twitter</td>
                <td>https://twitter.com/</td>
              </tr>
              <tr>
                <td>Youtube</td>
                <td>
                  https://www.youtube.com/
                </td>
              </tr>
              <tr>
                <td>Website</td>
                <td>www.bizdir.in</td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <Link href="/db-my-profile-edit" className="db-pro-bot-btn">
                    Edit profile page
                  </Link>
                  <Link href="/db-payment" className="db-pro-bot-btn">
                    Upgrade
                  </Link>
                </td>
                <td />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      </div>
  )
}

export default page
