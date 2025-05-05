import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ModalFormProject = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // Activer le loader
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_EMAILJS_USER_ID
    )
      .then((result) => {
        alert('Message sent successfully!');
        setIsLoading(false); // Désactiver le loader
        onClose();
      }, (error) => {
        alert('Failed to send message, please try again.');
        setIsLoading(false); // Désactiver le loader
      });
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
      <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-md'>
        <h2 className='text-2xl font-semibold mb-4 text-center'>Contact Administrators</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block text-sm font-medium'>Name</label>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              className='w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
              disabled={isLoading}
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-medium'>Email</label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
              disabled={isLoading}
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-medium'>Message</label>
            <textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
              className='w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
              disabled={isLoading}
            />
          </div>
          <div className='flex justify-end items-center'>
            <button
              type='button'
              onClick={onClose}
              className='mr-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition duration-200'
              disabled={isLoading}
            >
              Cancel
            </button>
            <button
              type='submit'
              className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200 flex items-center ${
                isLoading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={isLoading}
            >
              {isLoading && (
                <svg
                  className='animate-spin h-5 w-5 mr-2 text-white'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <circle
                    className='opacity-25'
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='currentColor'
                    strokeWidth='4'
                  ></circle>
                  <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z'
                  ></path>
                </svg>
              )}
              {isLoading ? 'Sending...' : 'Send'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalFormProject;