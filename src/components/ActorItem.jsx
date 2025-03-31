import React from 'react';
import { Link } from 'react-router-dom';

const ActorItem = ({ id, name, description, domain, type, establishedDate, logo, dirigeant }) => {
    const isCollectiviteTerritoriale = Array.isArray(type) && type.includes('Collectivité territoriale');

    return (
        <div>
            <div className='text-gray-700'>
                {/* Card to present actors */}
                <Link to={`/acteurs/${id}`}>
                    <div className='flex flex-col bg-white py-6 px-3 border rounded-lg shadow-md hover:shadow-lg h-auto'>
                        <div className='flex flex-col sm:flex-row items-center mb-4'>
                            {logo && <img src={logo} alt={`${name} logo`} className='w-16 h-auto mb-4 sm:mb-0' />}
                            <h2 className='ml-2 text-lg font-semibold cursor-pointer'>{name}</h2>
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-sm text-gray-500 font-semibold'>
                                {Array.isArray(domain) ? domain.join(', ') : domain}
                            </p>
                            <p className='text-sm text-gray-500 font-semibold pt-2'>
                                {Array.isArray(type) ? type.join(', ') : type}
                            </p>
                            {dirigeant && <p className='text-sm text-gray-500 mt-2'>dirigeant(e): <span className='font-semibold'>{dirigeant}</span></p>}
                            <p className='text-sm text-gray-500 mt-2'>{description}</p>
                            {!isCollectiviteTerritoriale && establishedDate && (
                                <p className='text-sm text-gray-500 mt-2 font-semibold'>Depuis: {establishedDate}</p>
                            )}
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default ActorItem;