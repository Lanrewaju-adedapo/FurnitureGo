import React from 'react'
// import Back from '../images/Background3.jpg'
import { FaInstagram } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa'
import { FaSquareFacebook } from 'react-icons/fa6'
import { FaTwitter } from 'react-icons/fa6'








const Contactus = () => {
  return (
<footer className='bg-[#4a4a4a] mt-8 pt-10 pb-4 px-4 sm:px-6 lg:px-8'>
  <div className="max-w-7xl mx-auto">
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-white font-medium tracking-widest text-2xl sm:text-3xl md:text-4xl">
        Connect With Us
      </h1>
      <div className='flex gap-4 sm:gap-5 mt-3'>
        <a href="#" className='hover:scale-110 transition-transform duration-200'>
          <FaInstagram className='size-6 sm:size-7 md:size-8 text-white hover:text-[#fc9521] duration-200'/>
        </a>
        <a href="#" className='hover:scale-110 transition-transform duration-200'>
          <FaSquareFacebook className='size-6 sm:size-7 md:size-8 text-white hover:text-[#fc9521] duration-200'/>
        </a>
        <a href="#" className='hover:scale-110 transition-transform duration-200'>
          <FaTwitter className='size-6 sm:size-7 md:size-8 text-white hover:text-[#fc9521] duration-200'/>
        </a>
        <a href="#" className='hover:scale-110 transition-transform duration-200'>
          <FaWhatsapp className='size-6 sm:size-7 md:size-8 text-white hover:text-[#fc9521] duration-200'/>
        </a>
        <a href="#" className='hover:scale-110 transition-transform duration-200'>
          <FaTiktok className='size-6 sm:size-7 md:size-8 text-white hover:text-[#fc9521] duration-200'/>
        </a>
      </div>  
    </div>
    <div className='mt-12 md:mt-20 flex flex-col md:flex-row items-center justify-between'>
      <div className="flex items-center mb-6 md:mb-0">
        <h1 className="text-white text-2xl md:text-3xl font-bold border-4 border-[#fc9521] rounded-tr-lg rounded-bl-lg px-2 py-0.5 mr-2 shadow-md">
          F
        </h1>
        <h1 className="p-1 text-white font-medium text-xl md:text-2xl">
          Furniture <span className="text-[#fc9521] font-semibold">GO</span>
        </h1>
      </div>
      
      <div className='text-center md:text-right'>
        <h1 className='mb-4 text-white text-xl md:text-2xl'>Have Questions?</h1> 
        <a href="#" className="inline-block bg-[#fc9521] text-white py-2 px-6 md:py-3 md:px-8 font-medium text-sm md:text-md tracking-widest hover:bg-white hover:text-black transition duration-300 ease-in-out transform hover:scale-105">
          Contact Us
        </a>
      </div>
    </div>
    <div className='flex flex-col sm:flex-row mt-8 pt-6 border-t border-gray-300 text-sm sm:text-base'>
      <p className='text-white text-center sm:text-left mb-3 sm:mb-0 sm:mr-auto'>
        Copyright © 2025 Lanre Furniture Store
      </p>
      <p className='text-white text-center sm:text-right'>
        Project By Adefalu Lanre Adedapo 😇
      </p>
    </div>
  </div>
</footer>
    )
}

export default Contactus