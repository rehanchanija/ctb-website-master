import Appbutton from "./appstorebutton";
import Playbutton from "./googleplaybutton";
import Icon from "./icon";
export default function BannerSection() {
  return (
    <>
      <div className="px-4 py-8 m-auto relative flex flex-col font-poppins md:flex-row justify-center items-center bg-primary lg:h-[86vh] gap-12">
        {/* paragraph section with icons and buttons */}
        <div className=" flex flex-col gap-y-7  max-w-xl">
          <div className="text-2xl sm:text-3xl lg:text-4xl font-bebas break-words font-light text-secondry uppercase ">
            <p>Chhattisgarh Teli Muslim Biraadari Foundation</p>
          </div>
          <div className=" text-white sm:text-sm lg:text-md font-poppins">
            <p>
              Weve created this app to help people in need.
              <br />
              With your donation, we can provide access to healthcare,
              education.
              <br />
              and job training. Your donation will make a difference.
              <br />
              Help us build a better future for everyone.
            </p>
          </div>
          {/* icon section */}
          <div className="flex items-center  gap-x-7">
            <Icon src="/images/education.png" title="education" />
            <Icon src="/images/helth.png" title="helthcare" />
            <Icon src="/images/emp.png" title="employment" />
          </div>
          {/* google play button and app play button */}

          <div className="flex flex-row gap-x-4 ">
            <Playbutton />
            <Appbutton />
          </div>
        </div>
        {/* mobile image section */}
        <div className="mb-5 flex jutify-center items-center max-w-lg h-auto">
          <img src="/images/image1.png" className="" alt="mpbiless" />
        </div>
      </div>
    </>
  );
}
