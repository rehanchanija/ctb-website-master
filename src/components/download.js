import Appbutton from "@/components/appstorebutton";
import Playbutton from "@/components/googleplaybutton";

export const Download = () => {
  return (
    <div
      className="px-4 py-8 flex flex-col lg:flex-row justify-center items-center bg-primary  xl:h-[100vh] gap-12"
      style={{ fontFamily: "Poppins" }}
    >
      {/* paragraph section with icons and buttons */}
      <div className=" flex flex-col gap-y-7">
        <p className="text-md md:text-lg font-poppins text-white">Download</p>
        <p className="text-2xl md:text-3xl lg:text-4xl font-bebas break-words  text-secondry uppercase">
          Download The Latest Version Of Our App
        </p>
        <p className="text-white  md:text-sm lg:text-md font-poppins">
          {" "}
          Download the app for free on the App Store
          <br />
          or Google Play. Sign up for an account
          <br />
          and start connecting with your Biradari today!
        </p>

        {/* google play button and app play button */}

        <div className="flex flex-row gap-x-4 ">
          <Playbutton />
          <Appbutton />
        </div>
      </div>
      {/* mobile image section */}
      <div className="mb-5 flex jutify-center items-center  h-auto">
        <img src="/images/image1.png" className="" alt="." />
      </div>
    </div>
  );
};
