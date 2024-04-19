import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
const CreativeWriting = () => {
  return (
    <div>
        <Header/>
      <div>
      <h1 className='font-bold text-center text-2xl p-3 m-4'>Creative Writing Specialization </h1>
      <div >
      <iframe 
      className='w-[400px] p-3 m-2 shadow-xl'
      width="560" height="315" src="https://www.youtube.com/embed/wDhU9fOAhiA?si=0YOZ3DNJJESORnee" title="YouTube video player"  allowfullscreen></iframe>
      </div>
      <div >

      <h1 className='font-bold text-xl p-2 m-3 '>Course Name: Cybersecurity for Everyone</h1>
      <h1 className='font-bold text-xl p-2 m-3'>Paid or Free: Free(Access to Complete Course Content) </h1>
        <h1 className='font-bold text-xl p-2 m-3'> Online plateform: Coursera </h1>
        
        <h1 className='font-bold text-xl p-2 m-3'>Certificate of completion: Provided  (Paid for Certification)</h1>
        <Link 
        className='text-xl p-2 m-3 font-bold text-blue-600 '
        to="https://www.coursera.org/specializations/creative-writing">➡️ visit the website</Link>
        
      </div>
    </div>
    </div>
  )
}

export default CreativeWriting
