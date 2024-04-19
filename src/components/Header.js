import React, { useState } from 'react'
import logo from "./images/logo.png"
import { Menu,X } from 'lucide-react'
import {  signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Navbar =()=>{
  
 
 
  return(
    <div >
        <ul className='flex font-semibold  '>
            <Link  
            className=' sm: m-2  pr-3 cursor-pointer'
            to="/career"
            >Career</Link>
            <Link  className='sm: m-2 pr-3 cursor-pointer'
             to="/Colleges"
            >Colleges</Link>
            <Link className='sm: m-2 pr-3 cursor-pointer'
            to="Scholorship"
            >scholorship</Link>
            <Link   className='sm: m-2 pr-3 cursor-pointer'
            to="/Course"
            >Courses</Link>
            <Link 
            to="/Exam"
            className='sm: m-2'>Exam</Link>
            
    
        </ul>
        </div>
  )
}
const Header = () => {
  const navigate=useNavigate()
  const user =useSelector((store)=>store.user)
  const [isOpen,setOpen]=useState(false)
  const handleSignout=()=>{
    signOut(auth).then(() => {
       navigate("/")
    }).catch((error) => {
      navigate("/error")
  
    });
   }
  const togglemenu=()=>{
     setOpen(!isOpen)
  }
  return (
    <div className='flex shadow-lg p-0 m-0 b-0 justify-between flex-wrap'>
      <div className='md:hidden '>
        <button
        className='sm: m-7'
        
        onClick={togglemenu}
         >{isOpen ? <X/> :<Menu/>}</button>
         
        </div>
        <div className='flex'>
        <div>
        <img
        className='sm: w-12 sm:p-4 sm: m-4  md:w-20 p-1 sm: mr-20'
        src={logo} alt="company logo"
        
        onClick={()=>{
          navigate("/browse")
        }}/>
      </div>
      <div className='flex justify-between'>
      <div className="hidden  w-full md:justify-between p-4 m-4 md:flex">
        <Navbar />
        </div>
        {user && <button
        className='m-4 font-bold'
            onClick={handleSignout}
            >SignOut</button>}
            </div>
        </div>
        {isOpen && (
        <div className=' flex flex-col items-center basis-full '>
           <Navbar/>
        </div>)}
        
      
    </div>
  )
}

export default Header

