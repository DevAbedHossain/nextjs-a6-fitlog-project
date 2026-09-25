import Image from 'next/image';
import Fitness from "@/assets/banner.png"
import Link from 'next/link';
import { IoChevronDownOutline } from 'react-icons/io5';

const Banner = () => {
    return (
        <section>
            <div className="container mx-auto p-14 rounded-2xl my-5 bg-[#15171D]">
                <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-between items-center">
                    <div className="w-full sm:w-6/12 space-y-5 order-2">
                        <p className="text-[12px] font-bold text-[#C2F800] uppercase">WORKOUT LIBRARY</p>
                        <h1 className="text-2xl md:text-3xl  lg:text-6xl text-white font-bold ">TRAIN WITH INTENT. LOG EVERY SET.</h1>
                        <p className="text-[16px] font-normal text-[#9CA3AF] w-full lg:w-9/12">FitLog is a dark, no-nonsense gym companion: pick a lift, lock itinto today's plan, and watch the week's work add up.</p>

                        <Link href="/#library" className="btn bg-[#C2F800] text-black text-16 font-bold py-7 px-5 lg:px-10">BROWSE WORKOUTS <IoChevronDownOutline /></Link>
                    </div>

                    <Image src={Fitness} alt="fitness" width={400} height={400} className="w-65 h-65 sm:order-2 md:w-70 md:h-70 lg:w-100 lg:h-100 object-contain "></Image>
                </div>
            </div>
        </section>
    );
};

export default Banner;