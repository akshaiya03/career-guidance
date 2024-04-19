import React from 'react'
import Header from './Header'
import Modern from "./images/mordern literature.jpg"
import Creative from "./images/creative thinking.png"
import philosophy from "./images/Critical-Thinking-feat-image.jpg"
import english from "./images/english.png"
import psychology from "./images/AdobeStock_407594652-768x432.webp"
import { useNavigate } from 'react-router-dom'
const Humanities = () => {
  const navigate=useNavigate();
  return (
    <div>
      <Header/>
      
      <h1 className='font-bold text-2xl text-center p-3 m-4'>Free Online Courses After Class 12th Humanities</h1>
      <div >
        <div className=' rounded-2xl w-80 m-5 shadow-2xl p-2  ml-12'>
          <img src={Modern} alt="Cs" 
          className='w-80 h-52  '/>
          <h1 className=' p-2 text-2xl font-bold '>Modern Masterpieces of World Literature</h1>
        <button className='bg-cyan-700 text-white p-3 m-5 ml-0 rounded-2xl '
        onClick={()=>{
          navigate("/ModernLiterature")
        }}
        >View Course</button>
        </div>
        <div className='ml-12 rounded-2xl w-80 m-5 shadow-2xl p-2'>
          <img src={Creative} alt="Cs" 
          className='w-80 h-52  '/>
          <h1 className=' p-2 text-2xl font-bold '>Creative Writing Specialization </h1>
        <button className='bg-cyan-700 text-white p-3 m-5 ml-0 rounded-2xl '
        onClick={()=>{
          navigate("/CreativeWriting")
        }}
        >View Course</button>
        </div>
        <div className='ml-12 rounded-2xl w-80 m-5 shadow-2xl p-2'>
          <img src={philosophy} alt="Cs" 
          className='w-80 h-52  '/>
          <h1 className=' p-2 text-2xl font-bold '>Philosophy and Critical Thinking</h1>
        <button className='bg-cyan-700 text-white p-3 m-5 ml-0 rounded-2xl '
        onClick={()=>{
          navigate("/Philosophy")
        }}
        >View Course</button>
        </div>
        <div className='ml-12 rounded-2xl w-80 m-5 shadow-2xl p-2'>
          <img src={english} alt="Cs" 
          className='w-80 h-52  '/>
          <h1 className=' p-2 text-2xl font-bold '>English for Career Development </h1>
        <button className='bg-cyan-700 text-white p-3 m-5 ml-0 rounded-2xl '
         onClick={()=>{
          navigate("/English")
        }}
        >View Course</button>
        </div>
        <div className='ml-12 rounded-2xl w-80 m-5 shadow-2xl p-2'>
          <img src={psychology} alt="Cs" 
          className='w-80 h-52  '/>
          <h1 className=' p-2 text-2xl font-bold '>Social Psychology</h1>
        <button className='bg-cyan-700 text-white p-3 m-5 ml-0 rounded-2xl '
         onClick={()=>{
          navigate("/Socialpsychology")
        }}
        >View Course</button>
        </div>
        
      </div>
      </div>
    
  )
}

export default Humanities
