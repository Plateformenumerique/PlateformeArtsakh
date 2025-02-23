import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../context/Context';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProjectItem from '../components/ProjectItem';
import ModalFormProject from '../components/ModalFormProject';

const CollectionProject = () => {
  const { projets, search, showSearch } = useContext(Context);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProjects, setFilterProjects] = useState(projets);
  const [sortTypeProject, setSortTypeProject] = useState([]);
  const [sortDomaine, setSortDomaine] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' for ascending, 'desc' for descending
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleType = (e) => {
    if (sortTypeProject.includes(e.target.value)) {
      setSortTypeProject(prev => prev.filter(item => item !== e.target.value));
    } else {
      setSortTypeProject(prev => [...prev, e.target.value]);
    }
  };

  const toggleDomaine = (e) => {
    if (sortDomaine.includes(e.target.value)) {
      setSortDomaine(prev => prev.filter(item => item !== e.target.value));
    } else {
      setSortDomaine(prev => [...prev, e.target.value]);
    }
  };

  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + '...';
    }
    return description;
  };

  const applyFilter = () => {
    let projectsCopy = projets.slice();

    if (sortTypeProject.length > 0) {
      projectsCopy = projectsCopy.filter(item => sortTypeProject.includes(item.type));
    }

    if (sortDomaine.length > 0) {
      projectsCopy = projectsCopy.filter(item => sortDomaine.includes(item.domain));
    }

    if (showSearch && search) {
      projectsCopy = projectsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    // Sort Project by name
    projectsCopy.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

    setFilterProjects(projectsCopy);
  };

  useEffect(() => {
    applyFilter();
  }, [sortTypeProject, sortDomaine, sortOrder, search, showSearch]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/** Filtres gauche */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>Filtres
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/** Filtre par Pays */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>PAYS</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Logement'} onChange={toggleDomaine} checked={sortDomaine.includes('Logement')} /> Logement
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Emploi - Formation'} onChange={toggleDomaine} checked={sortDomaine.includes('Emploi - Formation')} /> Emploi - Formation
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
          </div>
        </div>
        {/** Filtre par Type */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE DE MISSION</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Urgence'} onChange={toggleType} /> Urgence
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Développement'} onChange={toggleType} /> Développement
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Soutien'} onChange={toggleType} /> Soutien
            </p>
          </div>
        </div>
      </div>

      {/** Filtre droite */}
      <div className='flex-1 '>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
        <Title text1='Tous nos ' text2='Projets / Annonces' />
        <button onClick={() => setIsModalOpen(true)} className='blue-gradient_bg text-white text-xs px-10 py-4'>Vous avez un projet ?</button>
          {/** Trier par ordre alphabétique */}
          <select onChange={(e) => setSortOrder(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value='asc'>Trier par : A-Z</option>
            <option value='desc'>Trier par : Z-A</option>
          </select>
        </div>

        {/** Liste des projets */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 gap-y-6'>
          {
            filterProjects.map((item, index) => (
              <ProjectItem
                key={index}
                id={item._id}
                name={item.name}
                description={truncateDescription(item.description, 200)}
                association={item.association}
                type={item.type}
                startDate={new Date(item.startDate).toLocaleDateString()}
                endDate={new Date(item.endDate).toLocaleDateString()}
                budget={item.budget}
                currency={item.currency}
                image={item.image}
                domain={item.domain}
              />
            ))
          }
        </div>
      </div>

      {/** Modal Form */}
      <ModalFormProject isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default CollectionProject;