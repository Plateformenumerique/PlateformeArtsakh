import React, { useState } from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';

const Message = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const users = ['Croix-Rouge Française', 'Médecins Sans Frontières'];
  const groups = ['Opération E 2024', 'Action Sauvetage 2024', 'Secours Urgence Croix-Rouge'];
  const messages = [
    { sender: 'Croix-Rouge Française', content: 'Bonjour, comment allez-vous ? Je voudrais avoir des informations supplémentaires sur le projet que vous avez mener en Haut-Karabagh' },
    { sender: 'Médecins Sans Frontières', content: 'Bonjour, oui bien sûr !' },
    { sender: 'Opération E 2024', content: 'Nous avons besoin de plus de volontaires pour la prochaine mission.' },
    { sender: 'Action Sauvetage 2024', content: 'La formation des nouveaux membres commence la semaine prochaine.' },
    { sender: 'Secours Urgence Croix-Rouge', content: 'Merci à tous pour votre soutien continu.' },
  ];

  const googleServicesLogos = [
    assets.drive,
    assets.gmail,
    assets.meet,
    assets.calendar,
    assets.google
  ];

  return (
    <div className='flex flex-col gap-1 sm:gap-10 pt-10 border-t sm:text-2xl'>
      <div className='flex justify-between items-center'>
        <Title text1={'La'} text2={"messagerie"} />
        <button className='blue-gradient_bg text-white px-3 py-1 text-sm rounded-lg' onClick={() => setIsModalOpen(true)}>
            Voir les services Google qui pourront être connectés 
        </button>
        <div className='flex flex-col items-end'>
          <span className='text-sm mb-1'>Connecter en tant que :</span>
          <span className='blue-gradient_bg text-white px-3 py-1 text-sm rounded-lg'>Secours Populaires Français</span>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row w-full'>
        <div className='flex flex-col w-1/4 border-r border-gray-300 p-4'>
          <h3 className='text-sm font-semibold mb-4'>Utilisateurs</h3>
          <ul className='mb-6'>
            {users.map((user, index) => (
              <li key={index} className='cursor-pointer text-base hover:bg-gray-200 p-2' onClick={() => setSelectedChat(user)}>
                {user}
              </li>
            ))}
          </ul>
          <h3 className='text-sm font-semibold mb-4'>Groupes</h3>
          <ul>
            {groups.map((group, index) => (
              <li key={index} className='cursor-pointer hover:bg-gray-200 text-base p-2' onClick={() => setSelectedChat(group)}>
                {group}
              </li>
            ))}
          </ul>
        </div>
        <div className='flex-1 p-4'>
          {selectedChat ? (
            <div className='flex flex-col h-full'>
              <div className='flex-1 overflow-y-auto'>
                {messages.map((message, index) => (
                  <div key={index} className={`p-2 ${message.sender === selectedChat ? 'text-right' : 'text-left'}`}>
                    <p className='bg-gray-200 inline-block p-2 text-base rounded-lg'>{message.content}</p>
                    {groups.includes(selectedChat) && (
                      <p className='text-xs text-gray-500'>{message.sender}</p>
                    )}
                  </div>
                ))}
              </div>
              <div className='mt-4'>
                <input type='text' className='w-full p-2 border text-base border-gray-300 rounded-lg' placeholder='Écrivez un message ...' />
              </div>
            </div>
          ) : (
            <p className='text-center text-gray-500'>Choisissez une discussion</p>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
          <div className='bg-white p-6 rounded-lg relative'>
            <button className='absolute top-2 right-2 text-gray-500 hover:text-gray-700' onClick={() => setIsModalOpen(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className='text-xl mb-4'>Services Google</h2>
            <div className='grid grid-cols-3 gap-10 px-10'>
              {googleServicesLogos.map((logo, index) => (
                <img key={index} src={logo} alt={`Google Service ${index}`} className='w-auto h-16' />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Message;