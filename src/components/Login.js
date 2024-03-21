import  { useRef, useState } from 'react'
import { CheckValidData } from '../utils/Validata'
const Login = () => {
 const [isSignInform,setisSignInform]=useState(true)
 const[errormessage,seterrormesssage]=useState(null)
 const email = useRef(null)
 const password=useRef(null) 
 const name = useRef(null)
 const handleButtonclick=()=>{
  const message=CheckValidData(name.current.value,email.current.value,password.current.value)
  console.log(message)
  seterrormesssage(message)
  
 }
  const toggleSignin=()=>{
    setisSignInform(!isSignInform)
  }
  return (
    <div>
      <div>
       <form 
       onSubmit={(e)=>e.preventDefault()}
       className='shadow-2xl bg-white rounded-lg w-4/12 my-36 mx-auto right-0 left-0 p-12  '>
        <h1 className="font-semibold text-2xl m-4">{isSignInform?"LogIn":"Sign Up"}</h1>
        {!isSignInform && 
        <input 
          ref={name}
           type='text'
            placeholder="Full Name"
            className='p-3 m-4 border border-gray-400 w-full rounded-lg'/>
            
            }
          {!isSignInform &&  <input
          
           type='text'
            placeholder="Age"
            className='p-3 m-4 border border-gray-400 w-full rounded-lg'/>}


          <input 
          ref={email}
           type='text'
            placeholder="Email Address"
            className='p-3 m-4 border border-gray-400 w-full rounded-lg'/>

          <input
           ref={password}
           type='password' 
           placeholder="password" 
           className='p-3 m-4 border border-gray-400 w-full rounded-lg'/>
          <p className='text-red-500 font-semibold m-4'>{errormessage}</p>
          <button className='w-full bg-blue-500 p-3 m-4 rounded-lg'
          onClick={handleButtonclick}
          >{isSignInform?"Log In":"Sign Up"}</button>
         
          <p className='p-3'>Forgot password?</p>
          <p className='p-3 cursor-pointer'
          onClick={toggleSignin}>{isSignInform ? "New to career? Sign Up" : "Already registered? Log In"}</p>
       </form>
      </div>
    </div>
  )
}

export default Login
