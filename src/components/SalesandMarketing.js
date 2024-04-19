import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Digital from "./images/digital-marketer-cover.png"
import Social from "./images/social-media-marketer.png"
import Sales from "./images/sales-operation-developer.png"
import marketing from "./images/marketing-analyst-cover.png"
import salesdev from "./images/sales-development-representative-cover.png"
const SalesandMarketing = () => {
  return (
    <div>
      
      <Header/>
      <h1 className='font-bold text-center text-2xl p-4 m-4'> Sales and Marketing</h1>
    <div className='md:flex md:flex-wrap md:p-5 md:m-4 md:pl-36'>
     <div className='p-2 m-4 shadow-xl rounded-lg pt-4 md:w-[550px]'>
      <img src={Digital} alt="project"/>
      <h1 className='font-bold text-[25px]  pt-3'>Digital Marketer</h1>
       <h2 className='pt-2'>Define and develop digital strategies to deliver business growth through online channels.</h2>
     <div >
      <h1 className='font-semibold text-[20px] pt-3'>Great if you Like:</h1>
      <div className='flex flex-wrap'>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Working with numbers</h1>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Understanding people</h1>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'> Problem solving</h1>
      </div>
      </div>
      <div className='bg-gray-300 w-full h-[1px] mt-3'></div>
      <div>
       <h1 className='text-[18px] font-semibold pt-4'>Courses for you</h1>
       <div className='p-2 m-2 '>
       <Link to="/browse" className='text-blue-600'>Google Digital Marketing& E-commerce ➡️</Link>
       
    
       </div>
      </div>
     </div>
     <div className='p-2 m-4 shadow-xl rounded-lg pt-4 md:w-[550px]'>
      <img src={Social} alt="Bookkeeper"/>
      <h1 className='font-bold text-[25px]  pt-3'>Social Media Marketer</h1>
       <h2 className='pt-2'>Social media specialists establish, build, and manage a company’s social media.</h2>
     <div >
      <h1 className='font-semibold text-[20px] pt-3'>Great if you Like:</h1>
      <div className='flex flex-wrap'>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Engaging with people
</h1>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Following trends</h1>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Thinking creatively</h1>
      </div>
      </div>
      <div className='bg-gray-300 w-full h-[1px] mt-3'></div>
      <div>
       <h1 className='text-[18px] font-semibold pt-4'>Courses for you</h1>
       <div className='p-2 m-2 '>
       <Link to="/browse" className='text-blue-600'>Meta Social Media Marketing➡️</Link>
       
       
       </div>
      </div>
     </div>
     <div className='p-2 m-4 shadow-xl rounded-lg pt-4 md:w-[550px]'>
      <img src={Sales} alt="project"/>
      <h1 className='font-bold text-[25px]  pt-3'>Sales Operations Specialist</h1>
       <h2 className='pt-2'>Create strategies that support sales teams to optimize growth.</h2>
     <div >
      <h1 className='font-semibold text-[20px] pt-3'>Great if you Like:</h1>
      <div className='flex flex-wrap'>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Leading a team</h1>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Troubleshooting</h1>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'> Efficiency</h1>
      </div>
      </div>
      <div className='bg-gray-300 w-full h-[1px] mt-3'></div>
      <div>
       <h1 className='text-[18px] font-semibold pt-4'>Courses for you</h1>
       <div className='p-2 m-2 '>
       <Link to="/browse" className='text-blue-600'>Salesforce Sales Operations➡️</Link>
       
    
       </div>
      </div>
     </div>
     <div className='p-2 m-4 shadow-xl rounded-lg pt-4 md:w-[550px]'>
      <img src={marketing} alt="project"/>
      <h1 className='font-bold text-[25px]  pt-3'>Marketing Analyst
</h1>
       <h2 className='pt-2'>Perform research and gather data to help companies market their products or services.</h2>
     <div >
      <h1 className='font-semibold text-[20px] pt-3'>Great if you Like:</h1>
      <div className='flex flex-wrap'>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Working with numbers</h1>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Understanding people</h1>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'> Collaborating</h1>
      </div>
      </div>
      <div className='bg-gray-300 w-full h-[1px] mt-3'></div>
      <div>
       <h1 className='text-[18px] font-semibold pt-4'>Courses for you</h1>
       <div className='p-2 m-2 '>
       <Link to="/browse" className='text-blue-600'>Meta Marketing Analytics➡️</Link>
       <Link to="/browse" className='text-blue-600'>Unilever Digital Marketing Analyst➡️</Link>
       
    
       </div>
      </div>
     </div>
     <div className='p-2 m-4 shadow-xl rounded-lg pt-4 md:w-[550px]'>
      <img src={salesdev} alt="project"/>
      <h1 className='font-bold text-[25px]  pt-3'>Sales Development Representative</h1>
       <h2 className='pt-2'>Work with prospective customers to help them in their buying journey.</h2>
     <div >
      <h1 className='font-semibold text-[20px] pt-3'>Great if you Like:</h1>
      <div className='flex flex-wrap'>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Engaging with people</h1>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Building relationships</h1>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'> Understanding people</h1>
      </div>
      </div>
      <div className='bg-gray-300 w-full h-[1px] mt-3'></div>
      <div>
       <h1 className='text-[18px] font-semibold pt-4'>Courses for you</h1>
       <div className='p-2 m-2 '>
       <Link to="/browse" className='text-blue-600'>Salesforce Sales Development Representative➡️</Link>
       
    
       </div>
      </div>
     </div>
    
    </div>
    </div>
  )
}

export default SalesandMarketing
