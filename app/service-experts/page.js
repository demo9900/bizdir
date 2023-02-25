
'use client';
import React from 'react'
import Headertwo from '../../component/Headertwo'
import Footer from '../../component/Footer';
import BottomMenu from '../../component/BottomMenu';
import Link from 'next/link';
const page = () => {
  return (
    <div>
        <style jsx>
            {`
            .hom-head .container{display:none}
            .hom-top{transition:all .5s ease;background:#3d05c6;box-shadow:none}
            .hom-head{background:none!important;padding:0;margin:0}
            .hom-head .hom-top .container{display:block}
            .dmact .top-ser{display:block}
            .hm3-auto-ban{background:url(images/automobile-bg.jpg) no-repeat;background-size:100%;background-position:center right;padding-top:55px}
            .h2-ban-ql{display:table}
            .hm3-auto-ban .rhs .hom-col-req .log-bor{display:block}
            .caro-home{margin-top:90px;float:left;width:100%}
            .carousel-item:before{background:none}
            .ban-tit h1{font-weight:500;color:#fff;text-shadow:none}
            .ban-tit h1 b{font-weight:700;font-size:42px;line-height:49px;padding-bottom:15px;color:#fff;text-shadow:none}
            .h2-ban-ql ul li div{border:1px solid #d9d9da;background:#fff}
            .h2-ban-ql ul li div h5{font-weight:500;color:#383942}
            .h2-ban-ql ul li div h5 span{font-weight:700}
            .home-tit h2{font-weight:400;}
            .home-tit h2 span{font-weight:700;font-size:32px;color:#4a5e95;position:relative;z-index:2}
            .home-tit h2 span:before{content:'';position:absolute;width:40%;height:6px;background:#ff83bc;bottom:1px;left:30%;z-index:-1;transform:skew(51deg,0deg)}
            .home-tit p{color:#4e6d8d}
            .all-jobs-ban{margin-bottom:0}
            .job-sear ul li.sr-btn button{background:#8cc152}
            .all-jobs-ban h1{font-size: 50px;color: #fff;text-shadow: 0 1px 3px #333333f7;}
            .job-sear ul li.sr-sea {width: calc(100% - 50px);}    
            .job-sear ul li.sr-sea:before{content:'people'}
            .all-jobs-ban p{color: #fff;}
            .all-jobs-ban{background:url(/../../public/ex2.jpg) #f3e5ff no-repeat;background-size:cover}
            .all-jobs-ban:before{content: '';position: absolute;width: 100%;height: 100%;left: 0px;right: 0px;top: 0px;bottom: 0px;background:linear-gradient(to top,#292930fa -6%,#f6f7f605 125%)}
            .h2-ban-ql ul li div:hover{background:#d3f0fb;box-shadow:0 14px 22px -13px #0b1017ba}
            .land-pack-grid-text{position:relative;-webkit-transition:all .5s ease;-moz-transition:all .5s ease;-o-transition:all .5s ease;transition:all .5s ease;position:absolute;top:0;bottom:0;left:0;right:0;width:100%;height:100%;z-index:2;background:linear-gradient(to top,#000000c7,#00000008)}
            .land-pack-grid-text h4{padding:15px;font-size:20px;font-weight:400;text-align:center;bottom:0;position:absolute;width:100%;text-align:center;color:#fff}
            .land-pack-grid-text h4 .dir-ho-cat{color:#f6f7f9;font-size:11px;position:relative;width:100%;display:inline-block}
            .land-pack-grid-img{background:#333}
            .home-tit{margin-bottom:20px;padding-top:60px}
            .hom2-hom-ban{float:left;width:46%;background-size:cover;margin:0 2%;background:#e6f6fb;padding:30px 100px 30px 30px;border-radius:5px;position:relative;}
            .hom2-hom-ban:hover a{background:#d6c607}
            .hom2-hom-ban h2{font-weight:600;font-size:22px;padding-bottom:5px}
            .hom2-hom-ban p{font-size:14px}
            .hom2-hom-ban a{background:#21d78d;color:#fff;padding:10px 20px;border-radius:5px;display:inline-block;cursor:pointer;font-size:13px;font-weight:400}
            .hom2-hom-ban p,.hom2-hom-ban h2,.hom2-hom-ban a{position:relative;color:#fff}
            .hom2-hom-ban:before{content:'';position:absolute;width:100%;height:100%;left:0;top:0;right:0;bottom:0;z-index:0;opacity:.8;background:#24C6DC;border-radius:5px}
            .hom2-hom-ban1:before{background-image:linear-gradient(140deg,#0c7ada 0%,#0761af 50%,#0f243e94 75%)}
            .hom2-hom-ban2:before{background-image:linear-gradient(140deg,#768404 0%,#768404 50%,#0f243e94 75%)}
            .hom2-hom-ban1{background-image:url(../images/home2-hand.jpg)}
            .hom2-hom-ban2{background-image:url(../images/home2-work.jpg)}
            .hom2-hom-ban-main{float:left;width:100%;padding-bottom:70px}
            .hom2-cus-sli{float:left;width:100%}
            .hom2-cus-sli ul li{float:left;width:25%;padding:12px 20px}
            .testmo{width:100%;background:#fff;box-shadow:0 1px 7px -3px #161d2926;border-radius:5px;padding:30px;position:relative}
            .testmo img{width:64px;height:64px;border-radius:50px;object-fit:cover;margin:-80px 0 0}
            .testmo h4{font-size:14px;font-weight:600;margin-bottom:2px;}
            .testmo span{font-size:11px;font-weight:400;color:#727688}
            .testmo span a{font-weight:500;color:#4caf50;display:block;font-size:12px}
            .testmo p{color:#727688;font-size:12px;line-height:20px;margin:0;font-weight:400;height:58px;overflow:hidden;border-top:1px solid #f1eeee;padding-top:15px;margin-top:15px}
            .testmo p:before{content:'format_quote';font-size:21px;margin:-25px 0 0;background:#fff}
            .hom2-cus{background:#f7f8f9;padding-bottom:70px}
            .testmo .rat{padding:2px 2px 2px 10px;display:inline-block;position:absolute;right:30px;top:50px}
            .testmo .rat i{color:#FF9800;font-size:13px;width:7px}
            .hom2-cus-sli ul{position:relative;overflow:hidden;padding:20px 20px 0}
            .slick-arrow{width:50px;height:50px;border-radius:50px;background:#fff;border:1px solid #ededed;color:#ffffff03;position:absolute;z-index:9;top:38%}
            .slick-arrow:before{content:'chevron_left';font-size:27px;top:4px;left:9px}
            .slick-prev{left:14px}
            .slick-next{right:14px}
            .slick-next:before{content:'chevron_right';font-size:27px}
            .hom4-prop-box{padding:0;background:#fff;box-shadow:0 1px 14px -4px #161d2926;border:1px solid #efefef}
            .hom4-prop-box img{width:100%;border-radius:2px;margin:0;height:120px}
            .hom4-prop-box div{padding:25px}
            .hom4-prop-box .rat{position:relative;top:initial;right:initial;padding:2px 2px 2px 0;display:block;margin:0;height:17px;left:-2px}
            .hom4-fea{background:#fff;padding-bottom:40px;float:left;width:100%}
            .str{float:left;width:100%}
            .hom4-fea .hom2-cus-sli ul li{padding:12px 20px}
            .hom4-fea .home-tit{margin-bottom:0;padding-top:70px}
            @media screen and (max-width: 767px) {
            .land-pack-grid-text h4{font-size:16px}
            }
            `}
        </style>
        <section>
  <div className="str">
    <div>
      <Headertwo/>
    </div>
  </div>
    </section>
    <section>
  <div className="all-jobs-ban">
  <div className="container">
  <div className="row">
    <div className="jtit">
      <h1>Find Service Experts</h1>
      <p>We make it easy to hire the right professional for your Home</p>
    </div>
    <br />
    <div className="job-sear">
      <form
        name="expert_filter_form"
        id="expert_filter_form"
        className="expert_filter_form"
      >
        <ul>
          <li className="sr-sea">
            <select
              className="chosen-select"
              id="expert-select-search1"
              name="expert-select-search"
              style={{ display: "none" }}
            >
              <option value="Plumbers">Plumbers</option>
              <option value="LED Tv Services">LED Tv Services</option>
              <option value="AC Services">AC Services</option>
              <option value="Electrical service">Electrical service</option>
              <option value="Car service">Car service</option>
              <option value="Pest control service">Pest control service</option>
              <option value="House Cleaning service">
                House Cleaning service
              </option>
              <option value="Bike service">Bike service</option>
              <option value="Home restoration services">
                Home restoration services
              </option>
              <option value="House Decoration Services">
                House Decoration Services
              </option>
              <option value="Laptop service">Laptop service</option>
            </select>
            <div
              className="chosen-container chosen-container-single"
              title=""
              id="expert_select_search1_chosen"
              style={{ width: 282 }}
            >
              <a className="chosen-single">
                <span>Plumbers</span>
                <div>
                  <b />
                </div>
              </a>
              <div className="chosen-drop">
                <div className="chosen-search">
                  <input
                    className="chosen-search-input"
                    type="text"
                    autoComplete="off"
                  />
                </div>
                <ul className="chosen-results" />
              </div>
            </div>
          </li>
          <li className="sr-loc">
            <select
              className="chosen-select"
              id="job-select-city"
              name="serjobsloc"
              style={{ display: "none" }}
            >
              <option value={1}>Los Angeles</option>
              <option value={2}>Chicago</option>
              <option value={4}>New york</option>
              <option value={7}>Phoenix</option>
              <option value={8}>Dallas</option>
              <option value={9}>San Jose</option>
            </select>
            <div
              className="chosen-container chosen-container-single"
              title=""
              id="job_select_city_chosen"
              style={{ width: 218 }}
            >
              <a className="chosen-single">
                <span>Los Angeles</span>
                <div>
                  <b />
                </div>
              </a>
              <div className="chosen-drop">
                <div className="chosen-search">
                  <input
                    className="chosen-search-input"
                    type="text"
                    autoComplete="off"
                  />
                </div>
                <ul className="chosen-results" />
              </div>
            </div>
          </li>
          <li className="sr-btn">
            <button id="expert_filter_submit">
              <i className="material-icons">search</i>
            </button>
          </li>
        </ul>
      </form>
    </div>
    <div className="job-pop-tag">
      <a href="https://bizbookdirectorytemplate.com/all-service-experts/ac-services">
        AC Services
      </a>
      <a href="https://bizbookdirectorytemplate.com/all-service-experts/led-tv-services">
        LED Tv Services
      </a>
      <a href="https://bizbookdirectorytemplate.com/all-service-experts/car-service">
        Car service
      </a>
      <a href="https://bizbookdirectorytemplate.com/all-service-experts/electrical-service">
        Electrical service
      </a>
      <a href="https://bizbookdirectorytemplate.com/all-service-experts/plumbers">
        Plumbers
      </a>
    </div>
  </div>
</div>

  </div>
</section>

<Footer/>
<BottomMenu/>
    </div>
  )
}

export default page
