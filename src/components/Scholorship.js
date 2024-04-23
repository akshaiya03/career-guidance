import React from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
const Scholorship = () => {
  const navigate=useNavigate()
  return (
    <div>
      <Header/>
      <h1 className='text-3xl font-bold p-3 m-4 '>List of Scholarships for Students in India 2024</h1>
      <p className='text-xl font-semibold p-2 m-2'>In India, scholarships play a crucial role in facilitating access to education for students across various socio-economic backgrounds. These scholarships are offered by both government bodies and private organizations, aiming to support students in pursuing their academic goals and realizing their potential. With a diverse range of scholarships available, they cater to different levels of education, from primary school to postgraduate studies, as well as various fields of study.</p>
      <h1 className='font-bold text-2xl p-2 m-2'>Categories are:</h1>
      <div className='pl-5'>
      <div className='bg-sky-700 m-4  w-[350px] p-4  rounded-xl text-white font-bold text-xl  cursor-pointer'
      onClick={()=>{
        navigate("/GovernmentScholorships")
      }}
      > Government Scholorships</div>
      <div className='bg-sky-700 m-4 p-4 w-[350px] rounded-xl text-white font-bold text-xl  cursor-pointer'
      onClick={()=>{
        navigate("/PrivateScholorship")
      }}
      > private Scholorships</div>
      <div className='bg-sky-700 m-4 w-[350px] p-4  rounded-xl text-white font-bold text-xl  cursor-pointer'
      onClick={()=>{
        navigate("/StateScholorship")
      }}
      >State Scholorships</div>
      </div>
    </div>
  )
}

export default Scholorship
