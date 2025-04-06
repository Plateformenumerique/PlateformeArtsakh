import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/Context'
import Title from '../components/Title';
import ActualiteItem from '../components/ActualiteItem';

const CollectionActualite = () => {

    const { actualites, search, showSearch } = useContext(Context);
    const [filterActualites, setFilterActualites] = useState(actualites)

    const truncateDetailContent = (detailedContent, maxLength) => {
        if (detailedContent.length > maxLength) {
            return detailedContent.substring(0, maxLength) + '...';
        }
        return detailedContent;
    }

    const applyFilter = () => {
        let ActualitesCopy = actualites.slice();

        if (showSearch && search) {
            ActualitesCopy = ActualitesCopy.filter(item => item.name && item.name.toLowerCase().includes(search.toLowerCase()))
        }

        setFilterActualites(ActualitesCopy)
    }

    useEffect(() => {
        applyFilter();
    }, [search, showSearch])

    return (
        <div className='flex flex-col gap-1 pt-10 border-t'>
            <div className='flex justify-between text-base sm:text-2xl'>
                <Title text1='Toutes les réalisations ' text2='récentes et actualités' />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-6'>
                {
                    filterActualites.map((item, index) => (
                        <ActualiteItem 
                            key={index} 
                            id={item._id} 
                            title={item.title} 
                            subtitle={item.subtitle} 
                            date={item.date} 
                            image={item.image} 
                            video={item.video}
                            lien={item.lien}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default CollectionActualite