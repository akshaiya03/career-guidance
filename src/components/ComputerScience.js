import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

const ComputerScience = () => {
  return (
    <div>
        <Header/>
    <div>
      <h1 className='font-bold text-center text-2xl p-3 m-4'>Introduction to Computer Science</h1>
      <div >
      <iframe 
      className='w-[400px] p-3 m-2 shadow-xl'
      width="560" height="315" src="https://www.youtube.com/embed/zOjov-2OZ0E?si=lUGDKLYfEPm99b4S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div >

      <h1 className='font-bold text-xl p-2 m-3 '>Course Name: CS50’s Introduction to Computer Science </h1>
      <h1 className='font-bold text-xl p-2 m-3'>Paid or Free: Free(Access to Complete Course Content) </h1>
        <h1 className='font-bold text-xl p-2 m-3'> Online plateform: edX Learning</h1>
        
        <h1 className='font-bold text-xl p-2 m-3'>Certificate of completion: Provided </h1>
        <Link 
        className='text-xl p-2 m-3 font-bold text-blue-600 '
        to="https://www.edx.org/free-online-courses">➡️ visit the website</Link>
        
      </div>
    </div>
    </div>
  )
}

export default ComputerScience
