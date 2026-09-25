"use client";
import { WorkOutContext } from '@/context/WorkOutProvider';
import { IFitLog } from '@/types/FitType';
import { useContext } from 'react';


const WorkOutCount = () => {

    const { todayPlan, saveLater, activeTab } = useContext(WorkOutContext);

    return (
        <div className="bg-[#13161D] my-8 border border-[#232732] rounded-2xl px-7 py-2 grid grid-cols-3 gap-8 items-center" >
            <div className="border-r border-dotted border-[#ffffff4d] py-5">
                <p className="text-[#8A92A0] text-[14px]">Exercises</p>
                <h1 className="text-4xl font-bold text-[#CCFF00]">
                    {
                        activeTab === "today" ? `${todayPlan.length}` : `${saveLater.length}`
                    }
                </h1>
            </div>
            <div className="border-r border-dotted border-[#ffffff4d] py-5">
                <p className="text-[#8A92A0] text-[14px]">Minutes</p>
                <h1 className="text-4xl font-bold text-white">
                    {
                        activeTab === "today" ? `${todayPlan.reduce((acc: number, item: IFitLog) => acc + item.duration, 0)}` : `${saveLater.reduce((acc: number, item: IFitLog) => acc + item.duration, 0)}`
                    }

                </h1>
            </div>
            <div className="py-5">
                <p className="text-[#8A92A0] text-[14px]">Calories</p>
                <h1 className="text-4xl font-bold text-white">
                    {
                        activeTab === "today" ? `${todayPlan.reduce((acc: number, item: IFitLog) => acc + item.caloriesBurned, 0)}` : `${saveLater.reduce((acc: number, item: IFitLog) => acc + item.caloriesBurned, 0)}`
                    }

                </h1>
            </div>
        </div>
    );
};

export default WorkOutCount;