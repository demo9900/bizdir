'use client'
import React,{useState,useContext, Suspense} from 'react'
import Link from 'next/link'
import axios from 'axios';
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import Header from '@/components/Header';
import {  toast } from "react-toastify";
import Footer from '@/components/Footer'
const page = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    mobile_number:"",
    user_type:""
})
console.log(formData)
const [userEmail, setuserEmail] = useState("");
console.log(userEmail)
    const [error, setError] = useState("")

  const searchParams = useSearchParams()
    
  const create = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/auth/register', formData);
      if (response.status === 201) {
        // Show success toast message
        toast.success('We have sent a verification email to your account!');
        console.log('User created:', response.data);
      } else {
        throw new Error('Failed to register user');
      }
    } catch (error) {
      if (error.response && error.response.status === 406) {
        // User already exists
        toast.warn('User already exists!');
      } else {
        // Show generic error toast message
        toast.error('Failed to register user');
        console.error('Error registering user:', error.message);
      }
    }
  };


  return (
    <Suspense fallback={<div>Loading ...</div>}>

     <section>
		<div className="str">
			<div>
      <Header transparent={false}  />
      </div>
      </div>
      </section>
   <section className=" login-reg">
  <div className="container">
    <div className="row">
      <div className="login-main">
        <div className="log-bor">&nbsp;</div>
        <div className="log log-2">
           <div className="login">
             <h4>Create an account</h4>
             <p>Don&apos;t have an account? Create your account. It&apos;s take less then a minutes</p>
             <form onSubmit={create}  name="register_form" id="register_form">
               <input type="hidden" autoComplete="off" name="trap_box" id="trap_box" className="validate" />
               <input type="hidden" autoComplete="off" name="mode_path" defaultValue="XeFrOnT_MoDeX_PATHXHU" id="mode_path" className="validate" />
               <div className="form-group">
                 <input type="text" 
                 autoComplete="off" value={formData.name}  onChange={(e) =>  setFormData((prev) => ({ ...prev, name: e.target.value })) } 
                 name="name" id="name" className="form-control" placeholder="Name" />
               </div>
               <div className="form-group">
                 <input type="email" autoComplete="off"
                   value={formData.email}
                   onChange={(e) =>
                       setFormData((prev) => ({ ...prev, email: e.target.value }))
                   }
                  name="email" id="email" className="form-control" placeholder="Email id*" required />
               </div>
               <div className="form-group">
                 <input type="password" name="password"
                  value={formData.password}
                  onChange={(e) =>
                      setFormData((prev) => ({
                          ...prev,
                          password: e.target.value,
                      }))
                  }
                  id="password" className="form-control" placeholder="Password*" required />
               </div>
               <div className="form-group">
                 <input type="text" value={formData.mobile_number}
                    onChange={(e) =>
                        setFormData((prev) => ({ ...prev, mobile_number: e.target.value }))
                    }
                   autoComplete="off" name="mobile_number" id="mobile_number" className="form-control" placeholder="Phone" />
               </div>
               <select 
                name="user_type" 
                id="user_type" 
                className="form-control ca-check-plan" 
                value={formData.user_type} // Make sure to add a value attribute
                onChange={(e) => setFormData((prev) => ({ ...prev, user_type: e.target.value }))} // onChange handler
                >
                <option value="">User type</option>
                <option value="General">General user</option>
                <option value="Service provider">Service provider</option>
                </select>
               <button type="submit" name="register_submit" className="btn btn-primary">Register Now</button>
             </form>
             {/* SOCIAL MEDIA LOGIN */}
             <div className="soc-log">
               <ul>
                 <li>
                   <div className="g-signin2" data-onsuccess="onSignIn" />
                 </li>
                 {/*                                        <li>*/}
                 {/*                                            <a href="google_login.html" class="login-goog"><img*/}
                 {/*                                                    src="images/icon/seo.png">Continue*/}
                 {/*                                                with Google</a>*/}
                 {/*                                        </li>*/}
                 <li>
                   <a href="#"  className="login-fb">
                     <img src="images/icon/facebook.png" alt =""/>Continue with Facebook</a>
                 </li>
               </ul>
             </div>
             {/* END SOCIAL MEDIA LOGIN */}
           </div>
         </div>
       
        <div className="log-bot">
          <ul>
            <li><Link href={'/login'}>
            <span   className="ll-1">Login?</span>
            </Link> 
            </li>
            <li> <Link href={'/register'}>
            <span  className="ll-2">Create an account?</span>
            </Link> 
            </li>
            <li> <Link href={'/forgotpassword'}>
             <span  className="ll-3">Forgot password?</span>
            </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  </section>
  

  <span className="btn-ser-need-ani">Help &amp; Support</span>
  <div className="ani-quo-form"> <i className="material-icons ani-req-clo">close</i>
    <div className="tit">
      <h3>What service do you need? <span>BizBook will help you</span></h3>
    </div>
    <div className="hom-col-req">
      <div id="home_slide_enq_success" className="log" style={{display: 'none'}}>
        <p>Your Enquiry Is Submitted Successfully!!!</p>
      </div>
      <div id="home_slide_enq_fail" className="log" style={{display: 'none'}}>
        <p>Something Went Wrong!!!</p>
      </div>
      <div id="home_slide_enq_same" className="log" style={{display: 'none'}}>
        <p>You cannot make enquiry on your own listing</p>
      </div>
      <form name="home_slide_enquiry_form" id="home_slide_enquiry_form" method="post" encType="multipart/form-data">
        <input type="hidden" className="form-control" name="listing_id" defaultValue={0} placeholder required />
        <input type="hidden" className="form-control" name="listing_user_id" defaultValue={0} placeholder required />
        <input type="hidden" className="form-control" name="enquiry_sender_id" defaultValue placeholder required />
        <input type="hidden" className="form-control" name="enquiry_source" defaultValue="Website" placeholder required />
        <div className="form-group">
          <input type="text" name="enquiry_name" defaultValue required="required" className="form-control" placeholder="Enter name*" />
        </div>
        <div className="form-group">
          <input type="email" className="form-control" placeholder="Enter email*" required="required" defaultValue name="enquiry_email" pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$" title="Invalid email address" />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" defaultValue name="enquiry_mobile" placeholder="Enter mobile number *" pattern="[7-9]{1}[0-9]{9}" title="Phone number starting with 7-9 and remaing 9 digit with 0-9" required />
        </div>
        <div className="form-group">
          <select name="enquiry_category" id="enquiry_category" className="form-control">
            <option value>Select Category</option>
            <option value={19}>Wedding halls</option>
            <option value={18}>Hotel &amp; Food</option>
            <option value={17}>Pet shop</option>
            <option value={16}>Digital Products</option>
            <option value={15}>Spa and Facial</option>
            <option value={10}>Real Estate</option>
            <option value={8}>Sports</option>
            <option value={7}>Education</option>
            <option value={6}>Electricals</option>
            <option value={5}>Automobiles</option>
            <option value={3}>Transportation</option>
            <option value={2}>Hospitals</option>
            <option value={1}>Hotels And Resorts</option>
          </select>
        </div>
        <div className="form-group">
          <textarea className="form-control" rows={3} name="enquiry_message" placeholder="Enter your query or message" defaultValue={""} />
        </div>
        <input type="hidden" id="source" />
        <button type="submit" id="home_slide_enquiry_submit" name="home_slide_enquiry_submit" className="btn btn-primary">Submit Requirements</button>
      </form>
    </div>
  </div>
  {/* END */}
  {/* START */}
  <section>
    <div className="full-bot-book">
      <div className="container">
        <div className="row">
          <div className="bot-book">
            <div className="col-md-2 bb-img">
              <img src="images/idea.png" alt="idea" />
            </div>
            <div className="col-md-7 bb-text">
              <h4>#1 Business Directory and Service Provider</h4>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
            </div>
            <div className="col-md-3 bb-link"> <a href="pricing-details.html">Add my business</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

<Footer/>
</Suspense>
  )
}

export default page