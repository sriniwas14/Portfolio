import React from 'react'

const allSkills = [
    { title: "Languages ", skills: ["JavaScript", "TypeScript", "Python"] },
    { title: "Front-End ", skills: ["ReactJs", "VueJs", "Webpack", "Scss"] },
    { title: "Back-End ", skills: ["NodeJs", "JavaScript", "TypeScript", "RabbitMQ"] },
    { title: "DevOps ", skills: ["Docker", "Kubernetes", "Jenkins", "AWS", "GitHub Actions"] }
]

function SkillList({ skill }) {
    return <div className='bg-white p-2 text-black mb-2 w-full rounded'>
        <h2 className='font-bold mb-1'>{skill.title}</h2>
        <div>
            {
                skill.skills?.map(skillItem => <span className='inline-block p-1 rounded-xl px-2 mr-2'>{skillItem}</span>)
            }
        </div>
    </div>
}

export default function AboutMe() {
    return (
        <div className='flex bg-white'>
            <div className='bg-indigo-600 w-full text-white p-6'>
                <div className='text-xl font-bold'>Skills</div>
                <div className='grid grid-cols-2 gap-2 w-full'>
                    {
                        allSkills.map(skillItem => <SkillList skill={skillItem} />)
                    }
                </div>
            </div>
            <div className='p-6 w-full bg-slate-800 text-white'>
                <div className='text-xl font-bold'>About Me</div>
                <div>
                    Hey There, I'm Sriniwas, a JavaScript developer by day and a geek by night
                </div>
            </div>
        </div>
    )
}
