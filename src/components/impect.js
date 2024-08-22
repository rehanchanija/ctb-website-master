function Impect({number ,heading ,para}) {
    return (
        <div className="flex flex-col items-center gap-2">
            <h1 className="text-6xl md:text-8xl font-bebas" >{number}</h1>
            <p className="text-lg  md:text-3xl"> {heading}</p>
            <p className="capitalize md:text-lg text-center w-52"> {para}</p>
        </div>
    )
}
export default Impect;