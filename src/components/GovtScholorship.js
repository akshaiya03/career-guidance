import React from 'react'
import Accordian from './Accordian'
import Header from './Header'
const GovtScholorship = () => {
  return (
    <div>
        <Header/>
      <h1 className='text-3xl font-bold p-3 m-5 '>List of Government Scholarships for Students in India 2024</h1>
      <p className='text-xl font-semibold p-2 m-6 mb-0 mt-0'>There are various government scholarships available at both the central and state levels to help students cover their educational costs. On this page, we will provide a simple and clear guide to popular Government Scholarships in India 2024.</p>
      <Accordian
      title="Pre Matric Scholarships Scheme for Minorities"
      description="Applicants for the Pre Matric Scholarships Scheme for Minorities must be enrolled in a government or private school in India, studying from class 1st to class 10. This includes residential government institutions and accredited private institutions specified and apprised openly by the relevant State Government and Union Territory Administration. "
      Application="Ongoing - Nov,2024
      (tentative)"
      department="Ministry of Minority Affairs"
      />
      <Accordian
      title="Pre-Matric Scholarship for Students with Disabilities"
      description="Pre-Matric Scholarship for Students with Disabilities, offered by the Govt of India, is available to provide financial assistance to students with disabilities studying in Class 9 and 10. This scholarship scheme is offered through an online platform known as the National Scholarship Portal (NSP).  "
      Application="Ongoing - 30 Nov,2024
      (tentative)"
      department="Department of Empowerment of Persons with Disability, Government of India"
      />
      <Accordian
      title="Post Matric Scholarship for Minorities"
      description="The Post Matric Scholarship for Minorities has been established by Govt of India for students who belong to minority communities and are looking for financial assistance for pursuing higher education from Class 11 to the postdoctoral level.  "
      Application=" Ongoing - Nov,2024"
      department="Ministry of Minority Affairs"
      />
      <Accordian
      title="Post-Matric Scholarship for Students with Disabilities"
      description="The Post Matric Scholarship for Students with Disabilities 2023-24 is available for students in classes XI, and XII as well as for students with Bachelors and Master’s Degrees, or diplomas from universities recognized by UGC/AICTE.  "
      Application="Dec,2023 - Jan,2024"
      department="Department of Empowerment of Persons with Disability, Government of India"
      />
      <Accordian
      title="INSPIRE Scholarship"
      description="The core objective of INSPIRE scholarship is to inspire young people in the country to pursue science education from an early age by demonstrating the excitement of engaging in creative scientific exploration.  "
      Application="Sep,2023 - Oct,2023"
      department="Department of Science and Technology (DST), Government of India"
      />
      <Accordian
      title="Scholarships for Top Class Education for Students with Disabilities"
      description="Scholarships for Top Class Education for Students with Disabilities 2023-24 is a scheme implemented by the Department of Empowerment of Persons with Disabilities (DEPWD), under the Ministry of Social Justice and Empowerment of the Government of India. It provides financial support to disabled students are pursuing graduate/postgraduate/diploma level education. "
      Application="Ongoing - Jan,2024"
      department="Department of Empowerment of Persons with Disability, Government of India"
      />
      <Accordian
      title="Top Class Education Scheme for SC Students"
      description="SC students having total annual family income up to INR 8 LPA.
      Having secured admission in a full-time course in any of the notified institutions according to the general selection criteria prescribed by the concerned institution
      Thirty percent (30%) of slots allotted to the Institution shall be reserved for eligible SC girl students."
      Application="July to September"
      department="Ministry of Social Justice & Empowerment"
      />
      <Accordian
      title="National Means Cum Merit Scholarship"
      description=" Must be a regular schooling student of class 9
       Passed Class 8 with a minimum of 55% marks or more.  
    For continuation of scholarship after class 10, a minimum mark of 60% has to be achieved in Class 10.
     Combined annual income of the family should be equal to or less than INR 1,50,000.."
      Application="June to September"
      department="Department of School Education & Literacy"
      />
      <Accordian
      title="NSP Scholarship"
      description="NSP has been established as a unified portal to encompass a wide array of scholarship schemes offered by both Central and State Governments. The objective of this portal is eliminating redundancy in the processing of scholarship applications and streamlining the system for greater efficiency while ensuring more direct and efficient disbursement of funds to deserving recipients."
      Application="To be updated soon"
      department="Government of India"
      />
      <Accordian
      title="Ishan Uday Scholarship"
      description="Started from the academic year 2014-15, Ishan Uday is a special scholarship scheme for the students of North Eastern Region (NER). Under this scheme, NER students get financial assistance pursue general degree courses, technical and professional programmes, including medical and paramedical courses. A total of 10,000 fresh scholarships are disbursed every year as part of this scholarship "
      Application="August to December"
      department="University Grants Commission - MHRD"
      />
      <Accordian
      title="PFMS Scholarship"
      description="PFMS (Public Finance Management System) is platform that helps track the disbursement of funds under the programs/schemes offered by the Ministry of Education, Government of India. Beneficiaries can monitor payment status of all central sector schemes and centrally-sponsored schemes."
      Application="To be updated soon"
      department="MoE, Government of India"
      />
      <Accordian
      title="Indira Gandhi Single Girl Child Scholarship"
      description="The Indira Gandhi Single Girl Child Scholarship 2023-24, introduced by the University Grants Commission, supports the education of single girl children in India. Explore its objectives, eligibility, application process, and key highlights."
      Application="To be updated soon"
      department="University Grants Commission (UGC)"
      />
      <Accordian
      title="Central Sector Scholarship"
      description="Central Sector Scholarship scheme, initiated by the Department of Higher Education of MHRD, is a centrally-funded merit-cum-means scholarship. It is specifically designed to financially assist College and University students who come from economically underprivileged families."
      Application="To be updated soon"
      department="MoE, Government of India"
      />
      <Accordian
      title="PG Scholarship for University Rank Holders(Ist And Iind Rank Holders)"
      description="Candidate must be 30 years or below 30 years at the time of PG Admission Distance mode education not applicable
      Candidates who have completed their UG in Life Sciences, Physical Sciences, Earth and Mathematical Sciences, Social Science, Commerce and Languages can apply."
      Application="August to October"
      department="University Grants Commission - MHRD"
      />

    </div>
  )
}

export default GovtScholorship
