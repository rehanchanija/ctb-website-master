import Link from "next/link";

function Footer() {
  return (
    <section className="pt-52 relative bg-primary flex flex-wrap-reverse justify-around text-sm font-poppins text-white  gap-y-8">
      <div className="mb-5 w-1/2 h-0.5 bg-secondry "></div>
      <div className="p-5 flex flex-col sm:flex-row justify-around gap-y-8 w-full">
        <div className="flex flex-col items-center sm:items-start gap-y-5">
          <p className="flex font-bebas text-3xl mx-auto">address</p>
          <div className="flex gap-x-5">
            <img src="/svg/location.svg" alt="" />
            <p>
              Near Muslim Hall, idgah bhata,
              <br />
              Raipur, Chhattisgarh
            </p>
          </div>
          <div className="flex gap-x-5">
            <img src="/svg/call.svg" alt="" />
            <p> +91 79996 73573</p>
          </div>
          <div className="flex gap-x-5">
            <img src="/images/email.png" alt="" />
            <p>ctbfindia@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-5 items-center">
          <p className="font-bebas text-3xl">quike link</p>
          <ul className="flex flex-col items-center gap-y-6">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/privacypolicy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center gap-y-6">
          <p className="font-bebas text-3xl">contact with us</p>
          <p>
            Give us your email address to <br /> stay connected with us.
          </p>
          {/* this is massage sending div */}
          <div className="relative w-52 md:w-64 h-12">
            <input
              placeholder="Your Email.."
              className="p-4 bg-white rounded-lg w-full h-full"
            />
            <img
              className="cursor-pointer absolute top-2 right-2"
              src="/images/submitlogo.png"
              alt="logo"
            />
          </div>
        </div>
      </div>
      <div className=" absolute -top-36 p-5 border flex flex-col  sm:flex-row justify-center items-center bg-white rounded-2xl text-black ">
        <p className=" text-3xl  lg:text-6xl capitalize items-center">
          support our cause
        </p>
        <div className="flex flex-col justify-center items-center font-bold ">
          <img src="/images/scanner.png" alt="scanner" />
          <p>Donate Now</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
