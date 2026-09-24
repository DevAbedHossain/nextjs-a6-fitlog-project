"use client";
import { IFitLog } from '@/types/FitType';
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

interface IWorkOutPhroms {
    todayPlan: IFitLog[]
    setTodayPlan: Dispatch<SetStateAction<IFitLog[]>>
    saveLater: IFitLog[]
    setSaveLater: Dispatch<SetStateAction<IFitLog[]>>
}

export const WorkOutContext = createContext<IWorkOutPhroms>({
    todayPlan: [],
    setTodayPlan: () => { },
    saveLater: [],
    setSaveLater: () => { },
})

const WorkOutProvider = ({ children }: { children: ReactNode }) => {

    const [todayPlan, setTodayPlan] = useState<IFitLog[]>([]);
    const [saveLater, setSaveLater] = useState<IFitLog[]>([]);

    const sharedData: IWorkOutPhroms = {
        todayPlan, setTodayPlan, saveLater, setSaveLater
    }

    return (
        <WorkOutContext.Provider value={sharedData}>
            {children}
        </WorkOutContext.Provider>
    );
};

export default WorkOutProvider;