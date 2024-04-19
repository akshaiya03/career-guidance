import React from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'

const Course = () => {
    const navigate= useNavigate()
  return (
   
    <div>
        <Header/>
      <h1 className='font-bold text-center text-3xl m-3 p-3'>List of Free Courses After 12th</h1>
      <p className='p-4  font-semibold text-lg m-2'>As a 12th grader, you are ready to go from high school to either further study or the workforce, standing at the beginning of a new chapter in your life. This crucial period is a great chance for you to increase your knowledge and learn new abilities that will help you later on. 
      </p>
      <p className='p-4 m-2 font-semibold text-lg'>We’ll look at some of the best free courses for 12th graders in this blog article, covering anything from academic subjects to practical skills, enabling you to expand your horizons and make the most of your final year.</p>
     <div className='pl-5'>
      <div className='bg-sky-700 m-4  w-[350px] p-4  rounded-xl text-white font-bold text-xl  cursor-pointer'
      onClick={()=>{
        navigate("/Science")
      }}
      > After Class 12th Science</div>
      <div className='bg-sky-700 m-4 p-4 w-[350px] rounded-xl text-white font-bold text-xl  cursor-pointer'
      onClick={()=>{
        navigate("/Humanities")
      }}
      > After Class 12th Humanities</div>
      <div className='bg-sky-700 m-4 w-[350px] p-4  rounded-xl text-white font-bold text-xl  cursor-pointer'
      onClick={()=>{
        navigate("/Commerse")
      }}
      > After Class 12th Commerce</div>
      </div>
      
    </div>
  )
}

export default Course
