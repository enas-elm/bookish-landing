import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="bg-green text-white py-2 px-4">
      <div className="container mx-auto flex justify-between items-center px-10">
        
        {/* Logo and Text Aligned Vertically */}
        <div className="flex items-center space-x-4">
          <img src="/Vector-jaune.svg" alt="Bookish Logo" className="h-10" />
          <div className="flex flex-col text-left pl-5">
            <p className="text-4xl font-semibold">Bookish</p>
            <p className="text-sm text-gris-opacity">La librairie des passionnés de lecture</p>
          </div>
        </div>

        {/* Centered Contact Information */}
        <div className="text-center pr-20">
          <p className="text-2xl font-semibold text-left">Contact</p>
          <a href="mailto:contact@booking.fr" className="text-sm mt-2 text-left text-gris-opacity hover:underline block">contact@booking.fr</a>
          <p className="text-sm text-left mt-2 text-gris-opacity">+33 633333333</p>
        </div>

        {/* Right-aligned Follow Us Section */}
        <div className="text-right">
          <p className="text-2xl font-semibold">Follow us</p>
          <div className="flex mt-4 space-x-4 justify-end">
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
      </div>

      <div className="border-t border-gray-400 mt-8 pt-4 flex justify-between items-center text-sm">
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
