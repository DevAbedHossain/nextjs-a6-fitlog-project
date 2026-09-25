"use client";
import { IFitLog } from '@/types/FitType';
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

interface IWorkOutPhroms {
    todayPlan: IFitLog[]
    setTodayPlan: Dispatch<SetStateAction<IFitLog[]>>
    saveLater: IFitLog[]
    setSaveLater: Dispatch<SetStateAction<IFitLog[]>>
    activeTab: "today" | "saved"
    setActiveTab: Dispatch<SetStateAction<"today" | "saved">>
}

export const WorkOutContext = createContext<IWorkOutPhroms>({
    todayPlan: [],
    setTodayPlan: () => { },
    saveLater: [],
    setSaveLater: () => { },
    activeTab: "today",
    setActiveTab: () => { },
})

const WorkOutProvider = ({ children }: { children: ReactNode }) => {

    const [todayPlan, setTodayPlan] = useState<IFitLog[]>([]);
    const [saveLater, setSaveLater] = useState<IFitLog[]>([]);
    const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

    const sharedData: IWorkOutPhroms = {
        todayPlan, setTodayPlan, saveLater, setSaveLater, activeTab, setActiveTab
    }

    return (
        <WorkOutContext.Provider value={sharedData}>
            {children}
        </WorkOutContext.Provider>
    );
};

export default WorkOutProvider;