import { IFitLog } from '@/types/FitType';
import { spans } from 'next/dist/build/webpack/plugins/profiling-plugin';
import Image from 'next/image';


const FitLogCard = ({ fitlog }: { fitlog: IFitLog }) => {
    return (
        <div className="card bg-[#15171d] shadow-sm">
            <figure>
                <Image className="w-full h-70 object-cover overflow-hidden rounded-t-2xl" src={fitlog.image} alt={fitlog.name} width={500} height={500}></Image>
            </figure>
            <div className="card-body">
                <div className="flex gap-2">
                    {fitlog.muscleGroups.map((muscle: string) => <span className="text-[12px] font-bold bg-[#C2F800] rounded-full text-black px-3 py-1 uppercase">{muscle}</span>)}
                </div>
                <h2 className="card-title text-lg font-bold">{fitlog.name}</h2>
                <p className="text-[12px] text-[#9CA3AF]">{fitlog.equipment}</p>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default FitLogCard;