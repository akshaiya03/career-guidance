import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
const GoogleDigital = () => {
  return (
    <div>
       <Header/>
    <div>
      <h1 className='font-bold text-center text-2xl p-3 m-4'>Google Digital Marketing and e-Commerce </h1>
      <div >
      <iframe 
      className='w-[400px] p-3 m-2 shadow-xl'
      width="560" height="315" src="https://www.youtube.com/embed/U-X7DG9UY3M?si=3tLwpv9k6xqL61UQ" title="YouTube video player"allowfullscreen></iframe>
      </div>
      <div >

      <h1 className='font-bold text-xl p-2 m-3 '>Course Name: Google Digital Marketing and e-Commerce </h1>
      <h1 className='font-bold text-xl p-2 m-3'>Paid or Free: Free(Access to Complete Course Content) </h1>
        <h1 className='font-bold text-xl p-2 m-3'> Online plateform: Coursera, Google</h1>
        
        <h1 className='font-bold text-xl p-2 m-3'>Certificate of completion: Provided(Paid for Certification) </h1>
        <Link 
        className='text-xl p-2 m-3 font-bold text-blue-600 '
        to="https://www.coursera.org/professional-certificates/google-digital-marketing-ecommerce?utm_source=gg&utm_medium=sem&utm_campaign=B2C_INDIA_Google_FTCOF_Digital_Marketing_Google_Professional_Certificate_ArtE&utm_content=B2C&campaignid=19073950707&adgroupid=159653634693&device=c&keyword=google%20digital%20marketing%20and%20ecommerce%20course&matchtype=p&network=g&devicemodel=&adpostion=&creativeid=696893433064&hide_mobile_promo&gad_source=1&gclid=Cj0KCQjwiYOxBhC5ARIsAIvdH52z_wAaHh9jVjIwfdDcIlQTMyrK7QLrDD26MPz97sSfp9zPl9WTHdkaAhs2EALw_wcB">➡️ visit the website</Link>
        
      </div>
    </div>
    </div>
  )
}

export default GoogleDigital
