import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import DataAnalyst from "./images/data-analyst-cover (1).png"
import DataScientists from "./images/data-scientist-cover.png"
import DataEngineer from "./images/data-engineer-cover.png"
const DataScientist = () => {
  return (
    <div>
      
      <Header/>
      <h1 className='font-bold text-center text-2xl p-4 m-4'> Data Science & Analytics</h1>
    <div className='md:flex md:flex-wrap md:p-5 md:m-4 md:pl-36'>
     <div className='p-2 m-4 shadow-xl rounded-lg pt-4 md:w-[550px]'>
      <img src={DataAnalyst} alt="project"/>
      <h1 className='font-bold text-[25px]  pt-3'>Data Analyst</h1>
       <h2 className='pt-2'>Collect, organize, and transform data to make informed decisions.</h2>
     <div >
      <h1 className='font-semibold text-[20px] pt-3'>Great if you Like:</h1>
      <div className='flex flex-wrap'>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Attention to detail</h1>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Problem solving</h1>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Working with numbers</h1>
      </div>
      </div>
      <div className='bg-gray-300 w-full h-[1px] mt-3'></div>
      <div>
       <h1 className='text-[18px] font-semibold pt-4'>Courses for you</h1>
       <div className='p-2 m-2 '>
       <Link to="/browse" className='text-blue-600'>Google Data Analystics➡️</Link>
       <Link to="/browse" className='text-blue-600'>IBM Data Analystics➡️</Link>
       <Link to="/browse" className='text-blue-600'>IBM Data Analystics with Excel and R➡️</Link>
       
    
       </div>
      </div>
     </div>
     <div className='p-2 m-4 shadow-xl rounded-lg pt-4 md:w-[550px]'>
      <img src={DataScientists} alt="Bookkeeper"/>
      <h1 className='font-bold text-[25px]  pt-3'>Data Scientist</h1>
       <h2 className='pt-2'>Extract and analyze data to make informed business decisions.</h2>
     <div >
      <h1 className='font-semibold text-[20px] pt-3'>Great if you Like:</h1>
      <div className='flex flex-wrap'>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Working with numbers
</h1>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Intellectual curiosity</h1>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Writing and communication</h1>
      </div>
      </div>
      <div className='bg-gray-300 w-full h-[1px] mt-3'></div>
      <div>
       <h1 className='text-[18px] font-semibold pt-4'>Courses for you</h1>
       <div className='p-2 m-2 '>
       <Link to="/browse" className='text-blue-600'>IBM Data Science➡️</Link>
       
       
       </div>
      </div>
     </div>
     <div className='p-2 m-4 shadow-xl rounded-lg pt-4 md:w-[550px]'>
      <img src={DataEngineer} alt="project"/>
      <h1 className='font-bold text-[25px]  pt-3'>Data Engineer</h1>
       <h2 className='pt-2'>Design and build systems to collect and transform data into usable information for data science.</h2>
     <div >
      <h1 className='font-semibold text-[20px] pt-3'>Great if you Like:</h1>
      <div className='flex flex-wrap'>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Working with numbers</h1>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Identifying patterns</h1>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Problem Solving</h1>
      </div>
      </div>
      <div className='bg-gray-300 w-full h-[1px] mt-3'></div>
      <div>
       <h1 className='text-[18px] font-semibold pt-4'>Courses for you</h1>
       <div className='p-2 m-2 '>
       <Link to="/browse" className='text-blue-600'>Meta Data Engineer➡️</Link>
       <Link to="/browse" className='text-blue-600'>IBM Data Engineer➡️</Link>
       
    
       </div>
      </div>
     </div>
    

    
    </div>
      
    </div>
  )
}

export default DataScientist
