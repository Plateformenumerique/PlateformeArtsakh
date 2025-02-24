import React from 'react'
import { Link } from 'react-router-dom'

const ActualiteItem = ({ id, title, subtitle, content, detailedContent, date, author, image }) => {
    return (
        <div>
            {/* Card to present Actualites */}
            <div className='flex flex-col bg-white border rounded-lg shadow-md hover:shadow-lg h-auto'>
                {image && (
                    <div className='w-full h-56 overflow-hidden rounded-t-lg'>
                        <img src={image} alt={`${title} image`} className='w-full h-full object-cover object-center' />
                    </div>
                )}
                <div className='px-4'>
                    <div className='flex flex-col sm:flex-row items-center mt-2'>
                        <h2 className='text-xl font-semibold'>{title}</h2>
                    </div>
                    <div className='flex flex-row items-center my-2'>
                        <p className='text-sm text-gray-500 ml-2'>Auteur : {author}</p>
                        <p className='text-sm text-gray-500 ml-2'>Le {new Date(date).toLocaleDateString()}</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-base text-gray-500 font-semibold'>{subtitle}</p>
                        <p className='text-sm text-gray-500 mt-2'>{content}</p>
                        {detailedContent && <p className='text-sm text-gray-500 mt-2'>{detailedContent}</p>}
                    </div>
                </div>

                <div className='flex justify-end mt-4'>
                    <Link to={`/actualites/${id}`} className='text-white hover:underline py-2 px-4 rounded-tl-lg rounded-br-lg blue-gradient_bg'>
                        Lire l'article
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ActualiteItem
