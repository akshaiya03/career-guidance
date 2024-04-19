import React from 'react'
import cyber from "./images/cybersecurity-cover.jpg"
import UiUx from "./images/ux-designer-cover.png"
import Itsupport from "./images/it-support-cover.png"
import Frontend from "./images/cover-frontend-developer.png"
import appdev from "./images/application-developer-cover.png"
import Backend from "./images/cover-backend-developer.jpg"
import Devops from "./images/dev-ops-engineer.png"
import iosdev from "./images/cover-ios-developer.png"
import androiddev from "./images/cover-android-developer.png"
import network from "./images/Network_Engineer.png"
import { Link } from 'react-router-dom'
import Header from './Header'

const Softwareandit = () => {
  return (
    <div>
      <Header/>
      <h1 className='font-bold text-center text-2xl p-4 m-4'> Software Engineering and It</h1>
    <div className='md:flex md:flex-wrap md:p-5 md:m-4 md:pl-36'>
     <div className='p-2 m-4 shadow-xl rounded-lg pt-4 md:w-[550px]'>
      <img src={cyber} alt="cyber"/>
      <h1 className='font-bold text-[25px]  pt-3'>Cybersecurity profesional</h1>
       <h2 className='pt-2'>Develop strategies to protect organizations from cyber-attacks and disruptions.</h2>
     <div >
      <h1 className='font-semibold text-[20px] pt-3'>Great if you Like:</h1>
      <div className='flex flex-wrap'>
      <h1 className='bg-gray-300 text-center rounded-lg w-[150px] m-2 p-1'>Problem solving</h1>
      <h1 className='bg-gray-300 text-center rounded-lg w-[170px] m-2 p-1'>Technical challenges</h1>
      <h1 className='bg-gray-300 text-center rounded-lg w-[150px] m-2 p-1'>Attention to detail</h1>
      </div>
      </div>
      <div className='bg-gray-300 w-full h-[1px] mt-3'></div>
      <div>
       <h1 className='text-[18px] font-semibold pt-4'>Courses for you</h1>
       <div className='p-2 m-2 '>
       <Link to="/browse" className='text-blue-600'>Google Cybersecurity ➡️</Link>
       <Link to="/browse" className='text-blue-600'>Google Cybersecurity ➡️</Link>
       <Link to="/browse" className='text-blue-600'>Google Cybersecurity ➡️</Link>
       </div>
      </div>
     </div>

     <div className='p-2 m-4 shadow-xl rounded-lg pt-5 md:w-[550px]'>
      <img src={UiUx} alt="uiux"/>
      <h1 className='font-bold text-[25px]  pt-3'>UX Designer</h1>
       <h2 className='pt-2'>Make digital and physical products easier and more enjoyable to use.</h2>
     <div >
      <h1 className='font-semibold text-[20px] pt-3'>Great if you Like:</h1>
      <div className='flex flex-wrap'>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Understanding people</h1>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Thinking creatively</h1>
      <h1 className='bg-gray-300 text-center rounded-lg w-[150px] m-2 p-1'>Problem solving</h1>
      </div>
      </div>
      <div className='bg-gray-300 w-full h-[1px] mt-3'></div>
      <div>
       <h1 className='text-[18px] font-semibold pt-4'>Courses for you</h1>
       <div className='p-2 m-2 '>
       <Link to="/browse" className='text-blue-600'>Google UX Design ➡️</Link>
     
       </div>
      </div>
     </div>

     <div className='p-2 m-4 shadow-xl rounded-lg pt-5 md:w-[550px]'>
      <img src={Itsupport} alt="specialist"/>
      <h1 className='font-bold text-[25px]  pt-3'>IT Support Specialist</h1>
       <h2 className='pt-2'>Evaluate and troubleshoot technology issues so equipment runs smoothly.</h2>
     <div >
      <h1 className='font-semibold text-[20px] pt-3'>Great if you Like:</h1>
      <div className='flex flex-wrap'>
      <h1 className='bg-gray-300 text-center rounded-lg w-[150px] m-2 p-1'>Helping people</h1>
      <h1 className='bg-gray-300 text-center rounded-lg w-[170px] m-2 p-1'>Problem solving</h1>
      <h1 className='bg-gray-300 text-center rounded-lg w-[150px] m-2 p-1'>Troubleshooting</h1>
      </div>
      <div className='bg-gray-300 w-full h-[1px] mt-3'></div>
      </div>
      <div>
       <h1 className='text-[18px] font-semibold pt-4'>Courses for you</h1>
       <div className='p-2 m-2 '>
       <Link to="/browse" className='text-blue-600'>Google IT Support ➡️</Link>
       <Link to="/browse" className='text-blue-600'>IBM IT Support ➡️</Link>
       
       </div>
      </div>
     </div>

     <div className='p-2 m-4 shadow-xl rounded-lg pt-5 md:w-[550px]'>
      <img src={Frontend} alt="frontend"/>
      <h1 className='font-bold text-[25px]  pt-3'>Front-End Developer</h1>
       <h2 className='pt-2'>Design and develop the look, feel, function, and user experience of a website.</h2>
     <div >
      <h1 className='font-semibold text-[20px] pt-3'>Great if you Like:</h1>
      <div className='flex flex-wrap'>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Problem solving</h1>
      <h1 className='bg-gray-300 text-center rounded-lg m-2 p-1'>Thinking creatively</h1>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Creating great user experiences</h1>
      </div>
      <div className='bg-gray-300 w-full h-[1px] mt-3'></div>
      </div>
      <div>
       <h1 className='text-[18px] font-semibold pt-4'>Courses for you</h1>
       <div className='p-2 m-2 '>
       <Link to="/browse" className='text-blue-600'>Meta Front-End-Developer ➡️</Link>
       <Link to="/browse" className='text-blue-600'>IBM Front-End-Developer ➡️</Link>
       
       </div>
      </div>
     </div>
     <div className='p-2 m-4 shadow-xl rounded-lg pt-5 md:w-[550px]'>
      <img src={appdev} alt="app"/>
      <h1 className='font-bold text-[25px]  pt-3'>Application Developer</h1>
       <h2 className='pt-2'>Analyze customer needs and design systems and solutions for the cloud.</h2>
     <div >
      <h1 className='font-semibold text-[20px] pt-3'>Great if you Like:</h1>
      <div className='flex flex-wrap'>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Managing projects</h1>
      <h1 className='bg-gray-300 text-center rounded-lg m-2 p-1'>Learning new technologies</h1>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Problem solving</h1>
      </div>
      <div className='bg-gray-300 w-full h-[1px] mt-3'></div>
      </div>
      <div>
       <h1 className='text-[18px] font-semibold pt-4'>Courses for you</h1>
       <div className='p-2 m-2 '>
       <Link to="/browse" className='text-blue-600'>IBM Full Stack Cloud Developer➡️</Link>
       
       
       </div>
      </div>
     </div>
     <div className='p-2 m-4 shadow-xl rounded-lg pt-5 md:w-[550px]'>
      <img src={Backend} alt="Backend"/>
      <h1 className='font-bold text-[25px]  pt-3'>Back-End Developer</h1>
       <h2 className='pt-2'>Build the structures that help websites function using industry-standard tools and programming systems.</h2>
     <div >
      <h1 className='font-semibold text-[20px] pt-3'>Great if you Like:</h1>
      <div className='flex flex-wrap'>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Thinking logically</h1>
      <h1 className='bg-gray-300 text-center rounded-lg m-2 p-1'>Solving complex problems</h1>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Collaborating</h1>
      </div>
      <div className='bg-gray-300 w-full h-[1px] mt-3'></div>
      </div>
      <div>
       <h1 className='text-[18px] font-semibold pt-4'>Courses for you</h1>
       <div className='p-2 m-2 '>
       <Link to="/browse" className='text-blue-600'>Meta Back-End-Developer ➡️</Link>
       <Link to="/browse" className='text-blue-600'>IBM Back-End-Developer ➡️</Link>
       <Link to="/browse" className='text-blue-600'>IBM Back-end JavaScript Developer ➡️</Link>
       
       </div>
      </div>
     </div>
     <div className='p-2 m-4 shadow-xl rounded-lg pt-5 md:w-[550px]'>
      <img src={Devops} alt="Devops"/>
      <h1 className='font-bold text-[25px]  pt-3'>DevOps Engineer</h1>
       <h2 className='pt-2'>Build the tools & infrastructure to allow companies to maintain and improve their platform.</h2>
     <div >
      <h1 className='font-semibold text-[20px] pt-3'>Great if you Like:</h1>
      <div className='flex flex-wrap'>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Building tools</h1>
      <h1 className='bg-gray-300 text-center rounded-lg m-2 p-1'>Problem solving</h1>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Collaborating</h1>
      </div>
      <div className='bg-gray-300 w-full h-[1px] mt-3'></div>
      </div>
      <div>
       <h1 className='text-[18px] font-semibold pt-4'>Courses for you</h1>
       <div className='p-2 m-2 '>
       <Link to="/browse" className='text-blue-600'>IBM DevOPs and Software Engineering  ➡️</Link>
       
       
       </div>
      </div>
     </div>
     <div className='p-2 m-4 shadow-xl rounded-lg pt-5 md:w-[550px]'>
      <img src={iosdev} alt="iosdev"/>
      <h1 className='font-bold text-[25px]  pt-3'>iOS Developer</h1>
       <h2 className='pt-2'>Build and write code for mobile apps hosted on iOS, an operating system used on Apple devices like the iPhone and iPad</h2>
     <div >
      <h1 className='font-semibold text-[20px] pt-3'>Great if you Like:</h1>
      <div className='flex flex-wrap'>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Creative challenges</h1>
      <h1 className='bg-gray-300 text-center rounded-lg m-2 p-1'>Building better user experiences</h1>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Using Apple products</h1>
      </div>
      <div className='bg-gray-300 w-full h-[1px] mt-3'></div>
      </div>
      <div>
       <h1 className='text-[18px] font-semibold pt-4'>Courses for you</h1>
       <div className='p-2 m-2 '>
       <Link to="/browse" className='text-blue-600'>Meta iOS Developer ➡️</Link>
       
       
       </div>
      </div>
     </div>
     <div className='p-2 m-4 shadow-xl rounded-lg pt-5 md:w-[550px]'>
      <img src={androiddev} alt="androiddev"/>
      <h1 className='font-bold text-[25px]  pt-3'>Android Developer</h1>
       <h2 className='pt-2'>Build and write code for mobile apps hosted on Android smartphones and mobile tablets.</h2>
     <div >
      <h1 className='font-semibold text-[20px] pt-3'>Great if you Like:</h1>
      <div className='flex flex-wrap'>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Creative challenges</h1>
      <h1 className='bg-gray-300 text-center rounded-lg m-2 p-1'>Building better user experiences</h1>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Using Android products</h1>
      </div>
      <div className='bg-gray-300 w-full h-[1px] mt-3'></div>
      </div>
      <div>
       <h1 className='text-[18px] font-semibold pt-4'>Courses for you</h1>
       <div className='p-2 m-2 '>
       <Link to="/browse" className='text-blue-600'>Meta Android Developer ➡️</Link>
       
       
       </div>
      </div>
     </div>
     <div className='p-2 m-4 shadow-xl rounded-lg pt-5 md:w-[550px]'>
      <img src={network} alt="network engineer"/>
      <h1 className='font-bold text-[25px]  pt-3'>Network Engineer</h1>
       <h2 className='pt-2'>Monitor, troubleshoot, and maintain networks in a 24/7 environment to ensure stability and security.</h2>
     <div >
      <h1 className='font-semibold text-[20px] pt-3'>Great if you Like:</h1>
      <div className='flex flex-wrap'>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Technology</h1>
      <h1 className='bg-gray-300 text-center rounded-lg m-2 p-1'>Problem solving</h1>
      <h1 className='bg-gray-300 text-center rounded-lg  m-2 p-1'>Analytical thinking</h1>
      </div>
      <div className='bg-gray-300 w-full h-[1px] mt-3'></div>
      </div>
      <div>
       <h1 className='text-[18px] font-semibold pt-4'>Courses for you</h1>
       <div className='p-2 m-2 '>
       <Link to="/browse" className='text-blue-600'>Akamai Network Engineering ➡️</Link>
       
       
       </div>
      </div>
     </div>
     </div>
    </div>
  )
}

export default Softwareandit
