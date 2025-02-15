import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div>
                    <img src={assets.logo} alt="" className='mb-5 w-32' />
                    <p className='w-full md:w-2/3 text-gray-600'>
                        Cette application vise à connecter les Organisations autour de projets communs, permettant non seulement de collaborer efficacement, mais aussi de visualiser et de suivre les différents projets en cours. Notre objectif est de faciliter les synergies et de maximiser l'impact des initiatives humanitaires.
                    </p>
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
                        <li>contact.artsakh@connect.fr</li>
                    </ul>
                </div>

            </div>
            
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2024 - Tous droits réservés</p>
            </div>
        </>
    )
}

export default Footer