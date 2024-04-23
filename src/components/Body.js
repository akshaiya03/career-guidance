import React, { useEffect } from 'react'
import Landingpage from './Landingpage'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import Career from './Career'
import Scholorship from './Scholorship'
import College from './College'
import Header from './Header'
import Softwareandit from './Softwareandit'
import Business from './Business'
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/UserSlice'
import ErrorMessage from '../utils/ErrorMessage'
import SalesandMarketing from './SalesandMarketing'
import DataScientist from './DataScientist'
import Universities from './Universities'
import MedicalCollege from './MedicalCollege'
import EngineeringCollege from './EngineeringCollege'
import ManagementCollege from './ManagementCollege'
import LawColleges from './LawColleges'
import PharmacyCollege from './PharmacyCollege'
import Dental from './Dental'
import Architecture from './Architecture'
import Course from './Course'
import Science from './Science'
import Humanities from './Humanities'
import ComputerScience from './ComputerScience'
import Python from './Python'
import MachineLearning from './MachineLearning'
import Cybersecurity from './Cybersecurity'
import FoodandHealth from './FoodandHealth'
import Commerse from './Commerse'
import MarketStructure from './MarketStructure'
import GoogleDigital from './GoogleDigital'
import BusinessFoundation from './BusinessFoundation'
import DigitalMarketing from './DigitalMarketing'
import FinancialMarkets from './FinancialMarkets'
import ModernLiterature from './ModernLiterature'
import CreativeWriting from './CreativeWriting'
import Philosophy from './Philosophy'
import English from './English'
import SocialPsycology from './SocialPsycology'
import GovtScholorship from './GovtScholorship'
import PrivateScholorship from './PrivateScholorship'
import StateScholorship from './StateScholorship'
const Body = () => {
const dispatch=useDispatch()
  const approuter =createBrowserRouter([
    {
      path:"/",
      element:<Landingpage/>,
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/error",
      element:<ErrorMessage/>
    },
    {
      path:"/header",
      element:<Header/>
    },
    {
      path:"/Browse",
      element:<Browse/>
    },
    {
     path:"/Career",
     element:<Career/>
    },
    {
      path:"/scholorship",
      element:<Scholorship/>
    },
   
    {
      path:"/colleges",
      element:<College/>
    },
    {
      path:"/Software",
      element:<Softwareandit/>
    },
    
    {
      path:"/Business",
      element:<Business/>
    },
    {
      path:"/salesandMarketing",
      element:<SalesandMarketing/>
    },
    {
      path:"/Datascientist",
      element:<DataScientist/>
    },
    {
      path:"/Universities",
      element:<Universities/>
    },
    {
      path:"/Medical",
      element:<MedicalCollege/>
    },
  {
     path:"/Engineering",
     element:<EngineeringCollege/>
  },{
    path:"/Management",
    element:<ManagementCollege/>
  },
  {
    path:"LawCollege",
    element:<LawColleges/>
  },
  {
    path:"PharmacyCollege",
    element:<PharmacyCollege/>
  },
  {
    path:"DentalCollege",
    element:<Dental/>
  },
  {
    path:"ArchitectureCollege",
    element:<Architecture/>
  },
  {
    path:"Course",
    element:<Course/>
  },
  {
    path:"Science",
    element:<Science/>
  },
  {
    path:"Humanities",
    element:<Humanities/>
  },
  {
    path:"/ComputerS",
    element:<ComputerScience/>
  },
  {
    path:"/Python",
    element:<Python/>
  },
  {
    path:"/MachineLearning",
    element:<MachineLearning/>
  },
  {
    path:"/Cybersecurity",
    element:<Cybersecurity/>
  },
  {
    path:"/FoodandHealth",
    element:<FoodandHealth/>
  },
  {
    path:"/Commerse",
    element:<Commerse/>
  },
  {
    path:"/Marketstructure",
    element:<MarketStructure/>
  },
  {
    path:"/GoogleDigitalMarketing",
    element:<GoogleDigital/>
  },
  {
    path:"/BusinessFoundation",
    element:<BusinessFoundation/>
  },
  {
    path:"/DigitalMarketing",
    element:<DigitalMarketing/>
  },
  {
    path:"/FinancialMarkets",
    element:<FinancialMarkets/>
  },
  {
    path:"/CreativeWriting",
    element:<CreativeWriting/>
  },
  {
    path:"ModernLiterature",
    element:<ModernLiterature/>
  },
  {
    path:"/Philosophy",
    element:<Philosophy/>
  },
  {
    path:"/English",
    element:<English/>
  },
  {
    path:"/Socialpsychology",
    element:<SocialPsycology/>
  },
  {
    path:"/GovernmentScholorships",
    element:<GovtScholorship/>
  },
  {
    path:"/PrivateScholorship",
    element:<PrivateScholorship/>
  },
  {
    path:"/StateScholorship",
    element:<StateScholorship/>
  }
  ])
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const  {uid,email,displayName} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}) )
      } else {
        dispatch(removeUser());
      }
    });
  },[])
  return (
    <div className='m-0 p-0'>
      
      <RouterProvider router={approuter}/>
    </div>
  )
}

export default Body
