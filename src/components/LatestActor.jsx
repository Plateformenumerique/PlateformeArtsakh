import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../context/Context'
import Title from './Title';

const LatestActor = () => {
    const { acteurs } = useContext(Context);
    const navigate = useNavigate();

    // Get unique domains
    const uniqueDomains = [...new Set(acteurs.map(actor => actor.domain))];

    // Domain descriptions
    const domainDescriptions = {
        "Logement": "Projets visant à fournir des logements sûrs et abordables pour les populations déplacées.",
        "Emploi - Formation": "Initiatives pour améliorer l'accès à l'emploi et offrir des formations professionnelles.",
        "Agriculture": "Projets agricoles pour soutenir la sécurité alimentaire et le développement rural.",
        "Santé": "Programmes de santé pour améliorer l'accès aux soins médicaux et promouvoir la santé publique.",
        "Patrimoine": "Actions pour préserver et valoriser le patrimoine culturel et historique."
    };

    // Handle click to navigate to CollectionActor with filter
    const handleDomainClick = (domain) => {
        navigate(`/acteurs?domain=${domain}`);
    }

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1='Découvrez ' text2='Nos acteurs' />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Découvrez les dernières associations qui nous ont rejointent. Découvrez leurs actions et leurs
                compétences sur différents projets menés en faveur des populations déplacées du Haut-Karabagh.</p>
            </div>

            {/* Rendering Domain Cards */}
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
                {
                    uniqueDomains.map((domain, index) => (
                        <div 
                            key={index} 
                            className='cursor-pointer p-4 border rounded-lg shadow-md hover:shadow-lg'
                            onClick={() => handleDomainClick(domain)}
                        >
                            <h3 className='text-xl font-semibold'>{domain}</h3>
                            <p className='text-sm text-gray-700'>{domainDescriptions[domain]}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default LatestActor