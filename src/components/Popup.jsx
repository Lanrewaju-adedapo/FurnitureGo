import React from 'react';
import { IoClose } from 'react-icons/io5'
import { AiFillPlusSquare } from "react-icons/ai";
import { AiFillMinusSquare } from "react-icons/ai";



const Popup = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 bg-white/30 backdrop-blur-none bg-opacity-50 flex items-center justify-center z-50 ">
      <div className='bg-white p-5 rounded-xl px-4 py-3 shadow-2xl'>
        <IoClose onClick={onClose} className='size-10 text-[#4a4a4a]'/>
        <div className='flex justify-center my-2'>
          <h1 className='text-2xl md:text-3xl text-[#4a4a4a] font-medium pb-1 border-b-2 md:border-b-3 border-[#fc9521] text-center px-4'>
          Product Details
          </h1>
        </div>
        <div className='grid grid-cols-2 gap-3 items-center px-4'>
          <img src={product.image} className='size-48 mt-2 rounded-lg'/>
          <div className='p-2 flex flex-col gap-7 justify-center items-center w-70'>
            <h1 className='text-2xl font-medium max-w-150 text-center'>{product.Product_Name}</h1>
            <p className='text-center'>{product.Description}</p>
          <div className='flex items-center gap-3'>
            <p className='font-light text-xl'>{product.price}</p>
            <div className='flex gap-4'>
              <AiFillPlusSquare className='size-8'/>
              <AiFillMinusSquare className='size-8'/>
            </div>
          </div>
          </div>
        </div>
        <div className='flex items-center justify-center mb-5'>
          <button className='w-150 bg-[#fc9521] text-white rounded-lg px-5 py-2 flex items-center justify-center'>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;