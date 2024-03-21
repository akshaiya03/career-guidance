import React from 'react'

const Landingpage = () => {
  return (
    <div>
      <div className='flex'>
      <div className='w-[700px]'>
      <p className='p-10 mt-24 mr-24 ml-24 pt-3 text-3xl font-semibold'>Navigate your career path with confidence. Discover your potential today and embark on a journey to success. Get started now!"</p>
      <button className='bg-blue-500 text-white text-xl rounded-lg p-5 ml-32'>Get started</button>
      </div>
      <div>
      <img 
      className='w-[600px] h-[500px] m-10 p-10 '
      src='https://img.freepik.com/free-vector/tiny-people-customers-receive-messages-from-microblogging-service-microblog-platform-microblogging-market-microblog-marketing-service-concept-illustration_335657-2567.jpg'
        alt="img"
      />
      </div>
      </div>
    
    </div>
  )
}

export default Landingpage
