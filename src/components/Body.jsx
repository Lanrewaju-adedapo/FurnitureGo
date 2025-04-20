import React from 'react'
// import Bodyimg from '../images/office3.jpg'

const Body = () => {
  return (
    <>
      <div className='bg-white py-16 px-5 lg:px-10 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mt-'>
    <img 
        src='/images/office3.jpg' 
        className='w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[500px] h-auto' 
        alt="" 
    />
    <div className='w-full max-w-3xl'>
        <div className="flex items-center">
            <div className="border-b border-[#4A4A4A] w-8 md:w-15 mr-2"></div>
            <h1 className="text-[#4A4A4A] font-medium tracking-normal md:tracking-widest text-base md:text-xl lg:text-2xl">
                Boost Your Productivity.
            </h1>
        </div>
        <p className='mt-4 text-sm md:text-base lg:text-lg text-gray-600'>
          A well-designed office enhances focus and efficiency. Ergonomic furniture reduces fatigue, while organized layouts minimize distractions. Proper lighting and comfortable   seating improve mood and energy levels. A clutter-free, functional workspace fosters creativity and workflow. Investing in the right office setup leads to better performance, fewer errors, and higher productivity.
        </p>
        
    </div>
</div>
    </>
  )
}

export default Body