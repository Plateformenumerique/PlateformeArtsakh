import React, { useState } from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'

const regions = [
  { id: 'region1', name: 'Dzorashen', details: 'Distribution de nourriture et de vêtements pour les réfugiés du Haut-Karabagh.', cx: '400', cy: '150', r: '20' },
  { id: 'region2', name: 'Achtarak', details: 'Fourniture de soins médicaux et de soutien psychologique aux familles déplacées.', cx: '450', cy: '300', r: '10' },
  { id: 'region3', name: 'Gosh', details: 'Construction de logements temporaires pour les réfugiés.', cx: '600', cy: '200', r: '15' },
  { id: 'region4', name: 'Martouni', details: 'Programmes éducatifs pour les enfants déplacés.', cx: '650', cy: '350', r: '30' },
]

const Cartography = () => {
  const [selectedRegion, setSelectedRegion] = useState(null)

  const handleRegionClick = (regionId) => {
    const region = regions.find(r => r.id === regionId)
    setSelectedRegion(region)
  }

  return (
    <div className='flex flex-col gap-1 sm:gap-10 pt-10 border-t sm:text-2xl'>
      <div className='flex flex-col sm:flex-row w-full'>
        <div className='flex flex-col sm:w-1/4 border-r border-gray-300 p-4'>
          {selectedRegion ? (
            <div>
              <Title text1={'La'} text2={"cartographie"} />
              <h2 className='text-lg font-semibold mb-4 mt-8'>Information de l'action menée dans cette région</h2>
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
        <div className='relative flex-grow flex justify-center'>
          <img src={assets.carte_3d_armenie_2} alt="Map" className='w-4/6 h-auto' />
          <svg className='absolute top-0 left-0 w-full h-full'>
            {regions.map(region => (
              region.cx && region.cy && region.r ? (
                <circle 
                  key={region.id} 
                  cx={region.cx} 
                  cy={region.cy} 
                  r={region.r} 
                  className='fill-transparent stroke-red-500 cursor-pointer'
                  onClick={() => handleRegionClick(region.id)} 
                  strokeWidth="2"
                />
              ) : (
                <polygon
                  key={region.id}
                  id={region.id}
                  points={region.points}
                  className='fill-transparent stroke-red-500 cursor-pointer'
                  onClick={() => handleRegionClick(region.id)}
                  strokeWidth="2"
                />
              )
            ))}
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Cartography