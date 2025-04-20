import React from 'react'

const home = () => {
  return (
    <>
    <div className="mt-20">
        <div className=" flex items-center ml-10 md:ml-20">
            <div className="border-b border-[#4A4A4A] w-15 mb mr-2"></div>
            <h1 className="text-[#4A4A4A] font-medium tracking-widest  md:text-xl">Lanre Furniture Store</h1>
        </div>
        <h1 className="ml-13 mt-3 text-2xl md:ml-25 md:mt-7 md:text-6xl text-[#00000091] font-bold ">Elevate your space. </h1>
         <p className="text-base md:text-lg md:w-150 w-70 leading-5 md:leading-7 ml-16 md:ml-27 text-[#333333] font-semibold mt-3 mb-30 md:mb-15">Thoughtfully designed furniture transforms rooms into sanctuaries.{/*<br /> Each piece in our collection blends timeless craftsmanship with contemporary living - where clean lines meet unrivaled comfort. <br/>From sustainable hardwood frames to precision-tailored upholstery, <br />we create statement pieces designed to last a lifetime, not just follow trends.*/}</p> 
        <a href="" className="ml-25 bg-[#fc9521] text-white py-4 px-10 font-medium  text-md tracking-widest hover:bg-white hover:text-black transition duration-400 ease-in-out"> SHOP NOW</a>
    </div>
</>

  )
}

export default home