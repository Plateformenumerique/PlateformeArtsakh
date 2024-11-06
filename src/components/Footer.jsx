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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolore commodi illo sunt, natus eum doloribus eos perferendis mollitia beatae esse veritatis itaque voluptas, fuga iusto. Delectus omnis minima commodi!
                    </p>
                </div>

                <div>
                    <p className='font-medium text-xl mb-5'>ABOUT US</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <Link to="/">
                            <li>Home</li>
                        </Link>
                        <Link to="/acteurs">
                            <li>Acteurs</li>
                        </Link>
                        <Link to="/projets">
                            <li>Projets</li>
                        </Link>
                        <Link to="/private-policy">
                            <li>Privacy policy</li>
                        </Link>
                    </ul>
                </div>

                <div>
                    <p className='font-medium text-xl mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+33 05 .. .. .. ..</li>
                        <li>cotact@contact.fr</li>
                    </ul>
                </div>

            </div>
            
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2024@ us.com - All Right Reserved</p>
            </div>
        </>
    )
}

export default Footer