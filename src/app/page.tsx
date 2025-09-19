import React from 'react';
import Image from 'next/image';

const page = () => {
  return (
    <div
      className='min-h-screen w-full flex items-center justify-center p-10 bg-cover bg-center relative'
      style={{
        backgroundImage: "url('/back1.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <div className='flex flex-col items-center justify-center gap-6 z-10 text-white relative'>
        <h2 className='text-6xl font-bold text-center mb-16'>
          “Trusted Audit & Advisory Services for Over 10 Years”
        </h2>
        <h4 className='text-3xl text-center mb-12'>
          Delivering financial transparency, risk management, and business growth solutions to organizations across industries.
        </h4>
        <h4 className='text-3xl text-center font-bold mb-12'>Call Us: +94 75 244 6520</h4>
        <button className='bg-amber-700 text-white px-6 py-3 rounded-full text-xl font-semibold hover:bg-amber-800 transition-colors'>
          Book Appointment
        </button>
      </div>
    </div>
    
  )
}

export default page;
