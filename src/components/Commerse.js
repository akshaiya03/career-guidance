import React from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import marketstructure from "./images/market structure.jpg"
import digimarketing from "./images/Google-Digital-Marketing-e-Commerce-PC_omni.png"
import Businessfoundation from "./images/images.jpg"
import digitalmarketing from "./images/1703870573777.jpg"
import finalcialmarket from "./images/blog_financial_markets.jpg"
const Commerse = () => {
    const navigate=useNavigate()
  return (
    
    <div>
      <Header/>
      
      <h1 className='font-bold text-2xl text-center p-3 m-4'>Free Online Courses After Class 12th Commerse </h1>
      <div >
        <div className=' rounded-2xl w-80 m-5 shadow-2xl p-2  ml-12'>
          <img src={marketstructure} alt="Cs" 
          className='w-80 h-52  '/>
          <h1 className=' p-2 text-2xl font-bold '>Fundamentals of Market Structure</h1>
        <button className='bg-cyan-700 text-white p-3 m-5 ml-2 rounded-2xl '
        onClick={()=>{
          navigate("/marketstructure")
        }}
        >View Course</button>
        </div>
        <div className='ml-12 rounded-2xl w-80 m-5 shadow-2xl p-2'>
          <img src={digimarketing} alt="Cs" 
          className='w-80 h-52  '/>
          <h1 className=' p-2 text-2xl font-bold '>Google Digital Marketing and e-Commerce  </h1>
        <button className='bg-cyan-700 text-white p-3 m-5 ml-2 rounded-2xl '
        onClick={()=>{
          navigate("/GoogleDigitalMarketing")
        }}
        >View Course</button>
        </div>
        
        <div className='ml-12 rounded-2xl w-80 m-5 shadow-2xl p-2'>
          <img src={Businessfoundation} alt="Cs" 
          className='w-80 h-52  '/>
          <h1 className=' p-2 text-2xl font-bold '
          
          >Business Foundations  </h1>
        <button className='bg-cyan-700 text-white p-3 m-5 ml-2 rounded-2xl '
        onClick={()=>{
          navigate("/BusinessFoundation")
        }}
        >View Course</button>
        </div>
        <div className='ml-12 rounded-2xl w-80 m-5 shadow-2xl p-2'>
          <img src={digitalmarketing} alt="Cs" 
          className='w-80 h-52  '/>
          <h1 className=' p-2 text-2xl font-bold '>Digital Marketing </h1>
        <button className='bg-cyan-700 text-white p-3 m-5 ml-2 rounded-2xl '
        onClick={()=>{
          navigate("/DigitalMarketing")
        }}
        >View Course</button>
        </div>
        <div className='ml-12 rounded-2xl w-80 m-5 shadow-2xl p-2'>
          <img src={finalcialmarket} alt="Cs" 
          className='w-80 h-52  '/>
          <h1 className=' p-2 text-2xl font-bold '>Financial Markets</h1>
        <button className='bg-cyan-700 text-white p-3 m-5 ml-2 rounded-2xl '
        onClick={()=>{
          navigate("/FinancialMarkets")
        }}
        >View Course</button>
        </div>
        
      </div>
    </div>
  )
}

export default Commerse
