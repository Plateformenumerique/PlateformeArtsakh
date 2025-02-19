import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        <div>
            <img src={assets.exchange_icon} alt="" className='w-12 m-auto mb-5' />
            <p className='font-semibold'>Promouvoir la paix mondiale</p>
            <p className='text-gray-400'>Nous soutenons les initiatives qui promeuvent la paix dans le monde</p>
        </div>
        <div>
            <img src={assets.quality_icon} alt="" className='w-12 m-auto mb-5' />
            <p className='font-semibold'>Aide humanitaire</p>
            <p className='text-gray-400'>Nous fournissons une aide aux communautés touchées par les conflits</p>
        </div>
        <div>
            <img src={assets.forma} alt="" className='w-12 m-auto mb-5' />
            <p className='font-semibold'>Programmes formation</p>
            <p className='text-gray-400'>Nous soutenons des programmes éducatifs pour la paix et la résolution des conflits</p>
        </div>
    </div>
  )
}

export default OurPolicy