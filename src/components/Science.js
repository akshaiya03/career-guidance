import React from 'react'
import Header from './Header'
import CS from "./images/A-Very-Short-Introduction-to-Computer-Science.jpg"
import python from "./images/python.jpg"
import food from "./images/food.jpg"
import machinelearn from "./images/1685986085903.jpg"
import cybersecurity from "./images/introduction-to-cybersecurity-1.png"
import { useNavigate } from 'react-router-dom'
const Science = () => {

  const navigate = useNavigate();
  return (
    <div>
      <Header/>
      
    <h1 className='font-bold text-2xl text-center p-3 m-4'>Free Online Courses After Class 12th Science </h1>
    <div >
      <div className=' rounded-2xl w-80 m-5 shadow-2xl p-2  ml-12'>
        <img src={CS} alt="Cs" 
        className='w-80 h-52  '/>
        <h1 className=' p-2 text-2xl font-bold '>CS50’s Introduction to Computer Science</h1>
      <button className='bg-cyan-700 text-white p-3 m-5 ml-2 rounded-2xl '
      onClick={()=>{
        navigate("/ComputerS")
      }}
      >View Course</button>
      </div>
      <div className='ml-12 rounded-2xl w-80 m-5 shadow-2xl p-2'>
        <img src={python} alt="Cs" 
        className='w-80 h-52  '/>
        <h1 className=' p-2 text-2xl font-bold '>Python For Everybody Specialization </h1>
      <button className='bg-cyan-700 text-white p-3 m-5 ml-2 rounded-2xl '
      onClick={()=>{
        navigate("/Python")
      }}
      >View Course</button>
      </div>
      
      <div className='ml-12 rounded-2xl w-80 m-5 shadow-2xl p-2'>
        <img src={machinelearn} alt="Cs" 
        className='w-80 h-52  '/>
        <h1 className=' p-2 text-2xl font-bold '
        
        >Machine Learning </h1>
      <button className='bg-cyan-700 text-white p-3 m-5 ml-2 rounded-2xl '
      onClick={()=>{
        navigate("/MachineLearning")
      }}
      >View Course</button>
      </div>
      <div className='ml-12 rounded-2xl w-80 m-5 shadow-2xl p-2'>
        <img src={cybersecurity} alt="Cs" 
        className='w-80 h-52  '/>
        <h1 className=' p-2 text-2xl font-bold '>Cybersecurity for Everyone</h1>
      <button className='bg-cyan-700 text-white p-3 m-5 ml-2 rounded-2xl '
      onClick={()=>{
        navigate("/Cybersecurity")
      }}
      >View Course</button>
      </div>
      <div className='ml-12 rounded-2xl w-80 m-5 shadow-2xl p-2'>
        <img src={food} alt="Cs" 
        className='w-80 h-52  '/>
        <h1 className=' p-2 text-2xl font-bold '>Stanford Introduction to Food and Health</h1>
      <button className='bg-cyan-700 text-white p-3 m-5 ml-2 rounded-2xl '
      onClick={()=>{
        navigate("/FoodandHealth")
      }}
      >View Course</button>
      </div>
      
    </div>
    </div>
  )
}

export default Science
