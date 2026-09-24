import SaveLaterButton from "@/components/fitlogdetailspage/SaveLaterButton";
import TodayPlanButton from "@/components/fitlogdetailspage/TodayPlanButton";
import { singleFitLog } from "@/lib/fitlogs";
import { IFitLog } from "@/types/FitType";
import Image from "next/image";
import Link from "next/link";
import { CiBookmark } from "react-icons/ci";

interface IExrDetailsPhroms {
    params: {
        exrId: string
    }
}


const ExrDetailsPage = async ({ params }: IExrDetailsPhroms) => {

    const { exrId } = await params;

    const fitlog: IFitLog = await singleFitLog(exrId);

    return (
        <section className="bg-black">
            <div className="container mx-auto py-10 grid grid-cols-2 gap-15">

                <Image src={fitlog.image} alt={fitlog.name} width={700} height={700} className="w-full h-210 object-fill rounded-3xl"></Image>

                <div className="space-y-4">
                    <h2 className="text-4xl font-bold">{fitlog.name}</h2>
                    <p className="text-[16px] text-[#9CA3AF]">{fitlog.description}</p>

                    <div className="flex items-center gap-3">
                        {
                            fitlog.muscleGroups.map((muscle: string, ind: number) => <span key={ind} className="text-[12px] font-bold bg-[#C2F800] rounded-full text-black px-3 py-1 uppercase">{muscle}</span>)
                        }
                    </div>

                    <div className="bg-[#151922] rounded-2xl border border-[#1E2330] py-1 my-8">
                        <div className="flex gap-5 justify-between items-center border-b border-[#1E2330] px-7 py-5">
                            <h5 className="text-[14px] font-bold uppercase text-[#9CA3AF]">EQUIPMENT</h5>
                            <h5 className="text-[14px] font-medium text-[#E5E7EB]">{fitlog.equipment}</h5>
                        </div>
                        <div className="flex gap-5 justify-between items-center border-b border-[#1E2330] px-7 py-5">
                            <h5 className="text-[14px] font-bold uppercase text-[#9CA3AF]">DIFFICULTY</h5>
                            <h5 className="text-[14px] font-medium text-[#E5E7EB]">{fitlog.difficulty}</h5>
                        </div>
                        <div className="flex gap-5 justify-between items-center border-b border-[#1E2330] px-7 py-5">
                            <h5 className="text-[14px] font-bold uppercase text-[#9CA3AF]">SETS</h5>
                            <h5 className="text-[14px] font-medium text-[#E5E7EB]">{fitlog.sets}</h5>
                        </div>
                        <div className="flex gap-5 justify-between items-center border-b border-[#1E2330] px-7 py-5">
                            <h5 className="text-[14px] font-bold uppercase text-[#9CA3AF]">REPS</h5>
                            <h5 className="text-[14px] font-medium text-[#E5E7EB]">{fitlog.reps}</h5>
                        </div>
                        <div className="flex gap-5 justify-between items-center border-b border-[#1E2330] px-7 py-5">
                            <h5 className="text-[14px] font-bold uppercase text-[#9CA3AF]">DURATION</h5>
                            <h5 className="text-[14px] font-medium text-[#E5E7EB]">{fitlog.duration} min</h5>
                        </div>
                        <div className="flex gap-5 justify-between items-center border-b border-[#1E2330] px-7 py-5">
                            <h5 className="text-[14px] font-bold uppercase text-[#9CA3AF]">CALORIES</h5>
                            <h5 className="text-[14px] font-medium text-[#E5E7EB]">{fitlog.caloriesBurned} kcal</h5>
                        </div>
                        <div className="flex gap-5 justify-between items-center px-7 py-5">
                            <h5 className="text-[14px] font-bold uppercase text-[#9CA3AF]">RATING</h5>
                            <h5 className="text-[14px] font-medium text-[#E5E7EB]">{fitlog.rating}</h5>
                        </div>
                    </div>

                    <h4 className="text-lg font-bold">INSTRUCTIONS</h4>
                    <div className="flex flex-col gap-3 mt-4">
                        {
                            fitlog.instructions.map((instruction: string, ind: number) => <span className="text-[#D1D5DB] text-[14px]" key={ind}>{ind + 1}. {instruction}</span>)
                        }
                    </div>

                    <div className="flex gap-5 items-center py-5">
                        <TodayPlanButton fitlog={fitlog} />
                        <SaveLaterButton fitlog={fitlog} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExrDetailsPage;