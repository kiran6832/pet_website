import React from 'react'
import { FaArrowLeft } from 'react-icons/fa';

const Header = () => {
  return (
    <div className=''>
        <div className='flex gap-2 items-center bg-[#FFFFFF] drop-shadow-lg text-[24px] text-black font-medium px-4 md:px-[80px] py-6'><FaArrowLeft/>Victoria</div>
        <div className='bg-[#F6F9FE] py-4 px-4 md:px-[80px] text-[#858584]'>Pet Sales / Home /<span className='text-black'> View</span> </div>
    </div>
  )
}

export default Header