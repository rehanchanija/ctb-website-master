import React from 'react'

function Team({name,possition}) {
    return (
        <div className='p-6 flex flex-col justify-center items-center bg-[#F3F2F3] rounded-lg gap-y-1'>
            <div className=' w-[75px] h-[75px] rounded-full bg-[#D9D9D9]'></div>
            <p className=''>{name}</p>
            <p className='font-bold'>{possition}</p>
        </div>
    )
}

export default Team;