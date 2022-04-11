import React from 'react'
import {useRouter} from 'next/router'
import {useMenuState,useRouterState} from '../../store/useStore'
import Link from 'next/link'
const menuList = [
    {
        id: 0,
        name: 'home',
        url: '/',
        routeName: 'Home'
    },
    {
        id: 1,
        name: 'portfolio',
        url: '/portfolio',
        routeName: 'Portfolio'
    },
    {
        id: 2,
        name: 'about me',
        url: '/about-me',
        routeName: 'About me'
    }
]
function Menu() {
    const router = useRouter()
    const openMenu = useMenuState(state => state.openMenu)
    const isMenuOpen = useMenuState(state => state.isMenuOpen)
    const setRoute = useRouterState(state => state.setRoute)

    const handleClickLink = routeName => {
        setTimeout(() => {
            openMenu()
        }, 500)
        setRoute(routeName)
    }

    return (
        <div className={`menu fixed inset-0 bg-transparent z-[20] ${isMenuOpen? "pointer-events-auto" : "pointer-events-none"}`}>
            <div className={`absolute flex justify-center items-center inset-0 bg-darkBlue transition-all ${isMenuOpen?"translate-y-0" : "-translate-y-full" }`}>
                <ul className="menu-list flex flex-col items-center md:items-start text-[5rem] md:text-[6rem] leading-[1]">
                    {
                        menuList.map(menu => {
                            return (
                                <li onClick={() => handleClickLink(menu.routeName)} key={menu.id} className={`text-white hover:text-orange w-max ${router.pathname === menu.url? "text-orange/60 hover:text-orange/60 cursor-default" : "" } `}>
                                    <Link href={menu.url}>
                                        <a>{menu.name}</a>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
  )
}

export default Menu