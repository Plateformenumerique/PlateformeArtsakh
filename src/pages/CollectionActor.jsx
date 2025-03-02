import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Context } from '../context/Context'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ActorItem from '../components/ActorItem';

const CollectionActor = () => {
  const { acteurs, search, showSearch } = useContext(Context);
  const location = useLocation();
  const [showFilter, setShowFilter] = useState(false)
  const [filterActors, setFilterActors] = useState(acteurs)
  const [sortTypeActor, setSortTypeActor] = useState([])
  const [sortDomaine, setSortDomaine] = useState([])
  const [sortOrder, setSortOrder] = useState('asc') // 'asc' for ascending, 'desc' for descending

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const type = params.get('type');
    if (type) {
      setSortTypeActor([type]);
    }
  }, [location]);

  const toggleType = (e) => {
    if (sortTypeActor.includes(e.target.value)) {
      setSortTypeActor(prev => prev.filter(item => item !== e.target.value))
    } else {
      setSortTypeActor(prev => [...prev, e.target.value])
    }
  }

  const toggleDomaine = (e) => {
    if (sortDomaine.includes(e.target.value)) {
      setSortDomaine(prev => prev.filter(item => item !== e.target.value))
    } else {
      setSortDomaine(prev => [...prev, e.target.value])
    }
  }

  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + '...';
    }
    return description;
  };

  const applyFilter = () => {
    let actorsCopy = acteurs.slice();
  
    if (sortTypeActor.length > 0) {
      actorsCopy = actorsCopy.filter(item => 
        item.type.some(type => sortTypeActor.includes(type))
      );
    }

    if (sortDomaine.length > 0) {
      actorsCopy = actorsCopy.filter(item => 
        item.domain.some(d => sortDomaine.includes(d))
      );
    }
  
    if (showSearch && search) {
      actorsCopy = actorsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    // Sort actors by name
    actorsCopy.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
  
    setFilterActors(actorsCopy);
  };

  useEffect(() => {
    applyFilter();
  }, [sortTypeActor, sortDomaine, sortOrder, search, showSearch])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/** Filtres gauche */}
      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>Filtres
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/** Filtre par Pays */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>DOMAINE D'ACTIVITÉ</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Logement'} onChange={toggleDomaine} checked={sortDomaine.includes('Logement')} /> Logement
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Formation/Emploi'} onChange={toggleDomaine} checked={sortDomaine.includes('Formation/Emploi')} /> Formation/Emploi
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Agriculture'} onChange={toggleDomaine} checked={sortDomaine.includes('Agriculture')} /> Agriculture
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Santé'} onChange={toggleDomaine} checked={sortDomaine.includes('Santé')} /> Santé
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Patrimoine'} onChange={toggleDomaine} checked={sortDomaine.includes('Patrimoine')} /> Patrimoine
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Education'} onChange={toggleDomaine} checked={sortDomaine.includes('Education')} /> Education
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Sociale'} onChange={toggleDomaine} checked={sortDomaine.includes('Sociale')} /> Sociale
            </p>
          </div>
        </div>
        {/** Filtre par Type */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>PROFIL DE LA STRUCTURE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Associations'} onChange={toggleType} checked={sortTypeActor.includes('Associations')} /> Associations
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Collectivités territoriales'} onChange={toggleType} checked={sortTypeActor.includes('Collectivités territoriales')} /> Collectivités territoriales
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Institutions'} onChange={toggleType} checked={sortTypeActor.includes('Institutions')} /> Institutions
            </p>
          </div>
        </div>
      </div>

      {/** Filtre droite */}
      <div className='flex-1 '>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1="Tous nos Acteurs engagés " text2="en Arménie en soutien des déplacés d'Artsakh" />
          {/** Trier par ordre alphabétique */}
          <select onChange={(e) => setSortOrder(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value='asc'>Trier par : A-Z</option>
            <option value='desc'>Trier par : Z-A</option>
          </select>
        </div>

        {/** Liste des acteurs */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterActors.map((item, index) => (
              <ActorItem 
                key={index} 
                id={item._id} 
                name={item.name} 
                domain={item.domain} 
                type={item.type} 
                description={truncateDescription(item.description, 115)} 
                logo={item.logo} 
                website={item.website}
                dirigent={item.dirigent}
                establishedDate={item.establishedDate}
              />
            ))
          }
        </div>

      </div>
    </div>
  )
}

export default CollectionActor