import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
const Philosophy = () => {
  return (
    <div>
      <Header/>
    <div>
      <h1 className='font-bold text-center text-2xl p-3 m-4'>Philosophy and Critical Thinking</h1>
      <div >
      <iframe 
      className='w-[400px] p-3 m-2 shadow-xl'
      width="560" height="315" src="https://www.youtube.com/embed/Cum3k-Wglfw?si=lsg7ZJ-JfLyhht_V" title="YouTube video player"  allowfullscreen></iframe>
      </div>
      <div >

      <h1 className='font-bold text-xl p-2 m-3 '>Course Name: Philosophy and Critical Thinking</h1>
      <h1 className='font-bold text-xl p-2 m-3'>Paid or Free: Free(Access to Complete Course Content) </h1>
        <h1 className='font-bold text-xl p-2 m-3'> Online plateform: Coursera</h1>
        
        <h1 className='font-bold text-xl p-2 m-3'>Certificate of completion: Provided (Paid for Certification)</h1>
        <Link 
        className='text-xl p-2 m-3 font-bold text-blue-600 '
        to="https://www.coursera.org/specializations/logic-critical-thinking-duke">➡️ visit the website</Link>
        
      </div>
    </div>
    </div>
  )
}

export default Philosophy
