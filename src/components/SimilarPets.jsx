import React, { useEffect,useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import { MdLocationPin } from 'react-icons/md';
import Rottweler from '../assets/rottweiler.jpg'
import { useNavigate } from 'react-router-dom';
const SimilarPets = () => {
   const [breeds, setBreeds] = useState([])
    const navigate = useNavigate();
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await fetch('/api/breeds')
        const data = await res.json()
        console.log(data) 
        setBreeds(data)   
      } catch (err) {
        console.error(err)
      }
    }
    fetchdata()
  }, [])
  const handleNavigation=(breed)=>{
    localStorage.setItem("selectedBreed",breed);
    navigate('/')
  }
  return (
    <div className='my-8 mx-4 md:mx-[80px]'>
        <h1 className='text-[40px] font-bold text-black'>Similar <span className='text-[#F5790C]'>Pet Breeds</span></h1>
        <div className='flex gap-8 overflow-x-auto scroll-smooth scrollbar-hide'>
            {
                breeds.map((item,index)=>(
                    <div key={index} className='flex items-center gap-12 cursor-pointer' onClick={()=>handleNavigation(item._id)}>
                    <div  className='related w-[280px] md:w-[430px]  rounded-[15px] drop-shadow-md bg-white'>
                        <AiOutlineHeart className='absolute left-[230px] md:left-[380px] font-extraBold text-[32px] mt-4 text-[#F5790C]'/>
                        <img src={Rottweler} alt='rottaweler' className='w-full h-[250px] rounded-t-[15px]'></img>
                        <div className='p-4 space-y-2'>
                            <h1 className='text-[24px] text-black font-medium'>{item.name}</h1>
                            <p className='text-[#727271] text-[18px]'>{item.basicInfo.age},{item.basicInfo.gender}</p>
                            <p className='flex gap-2 items-center text-[#727271] text-[18px]'><MdLocationPin/>{item.location}</p>
                       </div>
                    </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default SimilarPets