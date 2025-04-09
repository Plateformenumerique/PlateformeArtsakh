import React from 'react';
import { Link } from 'react-router-dom';

const ActorItem = ({ id, name, description, domain, type, establishedDate, logo, dirigeant, email, contact, website, telephone }) => {
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
                            <p className='text-sm text-gray-500 font-semibold mt-2'>
                                {Array.isArray(type) ? type.join(', ') : type}
                            </p>
                            <p className='text-sm text-gray-500 font-semibold mt-2'>
                                {Array.isArray(domain) ? domain.join(', ') : domain}
                            </p>
                            {!isCollectiviteTerritoriale && dirigeant && (
                                <p className='text-sm text-gray-500 mt-2'>Dirigeant(e): {dirigeant}</p>
                            )}
                            {!isCollectiviteTerritoriale && establishedDate && (
                                <p className='text-sm text-gray-500 mt-2 font-semibold'>Depuis: {establishedDate}</p>
                            )}
                            {isCollectiviteTerritoriale && email && (
                                <p className='text-sm text-gray-500 mt-2'>
                                    Email: <span className='font-semibold'>{email}</span>
                                </p>
                            )}
                            {isCollectiviteTerritoriale && telephone && (
                                <p className='text-sm text-gray-500 mt-2'>
                                    Téléphone: <span className='font-semibold'>{telephone}</span>
                                </p>
                            )}
                            {isCollectiviteTerritoriale && contact && (
                                <p className='text-sm text-gray-500 mt-2'>
                                    Contact: <span className='font-semibold'>{contact}</span>
                                </p>
                            )}
                            {isCollectiviteTerritoriale && website && (
                                <p className='text-sm text-gray-500 mt-1'>
                                    Site internet: <a href={website} className='text-blue-500 underline'>{website}</a>
                                </p>
                            )}
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default ActorItem;