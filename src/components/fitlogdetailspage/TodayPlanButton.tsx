"use client";
import { WorkOutContext } from "@/context/WorkOutProvider";
import { IFitLog } from "@/types/FitType";
import { useContext } from "react";
import { IoTodayOutline } from "react-icons/io5";
import { toast } from "react-toastify";


const TodayPlanButton = ({ fitlog }: { fitlog: IFitLog }) => {

    const { todayPlan, setTodayPlan } = useContext(WorkOutContext)

    const handleTodayPlan = () => {

        const isAdded = todayPlan.find(planId => planId.id === fitlog.id);

        if (isAdded) {
            toast.error(`${fitlog.name} already added in today's plan`);
            return;
        }

        setTodayPlan([...todayPlan, fitlog]);
        toast.success(`${fitlog.name} added to today's plan`)

    }

    return (
        <button onClick={() => handleTodayPlan()} className="btn bg-[#CCFF00] text-[#0F1115] text-[16px] font-semibold rounded border border-[#CCFF00]"><IoTodayOutline /> Add to today's plan</button>
    );
};

export default TodayPlanButton;