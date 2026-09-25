import { WorkOutContext } from "@/context/WorkOutProvider";
import { IFitLog } from "@/types/FitType";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { FaFire, FaRegStar, FaTimes } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import { toast } from "react-toastify";


const SaveLaterCard = ({ saveItem }: { saveItem: IFitLog }) => {

    const { saveLater, setSaveLater } = useContext(WorkOutContext);

    const handleRemoveItem = () => {
        const updateSave = saveLater.filter(sItem => sItem.id !== saveItem.id);

        setSaveLater(updateSave);
        toast.success(`${saveItem.name} removed from save later`)
    }

    return (
        <div className="bg-[#14171e] rounded-2xl p-5 border border-[#232732] grid grid-cols-1 lg:grid-cols-2 gap-5 justify-between">
            <div className="flex gap-5 items-center">
                <Image src={saveItem.image} alt={saveItem.name} width={200} height={150} className="rounded-2xl w-40 h-23 object-cover"></Image>
                <div >
                    <h4 className="text-[16px] md:text-[18px] font-bold uppercase">{saveItem.name}</h4>
                    <span className="text-[14px] font-semibold text-[#8A92A0]">{saveItem.equipment}</span>
                    <div className="flex gap-5 items-center mt-2">
                        <span className="flex gap-1 items-center text-[#9CA3AF] text-[12px]"><GoClock className="text-[#ccff00]" /> {saveItem.duration} min</span>
                        <span className="flex gap-1 items-center text-[#9CA3AF] text-[12px]"><FaFire className="text-[#ccff00]" /> {saveItem.caloriesBurned} kcal</span>
                        <span className="flex gap-1 items-center text-[#9CA3AF] text-[12px]"><FaRegStar className="text-[#ccff00]" /> {saveItem.rating}</span>
                    </div>
                </div>
            </div>

            <div className="flex gap-4 items-center justify-start lg:justify-end">
                <Link href={`/exercise/${saveItem.id}`} className="btn rounded-full border border-[#374151]">View Details</Link>
                <span onClick={() => handleRemoveItem()} className="text-[#6B7280] text-lg cursor-pointer"><FaTimes /></span>
            </div>
        </div>
    );
};

export default SaveLaterCard;