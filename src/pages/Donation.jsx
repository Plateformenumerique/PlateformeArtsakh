import React from 'react';
import { Heart } from 'lucide-react';
import DonationForm from '../components/DonationForm';
import Title from '../components/Title';
import { assets } from '../assets/assets';


const Donation = () => {
    return (
        <div className="min-h-screen">
            <div className="max-w-4xl mx-auto px-4 py-10 sm:px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-4">
                        <Heart className="w-8 h-8 text-blue-800" />
                    </div>
                    <div className='text-4xl'>
                        <Title text1={'Donnez pour'} text2={"faire la différence dès Aujourd'hui !"} />
                    </div>
                    <p className="text-xl text-gray-600">
                        Votre don nous aide à poursuivre notre mission de créer un changement positif.
                    </p>
                </div>

                {/* Donation Form */}
                <div className="flex flex-col items-center bg-white rounded-2xl p-8 shadow-xl">
                    <img src={assets.logo_asa} alt="ASA Logo" className="mb-5 w-32" />
                    <DonationForm />
                </div>

                {/* Trust Indicator */}
                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-500">
                        Votre don est sécurisé et déductible des impôts.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Donation;