export default function Programmes({img ,heading ,para}) {
    return (
        <div className="flex flex-col justify-center items-center gap-y-3 gap-x-8">
            <img src={img} className="h-12 " alt='./' />
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl"> {heading}</p>
            <p className="capitalize  text-sm md:text-md text-center w-36"> {para}</p>
        </div>
    )
}
