import React, { useState } from 'react'
import Header from './Header'
import { ChevronDown } from 'lucide-react'
import { ChevronUp } from 'lucide-react'
const Accordian = ({title,description,Application,department}) => {
  const[accordianOpen,setAccordianOpen]=useState(false);
  
  return (
    
    <div>

     <div className='border border-gray-400 shadow-xl rounded-2xl m-5 p-2'>
      <button className='flex text-left'
      onClick={()=>{
        setAccordianOpen(!accordianOpen);
      }}
      >
      <h1 className='text-[24px] font-bold p-3 m-4 mb-0 text-blue-700 w-[250px]'>{title}</h1>
      {accordianOpen ? <ChevronUp className='w-20 h-9 m-7 ml-0'/>:<ChevronDown  className='w-20 h-9 m-7 ml-0'/>}
      </button>
      
      <div className={`grid overflow-hidden transition-all ease-in-out ${

       accordianOpen ? "grid-rows-[2fr] opacity-100":"grid-rows-[0fr] opacity-0"
      }`}>
      <p className='overflow-hidden font-semibold p-3 m-4 mt-0 pt-0'
      
      >{description}</p>
      </div>
       <div className='h-0.5 bg-gray-200 m-4 '></div>     
      <div className='m-4 p-3 flex space-x-5'>
       <h1>Application Date : <span className='font-bold'>{Application}</span></h1>
       <h1>Department: <span className='font-bold'>{department}</span></h1>
      </div>
     </div>
     </div>
       )
}

export default Accordian;
