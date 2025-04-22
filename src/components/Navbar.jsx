import React, { useState } from 'react'
import { FaCartPlus } from 'react-icons/fa'
import { HiMenu } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'


const Navbar = () => {
    const [IsOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!IsOpen)
    }

  return (
    <>
    <nav className="bg-transparent pt-7  flex items-center justify-between pb-5 border-b border-gray-300 border-opacity-50">
       <div className="flex items-center ml-4 sm:ml-8 md:ml-12 lg:ml-15 mr-4 sm:mr-8 md:mr-12">
            <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold border-4 sm:border-5 border-[#fc9521] rounded-tr-lg sm:rounded-tr-xl md:rounded-tr-2xl rounded-bl-lg sm:rounded-bl-xl md:rounded-bl-2xl px-2 sm:px-3 md:px-4 py-0.5 sm:py-1 mr-1 sm:mr-2 shadow-md sm:shadow-xl/10">F</h1>
            <h1 className="p-1 sm:p-2 text-[#4A4A4A] font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl">Furniture <span className="text-white font-semibold">GO</span> </h1>
        </div>
        {!IsOpen && (
            <div onClick={toggleMenu} className='cursor-pointer md:hidden mr-10'>
                <HiMenu size={30}/>
            </div>
        ) }
        {IsOpen && (
            <div onClick={toggleMenu} className='cursor-pointer md:hidden mr-10 z-20'>
                <IoClose size={30}/>
            </div>
        ) } 
        {IsOpen ? 
        
        (<div className='bg-[#fc9521] overflow-y-hidden fixed z-10 top-0 right-0 w-1/2 min-h-screen flex justify-center items-center flex-col gap-10 duration-100 ease-in'>
             <a href="#" className="text-white tracking-widest font-semibold">Home</a>
            <a href="index.html" className="text-white  tracking-widest font-semibold">Products</a>
            <a href="#" className="text-white  tracking-widest font-semibold transition-ease-in-out duration-500">About Us</a>
            <a href="#" className="text-white  tracking-widest font-semibold">Contact</a>

        </div>) 
        
        
        :(<div className='bg-[#fc9521] overflow-y-hidden fixed z-10 top-0 right-[-150%] min-h-screen flex justify-center items-center flex-col gap-10 duration-500 ease-in'>
            
        </div>)}
        <div className='items-center justify-center hidden md:flex'>
        <a href="#" className="text-[#fc9521] mr-6 tracking-widest font-semibold">Home</a>
            <a href="index.html" className="text-white mr-6 tracking-widest font-semibold hover:text-[#fc9521] transition-ease-in-out duration-500">Products</a>
            <a href="#" className="text-white mr-6 tracking-widest font-semibold hover:text-[#fc9521] transition-ease-in-out duration-500">About Us</a>
            <a href="#" className="text-white mr-6 tracking-widest font-semibold hover:text-[#fc9521] transition-ease-in-out duration-500">Contact</a>

        </div>
        {/* <div className='mr-15 flex items-center'>
            <input type="text" placeholder='Search Products...' className='bg-white rounded-full pl-6 pr-3 py-3 w-80 shadow-xl/10 focus:outline-none focus:-translate-y-2 transition duration-300 hidden md:block' />
            <FaCartPlus className=' ml-5 h-7 w-7 text-[#fc9521] md:block hidden'/>
        </div> */}
    </nav>   
    </>
  )
}

export default Navbar