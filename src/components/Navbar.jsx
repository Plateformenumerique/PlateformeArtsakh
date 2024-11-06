import React, { useState, useContext } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { Context } from '../context/Context'

const Navbar = () => {

    const {setShowSearch, getCartCount, navigate, token, setToken, setCartItems} = useContext(Context);
    const [visible, setVisible] = useState(false);

    return (
        <div className='flex items-center justify-between py-5 font-medium'>
            <Link to='/'>
                <img src={assets.logo} className='w-36' alt="" />
            </Link>

            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                
                <NavLink to='/' className='flex flex-col items-center gap-1'>
                    <p>ACCUEIL</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to='/acteurs' className='flex flex-col items-center gap-1'>
                    <p>ACTEURS</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to='/projets' className='flex flex-col items-center gap-1'>
                    <p>PROJETS</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to='/messagerie' className='flex flex-col items-center gap-1'>
                    <p>MESSAGERIE</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to='/actualites' className='flex flex-col items-center gap-1'>
                    <p>ACTUALITÉS</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to='/cartographie' className='flex flex-col items-center gap-1'>
                    <p>CARTOGRAPHIE</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
            </ul>

            <div className='flex items-center gap-6'>
                <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />

                <img onClick={()=> setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
                <NavLink to='/donation'>
                    <p className='hidden sm:block'>FAIRE UN DON</p>
                </NavLink>
            </div>

            {/* SideBar Mennu for small screens */}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="" />
                        <p>Back</p>
                    </div>
                    <NavLink className='py-2 pl-6 border' to='/'>ACCUEIL</NavLink>
                    <NavLink className='py-2 pl-6 border' to='/acteurs'>ACTEURS</NavLink>
                    <NavLink className='py-2 pl-6 border' to='/collection'>PROJETS</NavLink>
                    <NavLink className='py-2 pl-6 border' to='/message'>MESSAGERIE</NavLink>
                    <NavLink className='py-2 pl-6 border' to='/actualite'>ACTUALITÉ</NavLink>
                    <NavLink className='py-2 pl-6 border' to='/cartographie'>CARTOGRAPHIE</NavLink>
                </div>
            </div>

        </div>
    )
}

export default Navbar