import React,{useState} from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";
const SubMenu = () => {
    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav);
    const [currentPath, setCurrentPath] = useState("");
    const router = useRouter();
  return (
   <>
    <li className="ic-seo">
          <Link href="#" >
            SEO Settings
          </Link>
          <div>
            <h4>
              Listing category
              {/* TOOL TIP */}
              <div className="ttip-com">
                <CategoryIcon/>
              </div>
              {/* END */}
            </h4>
            <ol>
              <li>
                {" "}
                <a href="seo-listing-options.html">SEO options</a>
              </li>
            </ol>
            <h4>
              Target listings promotion
              {/* TOOL TIP */}
              <div className="ttip-com">
              <CategoryIcon/>              
              </div>
              {/* END */}
            </h4>
            <ol>
              <li>
                {" "}
                <a href="seo-target-promotion-all-pages.html">All Pages</a>
              </li>
              <li>
                {" "}
                <a href="seo-target-promotion-add-new-page.html">
                  Add new page
                </a>
              </li>
            </ol>
            <h4>
              General promotion pages
              {/* TOOL TIP */}
              <div className="ttip-com">
              <CategoryIcon/>

              </div>
              {/* END */}
            </h4>
            <ol>
              <li>
                {" "}
                <a href="seo-general-all-pages.html">All Pages</a>
              </li>
              <li>
                {" "}
                <a href="seo-general-add-new-page.html">Add new page</a>
              </li>
            </ol>
            <h4>
              E-book &amp; Digital pages
              {/* TOOL TIP */}
              <div className="ttip-com">
              <CategoryIcon/>

              </div>
              {/* END */}
            </h4>
            <ol>
              <li></li>
              <li>
                {" "}
                <a href="seo-ebook-all-pages.html">All Pages</a>
              </li>
              <li>
                {" "}
                <a href="seo-ebook-add-new-page.html">Add new page</a>
              </li>
            </ol>
            <h4>
              Google Analytics
              {/* TOOL TIP */}
              <div className="ttip-com">
              <CategoryIcon/>
                
              </div>
              {/* END */}
            </h4>
            <ol>
              <li></li>
              <li>
                {" "}
                <a href="seo-google-analytics-code.html">
                  Google Analytics Code
                </a>
              </li>
            </ol>
            <h4>
              Sitemap
              {/* TOOL TIP */}
              <div className="ttip-com">
              <CategoryIcon/>
              </div>
              {/* END */}
            </h4>
            <ol>
              <li></li>
              <li>
                {" "}
                <a href="seo-xml-sitemap.html">XML Sitemap</a>
              </li>
            </ol>
            <h4>
              Meta tags
              {/* TOOL TIP */}
              <div className="ttip-com">
              <CategoryIcon/>
              </div>
              {/* END */}
            </h4>
            <ol>
              <li></li>
              <li>
                {" "}
                <a href="seo-meta-tags.html">All Pages</a>
              </li>
              <li>
                {" "}
                <a href="seo-all-listing-options.html">Listing SEO options</a>
              </li>
              <li>
                {" "}
                <a href="seo-all-blog-options.html">Blog SEO options</a>
              </li>
              <li>
                {" "}
                <a href="seo-all-event-options.html">Event SEO options</a>
              </li>
              <li>
                {" "}
                <a href="seo-all-product-options.html">Product SEO options</a>
              </li>
            </ol>
          </div>
        </li>
   </>
  )
}

export default SubMenu
