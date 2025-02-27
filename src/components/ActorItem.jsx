import React from 'react'
import { Link } from 'react-router-dom'

const ActorItem = ({ id, name, description, domain, type, establishedDate, website, logo }) => {
    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.slice(0, maxLength) + '...';
    };

    return (
        <div>
            <div className='text-gray-700'>
                {/* Card to present actors */}
                <div className='flex flex-col bg-white py-6 px-3 border rounded-lg shadow-md hover:shadow-lg h-auto'>
                    <div className='flex flex-col sm:flex-row items-center mb-4'>
                        {logo && <img src={logo} alt={`${name} logo`} className='w-16 h-auto mb-4 sm:mb-0' />}
                        <h2 className='ml-2 text-lg font-semibold cursor-pointer'>
                            <Link to={`/acteurs/${id}`}>{name}</Link>
                        </h2>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-sm text-gray-500 font-semibold'>{Array.isArray(domain) ? domain.join(', ') : domain}</p>
                        <p className='text-sm text-gray-500'>{Array.isArray(type) ? type.join(', ') : type}</p>
                        <p className='text-sm text-gray-500 mt-2'>{description}</p>
                        {establishedDate && <p className='text-sm text-gray-500 mt-2 font-semibold'>Depuis: {establishedDate}</p>}
                        <p className='text-sm text-blue-500 mt-2'>
                            <a href={website} target='_blank' rel='noopener noreferrer'>{truncateText(website, 30)}</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActorItem