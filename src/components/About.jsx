import React from 'react'



const About = () => {
  return (
    <div className=' border-y pt-15  border-gray-300 mt-20 mx-10'>
        <h1 className="ml-10 md:ml-20 text-[#4A4A4A] text-center font-medium tracking-widest  md:text-5xl">About Us</h1>
        <div className='bg-white py-7 md:py-16 px-5 lg:px-10 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12'>              
        
        <div className="flex items-center w-full max-w-3xl">
            <p className='text-sm md:text-base lg:text-lg text-center text-gray-600'>
            At FurnitureGo, we're passionate about transforming houses into homes with furniture that combines exceptional craftsmanship, timeless design, and everyday functionality. Founded in Birth, we set out with a simple mission: to create beautiful, high-quality pieces that elevate living spaces while remaining accessible and sustainable.
            Every item in our collection is thoughtfully designed with your lifestyle in mind—whether you're furnishing a first apartment, upgrading your family home, or designing a cozy reading nook. We work with skilled artisans and trusted manufacturers who share our commitment to ethical sourcing and durable materials, ensuring each piece is built to last.
            Beyond just furniture, we believe in the art of living well. Our team of design enthusiasts is here to guide you, offering inspiration and expertise to help you curate a space that truly reflects your personality. From sleek modern silhouettes to warm, rustic charm, our diverse range caters to every taste.
            </p>                  
        </div>
            <img src='/images/showroom.jpg' className='w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] h-auto' alt=""/>
        </div>
        
        <div className='mt-6 md:flex items-center border-t py-7 border-gray-300 justify-around'>
            <div className='px-20 flex items-center md:mb-0 mb-3'>
                <img src='/images/Discount.png' className='size-10' />
                <h1 className='ml-2 text-xl text-[#4A4A4A] font-medium'>Fair Discounts</h1>
            </div>
            <div className='px-20 flex items-center md:mb-0 mb-3'>
                <img src='/images/wrench.png' className='size-10' />
                <h1 className='ml-2 text-xl text-[#4A4A4A] font-medium'>Free Installation</h1>
            </div>
            <div className='px-20 flex items-center md:mb-0 mb-3'>
                <img src='/images/transaction.png' className='size-10' />
                <h1 className='ml-2 text-xl text-[#4A4A4A] font-medium'>Secured Transactions</h1>
            </div>
            <div className='px-20 flex items-center md:mb-0 mb-3'>
                <img src='/images/tracking.png' className='size-10' />
                <h1 className='ml-2 text-xl text-[#4A4A4A] font-medium'>Flexible Delivery</h1>
            </div>
        </div>
        
    </div>
    
  )
}

export default About