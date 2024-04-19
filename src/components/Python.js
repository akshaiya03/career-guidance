import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

const Python = () => {
  return (
    <div>
      <Header/>
      <div>
      <h1 className='font-bold text-center text-2xl p-3 m-4'>Introduction to Python</h1>
      <div >
      <iframe
      className='w-[400px] p-3 m-2 shadow-xl'
       width="560" height="315" src="https://www.youtube.com/embed/_uQrJ0TkZlc?si=wRGyp98ZbqqTdpMz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div >

      <h1 className='font-bold text-xl p-2 m-3 '>Course Name:Python For Everybody Specialization  </h1>
      <h1 className='font-bold text-xl p-2 m-3'>Paid or Free: Free(Access to Complete Course Content) </h1>
        <h1 className='font-bold text-xl p-2 m-3'> Online plateform: Coursera</h1>
        
        <h1 className='font-bold text-xl p-2 m-3'>Certificate of completion: Provided(Paid for Certification) </h1>
        <Link 
        className='text-xl p-2 m-3 font-bold text-blue-600 '
        to="https://www.coursera.org/specializations/python?utm_source=gg&utm_medium=sem&utm_campaign=B2C_INDIA_Michigan_FTCOF_Python_For_Everybody_Specialization_ArtE_Apr_24&utm_content=B2C&campaignid=21151281836&adgroupid=164206015367&device=c&keyword=best%20python%20course%20on%20coursera&matchtype=p&network=g&devicemodel=&adpostion=&creativeid=695485485974&hide_mobile_promo&gad_source=1&gclid=Cj0KCQjwiYOxBhC5ARIsAIvdH514u6dqykKwVMBCMNIYwKIg37HS-k7AFPCJ0gztTqbwv5ajvhK6MvkaAscfEALw_wcB">➡️ visit the website</Link>
      </div>
    </div>
    </div>
  )
}

export default Python
