import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from '../context/Context';
import { CircleArrowRight } from 'lucide-react';

const Actuality = () => {

  const { actualityId } = useParams();
  const { actualites } = useContext(Context);
  const [actualityData, setActualityData] = useState(false);

  const fetchActualityData = async () => {

    actualites.map((item) => {
      if (item._id === actualityId) {
        setActualityData(item)
        return null;
      }
      return null;
    })
  }

  useEffect(() => {
    fetchActualityData();
  }, [actualityId, actualites])
  
  return actualityData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex justify-start items-center">
        <button onClick={() => window.history.back()} className="border px-4 py-2 rounded transition duration-300">
          Actualité
        </button>
        <span className="ml-2">/</span>
        <h2 className='text-lg font-semibold ml-2'>{actualityData.title}</h2>
      </div>
      <div className="flex justify-between items-center mb-10 sm:mb-0">
      <div className='flex flex-col sm:flex-row items-center mb-4'>
        <img src={actualityData.image} alt={`${actualityData.title} logo`} className='w-full h-auto mr-4 mb-4 sm:mb-0' />
      </div>
      </div>
      {/* Actuality Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row pt-4">
        {/* Actuality Infos */}
        <div className="flex-1">
          <p className="mt-5 text-gray-500 md:w-4/5">
            {actualityData.subtitle}
          </p>
          {/*<p className="mt-5 text-gray-500 md:w-4/5">
            Date: {actualityData.date}
          </p>*/}
          <hr className="mt-8 sm:w-4/5" />
        </div>
      </div>
    </div>
  ) : (
    <div>
      <h1>Chargement...</h1>
    </div>
  )
}

export default Actuality