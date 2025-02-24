import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../context/Context'
import Title from './Title';

const LatestActor = () => {
    const { acteurs } = useContext(Context);
    const navigate = useNavigate();

    // Get unique types
    const uniqueTypes = [...new Set(acteurs.flatMap(actor => actor.type))];

    // Type descriptions
    const typeDescriptions = {
        "Organisation non gouvernementale": "Organisations indépendantes du gouvernement, souvent à but non lucratif, qui travaillent sur des projets humanitaires et de développement.",
        "Association": "Groupes de personnes réunies pour un but commun, souvent à but non lucratif.",
        "Collectivité territoriale": "Entités administratives locales qui gèrent les affaires publiques dans une région spécifique."
    };

    // Handle click to navigate to CollectionActor with filter
    const handleTypeClick = (type) => {
        navigate(`/acteurs?type=${type}`);
    }

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1='Découvrez ' text2='Nos acteurs' />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Découvrez les dernières associations qui nous ont rejointent. Découvrez leurs actions et leurs
                compétences sur différents projets menés en faveur des populations déplacées du Haut-Karabagh.</p>
            </div>

            {/* Rendering Type Cards */}
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 gap-y-6'>
                {
                    uniqueTypes.map((type, index) => (
                        <div 
                            key={index} 
                            className='cursor-pointer p-4 border rounded-lg shadow-md hover:shadow-lg'
                            onClick={() => handleTypeClick(type)}
                        >
                            <h3 className='text-xl font-semibold'>{type}</h3>
                            <p className='text-sm text-gray-700'>{typeDescriptions[type]}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default LatestActor