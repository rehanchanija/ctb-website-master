
export default function Icon({src ,title}) {
    return (
        <div className='flex justify-between items-center flex-col sm:flex-row text-2xl font-bebas text-white gap-2' >
            <div className="h-12 flex justify-center items-center ">
                <img src={src} alt='' />
            </div>
            <div className='flex justifyt-center items-center'>
                <p className="text-lg" >{title}</p>
            </div>
        </div>
    )
}