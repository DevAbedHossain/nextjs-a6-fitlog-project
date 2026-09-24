import { IFitLog } from '@/types/FitType';
import Image from 'next/image';
import Link from 'next/link';
import { FaFire, FaRegStar } from 'react-icons/fa';
import { GoClock } from 'react-icons/go';


const FitLogCard = ({ fitlog }: { fitlog: IFitLog }) => {
    return (
        <Link href={`/exercise/${fitlog.id}`} >
            <div className="card bg-[#15171d] shadow-sm border border-[#15171d] rounded-2xl hover:border-[#C2F800]">
                <figure>
                    <Image className="w-full h-70 object-cover overflow-hidden rounded-t-2xl" src={fitlog.image} alt={fitlog.name} width={500} height={500}></Image>
                </figure>

                <div className="card-body">

                    <div className="flex gap-2">
                        {fitlog.muscleGroups.map((muscle: string, ind: number) => <span key={ind} className="text-[12px] font-bold bg-[#C2F800] rounded-full text-black px-3 py-1 uppercase">{muscle}</span>)}
                    </div>

                    <h2 className="card-title text-lg font-bold">{fitlog.name}</h2>
                    <span className="text-[14px] text-[#9CA3AF]">{fitlog.equipment}</span>

                    <div className="flex gap-5 items-center">
                        <span className="flex gap-1 items-center text-[#9CA3AF] text-[12px]"><GoClock /> {fitlog.duration} min</span>
                        <span className="flex gap-1 items-center text-[#9CA3AF] text-[12px]"><FaFire /> {fitlog.caloriesBurned} kcal</span>
                        <span className="flex gap-1 items-center text-[#9CA3AF] text-[12px]"><FaRegStar /> {fitlog.rating}</span>
                    </div>
                </div>
            </div>
        </Link >
    );
};

export default FitLogCard;