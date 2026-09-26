"use client";
import { IFitLog } from '@/types/FitType';
import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';

interface IWorkOutPhroms {
    todayPlan: IFitLog[]
    setTodayPlan: Dispatch<SetStateAction<IFitLog[]>>
    saveLater: IFitLog[]
    setSaveLater: Dispatch<SetStateAction<IFitLog[]>>
    activeTab: "today" | "saved"
    setActiveTab: Dispatch<SetStateAction<"today" | "saved">>
    isHydrated: boolean
}

export const WorkOutContext = createContext<IWorkOutPhroms>({
    todayPlan: [],
    setTodayPlan: () => { },
    saveLater: [],
    setSaveLater: () => { },
    activeTab: "today",
    setActiveTab: () => { },
    isHydrated: false,
})

const WorkOutProvider = ({ children }: { children: ReactNode }) => {

    const [todayPlan, setTodayPlan] = useState<IFitLog[]>([]);
    const [saveLater, setSaveLater] = useState<IFitLog[]>([]);
    const [activeTab, setActiveTab] = useState<"today" | "saved">("today");
    const [isHydrated, setIsHydrated] = useState(false)

    //Get data from localStorage
    useEffect(() => {
        const getTodayPlan = localStorage.getItem("todayPlan");
        console.log(getTodayPlan, "insite wordout provider");
        if (getTodayPlan) {
            setTodayPlan(JSON.parse(getTodayPlan));
        }

        const getSavedLater = localStorage.getItem("saveLater");
        if (getSavedLater) {
            setSaveLater(JSON.parse(getSavedLater));
        }

        setIsHydrated(true)
    }, [])

    // Save todayPlan to localStorage
    useEffect(() => {
        if (!isHydrated) {
            return;
        }

        localStorage.setItem("todayPlan", JSON.stringify(todayPlan))
    }, [todayPlan, isHydrated]);

    //Save SaveLater to localStorage
    useEffect(() => {
        if (!isHydrated) {
            return;
        }

        localStorage.setItem("saveLater", JSON.stringify(saveLater))
    }, [saveLater, isHydrated]);

    const sharedData: IWorkOutPhroms = {
        todayPlan, setTodayPlan, saveLater, setSaveLater, activeTab, setActiveTab, isHydrated
    }

    return (
        <WorkOutContext.Provider value={sharedData}>
            {children}
        </WorkOutContext.Provider>
    );
};

export default WorkOutProvider;
