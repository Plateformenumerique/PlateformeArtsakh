import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../context/Context'
import Title from './Title';
import ActorItem from './ActorItem';

const LatestActor = () => {

    const { acteurs } = useContext(Context);
    const [latestActeurs, setlatestActeurs] = useState([]);

    useEffect(() => {
        setlatestActeurs(acteurs.slice(0, 4));
    }, [])

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1='Découvrez ' text2='Nos acteurs' />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Découvrez les dernières associations qui nous ont rejointent. Découvrez leurs actions et leurs
                compétences sur différents projets menés en faveur des populations déplacées du Haut-Karabagh.</p>
            </div>

            {/* Rendering Actors Item */}
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
                {
                    latestActeurs.map((item, index) => (
                        <ActorItem key={index} id={item._id} name={item.name} country={item.country} type={item.type} description={item.description} logo={item.logo} />
                    ))
                }
            </div>
        </div>
    )
}

export default LatestActor