import React from 'react'
import { SidebarData } from './SidebarData'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const DbMenu = ({ session, dashboardvisiblity, setDashboardVisiblity }) => {
    console.log(dashboardvisiblity)
    const pathname = usePathname();
    return (
        <div className={`al duration-500 ${session?.user ? 'block' : 'hidden'}`}   >
            <div className="head-pro">
                <img src={`${(session?.user?.image?.length > 0) ? `${session.user.image}` : '/icon/main-logo.png'}`} height={36} width={36} alt="" />
                <b>Profile by</b>
                <br />
                <h4>{session?.user?.name}</h4>
                <span onClick={() => setDashboardVisiblity(!dashboardvisiblity)} className="fclick"></span>
            </div>
            <div className={`db-menu ${dashboardvisiblity ? 'act' : ''}`} >
                <span className="material-icons db-menu-clo" onClick={()=> setDashboardVisiblity(!dashboardvisiblity)}>close</span>
                <div className="ud-lhs-s1">
                    <img src="/user/62736rn53themes.png" alt />
                    <div className="ud-lhs-pro-bio">
                        <h4>{session?.user?.name}</h4>
                        <b>Join on 15, Apr 2024</b>
                        <a className="ud-lhs-view-pro" target="_blank" href="https://bizbookdirectorytemplate.com/profile/rn53">My Profile</a>
                    </div>
                </div>
                <ul>
                    {SidebarData.map((item, index) => {
                        return <li key={index}>
                            {item.heading && <h4>{item.heading}</h4>}
                            <Link href={item.path} className={pathname == item.path && 'db-lact'}>
                                <img src={item.icon} alt="theme" />
                                {item.title}
                            </Link>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default DbMenu
