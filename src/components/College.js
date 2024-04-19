import React from 'react'
import overall from "./images/overall.png"
import uni from "./images/Uni_WL.png"
import medical from "./images/Medi_WL.png"
import engineer from "./images/Eng_WL.png"
import manage from "./images/Manag_WL.png"
import dental from "./images/Den_WL.png"
import law from "./images/Law_WL.png"
import pharmacy from "./images/Pharm_WL.png"
import architect from "./images/Arch_WL.png"
import { Link, useNavigate } from 'react-router-dom'
import Header from './Header'
const College = () => {
  const navigate=useNavigate()
  return (
    <div>
      <Header/>
      <h1 className='font-bold text-2xl p-4 m-4 text-center'>College Ranking</h1>
      <h1 className='font-bold text-2xl p-2 text-center'>Choose your stream</h1>
     
      
      <div  className='bg-blue-100 p-3 m-4 rounded-lg flex space-x-20'>

      <img 
        className='w-28 p-2 m-2'
        src={uni} alt="overall "/>
        <h1 className='font-semibold text-2xl p-3 m-2 cursor-pointer '
        onClick={()=>{
          navigate("/Universities")
        }}
        >Universities</h1>
      </div>
      <div  className='bg-green-100 p-3 m-4 rounded-lg flex space-x-20'>
      <img 
        className='w-28 p-2 m-2'
        src={medical} alt="overall "/>
        <h1 className='font-semibold text-2xl p-3 m-2 cursor-pointer '
        onClick={()=>{
          navigate("/Medical")
        }}
        >Medical</h1>
     </div>
      <div  className='bg-violet-100 p-3 m-4 rounded-lg flex space-x-20'>

        <img 
        className='w-28 p-2 m-2'
        src={engineer} alt="overall "/>
        <h1 className='font-semibold text-2xl p-3 m-2 cursor-pointer'
        onClick={()=>{
          navigate("/Engineering")
        }}
        >Engineering</h1>
      </div>
      <div  className='bg-cyan-100 p-3 m-4 rounded-lg flex space-x-16'>
      <img 
        className='w-28 p-2 m-2'
        src={manage} alt="overall "/>
        <h1 className='font-semibold text-2xl p-3 m-4 cursor-pointer'
        onClick={()=>{
          navigate("/Management")
        }}
        
        >Management</h1>

      </div>
      <div  className='bg-red-200 p-3 m-4 rounded-lg flex space-x-20'>
      <img 
        className='w-28 p-2 m-2'
        src={pharmacy} alt="overall "/>
        <h1 className='font-semibold text-2xl p-3 m-2 cursor-pointer'
        onClick={()=>{
          navigate("/PharmacyCollege")
        }}
        >Pharmacy</h1>
      </div>
      <div  className='bg-orange-200 p-3 m-4 rounded-lg flex space-x-20'>
      <img 
        className='w-28 p-2 m-2'
        src={dental} alt="overall "/>
        <h1 className='font-semibold text-2xl p-3 m-2 cursor-pointer'
        onClick={()=>{
          navigate("/DentalCollege")
        }}
        
        >Dental</h1>

      </div>
      <div  className='bg-gray-300 p-3 m-4 rounded-lg flex space-x-20'>
      <img 
        className='w-28 p-2 m-2'
        src={law} alt="overall "/>
        <h1 className='font-semibold text-2xl p-3 m-2 cursor-pointer'
        onClick={()=>{
          navigate("/LawCollege")
        }}
        
        >Law</h1>
      </div>
      <div  className='bg-sky-200 p-3 m-4 rounded-lg flex space-x-19'>
      <img 
        className='w-28 p-2 m-2'
        src={architect} alt="overall "/>
        <h1 className='font-semibold text-2xl p-3 m-2 cursor-pointer '
         onClick={()=>{
          navigate("/ArchitectureCollege")
        }}
        >Architecture and planning</h1>
      </div>
     
    </div>
  )
}

export default College
