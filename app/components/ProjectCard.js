import Image from 'next/image'
import React from 'react'

export default function ProjectCard({ image, title, desc }) {
    return (
        <div className='overflow-hidden border-2 border-slate-800 hover:border-indigo-600 transition-all'>
            <Image className='rounded-lg' alt={title} src={image} layout='fit' objectFit='contain' />
            <div className='p-4 bg-slate-800'>
                <div className='text-xl font-medium'>{title}</div>
                <div>{desc}</div>
            </div>
        </div>
    )
}
