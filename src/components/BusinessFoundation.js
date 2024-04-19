import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

const BusinessFoundation = () => {
  return (
    <div>
       <Header/>
    <div>
      <h1 className='font-bold text-center text-2xl p-3 m-4'>Business Foundations </h1>
      <div >
      <iframe 
      className='w-[400px] p-3 m-2 shadow-xl'
      width="560" height="315" src="https://www.youtube.com/embed/01jk9Azl_HI?si=bEMs106K-cYCkQG8" title="YouTube video player"  allowfullscreen></iframe>
      </div>
      <div >

      <h1 className='font-bold text-xl p-2 m-3 '>Course Name: Business Foundations  </h1>
      <h1 className='font-bold text-xl p-2 m-3'>Paid or Free: Free(Access to Complete Course Content) </h1>
        <h1 className='font-bold text-xl p-2 m-3'> Online plateform: edX Learning</h1>
        
        <h1 className='font-bold text-xl p-2 m-3'>Certificate of completion: Provided(Paid for Certification) </h1>
        <Link 
        className='text-xl p-2 m-3 font-bold text-blue-600 '
        to="https://www.coursera.org/specializations/wharton-business-foundations">➡️ visit the website</Link>
        
      </div>
    </div>
    </div>
  )
}

export default BusinessFoundation
