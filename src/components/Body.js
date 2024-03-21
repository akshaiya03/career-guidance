import React from 'react'
import Landingpage from './Landingpage'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'
const Body = () => {

  const approuter =createBrowserRouter([
    {
      path:"/",
      element:<Landingpage/>,
    },
    {
      path:"/login",
      element:<Login/>
    },
    
  ])
  return (
    <div>
      <RouterProvider router={approuter}/>
    </div>
  )
}

export default Body
