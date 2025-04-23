import React from 'react';
import { IoClose } from 'react-icons/io5'
import { AiFillPlusSquare } from "react-icons/ai";
import { AiFillMinusSquare } from "react-icons/ai";



const Popup = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 bg-white/30 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50 p-4">
  <div className='bg-white p-4 md:p-5 rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto'>
    <div className="flex justify-end">
      <IoClose onClick={onClose} className='size-6 md:size-8 text-[#4a4a4a] cursor-pointer hover:text-[#fc9521] transition-colors'/>
    </div>
    
    <div className='flex justify-center my-2'>
      <h1 className='text-xl md:text-2xl lg:text-3xl text-[#4a4a4a] font-medium pb-1 border-b-2 border-[#fc9521] text-center px-4'>
        Product Details
      </h1>
    </div>
    
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center px-2 md:px-4'>
      <div className="flex justify-center">
        <img src={product.image} className='w-48 max-w-xs h-48 max-h-60 md:max-h-80 object-contain rounded-lg'/>
      </div>
      <div className='p-2 flex flex-col gap-4 md:gap-6 justify-center items-center'>
        <h1 className='text-xl md:text-2xl font-medium text-center w-full break-words'>
          {product.Product_Name}
        </h1>
        <p className='text-sm md:text-base text-center w-full'>
          {product.Description}
        </p>
        <div className='flex items-center gap-3 mt-2'>
          <p className='font-light text-lg md:text-xl'>{product.price}</p>
          <div className='flex gap-3 md:gap-4'>
            <AiFillPlusSquare className='size-7 md:size-8 cursor-pointer hover:text-[#fc9521] transition-colors'/>
            <AiFillMinusSquare className='size-7 md:size-8 cursor-pointer hover:text-[#fc9521] transition-colors'/>
          </div>
        </div>
      </div>
    </div>   
    <div className='flex items-center justify-center mt-6 mb-2 md:mb-4'>
      <button className='w-full max-w-xs bg-[#fc9521] hover:bg-[#e6861a] text-white rounded-lg px-5 py-2 md:py-3 text-sm md:text-base transition-colors tracking-wider'>Add To Cart</button>
    </div>
  </div>
</div>
  );
};

export default Popup;