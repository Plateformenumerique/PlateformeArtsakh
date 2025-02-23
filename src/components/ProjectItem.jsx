import React from 'react'
import { Link } from 'react-router-dom'
const ProjectItem = ({ id, name, description, association, type, startDate, endDate, budget, currency, image, domain }) => {
    return (
        <div>
            <Link className='text-gray-700 cursor-pointer' to={`/projets/${id}`}>
                {/* Card to present Projects */}
                <div className='flex flex-col bg-white py-6 px-3 rounded-lg shadow-lg h-auto'>
                    {image && (
                        <div className='w-full h-56 overflow-hidden rounded-t-lg'>
                            <img src={image} alt={`${name} image`} className='w-full h-full object-cover object-center' />
                        </div>
                    )}
                    <div className='flex flex-col sm:flex-row items-center my-4'>
                        <h2 className='text-lg font-semibold'>{name}</h2>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-sm text-gray-500'>Type de mission : <span className='font-semibold'>{type}</span></p>
                        <p className='text-sm text-gray-500 mt-2'>{description}</p>
                        {association && <p className='text-sm text-gray-500 mt-2 font-semibold'>Association: {association}</p>}
                        {startDate && <p className='text-sm text-gray-500 mt-2'>Début: {startDate}</p>}
                        {endDate && <p className='text-sm text-gray-500 mt-2'>Fin: {endDate}</p>}
                        {budget && <p className='text-sm text-gray-500 mt-2'>Budget: {budget} {currency}</p>}
                        {domain && <p className='text-sm text-gray-500 mt-2'>Domaine de la mission: <span className='font-bold'>{domain}</span></p>}
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProjectItem