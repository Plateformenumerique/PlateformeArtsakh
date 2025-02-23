import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
        {/* Left */}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
            <div className='text-[#414141]'>
                <div className='flex items-center gap-2'>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    <p className='font-semibold text-sm md:text-base'>PROJET DE CRÉATION</p>
                </div>
                <h1 className='prata-regular text-3xl sm:py-3 lg:text-3xl leading-relaxed'>Pour les réfugiés Karabaghiotes</h1>
                <div className='flex items-center gap-2'>
                    <p className='font-semibold text-sm md:text-base'>PLATFORME NUMERIQUE - <span className='text-lg'>Convergence pour l'Arménie <br /> en soutiens aux déplacés de l'Artsarkh</span></p>
                    <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
                </div>
            </div>
        </div>
        {/* Right */}
        <img src={assets.hero_image} className='w-full sm:w-1/2' alt="" />
    </div>
  )
}

export default Hero