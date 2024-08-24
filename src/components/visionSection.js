
export default function Vision() {
    return (
        <div className=" p-5 flex flex-col-reverse md:flex-row  justify-center items-center gap-x-12 gap-y-5 lg:gap-x-24  xl:h-[100vh] bg-bgimage">
            <div className='flex justify-center items-center  '>
                <img src='/images/mobile-ss.png' className='max-w-auto min-w-auto min-h-auto max-h-auto' alt='/' />
            </div>
            <div className='p-3  flex flex-col  text-primary lg:max-w-[700px] gap-y-5'>
                <h1 className='text-4xl font-bebas break-words' >our vision</h1>
                <p className='font-poppins  md:text-md'>Our vision is to create a platform that empowers our <br />Biradari community to connect, learn, and grow. <br />We believe that by providing <br />a space for community members to share information, ideas, <br />and experiences, we can build <br />a stronger and more vibrant community.</p>
                <p className='font-poppins  md:text-md'>We believe that our app can make a positive difference<br />in the lives of our community members. We are <br />excited to see how our app can help our community <br />connect, learn, and grow.</p>
                <p className='font-poppins  md:text-md'> We are excited to see how our app can make a positive <br/>difference in the lives of our community members.<br/>We hope you will join us!</p>
                <div className="flex flex-row justify-center items-center rounded-2xl py-2 px-5 bg-[#737373] max-w-[170px]">
                    <a className="text-white font-bold" href='./'>Read More</a>
                </div>
            </div>
        </div>
    )
}