import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'

const Browse = () => {
 const navigate =useNavigate()
  return (
    
    <div>
      <Header/>
    <div className='items-center'>
       <h1 className='m-4 pl-20  font-bold text-2xl'>Explore</h1>
     <div className='md:flex md:flex-wrap p-10 pt-0'>  
    <div className='ml-9 p-3  rounded-lg shadow-xl w-[250px] h-[366px] space-y-11 hover:shadow-blue-300'>
        <h1 className='font-semibold p-3 text-lg'>Career</h1>
        <img 
        className='w-64 rounded-lg '
        alt="career" src="https://img.freepik.com/free-vector/flat-working-day-scene_52683-62859.jpg?t=st=1711800430~exp=1711804030~hmac=215e8fa10fd3dddd1a722719e875f4dab7fccd2e5ca89f95e5d1a672789ef274&w=900"/>
        <button 
        onClick={()=>{
           navigate("/Career")
        }}
        className='bg-blue-500 text-white ml-14 mt-4 p-2 m-2 rounded-lg'>Learn more</button>
    </div>
    <div className='ml-9 p-3 m-3 rounded-lg shadow-xl w-[250px] hover:shadow-blue-300'>
       <h1 className='font-semibold p-3 text-lg'>Scholorship</h1>
       <img 
       className='w-64 rounded-lg '
       alt="Scholorship" src="https://img.freepik.com/free-vector/graduation-concept-illustration_114360-4470.jpg?t=st=1711801282~exp=1711804882~hmac=79dab6f88f762766cc135087e4c4a282cfd91147433737467ff6c8631b4da73e&w=740"/>
       <button className='bg-blue-500 text-white ml-14 mt-4 p-2 m-2 rounded-lg'
       onClick={()=>{
         navigate("/scholorship")
       }}
       >Learn more</button>
    </div>
   <div className='ml-9 p-3 m-3 rounded-lg shadow-xl w-[250px] space-y-11 hover:shadow-blue-300'>
       <h1 className='font-semibold p-3 text-lg'>College</h1>
       <img 
       className='w-64 rounded-lg'
       alt="College" src="https://img.freepik.com/free-vector/college-students-concept-illustration_114360-10205.jpg?t=st=1711801130~exp=1711804730~hmac=5876e7d0a5bd4ee784a9ff1aa0be217ca526952795d3d28e018ad4507c5ba5bb&w=826"/>
       <button 
       className='bg-blue-500 text-white ml-14 mt-4 p-2 m-2 rounded-lg'
       onClick={()=>{
         navigate("/colleges")
       }}
       >Learn more</button>
       </div>
       <div className='ml-9 p-3 m-3 rounded-lg shadow-xl w-[250px] hover:shadow-blue-300'>
       <h1 className='font-semibold p-3 text-lg'>Exams</h1>
       <img 
       className='w-64 rounded-lg'
       alt="Exam" src="https://img.freepik.com/free-vector/college-entrance-exam-concept-illustration_114360-13742.jpg?t=st=1711801342~exp=1711804942~hmac=1cedfd5f58230a9c573ae907cd89acdfd286bd11f4e65ade3dd0d539417f169d&w=740"/>
       <button className='bg-blue-500 text-white ml-14 mt-4 p-2 m-2 rounded-lg'>Learn more</button>
       </div>
       <div className='ml-9 p-3 m-3 rounded-lg shadow-xl w-[250px] hover:shadow-blue-300'>
       <h1 className='font-semibold p-3 text-lg'>Webinar</h1>
       <img 
       className='w-64 rounded-lg'
       alt="Webinar" src="https://img.freepik.com/premium-vector/boy-girl-talking-video-calling_118167-7945.jpg?w=740"/>
       <button className='bg-blue-500 text-white ml-14 mt-4 p-2 m-2 rounded-lg'>Learn more</button>
       </div>
       <div className='ml-9 p-3 m-3 rounded-lg shadow-xl w-[250px] hover:shadow-blue-300'>
       <h1 className='font-semibold p-3 text-lg'>Course</h1>
       <img 
       className='w-64 rounded-lg'
       alt="career" src="https://img.freepik.com/free-vector/online-certification-with-books-glasses_23-2148571394.jpg?t=st=1711801719~exp=1711805319~hmac=631352d145c3538f246f19a45d2a8e42ba4b26958b3f0c982fe49be741064ecb&w=740"/>
       <button className='bg-blue-500 text-white ml-14 mt-4 p-2 m-2 rounded-lg'
        onClick={()=>{
          navigate("/Course")
       }}
       >Learn more</button>
       </div>
       </div> 
       </div>
    </div>
  )
}

export default Browse

