import SimilarPets from "./components/SimilarPets";
import { FaHeart } from 'react-icons/fa';
import { BiBlock } from 'react-icons/bi';
import { MdOutlineReport } from 'react-icons/md';
import { MdOutlineColorLens } from 'react-icons/md';
import { BsClock } from 'react-icons/bs';
import { BsGenderFemale } from 'react-icons/bs';
import { FaCheck } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import Rottweler from './assets/rottweiler.jpg'
import Header from "./components/Header";
import { useEffect, useState } from "react";
export default function App() {
  const [singleBreed,setSingleBreed]=useState(null)
  const [id,setId]=useState('68b57438716027f3cd2c5ef8');
    useEffect(() => {
      const fetchdata = async () => {
        try {
          const res = await fetch('/api/breeds')
          const data = await res.json()
          const found= data.find((b)=>b._id===id);
          setSingleBreed(found)   
        } catch (err) {
          console.error(err)
        }
      }
      fetchdata()
    }, [id])
    useEffect(() => {
  const storedBreedid = localStorage.getItem("selectedBreed");
  if (storedBreedid) {
    setId(storedBreedid);
  } else {
    // fallback: fetch from API
  }
}, []);

    if (!singleBreed) return <p>Loading breed...</p>;
  return (
    <div className="">
      <Header/>
      <div className="flex flex-col md:flex-row  gap-8 mx-4 md:mx-[80px]">
        <section className="space-y-2 md:w-[900px]">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
            <h1 className="font-medium text-[40px] text-black">{singleBreed.name}</h1>
            <p className="text-[20px] text-[#727271]">{singleBreed.location}</p>
            </div>
             <p className="bg-[#0DB2391A] text-center text-[#0DB239] rounded-[5px] text-[14px] w-[108px] h-[28px]">Reserved</p>
          </div>
          <div className="related w-full h-[600px] rounded-[15px] bg-white drop-shadow-lg">
            <FaHeart className="absolute mt-4 left-[270px] md:left-[700px] text-[#F5790C] text-[24px]"/>
             <img src={Rottweler} alt='rottaweler' className='w-full h-[471px] rounded-t-[15px]'></img>
            <p className="absolute bottom-[180px] text-center text-[18px] text-white w-[226px] h-[49px] px-4 font-bold rounded-tr-[10px] bg-[#F5790C]">Price: ₹ {singleBreed.price}/-</p>
            <p className="font-medium text-[18px] text-black px-4 py-2">Post Date : <span className="text-[#727271]">{singleBreed.postDate}</span></p>
            <div className="border-t-[1px] border-[#EFEFEF] px-4">
              <h1 className="text-[24px] font-semibold text-black">Identifications</h1>
              <p className="text-[#727271] text-[18px]">{singleBreed.identifications}</p>
            </div>
          </div>
          <div className="w-full  rounded-[15px] bg-white drop-shadow-lg">
            <p className="text-[20px] font-medium border-b-[1px] border-[#EFEFEF] py-4 px-2">Rotaweller Breed  Information</p>
            <ul className="p-4 space-y-4">
              <li className="flex items-center justify-between text-[18px]">
                <p className="text-[#121212]">Original</p>
                <p className="text-[#727271]">{singleBreed.breedInformation.origin}</p>
                </li>
                <li className="flex items-center justify-between text-[18px]">
                <p className="text-[#121212]">Ideal space</p>
                <p className="text-[#727271]">{singleBreed.breedInformation.idealSpace}</p>
                </li>
               {singleBreed.breedInformation.coatLeangth &&<li className="flex items-center justify-between text-[18px]">
                <p className="text-[#121212]">Coat Leangth</p>
                <p className="text-[#727271]">{singleBreed.breedInformation.coatLeangth}</p>
                </li>}
                <li className="flex items-center justify-between text-[18px]">
                <p className="text-[#121212]">Life Expectency</p>
                <p className="text-[#727271]">{singleBreed.breedInformation.coatType}</p>
                </li>
                <li className="flex items-center justify-between text-[18px]">
                <p className="text-[#121212]">Coat Type</p>
                 <p className="text-[#727271]">{singleBreed.breedInformation.coatType}</p>
                </li>
                <li className="flex items-center justify-between text-[18px]">
                <p className="text-[#121212]">Ideal Weather</p>
                <p className="text-[#727271]">{singleBreed.breedInformation.idealWeather}</p>
                <p className="text-[#727271]"></p>
                </li>
            </ul>

          </div>
          <div className="w-full h-[226px] rounded-[15px] bg-white drop-shadow-lg">
            <div className="flex justify-between text-[20px] font-medium border-b-[1px] border-[#EFEFEF] py-4 px-2">Order Details
              <div className="flex gap-4">
                <p className="flex items-center gap-1 p-1 justify-center  bg-[#FAC0C080] text-center text-[#C53030] rounded-[5px] text-[14px] w-[108px] h-[28px]"><MdOutlineReport/>Report</p>
                <p className="flex items-center gap-1 justify-center p-1 bg-[#FAC0C080] text-center text-[#C53030] rounded-[5px] text-[14px] w-[108px] h-[28px]"><BiBlock/>User</p>
              </div>
            </div>
            <div className="space-y-4 ml-12">
              <div className="mt-8">
              <p className="text-[20px] font-semibold">{singleBreed.ownerDetails.ownerName}</p>
              <p className="text-[#2D2C3C] text-[14px]">{singleBreed.ownerDetails.location}</p>
              </div>
              <div className="flex gap-4">
                <p className="bg-[#189D111A] text-center text-[#189D11] rounded-[5px] text-[14px] w-[108px] h-[28px]">Phone verified</p>
                <p className="bg-[#189D111A] text-center text-[#189D11] rounded-[5px] text-[14px] w-[108px] h-[28px]">Email verified</p>
              </div>
            </div>

          </div>


        </section>
        <section className="space-y-4 md:w-[670px]">
          <div className="w-full  rounded-[15px] bg-white drop-shadow-lg">
            <p className="text-[20px] font-medium border-b-[1px] border-[#EFEFEF] py-4 px-2">Basic Information</p>
            <ul className="p-4 space-y-4">
              <li className="flex items-center justify-between text-[18px]">
                <p className="text-[#121212]">petType</p>
                <p className="text-[#727271]">{singleBreed.basicInfo.petType}</p>
                </li>
                <li className="flex items-center justify-between text-[18px]">
                <p className="text-[#121212]">age</p>
                <p className="text-[#727271]">{singleBreed.basicInfo.age}</p>
                </li>
                <li className="flex items-center justify-between text-[18px]">
                <p className="text-[#121212]">Gender</p>
                <p className="text-[#727271]">{singleBreed.basicInfo.gender}</p>
                </li>
                <li className="flex items-center justify-between text-[18px]">
                <p className="text-[#121212]">Color</p>
                <p className="text-[#727271]">{singleBreed.basicInfo.color}</p>
                </li>
                <li className="flex items-center justify-between text-[18px]">
                <p className="text-[#121212]">Size</p>
                <p className="text-[#727271]">{singleBreed.basicInfo.size}</p>
                </li>
                <li className="flex items-center justify-between text-[18px]">
                <p className="text-[#121212]">Pet Variety</p>
                <p className="text-[#727271]">{singleBreed.basicInfo.petVariety}</p>
                </li>
            </ul>

          </div>
          <div className="w-full md:h-[188px] rounded-[15px] bg-white drop-shadow-lg px-4">
             <p className="text-[20px] font-medium  py-4 px-2">Additional Information</p>
             <div className="grid grid-cols-2 gap-6">
             <p className="flex items-center gap-2">{singleBreed.additionalInfo.vaccinated===true ? <FaCheck className="text-[#F5790C] text-[24px] bg-white rounded-full p-2 w-[32px] h-[32px] drop-shadow-md"/> :<MdClose className="text-[#F5790C] text-[24px] bg-white rounded-full p-2 w-[32px] h-[32px] drop-shadow-md"/>} Vaccinated</p>
             <p className="flex items-center gap-2">{singleBreed.additionalInfo.victoriaHadParents===true ? <FaCheck className="text-[#F5790C] text-[24px] bg-white rounded-full p-2 w-[32px] h-[32px] drop-shadow-md"/> :<MdClose className="text-[#F5790C] text-[24px] bg-white rounded-full p-2 w-[32px] h-[32px] drop-shadow-md"/>}Victoria had Parents</p>
             <p className="flex items-center gap-2">{singleBreed.additionalInfo.transportServiceIncluded===true ? <FaCheck className="text-[#F5790C] text-[24px] bg-white rounded-full p-2 w-[32px] h-[32px] drop-shadow-md"/> :<MdClose className="text-[#F5790C] text-[24px] bg-white rounded-full p-2 w-[32px] h-[32px] drop-shadow-md"/>}Transport service included</p>
             </div>
          </div>
           <div className="">
            <p className="text-[24px] text-black font-medium">
              What you should know about Rottweiler
            </p>
            <div className="space-y-2 text-[18px] text-[#727271]">
            <p>The <span className="text-[#F5790C]">Rottweiler</span> Dog, also lovingly called Alsatians by the British, is a loyal, versatile and intelligent dog breed. They are originally from Germany and are called “DEUTSCHER SCHÄFERHUND” in German.</p>

<p>They are bred for sheep herding and to protect them from wolves. They are known to have high stamina and are used in military, police forces, in search and rescue operations or even as service dogs.</p>

<p>They are excellent guard dogs and are equally patient with children and people of all ages. Early socialization helps them thrive in all kinds of families.</p>

<p>They are excellent guard dogs and are equally patient with children and people of all ages. Early socialization helps them thrive in all kinds of families.</p>
<p>They are excellent guard dogs and are equally patient with children
They became very famous in the United States in the early 1900s and are considered the ideal breed for the K9 dog squad.<span className="text-[#F5790C] underline">READ MORE</span></p>
          </div>
          </div>
          <div className="flex justify-center items-center gap-12 bg-[#FFF5ED] w-full h-[192px] rounded-[15px] bg-white drop-shadow-lg">
             <p className="text-[20px] font-medium  py-4 px-2">If you are Intrested</p>
             <button className="md:w-[172px] h-[48px] py-[8px] px-[16px] rounded-[8px] text-white text-[14px] bg-[#F5790C]">Message</button>
          </div>

        </section>
      </div>
     <SimilarPets/>
    </div>
  )
}