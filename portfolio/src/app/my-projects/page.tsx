"use client"

import ProjectCard from '@/component/ProjectCard'
import { Projects } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <div
    style={{backgroundImage: "url(/pic1.jpg)"}}
     className='w-screen h-screen flex items-center justify-center bg-center bg-slate-400 bg-cover'>
      <div className='grid grid-cols-2 gap-5 max-w-[90%] max-h-[90%]'>
        {Projects.map((project, index) => (
          <ProjectCard
              key={index}
              title={project.title}
              text={project.text}
              image={project.src}
          />
        ))}
      </div>
    </div>
  )
}

export default Page