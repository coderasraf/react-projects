import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {

const [loading, setLoading] = useState(true)
const [jobs, setJobs] = useState([])
const [value, setValue] = useState(0)

const fetchJobs = async () => {
  const response = await fetch(url)
  const newJobs = await response.json()
  setJobs(newJobs)
  setLoading(false)
  console.log(jobs)
}

useEffect(() => {
  fetchJobs()
  
},[])

if(loading){
  return <section className='section loading'>
      <h1>Loading......</h1>
  </section>
}

const {company, dates, duties, title} = jobs[value]
console.log(title)
  return <section className='section'>
    <div className='title'>
      <h2>Experience</h2>
      <div className='underline'></div>
    </div>
    <div className='jobs-center'>
      
      {/* btn container */}

      <div className='btn-container'>
        {jobs.map((job, index) => (
          <button 
            key={job.id} 
            className={`job-btn ${value === index && 'active-btn'} `}
            onClick={() => setValue(index)}>
            {job.company }
            </button>
        ) )}
      </div>

      <article className='job-info'>
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className='job-date'>{dates}</p>
        {duties.map((duty, index) => (
          <p key={index} className='job-desc'>
           <FaAngleDoubleRight className='job-icon'/> {duty}
          </p>
        ))}
      </article>
    </div>
  </section>
}

export default App
