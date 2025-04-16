import React, { useState } from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'

const regions = [
  { id: 'region1', name: 'Syunik', details: 'Fourniture de soins médicaux et de soutien psychologique aux familles déplacées.', cx: '370', cy: '400', r: '10' },
  { id: 'region2', name: 'Shirak', details: 'Construction de logements temporaires pour les réfugiés.', cx: '100', cy: '200', r: '15' },
  { id: 'region3', name: 'Sevan', details: 'Programmes éducatifs pour les enfants déplacés.', cx: '250', cy: '300', r: '30' },
]

const Cartography = () => {
  const [selectedRegion, setSelectedRegion] = useState(null)

  const handleRegionClick = (regionId) => {
    const region = regions.find(r => r.id === regionId)
    setSelectedRegion(region)
  }

  return (
    <div className='flex flex-col gap-1 sm:gap-10 pt-10 border-t sm:text-2xl'>
      <div className='flex flex-col sm:flex-row w-full gap-4 '>
        <div className='flex flex-col sm:w-1/4 border-r border-gray-300 p-4'>
          <Title text1={'La'} text2={"cartographie"} />
          {selectedRegion ? (
            <div>
              <h2 className='text-lg font-semibold mb-4'>Information de l'action menée dans cette région</h2>
              <p className='text-base mb-2'>Nom: {selectedRegion.name}</p>
              <p className='text-base'>Détails: {selectedRegion.details}</p>
              <p className='text-base mt-4'>Textes de lois qui ont suivis :</p>
              <ul className='list-disc ml-6'>
                <li className='text-base'>Loi 1</li>
                <li className='text-base'>Loi 2</li>
                <li className='text-base'>Loi 3</li>
              </ul>
            </div>
          ) : (
            <p className='text-base'>Cliquez sur une région pour voir les détails</p>
          )}
        </div>
        <div className='relative flex-grow flex justify-center items-center'>
          <img src={assets.armenie_carte} alt="Map" className='h-auto max-w-full object-cover' />
          <svg className='absolute top-0 left-0 w-full h-full'>
            {regions.map(region => (
              region.cx && region.cy && region.r ? (
                <circle 
                  key={region.id} 
                  cx={region.cx} 
                  cy={region.cy} 
                  r={region.r} 
                  className='fill-transparent stroke-red-500 cursor-pointer hover:stroke-red-700 transition-all duration-300'
                  onClick={() => handleRegionClick(region.id)} 
                  strokeWidth="2"
                />
              ) : (
                <polygon
                  key={region.id}
                  id={region.id}
                  points={region.points}
                  className='fill-transparent stroke-red-500 cursor-pointer hover:stroke-red-700 transition-all duration-300'
                  onClick={() => handleRegionClick(region.id)}
                  strokeWidth="2"
                />
              )
            ))}
          </svg>
        </div>
        <div className='flex flex-col sm:w-1/4 border-l border-gray-300 p-4'>
          {selectedRegion ? (
            <div>
              <h2 className='text-lg font-semibold mb-4 mt-8'>Information sur le nombre de réfugiés</h2>
              <p className='text-base mb-2'>Région: {selectedRegion.name}</p>
              <p className='text-base'>Nombre : 400</p>
            </div>
          ) : (
            <p className='text-base'>Cliquez sur une région pour voir les détails</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Cartography