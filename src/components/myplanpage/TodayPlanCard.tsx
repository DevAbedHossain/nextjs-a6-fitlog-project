import { IFitLog } from '@/types/FitType';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheck, FaFire, FaRegStar, FaTimes } from 'react-icons/fa';
import { GoClock } from 'react-icons/go';


const TodayPlanCard = ({ plan }: { plan: IFitLog }) => {
    return (
        <div className="bg-[#14171e] rounded-2xl p-5 border border-[#232732] grid grid-cols-2 gap-5 justify-between">
            <div className="flex gap-5 items-center">
                <Image src={plan.image} alt={plan.name} width={200} height={150} className="rounded-2xl w-40 h-23 object-cover"></Image>
                <div >
                    <h4 className="text-[18px] font-bold uppercase">{plan.name}</h4>
                    <span className="text-[14px] font-semibold text-[#8A92A0]">{plan.equipment}</span>
                    <div className="flex gap-5 items-center mt-2">
                        <span className="flex gap-1 items-center text-[#9CA3AF] text-[12px]"><GoClock className="text-[#ccff00]" /> {plan.duration} min</span>
                        <span className="flex gap-1 items-center text-[#9CA3AF] text-[12px]"><FaFire className="text-[#ccff00]" /> {plan.caloriesBurned} kcal</span>
                        <span className="flex gap-1 items-center text-[#9CA3AF] text-[12px]"><FaRegStar className="text-[#ccff00]" /> {plan.rating}</span>
                    </div>
                </div>
            </div>

            <div className="flex gap-4 items-center justify-end">
                <Link href={`/exercise/${plan.id}`} className="btn rounded-full border border-[#374151]">View Details</Link>
                <button className="btn flex justify-center items-center rounded-full bg-[#ccff00] text-black"><FaCheck />Mark as Done</button>
                <span className="text-[#6B7280] text-lg cursor-pointer"><FaTimes /></span>
            </div>
        </div>
    );
};

export default TodayPlanCard;