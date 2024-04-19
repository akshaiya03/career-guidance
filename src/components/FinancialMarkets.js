import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
const FinancialMarkets = () => {
  return (
    <div>
         <Header/>
    <div>
      <h1 className='font-bold text-center text-2xl p-3 m-4'>Financial Markets</h1>
      <div >
      <iframe 
      className='w-[400px] p-3 m-2 shadow-xl'
      width="560" height="315" src="https://www.youtube.com/embed/b9H6WO4yNvY?si=_muWTQrV-eTvVjrL" title="YouTube video player"  allowfullscreen></iframe>
      </div>
      <div >

      <h1 className='font-bold text-xl p-2 m-3 '>Course Name: Financial Markets</h1>
      <h1 className='font-bold text-xl p-2 m-3'>Paid or Free: Free(Access to Complete Course Content) </h1>
        <h1 className='font-bold text-xl p-2 m-3'> Online plateform: Cousera</h1>
        
        <h1 className='font-bold text-xl p-2 m-3'>Certificate of completion: Provided </h1>
        <Link 
        className='text-xl p-2 m-3 font-bold text-blue-600 '
        to="https://www.coursera.org/learn/financial-markets-global">➡️ visit the website</Link>
        
      </div>
    </div>
    </div>
  )
}

export default FinancialMarkets
