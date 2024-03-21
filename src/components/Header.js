import React from 'react'

const Header = () => {
  return (
    <div className='flex shadow-lg'>
      <div>
        <img
        className='w-28 p-1'
        src="https://e7.pngegg.com/pngimages/523/100/png-clipart-blue-letter-c-logo-logo-c-programmer-letter-c-sticker-computer-programming.png "alt="logo"/>
      </div>
      <div>
        <ul className='flex p-4 m-4'>
            <li className='pr-3'>Career</li>
            <li className='pr-3'>Colleges</li>
            <li className='pr-3'>Scholorship</li>
            <li  className='pr-3'>courses</li>
            <li >Exam</li>
    
        </ul>
      </div>
    </div>
  )
}

export default Header
