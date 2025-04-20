import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div>
                    <div className='flex flex-row gap-6 items-center'> 
                        <img src={assets.logo_plateforme} alt="" className='mb-5 w-36 h-auto' />
                        <img src={assets.logo_asa} alt="" className='mb-5 w-32' />
                    </div>
                </div>

                <div>
                    <p className='font-medium text-xl mb-5'>À PROPOS</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <Link to="/">
                            <li>ACCUEIL</li>
                        </Link>
                        <Link to="/acteurs">
                            <li>ACTEURS</li>
                        </Link>
                        <Link to="/projets">
                            <li>PROJETS</li>
                        </Link>
                        <Link to="/confidentialite">
                            <li>POLITIQUE DE CONFIDENTIALITÉ</li>
                        </Link>
                    </ul>
                </div>

                <div>
                    <p className='font-medium text-xl mb-5'>RESTER EN CONTACT</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>secretariat@soutien-artsakh.eu</li>
                    </ul>
                </div>

            </div>
            
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>
                    Copyright 2024-2025 - Tous droits réservés | Créé par Mathieu Lalande - 
                    <a href="https://mathieulalandeportfolio.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        Portfolio
                    </a>
                </p>
            </div>
        </>
    )
}

export default Footer