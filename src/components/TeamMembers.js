import React from 'react'
import Team from './team'

function TeamMembers() {
    return (
        <section className='p-8 flex flex-col justify-center items-center xl:min-h-screen gap-12 bg-bgimage'>
            <div>
                <h1 className="mt-4 text-4xl font-bebas text-primary">Team Members</h1>
            </div>
            <div className=' inline-flex flex-wrap items-center justify-around w-full font-poppins'>
                <Team name="Razik Chouhan" possition="President" />
                <Team name="Razik Chouhan" possition="President" />
                <Team name="Razik Chouhan" possition="President" />
                <Team name="Razik Chouhan" possition="President" />
            </div>
            <div className="flex flex-row justify-center items-center rounded-2xl py-2 px-5 bg-primary max-w-[170px]">
                <a className="text-white font-bold" href='./'>Read More</a>
            </div>
        </section>
    )
}

export default TeamMembers