import Image from 'next/image';
import Fitness from "@/assets/banner.png"

const Banner = () => {
    return (
        <section>
            <div className="container mx-auto p-14 rounded-2xl my-5 bg-[#15171D]">
                <div className="flex gap-6 justify-between items-center">
                    <div className="w-6/12 space-y-5">
                        <p className="text-[12px] font-bold text-[#C2F800] uppercase">WORKOUT LIBRARY</p>
                        <h1 className="text-6xl text-white font-bold ">TRAIN WITH INTENT. LOG EVERY SET.</h1>
                        <p className="text-[16px] font-normal text-[#9CA3AF] w-9/12">FitLog is a dark, no-nonsense gym companion: pick a lift, lock itinto today's plan, and watch the week's work add up.</p>
                        <button className="btn bg-[#C2F800] text-black text-14 font-bold">BROWSE WORKOUTS</button>
                    </div>

                    <Image src={Fitness} alt="fitness" width={500} height={500}></Image>
                </div>
            </div>
        </section>
    );
};

export default Banner;