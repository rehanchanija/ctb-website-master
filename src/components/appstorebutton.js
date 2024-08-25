import Link from "next/link";

export default function Appbutton() {
  return (
    <div className="flex flex-row justify-center items-center rounded-xl py-1 px-3  bg-white w-36 gap-1">
      <img src="./images/appstore.png" alt="applelogo" />
      <Link
        className="font-bold text-sm text-poppins"
        href="/"
        alt="apple logo"
      >
        {" "}
        App store{" "}
      </Link>
    </div>
  );
}
