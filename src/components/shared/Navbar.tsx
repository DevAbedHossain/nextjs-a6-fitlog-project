"use client"
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.png";
import { usePathname } from "next/navigation";


const Navbar = () => {

    const pathName = usePathname()
    console.log(pathName)

    const links = <>
        <li><Link href="/" className={pathName === "/" ? "bg-[#1A2312] text-[#C2F800] text-[16px] font-semibold rounded-full" : "text-[#9CA3AF] font-medium rounded-full text-[16px]"} >Workouts</Link></li>
        <li><Link href="/about" className={pathName === "/about" ? "bg-[#1A2312] text-[#C2F800] text-[16px] font-semibold rounded-full" : "text-[#9CA3AF] font-medium rounded-full text-[16px]"} >About</Link></li>
    </>

    return (
        <section className="bg-[#0c0d10]">
            <div className="container mx-auto">
                <div className="navbar shadow-sm">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={-1}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
                                {links}
                            </ul>
                        </div>
                        {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
                        <Link href="/" className="btn btn-ghost text-xl gap-2 flex items-center"><Image src={Logo} alt="FitLog" width={30} height={30} />FITLOG</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-3 flex">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end flex gap-3">
                        <Link href="#" className="text-[16px] font-semibold flex gap-2 items-center">Plan <span className="bg-[#C2F800] text-black py-0.5 px-2 rounded-full">0</span></Link>
                        <Link href="#" className="text-[16px] font-semibold flex gap-2 items-center">Saved <span className="py-0.5 px-2 rounded-full border border-[#2D313B]">0</span></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Navbar;