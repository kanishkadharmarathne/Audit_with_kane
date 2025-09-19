import React from 'react';

const Navbar = () => {
  return (
  <nav className="bg-white shadow-md sticky top-0 z-50 flex justify-between items-center px-8 py-6 min-h-[90px]">
      <div className="font-bold text-4xl text-amber-700 tracking-wide">Audit with Kane</div>
      <div className="flex items-center gap-6 ">
        <a href="/" className="text-black hover:underline hover:underline-offset-4 hover:decoration-amber-700 font-medium text-xl transition-colors">Home</a>
        <a href="/Blogs" className="text-black  hover:underline hover:underline-offset-4 hover:decoration-amber-700 font-medium text-xl transition-colors">Blogs</a>
        <a href="/Services" className="text-black  hover:underline hover:underline-offset-4 hover:decoration-amber-700 font-medium text-xl transition-colors">Our Services</a>
        <a href="/Clients" className="text-black  hover:underline hover:underline-offset-4 hover:decoration-amber-700 font-medium text-xl transition-colors">Clients</a>
        <a href="/About" className="text-black  hover:underline hover:underline-offset-4 hover:decoration-amber-700 font-medium text-xl transition-colors">About Us</a>
        <a href="/Contact" className="text-black  hover:underline hover:underline-offset-4 hover:decoration-amber-700 font-medium text-xl transition-colors">Contact Us</a>
      </div>
      <div>
        <button className='bg-amber-700 text-white px-6 py-3 rounded-full text-xl font-semibold hover:bg-amber-800 transition-colors'>
          Book Appointment
        </button>
      </div>
    </nav>
  )
}

export default Navbar;