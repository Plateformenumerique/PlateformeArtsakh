import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ModalFormProject = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_EMAILJS_USER_ID
    )
      .then((result) => {
        alert('Message sent successfully!');
        onClose();
      }, (error) => {
        alert('Failed to send message, please try again.');
      });
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
      <div className='bg-white p-6 rounded shadow-lg'>
        <h2 className='text-2xl mb-4'>Contact Administrators</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block text-sm font-medium'>Name</label>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              className='w-full border border-gray-300 p-2 rounded'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-medium'>Email</label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='w-full border border-gray-300 p-2 rounded'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-medium'>Message</label>
            <textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
              className='w-full border border-gray-300 p-2 rounded'
              required
            />
          </div>
          <div className='flex justify-end'>
            <button type='button' onClick={onClose} className='mr-4 px-4 py-2 bg-gray-500 text-white rounded'>Cancel</button>
            <button type='submit' className='px-4 py-2 bg-blue-500 text-white rounded'>Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalFormProject;