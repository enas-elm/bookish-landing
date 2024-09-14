import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="bg-primary-100 text-white-variant py-6 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-6 lg:px-10 space-y-6 lg:space-y-0">

        <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-4 justify-center lg:justify-start">
          <img src="/Vector-jaune.svg" alt="Bookish Logo" className="h-8 lg:h-10" />

          <div className="text-center lg:text-left lg:pl-5">
            <p className="text-2xl lg:text-3xl font-semibold">Bookish</p>
            <p className="text-xs lg:text-sm text-gray-variant-80">La librairie des passionnés de lecture</p>
          </div>
        </div>

        <div className="text-center lg:text-left">
          <p className="text-xl font-semibold">Contact</p>
          <a href="mailto:contact@booking.fr" className="text-sm mt-2 text-gray-variant-80 hover:underline block">contact@booking.fr</a>
          <p className="text-sm mt-2 text-gray-variant-80">+33 633333333</p>
        </div>

        <div className="text-center lg:text-left">
          <p className="hidden lg:block text-xl font-semibold">Follow us</p>
          <div className="flex justify-center lg:justify-end mt-4 space-x-4">
            <a href="#" className="text-gray-variant-80 hover:text-white-variant">
              <FontAwesomeIcon icon={faInstagram} size="xl" />
            </a>
            <a href="#" className="text-gray-variant-80 hover:text-white-variant">
              <FontAwesomeIcon icon={faLinkedin} size="xl" />
            </a>
            <a href="#" className="text-gray-variant-80 hover:text-white-variant">
              <FontAwesomeIcon icon={faFacebook} size="xl" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-variant-400 mt-8 pt-4 flex flex-col lg:flex-row justify-between items-center text-xs lg:text-xs">
        <div className="flex space-x-4 mb-4 lg:mb-0">
          <a href="/mentions" className="text-gray-variant-80 hover:underline">Mentions légales</a>
          <a href="/politiques" className="text-gray-variant-80 hover:underline">Politiques de confidentialités</a>
        </div>
        <p className="text-gray-variant-80 text-center lg:text-right">© 2024 All Rights Reserved, Bookish Inc.</p>
      </div>
    </footer>
  )
}

export default Footer
