import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="bg-green text-white py-8 px-4">
      <div className="container mx-auto grid grid-cols-3 gap-8 items-center">

        <div className="flex flex-col items-start">
          <img src="/Vector-jaune.svg" alt="Bookish Logo" className="h-10 mb-4" />
          <p className="text-3xl font-semibold">Bookish</p>
          <p className="text-sm mt-2 text-gris-opacity">La librairie des passionnés de lecture</p>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-2xl font-semibold">Follow us</p>
          <div className="flex mt-4 space-x-4">
            <a href="#" className="text-gris-opacity hover:text-white">
              <FontAwesomeIcon icon={faInstagram} size="xl" />
            </a>
            <a href="#" className="text-gris-opacity hover:text-white">
              <FontAwesomeIcon icon={faLinkedin} size="xl" />
            </a>
            <a href="#" className="text-gris-opacity hover:text-white">
              <FontAwesomeIcon icon={faFacebook} size="xl" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-end">
          <p className="text-2xl font-semibold">Contact</p>
          <a href="mailto:contact@booking.fr" className="text-sm mt-2 text-gris-opacity hover:underline">contact@booking.fr</a>
          <p className="text-sm mt-2 text-gris-opacity">+33 633333333</p>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-8 pt-4 flex justify-between items-center text-sm">
        <div className="flex space-x-4">
          <a href="#" className="text-gris-opacity hover:underline">Privacy Policy</a>
          <a href="#" className="text-gris-opacity hover:underline">Cookie Policy</a>
          <a href="#" className="text-gris-opacity hover:underline">Terms & Conditions</a>
        </div>
        <p className="text-gris-opacity">© 2024 Ask Phill. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
