import React from 'react'
import ProjectCard from './ProjectCard'
import naughty from '../assets/naughty.jpg'

const projects = [
    {
        image: naughty,
        title: "Naughty Elves",
        desc: "Naughty Elves is a video game developer for a game jam"
    },
    {
        image: naughty,
        title: "Naughty Elves",
        desc: "Naughty Elves is a video game developer for a game jam"
    },
    {
        image: naughty,
        title: "Naughty Elves",
        desc: "Naughty Elves is a video game developer for a game jam"
    }
]

export default function Projects() {
    return (
        <div className='p-6 bg-gray-900 text-white'>
            <div className='text-xl mb-4 font-bold'>Projects</div>
            <div className='flex gap-4'>
                {
                    projects.map(project => <ProjectCard image={project.image} title={project.title} desc={project.desc} />)
                }
            </div>
        </div>
    )
}
