import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
const DigitalMarketing = () => {
  return (
    <div>
       <Header/>
    <div>
      <h1 className='font-bold text-center text-2xl p-3 m-4'>Introduction to Digital Marketing  </h1>
      <div >
      <iframe 
      className='w-[400px] p-3 m-2 shadow-xl'
      width="560" height="315" src="https://www.youtube.com/embed/nkNHn0VqVBA?si=uuo5YV09qmzICuju" title="YouTube video player"  allowfullscreen></iframe>
      </div>
      <div >

      <h1 className='font-bold text-xl p-2 m-3 '>Course Name: Digital Marketing   </h1>
      <h1 className='font-bold text-xl p-2 m-3'>Paid or Free: Free(Access to Complete Course Content) </h1>
        <h1 className='font-bold text-xl p-2 m-3'> Online plateform: Google Digital Garage</h1>
        
        <h1 className='font-bold text-xl p-2 m-3'>Certificate of completion: Provided </h1>
        <Link 
        className='text-xl p-2 m-3 font-bold text-blue-600 '
        to="https://skillshop.exceedlms.com/student/collection/654330-digital-marketing?locale=en-GB">➡️ visit the website</Link>
        
      </div>
    </div>
    </div>
  )
}

export default DigitalMarketing
