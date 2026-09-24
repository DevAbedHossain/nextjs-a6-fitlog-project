"use client";
import { WorkOutContext } from "@/context/WorkOutProvider";
import { IFitLog } from "@/types/FitType";
import { useContext } from "react";
import { IoTodayOutline } from "react-icons/io5";


const TodayPlanButton = ({ fitlog }: { fitlog: IFitLog }) => {

    const { todayPlan, setTodayPlan } = useContext(WorkOutContext)

    const handleTodayPlan = () => {
        console.log("Handle Today Plan Click event trigger")

        setTodayPlan([...todayPlan, fitlog]);
        console.log(todayPlan)
    }

    return (
        <button onClick={() => handleTodayPlan()} className="btn bg-[#CCFF00] text-[#0F1115] text-[16px] font-semibold rounded border border-[#CCFF00]"><IoTodayOutline /> Add to today's plan</button>
    );
};

export default TodayPlanButton;