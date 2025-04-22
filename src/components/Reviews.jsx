import React from 'react'

const Reviews = () => {
  return (
<section className='bg-gray-100 pt-8 pb-12 md:pt-10 md:pb-15 my-8 md:my-15 mx-4 sm:mx-6 md:mx-7 rounded-xl'>
  <div className='flex justify-center'>
    <h1 className='text-2xl md:text-3xl text-[#4a4a4a] font-medium pb-3 border-b-2 md:border-b-3 border-[#fc9521] text-center px-4'>
      Our Customers Reviews
    </h1>
  </div>
  <div className='mt-8 md:mt-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16'>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10'>
      {/* 1 */}
      <div className='flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
        <div className='flex items-center mb-4'>
          <img 
            src="/images/pic1.png" 
            className='size-10 md:size-12 mr-4 rounded-full object-cover'
            alt="Customer profile"
          />
          <h1 className='text-lg md:text-xl font-medium'>Lanre Adedapo</h1>
        </div> 
        <p className='text-center text-base md:text-lg'>
          "Great customer service, smooth shopping experience, and my bed is incredibly cozy!"
        </p>        
      </div>
      {/* 2 */}
      <div className='flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
        <div className='flex items-center mb-4'>
          <img 
            src="/images/pic2.png" 
            className='size-10 md:size-12 mr-4 rounded-full object-cover'
            alt="Customer profile"
          />
          <h1 className='text-lg md:text-xl font-medium'>Lanre Adedapo</h1>
        </div> 
        <p className='text-center text-base md:text-lg'>
          "High-quality furniture at affordable prices, and the delivery was super fast!"
        </p>        
      </div>
      {/* 2 */}
      <div className='flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
        <div className='flex items-center mb-4'>
          <img 
            src="/images/pic3.png" 
            className='size-10 md:size-12 mr-4 rounded-full object-cover'
            alt="Customer profile"
          />
          <h1 className='text-lg md:text-xl font-medium'>Lanre Adedapo</h1>
        </div> 
        <p className='text-center text-base md:text-lg'>
          "The perfect blend of comfort and elegance—highly recommend this store!"
        </p>        
      </div>
    </div>
  </div>
</section>
  )
}

export default Reviews