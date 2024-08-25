const aboutdata = [
    {
        heading: 'App For Our Biraadari',
        content: `We've created this app to help people in need.With your donation, we can provide access to healthcare, education, and job training.Your donation will make a difference. Help us build a better future for everyone`
    },
    {
        heading: 'Event Creation',
        content: `Create events and share with your friends and family and other people.`
    },
    {
        heading: 'Event Notification',
        content: `Get notified about the events you are interested in and never miss any event.`
    },
    {
        heading:'Insights of Our Biraadari',
        content:`Get Insights of people of our Biraadari and know more about them.`
    }

];
const About = () => {

    return (
        <div id="about" className="px-2 py-4 bg-primary  flex flex-col-reverse md:flex-row  justify-center items-center gap-x-12 gap-y-5 lg:gap-x-24  xl:h-[100vh]">
            <div className='flex justify-center items-center max-w-lg'>
                <img src="/images/image1.png" className='max-w-auto min-w-auto min-h-auto max-h-auto' alt='mobiless' />
            </div>
            <div className='p-3 flex flex-col max-w-md  lg:max-w-xl gap-3'>
                <h1 className='text-sm sm:text-md text-white font-poppins ' >About App</h1>
                {aboutdata.map((item,index)=>(<div key={index}>
                    <h1 className='text-2xl md:text-3xl font-bebas break-words text-secondry' key={item.index}>{item.heading}</h1>
                    <p className='font-poppins  md:text-md text-white' key={item.index} >{item.content}</p>
                    </div>
                ))}
               
            </div>
        </div>

    )
}
export default About;