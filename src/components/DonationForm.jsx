import React, { useState } from 'react';
import { CreditCard, ArrowRight } from 'lucide-react';

const DonationForm = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        window.location.href = 'https://donate.stripe.com/fZeeW2cx84VDgtG5kk';
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-6">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Prénom
                    </label>
                    <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full px-4 py-2 border-2 border-gray-100 rounded-xl focus:border-blue-800 focus:ring-blue-100 focus:ring-2"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nom de famille
                    </label>
                    <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full px-4 py-2 border-2 border-gray-100 rounded-xl focus:border-blue-800 focus:ring-blue-100 focus:ring-2"
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Adresse email
                </label>
                <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border-2 border-gray-100 rounded-xl focus:border-blue-800 focus:ring-blue-100 focus:ring-2"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message (Optionnel)
                </label>
                <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-2 border-2 border-gray-100 rounded-xl focus:border-blue-800 focus:ring-blue-100 focus:ring-2"
                />
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-800 text-white py-4 px-6 rounded-xl font-medium hover:bg-blue-900 
                        transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed
                        flex items-center justify-center space-x-2"
            >
                <CreditCard className="w-5 h-5" />
                <span>{loading ? 'En cours...' : 'Payer'}</span>
                {!loading && <ArrowRight className="w-5 h-5" />}
            </button>

            <p className="text-sm text-gray-500 text-center">
                Votre paiement sera traité de manière sécurisée par Stripe
            </p>
        </form>
    )
}

export default DonationForm