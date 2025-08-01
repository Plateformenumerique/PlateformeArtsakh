import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../context/Context'
import Title from './Title';

const LatestActor = () => {
    const { acteurs } = useContext(Context);
    const navigate = useNavigate();

    // Get unique types
    const uniqueTypes = [...new Set(acteurs.flatMap(actor => actor.type))];

    // Sort types in desired order
    const sortedTypes = uniqueTypes.sort((a, b) => {
        const order = ["Association", "Collectivités territoriale", "Institution"];
        return order.indexOf(a) - order.indexOf(b);
    });

    // Handle click to navigate to CollectionActor with filter
    const handleTypeClick = (type) => {
        navigate(`/acteurs?type=${type}`);
    }

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1='Découvrez ' text2='Nos acteurs' />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Découvrez les acteurs engagés en Arménie, leurs initiatives, actions et idées.
                </p>
            </div>

            {/* Rendering Type Cards */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 gap-y-6'>
                {
                    sortedTypes.map((type, index) => (
                        <div 
                            key={index} 
                            className='cursor-pointer p-4 border rounded-lg shadow-md hover:shadow-lg'
                            onClick={() => handleTypeClick(type)}
                        >
                            <h3 className='text-xl font-semibold justify-center flex'>{type}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default LatestActor