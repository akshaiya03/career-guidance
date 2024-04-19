import React from 'react'
import { useNavigate } from 'react-router-dom'
import career from "./images/homeimage.jpg"
import Header from './Header'
const Landingpage = () => {
  const navigate = useNavigate()

  
  return (
    <div>
      <Header/>
      <div className='md:flex'>
      <div className='md:w-[700px]'>
        <h1 className='sm: font-bold text-4xl sm: text-center pt-14'>Careerguidance</h1>
      <p className='sm: text-2xl p-5 m-2 text-center md:text-3xl font-semibold'>Navigate your career path with confidence. Discover your potential today and embark on a journey to success. Get started now!"</p>
      <button
      onClick={()=>{
        navigate("/login")
     }}
      className=' md: bg-blue-500 text-white text-xl rounded-lg p-5 ml-32'>Get started</button>
      </div>
      <div>
      <img 
      className='sm: w-[390px] sm: h-[390px] sm: ml-4 md:w-[600px] md:h-[500px] md:m-10 md:p-10 '
      src={career}
        alt="img"
      />
      </div>
      </div>
    
    </div>
  )
}

export default Landingpage
