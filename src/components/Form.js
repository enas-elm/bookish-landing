import React, { useState, useRef, useEffect } from 'react'

const Form = () => {

  return (
    <div className='max-w-5xl mx-auto p-4 py-10 sm:py-28'>

      <div className='bg-logo py-20 '>
        <div className='flex justify-between gap-16 '>

          <div className='bg-[#FFF0A3] flex-col gap-6 justify-between shadow-lg p-10 rounded-[36px] text-start hidden lg:flex text-green'>
            <h2 className='text-7xl font-dm-display font-semibold '>Participez&nbsp;à <br></br>l'aventure</h2>
            <p>© 2024 All Rights Reserved, Bookish Inc.</p>
          </div>

          <div className='bg-[#FFF0A3] flex flex-col gap-6 justify-between shadow-lg p-10 rounded-[36px] text-start w-full text-green'>

            <h2 className='text-6xl font-dm-display font-semibold  block lg:hidden'>Participez à l'aventure</h2>
            <p>Envie de contribuer à l'évolution de Bookish ? Partagez vos retours en testant l'application.</p>

            <form className='flex flex-col sm:flex-row gap-8 items-end '>

              <div className='flex flex-col gap-2 w-full'>

                <div className='flex gap-8 w-full'>
                  <div className='flex flex-col'>
                    <label for="first-name" className='label-form'>Prénom</label>
                    <input type="text" id="first-name" name="first-name" required className="input-form " />
                  </div>

                  <div className='flex flex-col w-full'>
                    <label for="name" className='label-form'>Nom</label>
                    <input type="text" id="name" name="name" required className='input-form ' />
                  </div>
                </div>

                <div className='flex flex-col w-full'>
                  <label htmlFor="email" className='label-form'>Adresse e-mail</label>
                  <input type="email" id="email" name="email" required className='input-form ' />
                </div>
              </div>
              <button type="submit" className='py-2 px-4 bg-green text-white rounded-full h-fit hover:bg-greenlight transition-colors'>Envoyer</button>

            </form>

          </div>
        </div>
      </div>
    </div>
  )

}

export default Form
