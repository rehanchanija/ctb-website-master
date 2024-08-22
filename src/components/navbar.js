import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <>
      {/* main navigation section */}
      <section className="w-full relative ">
        <nav className="px-3 flex h-20  justify-between md:justify-around items-center bg-primary ">
          {/* this is image div */}
          <div className="flex justify-center items-center ">
            <Link href="/" alt="logo">
              <Image
                width={48}
                height={48}
                src="/images/Navlogo.png"
                alt="navlogo"
              />
            </Link>
          </div>
          {/*hamburger icon  */}
          <div
            onClick={toggle}
            className="w-10 h-10  md:hidden m-2 gap-y-2 cursor-pointer"
          >
            <span className=" block m-1 h-1.5 w-7  rounded-md bg-white"></span>
            <span className="block m-1 h-1.5 w-7 rounded-md bg-white"></span>
            <span className=" block m-1 h-1.5 w-7 rounded-md bg-white"></span>
          </div>

          <ul className=" hidden md:flex justify-center gap-x-6 font-bold text-md text-white ">
            <li className="hover:scale-125">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:scale-125">
              <Link href="#about">About</Link>
            </li>
            <li className="hover:scale-125">
              <Link href="#contact">Contact</Link>
            </li>
            <li className="hover:scale-125">
              <Link href="/privacypolicy">Privacy Policy</Link>
            </li>
          </ul>
          {/* donate button */}
          <div className="hidden md:flex rounded-2xl p-2 px-4 bg-white">
            <a className="font-bold" href="#">
              Donate now{" "}
            </a>
          </div>
        </nav>
        {/* for   */}
        <ul
          className={`${
            open ? "flex" : "hidden"
          } flex-col justify-center items-center text-white font-bold  md:hidden font-poppins bg-primary text-lg transition-all duration-150`}
        >
          <li className="m-2">
            <Link href="/">Home</Link>
          </li>
          <li className="m-2">
            <Link href="#about">About</Link>
          </li>
          <li className="m-2">
            <Link href="#contact">Contact</Link>
          </li>
          <li className="m-2">
            <Link href="/privacypolicy">Privacy Policy</Link>
          </li>
        </ul>
      </section>
    </>
  );
}
