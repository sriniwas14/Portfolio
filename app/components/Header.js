import React from 'react'
import { Quicksand } from 'next/font/google'
import { AiFillGithub, AiOutlineMail } from 'react-icons/ai'

const quicksand = Quicksand({
    subsets: ['latin'],
})

let links = [
    { title: "GitHub", href: "https://github.com/sriniwas14" },
    { title: "LinkedIn", href: "https://github.com/sriniwas14" }
]

export default function Header() {
    return (
        <div className='flex bg-gray-900 text-white text-center content-center flex-col'>
            <div className='m-auto mt-20'>
                <div className='text-5xl mb-3'><span className={quicksand.className}>Hey, I'm <b>Sriniwas</b></span></div>
                <div className=''>BackEnd + FrontEnd = Me ;)</div>
            </div>
            <div className='bg-grey-100 m-4 flex mx-auto content-center mb-20'>
                {
                    links.map(link => <div>
                        <a className='mx-2 text-white bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition-all' target="_blank" href={link.href} >{link.title}</a>
                    </div>)
                }
            </div>
        </div>
    )
}
