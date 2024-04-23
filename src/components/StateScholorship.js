import React from 'react'
import Header from './Header'
import Accordian from './Accordian'

const StateScholorship = () => {
  return (
    <div>
      <Header/>
      <h1 className='text-3xl font-bold p-3 m-5 '>Top Private Scholarships in India for Students 2024</h1>
      <p className='text-xl font-semibold p-2 m-6 mb-0 mt-0'>Pursuing higher education can be a difficult process, especially if you are in a tight financial situation. However, there are several private scholarships available in India that might assist you in achieving your educational goals. Some scholarships may pay the entire cost of tuition, while others may just cover a portion of it. Students can learn about different private scholarships 2024 from a variety of sources, including scholarship organisations' websites, college financial aid departments, and online scholarship portals.</p>
      <Accordian
      title="Reliance JIO Infocomm Limited (RJIL) Scholarships"
      description="Candidates must be in their final year of a B.Tech or B.E degree programme in Computer Science, Electronics, or Information Technology. "
      Application="March 2024
      (tentative)"
      department="Private"/>
     
    </div>
    
  )
}

export default StateScholorship
