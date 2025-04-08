import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
        {/* Left */}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
            <div className='text-[#414141] px-6'>
                <div className='flex items-center gap-2'>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    <p className='font-semibold text-2xl blue-gradient_text'>PLATFORME NUMERIQUE</p>
                </div>
                <h1 className='prata-regular text-3xl sm:py-3 lg:text-4xl leading-relaxed'>en soutien aux déplacés artsakhiotes</h1>

                <div className='flex flex-col items-end gap-2'>
                    <p>Cette plateforme interactive recense les acteurs français engagés en Arménie, leurs actions et besoins, et souhaite faciliter les synergies entre eux pour optimiser l’aide humanitaire aux déplacés d’Artsakh.</p>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                </div>
            </div>
        </div>
        {/* Right */}
        <img src={assets.hero_image} className='w-full sm:w-1/2' alt="" />
    </div>
  )
}

export default Hero