import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log('Abonné');
    }

    return (
        <div className='text-center'>
            <p className='text-2xl font-medium text-gray-800'>Abonnez-vous maintenant et obtenez toutes les actualités en 1er !</p>
            <p className='text-gray-400 mt-3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, consequatur vel iste maxime qui placeat illo sint eos numquam corrupti recusandae ipsa dolores illum ab unde doloribus blanditiis dicta itaque.
            </p>
            <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
                <input type="email" className='w-full sm:flex-1 outline-none' placeholder='Entrez votre email' required />
                <button type='submit' className='blue-gradient_bg text-white text-xs px-10 py-4'>S'ABONNER</button>
            </form>
        </div>
    )
}

export default NewsLetterBox