import React from 'react'
import Products from '../Products.json'

const Productslist = () => {
  return (
    <div className=' border-t pt-10 border-gray-300'>
    <h1 className='flex justify-center items-center text-3xl text-[#4A4A4A] font-bold'>Our Recent Products</h1>
    <div className='mt-10 border-t-black py-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 sm:px-10 lg:px-20 gap-x-8 gap-y-10'>
      {Products.map((product) => (
        <a key={product.id} href='#' className='flex flex-col justify-center items-center pb-6 shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out'>
          <img src={product.image} alt={product.Product_Name} className='w-full h-48 object-cover mb-4'/>
          <h1 className='text-lg font-medium'>{product.Product_Name}</h1>
          <p className='mt-2 text-[#fc9521]'>{product.space}</p>
          <p className='mt-2 font-semibold'>{product.price}</p>
        </a>
      ))}
    </div>
  </div>
  )
}

export default Productslist