import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaPhone,FaAddressBook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
    
    
    <div>
      <h2 className="text-xl font-bold mb-4 text-amber-700">Excellence Audit & Advisory</h2>
      <p className="text-white">
        Building trust through 10+ years of auditing and advisory excellence.
      </p>
    </div>

    
    <div>
      <h3 className="text-lg font-semibold mb-4 text-amber-700">Quick Links</h3>
      <ul className="space-y-2 text-white">
        <li className='hover:underline hover:decoration-amber-700'><a href="/">Home</a></li>
        <li className='hover:underline hover:decoration-amber-700'><a href="/Services">Our Services</a></li>
        <li className='hover:underline hover:decoration-amber-700'><a href="/Clients">Clients</a></li>
        <li className='hover:underline hover:decoration-amber-700'><a href="/Blogs">Blogs</a></li>
        <li className='hover:underline hover:decoration-amber-700'><a href="/About">About Us</a></li>
        <li className='hover:underline hover:decoration-amber-700'><a href="/Contact">Contact Us</a></li>
      </ul>
    </div>

    
    <div>
      <h3 className="text-lg font-semibold mb-4 text-amber-700">Contact</h3>
      <p className="text-white mb-2">
        <FaAddressBook size={32} className="hover:text-amber-700 mb-1" />
        No. 178, Kolonnawa, Colombo, Sri Lanka
      </p>
      <p className="text-white mb-2">
        <FaPhone size={32} className="hover:text-amber-700 mb-1" />
        +94 75 244 6520
      </p>
      <p className="text-white mb-2">
        <FaAddressBook size={32} className="hover:text-amber-700 mb-1" />
        info@audit-with-kane.com
      </p>
    </div>

    
    <div>
      <h3 className="text-lg font-semibold mb-4 text-amber-700">Follow Us</h3>
      <div className="flex space-x-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={32} className="hover:text-amber-700" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={32} className="hover:text-amber-700" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={32} className="hover:text-amber-700" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={32} className="hover:text-amber-700" />
        </a>
      </div>
    </div>

  </div>

  <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
    © 2025 Excellence Audit & Advisory. All Rights Reserved.
  </div>
</footer>

  )
}

export default Footer;