import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {useMenuState} from '../../store/useStore'
import Link from 'next/link'
function MenuBar() {
    const openMenu = useMenuState(state => state.openMenu)
    const isMenuOpen = useMenuState(state => state.isMenuOpen)

    return (
        <div className="fixed top-0 w-full py-6 md:py-8 z-[25] flex justify-between items-center px-8 md:px-10">

            <div className={`logo text-xl ${isMenuOpen? "text-white" : "text-black"}`}>
                <Link href="/"> 
                    <a>JC Onciangco</a>
                </Link>
            </div>

            <div onClick={openMenu} className={`menu h-[3rem] md:h-[4rem] aspect-square ${isMenuOpen? "bg-white" : "bg-darkBlue"} rounded-full flex justify-center items-center`}>
                <div className="icon-wrapper h-[1.2rem] md:h-[1.5rem] aspect-square flex hover:scale-[1.1] transition-all">
                    <FontAwesomeIcon icon={faBars} color={isMenuOpen? '#1D3C58' : 'white'} width={'100%'} />
                </div>
            </div>
        </div>
  )
}

export default MenuBar