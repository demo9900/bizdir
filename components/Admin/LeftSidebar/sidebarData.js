import React from 'react'

export const sidebarData = [
    {
        title:"Dashboard",
        path:"/admin/profile",
        class:"ic-db",
    },
    {
        title:"SEO Settings",
        path:"/admin/seo-settings",
        class:"ic-seo",
        subNav:[
          {
            title:"Listing category",
            icon: <CategoryIcon/>,
            label:[
                {
                 name:"SEO options",
                 path:"/admin/seo-listing-options",
                }
            ],
          },
          {
            title:"Target listings promotion",
            icon: <CategoryIcon/>,
            label:[
                {
                 name:"All Pages",
                 path:"/admin/seo-target-promotion-all-pages",
                },
                {
                 name:" Add new page",
                 path:"/admin/seo-target-promotion-add-new-page"
                }
            ],
          },
          {
            title:"General promotion pages",
            icon: <CategoryIcon/>,
            label:[
                {
                 name:"All Pages",
                 path:"/admin/seo-general-all-pages"
                },
                {
                 name:"Add new page",
                 path:"/admin/seo-general-add-new-page"
                }
            ]
          },
          {
            title:"E-book &amp; Digital pages",
            icon: <CategoryIcon/>,
            label:[
                {
                    name:"All Pages",
                    path:"/admin/seo-ebook-all-pages"
                },
                {
                    name:"Add new page",
                    path:"/admin/seo-ebook-add-new-page"
                }
            ]
          },
          {
            title:"Google Analytics",
            icon:<CategoryIcon/>,
            label:[
                {
                    name:"Google Analytics Code",
                    path:"/admin/seo-google-analytics-code"
                }
            ]
          },
          {
            title:"Sitemap",
            icon:<CategoryIcon />,
            label:[
                {
                    name:"XML Sitemap",
                    path:"/admin/seo-xml-sitemap"
                },
            ]
          },
          {
            title:" Meta tags",
            icon: <CategoryIcon />,
            label:[
                {
                    name:"All Pages",
                    path:"/admin/seo-meta-tags"
                },
                {
                    name:"Listing SEO options",
                    path:"seo-all-listing-options"
                },
                {
                    name:"Blog SEO options",
                    path:"admin/seo-all-blog-options"
                },
                {
                    name:"Event SEO options",
                    path:"/admin/seo-all-event-options"
                },
                {
                    name:"Product SEO options",
                    path:"admin/seo-all-product-options"
                }
            ]
            
          }
        ]
      },
      {
        title:"Search Settings",
        path:"/admin/",
        class:"ic-sear",
        subNav:[
            {
             title:"Search list",
             icon:<CategoryIcon/>,
             label:[
                {
                    name:"Search list",
                    path:"/admin/search-lists"
                },
                {
                    name:"Add New",
                    path:"/admin/search-lists-add"
                }
             ]   
            },
            {
                title:"Search positions",
                icon:<CategoryIcon/>,
                label:[
                    {
                        name:"Change positions",
                        path:"/admin/search-positions"
                    }
                ]
            }
        ]
      },
      {
        title:" Users",
        path:"/admin/users",
        class:"ic-user",
        subNav:[
            {
            label:[
                {
                 name:"New User Requests",
                 path:"/admin/admin-new-user-requests"
                },
                {
                    name:" New COD Payment Requests",
                    path:"/admin/admin-new-cod-requests"
                },
                {
                    name:"All Users",
                    path:"/admin/admin-all-users"
                },
                {
                    name:"All Users - General",
                    path:"/admin/admin-all-users-general"
                },
                {
                    name:"All Users - Service Providers",
                    path:"/admin/admin-all-users-service-provider"
                },
                {
                    name:"Free Users",
                    path:"/admin/admin-free-users"
                },
                {
                    name:"Standard Users",
                    path:"/admin/admin-standard-users"
                },
                {
                    name:"Premium Users",
                    path:"/admin/admin-premium-users"
                },
                {
                    name:"Premium Plus Users",
                    path:"/admin/admin-premium-plus-users"
                },
                {
                    name:"All Non-Paid Users",
                    path:"/admin/admin-non-paid-users"
                },
                {
                    name:"All Paid Users",
                    path:"/admin/admin-paid-users"
                },
                {
                    name:"Add new User",
                    path:"/admin/admin-add-new-user"
                }
            ]
            }
        ]
      },
      {
        title:"listings",
        path:"/admin",
        class:"ic-li",
        subNav:[
            {
            label:[
                {
                    name:"All listings",
                    path:"/admin/admin-all-listings"
                },
                {
                    name:"Add new listings",
                    path:"/admin/admin-add-new-listings"
                },
                {
                    name:"Create duplicate listings",
                    path:"/admin/admin-create-duplicate-listing"
                },
                {
                    name:"All Claim Requests",
                    path:"/admin/admin-claim-listing"
                },
                {
                    name:"Trash listings",
                    path:"/admin/admin-trash-listing"
                }
            ]
            }
        ]
      },
      {
        title:" Listing Promotions",
        path:"/admin/",
        class:"ic-poi",
        subNav:[
            {
             label:[
                {
                    name:"All Promotions",
                    path:"/admin/admin-all-promotions"
                },
                {
                    name:"Create New Promotions",
                    path:"/admin/admin-promote-now"
                },
                {
                    name:"All Points History",
                    path:"/admin/admin-all-points"
                },
                {
                    name:"Points Setting",
                    path:"/admin/admin-point-setting"
                }
             ] 
            }
        ]
      },
      {
        title:"Events",
        path:"/admin/",
        class:"ice-eve",
        subNav:[
            {
              label:[
                {
                    name:"All Events",
                    path:"/admin/admin-event"
                },
                {
                    name:"Add New Events",
                    path:"/admin/admin-add-new-event"
                }
              ]
            }
        ]
      }
];
