import React from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
const Career = () => {
  const navigate=useNavigate()
  return (
    <div >
      <Header/>
      <h1 className='font-bold text-3xl pt-4 pr-4 pl-4 m-4 text-center'>Find a Career that works for you</h1>
      <h2 className='font-semibold text-xl text-center p-2'>Guiding You Towards Fulfillment and Achievement in Your Career</h2>
      <div className='bg-blue-100 p-3 m-4 rounded-lg flex space-x-20'>
        <div className='font-semibold text-2xl cursor-pointer '>
        <h1 className='p-3 m-2'
        onClick={()=>{
          navigate("/Business")
        }}
        >All Careers</h1>
        </div>
    
       </div>
       <div className='bg-blue-100 p-3 m-4 rounded-lg flex space-x-20'>
        <div className='font-semibold text-2xl  '>
        <h1 className='p-3 m-2 cursor-pointer'
        onClick={()=>{
          navigate("/Software")
        }}
        >Software Engineering and IT</h1>
        
        </div>
       </div>
       <div className='bg-blue-100 p-3 m-4 rounded-lg flex space-x-20'>
        <div className='font-semibold text-2xl  '>
        <h1 className='p-3 m-2  cursor-pointer'
        onClick={()=>{
          navigate("/Business")
        }}
        >Business</h1>
        
        </div>
       </div>
       <div className='bg-blue-100 p-3 m-4 rounded-lg flex space-x-20'>
        <div className='font-semibold text-2xl  '>
        <h1 className='p-3 m-2  cursor-pointer'
        onClick={()=>{
          navigate("/SalesandMarketing")
        }}
        >Sales and Marketing</h1>
        
        </div>
       </div>
       <div className='bg-blue-100 p-3 m-4 rounded-lg flex space-x-20'>
        <div className='font-semibold text-2xl  '>
        <h1 className='p-3 m-2  cursor-pointer'
        onClick={()=>{
          navigate("/Datascientist")
        }}
        >Data science and analyst</h1>
        
        </div>
       </div>
    </div>
  )
}

export default Career
