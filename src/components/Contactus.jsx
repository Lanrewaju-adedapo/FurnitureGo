import React from 'react'
import Back from '../images/Background3.jpg'
import { FaInstagram } from 'react-icons/fa'








const Contactus = () => {
  return (
    <>
    <div className="bg-[url('./images/bg5.jpg')] bg-scale-40 h-70 w-screen bg-cover bg-center bg-no-repeat">
        <h1 className="ml-10 md:ml-20 text-[#4a4a4a] font-medium tracking-widest  md:text-3xl">Connect With Us</h1>
        <FaInstagram className='size-10 text-[#fc9521]'/>
    </div>
    </>
    )
}

export default Contactus