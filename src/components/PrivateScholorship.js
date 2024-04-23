import React from 'react'
import Header from './Header'
import Accordian from './Accordian'
const PrivateScholorship = () => {
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
      <Accordian
      title="CCB Welfare And Scholarship Scheme"
      description="Candidates must be children of CCB members and studying in the 10th, 12th, or graduation level. "
      Application="May 2024
      (tentative)"
      department="Private"/>
      <Accordian
      title="Vidyadhan Scholarship Program"
      description="Candidates must be studying in the 10th, 12th, or graduation level in science, commerce or humanities. "
      Application="April 2024
     "
      department="Private"
      />
      <Accordian
      title="Tata Trust Vocational Scholarship"
      description="Students from low-income families who are enrolled in a vocational programme. "
      Application="May 2024"
      department="Private"
      />
      <Accordian
      title="Adobe Research Women-in-Technology Scholarship"
      description="Female students pursuing a Master's or Doctorate degree in computer science, engineering, or a related discipline. "
      Application="March 2024"
      department="Private"
      />
      <Accordian
      title="Top Class Education Scheme for SC Students"
      description="Students from Scheduled Caste groups who are in their 10th, 12th, or graduation year. "
      Application="March 2024
      (tentative)"
      department="Private"
      />
      <Accordian
      title="Alta Scuola Politecnica (ASP) Grants"
      description="International students who are outstanding and want to pursue a Master's degree in engineering or computer science at Politecnico di Milano."
      Application="March 2024
      (tentative)"
      department="Private"
      />
      <Accordian
      title="Azim Premji Foundation Fellowship"
      description="Outstanding rural Indian students who want to pursue a Master's degree in public policy or social entrepreneurship. "
      Application="February 2024"
      department="Private"
      />
      <Accordian
      title="Facebook Research Internship/Scholarship"
      description="Outstanding undergraduate and graduate students interested in computer science, artificial intelligence, or related fields of study."
      Application="March 2024
      (tentative)"
      department="Private"
      />
    </div>
  )
}

export default PrivateScholorship
