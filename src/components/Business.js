import React from 'react'
import { Link } from 'react-router-dom'
import project from "./images/project-management-cover.png"
import bookeeper from "./images/book-keeper-cover.png"
import businessanalyst from "./images/55724_Career_Academy_3_job_roles_900x369.png"
import humanR from "./images/Human_Resources_Specialist.png"
import techconsultant from "./images/technology-consultant-cover.png"
import careercoach from "./images/career-coach-cover.png"
import customer from "./images/Customer_Service_Specialist_-_Small.png"
import accountant from "./images/cover-accountant__1_.png"
import realestate from "./images/Real-Estate-Agent_900x369.png"
import supplychain from "./images/Supply-Chain-Analyst_900x369.png"
import Header from './Header'

const Business = () => {
  return (
    <div>
      <Header/>
      <h1 className='font-bold text-center text-2xl p-4 m-4'> Business</h1>
    <div className='md:flex md:flex-wrap md:p-5 md:m-4 md:pl-36'>
     <div className='p-2 m-4 shadow-xl rounded-lg pt-4 md:w-[550px]'>
      <img src={project} alt="project"/>
      <h1 className='font-bold text-[25px]  pt-3'>Project Manager</h1>
       <h2 className='pt-2'>Oversee the planning and execution of projects to ensure they’re successful.</h2>
     <div >
      <h1 className='font-semibold text-[20px] pt-3'>Great if you Like:</h1>
      <div className='flex flex-wrap'>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Leading a team</h1>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Problem solving</h1>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'> Communication</h1>
      </div>
      </div>
      <div className='bg-gray-300 w-full h-[1px] mt-3'></div>
      <div>
       <h1 className='text-[18px] font-semibold pt-4'>Courses for you</h1>
       <div className='p-2 m-2 '>
       <Link to="/browse" className='text-blue-600'>Google ProjectManagement ➡️</Link>
       <Link to="/browse" className='text-blue-600'>IBM Product Manager ➡️</Link>
    
       </div>
      </div>
     </div>
     <div className='p-2 m-4 shadow-xl rounded-lg pt-4 md:w-[550px]'>
      <img src={bookeeper} alt="Bookkeeper"/>
      <h1 className='font-bold text-[25px]  pt-3'>Bookkeeper</h1>
       <h2 className='pt-2'>Record financial transactions and manage financial records.</h2>
     <div >
      <h1 className='font-semibold text-[20px] pt-3'>Great if you Like:</h1>
      <div className='flex flex-wrap'>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Working with numbers
</h1>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Attention to detail</h1>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Writing & organization</h1>
      </div>
      </div>
      <div className='bg-gray-300 w-full h-[1px] mt-3'></div>
      <div>
       <h1 className='text-[18px] font-semibold pt-4'>Courses for you</h1>
       <div className='p-2 m-2 '>
       <Link to="/browse" className='text-blue-600'>Intuit Bookkeeping ➡️</Link>
       <Link to="/browse" className='text-blue-600'>Tally Bookeeper ➡️</Link>
       
       </div>
      </div>
     </div>
     <div className='p-2 m-4 shadow-xl rounded-lg pt-4 md:w-[550px]'>
      <img src={businessanalyst} alt="businessanalyst"/>
      <h1 className='font-bold text-[25px]  pt-3'>Business Intelligence Analyst</h1>
       <h2 className='pt-2'>Make data-driven decisions through SQL-based data extraction, dashboard creation, and report analysis for an organization.</h2>
     <div >
      <h1 className='font-semibold text-[20px] pt-3'>Great if you Like:</h1>
      <div className='flex flex-wrap'>
      <h1 className='bg-gray-300 text-center rounded-lg m-2 p-1'>Data analysis</h1>
      <h1 className='bg-gray-300 text-center rounded-lg m-2 p-1'>Problem solving</h1>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Strategy</h1>
      </div>
      </div>
      <div className='bg-gray-300 w-full h-[1px] mt-3'></div>
      <div>
       <h1 className='text-[18px] font-semibold pt-4'>Courses for you</h1>
       <div className='p-2 m-2 '>
       <Link to="/browse" className='text-blue-600'>Microsoft Power BI Analyst ➡️</Link>
       <Link to="/browse" className='text-blue-600'>Tableau Business Intelligence Analyst ➡️</Link>
       <Link to="/browse" className='text-blue-600'>IBM Business Intelligence Analyst➡️</Link>
       </div>
      </div>
     </div>
     <div className='p-2 m-4 shadow-xl rounded-lg pt-4 md:w-[550px]'>
      <img src={humanR} alt="project"/>
      <h1 className='font-bold text-[25px]  pt-3'>Human Resources Specialist</h1>
       <h2 className='pt-2'>Recruit and place individuals within an organization; interpret policies, and address employee relations matters.</h2>
     <div >
      <h1 className='font-semibold text-[20px] pt-3'>Great if you Like:</h1>
      <div className='flex flex-wrap'>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Working with people</h1>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Communication</h1>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Problem solving</h1>
      </div>
      </div>
      <div className='bg-gray-300 w-full h-[1px] mt-3'></div>
      <div>
       <h1 className='text-[18px] font-semibold pt-4'>Courses for you</h1>
       <div className='p-2 m-2 '>
       <Link to="/browse" className='text-blue-600'>HRCI HUman Resources Associate ➡️</Link>
 
       </div>
      </div>
     </div>
     <div className='p-2 m-4 shadow-xl rounded-lg pt-4 md:w-[550px]'>
      <img src={techconsultant} alt="project"/>
      <h1 className='font-bold text-[25px]  pt-3'>Technology Consultant</h1>
       <h2 className='pt-2'>Provide clients with strategic guidance on the use of technology to help them meet their business objectives.</h2>
     <div >
      <h1 className='font-semibold text-[20px] pt-3'>Great if you Like:</h1>
      <div className='flex flex-wrap'>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Strategic thinking</h1>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Improving processes</h1>
      <h1 className='bg-gray-300 text-center rounded-lg m-2 p-1'>Technology</h1>
      </div>
      </div>
      <div className='bg-gray-300 w-full h-[1px] mt-3'></div>
      <div>
       <h1 className='text-[18px] font-semibold pt-4'>Courses for you</h1>
       <div className='p-2 m-2 '>
       <Link to="/browse" className='text-blue-600'>SAP Technology Consultant ➡️</Link>
       <Link to="/browse" className='text-blue-600'>AWS Cloud Technology Consultant ➡️</Link>
       
       </div>
      </div>
     </div>
     <div className='p-2 m-4 shadow-xl rounded-lg pt-4 md:w-[550px]'>
      <img src={careercoach} alt="project"/>
      <h1 className='font-bold text-[25px]  pt-3'>Career Coach</h1>
       <h2 className='pt-2'>Help individuals plan their career choices through goal setting, job search guidance, workplace skills development, and more.</h2>
     <div >
      <h1 className='font-semibold text-[20px] pt-3'>Great if you Like:</h1>
      <div className='flex flex-wrap'>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Helping others</h1>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Communication</h1>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Strategy</h1>
      </div>
      </div>
      <div className='bg-gray-300 w-full h-[1px] mt-3'></div>
      <div>
       <h1 className='text-[18px] font-semibold pt-4'>Courses for you</h1>
       <div className='p-2 m-2 '>
       <Link to="/browse" className='text-blue-600'>Goodwill Career Coach and Navigator➡️</Link>
       
       </div>
      </div>
     </div>
     <div className='p-2 m-4 shadow-xl rounded-lg pt-4 md:w-[550px]'>
      <img src={customer} alt="project"/>
      <h1 className='font-bold text-[25px]  pt-3'>Customer Service Representative</h1>
       <h2 className='pt-2'>Troubleshoot, communicate, and maintain records to provide quality service and identify upselling opportunities.</h2>
     <div >
      <h1 className='font-semibold text-[20px] pt-3'>Great if you Like:</h1>
      <div className='flex flex-wrap'>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Helping others</h1>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Problem solving</h1>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Creating positive experiences</h1>
      </div>
      </div>
      <div className='bg-gray-300 w-full h-[1px] mt-3'></div>
      <div>
       <h1 className='text-[18px] font-semibold pt-4'>Courses for you</h1>
       <div className='p-2 m-2 '>
       <Link to="/browse" className='text-blue-600'>CVS Health Call Center ➡️</Link>
       <Link to="/browse" className='text-blue-600'>CVS Health Retail Customer Service➡️</Link>
 
       </div>
      </div>
     </div>
     <div className='p-2 m-4 shadow-xl rounded-lg pt-4 md:w-[550px]'>
      <img src={accountant} alt="project"/>
      <h1 className='font-bold text-[25px]  pt-3'>Accountant</h1>
       <h2 className='pt-2'>Support senior accountants by managing, preparing, and analyzing a company’s financial records.</h2>
     <div >
      <h1 className='font-semibold text-[20px] pt-3'>Great if you Like:</h1>
      <div className='flex flex-wrap'>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Working with numbers
</h1>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Problem solving</h1>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Attention to detail</h1>
      </div>
      </div>
      <div className='bg-gray-300 w-full h-[1px] mt-3'></div>
      <div>
       <h1 className='text-[18px] font-semibold pt-4'>Courses for you</h1>
       <div className='p-2 m-2 '>
       <Link to="/browse" className='text-blue-600'>PwC GST taxation Executive ➡️</Link>
       
       </div>
      </div>
     </div>
     <div className='p-2 m-4 shadow-xl rounded-lg pt-4 md:w-[550px]'>
      <img src={realestate} alt="project"/>
      <h1 className='font-bold text-[25px]  pt-3'>Real Estate Agent</h1>
       <h2 className='pt-2'>Facilitate property transactions by listing properties, negotiating deals, conducting market analyses, and guiding clients through legal and financial processes.</h2>
     <div >
      <h1 className='font-semibold text-[20px] pt-3'>Great if you Like:</h1>
      <div className='flex flex-wrap'>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Entrepreneurship</h1>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Working with people</h1>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Architecture</h1>
      </div>
      </div>
      <div className='bg-gray-300 w-full h-[1px] mt-3'></div>
      <div>
       <h1 className='text-[18px] font-semibold pt-4'>Courses for you</h1>
       <div className='p-2 m-2 '>
       <Link to="/browse" className='text-blue-600'>Keller Williams Real Estate Agent➡️</Link>
  
       </div>
      </div>
     </div>
     <div className='p-2 m-4 shadow-xl rounded-lg pt-4 md:w-[550px]'>
      <img src={supplychain} alt="project"/>
      <h1 className='font-bold text-[25px]  pt-3'>Supply Chain Analyst</h1>
       <h2 className='pt-2'>Streamline supply chain operations and drive efficiency through data analysis, issue resolution, compliance oversight, and relationship building.</h2>
     <div >
      <h1 className='font-semibold text-[20px] pt-3'>Great if you Like:</h1>
      <div className='flex flex-wrap'>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Data analysis</h1>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Working with people</h1>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Problem Solving</h1>
      </div>
      </div>
      <div className='bg-gray-300 w-full h-[1px] mt-3'></div>
      <div>
       <h1 className='text-[18px] font-semibold pt-4'>Courses for you</h1>
       <div className='p-2 m-2 '>
       <Link to="/browse" className='text-blue-600'>Unilever Supply chain Data Analyst➡️</Link>
  
       </div>
      </div>
     </div>
     </div>
    </div>
  )
}

export default Business
