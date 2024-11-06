import React, { useState } from 'react';
import Title from '../components/Title';

const Message = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const users = ['Croix-Rouge Française', 'Médecins Sans Frontières'];
  const groups = ['Opération E 2024', 'Action Sauvetage 2024', 'Secours Urgence Croix-Rouge'];
  const messages = [
    { sender: 'Croix-Rouge Française', content: 'Bonjour, comment allez-vous ? Je voudrais avoir des informations supplémentaires sur le projet que vous avez mener en Haut-Karabagh' },
    { sender: 'Médecins Sans Frontières', content: 'Bonjour, oui bien sûr !' },
    { sender: 'Opération E 2024', content: 'Nous avons besoin de plus de volontaires pour la prochaine mission.' },
    { sender: 'Action Sauvetage 2024', content: 'La formation des nouveaux membres commence la semaine prochaine.' },
    { sender: 'Secours Urgence Croix-Rouge', content: 'Merci à tous pour votre soutien continu.' },
  ];

  return (
    <div className='flex flex-col gap-1 sm:gap-10 pt-10 border-t sm:text-2xl'>
      <div className='flex justify-between items-center'>
        <Title text1={'La'} text2={"messagerie"} />
        <div className='flex flex-col items-end'>
          <button className='text-sm mb-1'>Connecter en tant que :</button>
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
    </div>
  );
};

export default Message;