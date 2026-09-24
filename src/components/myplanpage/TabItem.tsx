"use client";
import { WorkOutContext } from '@/context/WorkOutProvider';
import { IFitLog } from '@/types/FitType';
import Link from 'next/link';
import { useContext, useState } from 'react';
import TodayPlanCard from './TodayPlanCard';


const TabItem = () => {
    const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

    const { todayPlan, saveLater } = useContext(WorkOutContext);


    return (
        <section>

            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

                <div className="inline-flex w-fit rounded-2xl bg-[#1a1d23] p-1">
                    <button onClick={() => setActiveTab("today")} className={`rounded-xl px-4 py-2 text-sm font-medium transition ${activeTab === "today" ? "bg-[#0d0f12] text-[#b8ff00]" : "text-gray-400 hover:text-white"}`}>Today's Plan</button>

                    <button onClick={() => setActiveTab("saved")} className={`rounded-xl px-4 py-2 text-sm font-medium transition ${activeTab === "saved" ? "bg-[#0d0f12] text-[#b8ff00]" : "text-gray-400 hover:text-white"}`}>Saved</button>
                </div>

                {/* <div className="w-full sm:w-80">
                    <label className="mb-1 block text-sm font-medium text-white">
                        Sort By
                    </label>

                    <select className="select w-full rounded-2xl border border-gray-700 bg-transparent text-white outline-none focus:border-[#b8ff00]">
                        <option className="bg-[#1a1d23]">
                            Duration
                        </option>
                        <option className="bg-[#1a1d23]">
                            Difficulty
                        </option>
                        <option className="bg-[#1a1d23]">
                            Calories
                        </option>
                        <option className="bg-[#1a1d23]">
                            Rating
                        </option>
                    </select>
                </div> */}
            </div>

            {
                todayPlan.length > 0 ? <div className={`space-y-4 mt-8 ${activeTab === "today" ? "block" : "hidden"}`}>
                    {
                        todayPlan.map((plan: IFitLog, ind: number) => <TodayPlanCard key={ind} plan={plan} />)
                    }
                </div> : <div className={`${activeTab === "today" ? "block" : "hidden"} mt-8 flex min-h-64 flex-col items-center justify-center rounded-2xl border border-dashed border-gray-800 bg-[#191c22] px-5 text-center`}>
                    <h2 className="text-lg font-bold uppercase tracking-wide text-white">Nothing Today Here Yet</h2>
                    <p className="mt-2 text-sm text-gray-400 sm:text-base"> Browse the library and add a lift to get today moving.</p>
                    <Link href="/" className="btn mt-6 rounded-xl border-none bg-[#b8ff00] px-6 text-black hover:bg-[#a9eb00]">Go to workouts</Link>
                </div>
            }


            {/* Saved */}
            <div className={`${activeTab === "saved" ? "block" : "hidden"} mt-8 flex min-h-64 flex-col items-center justify-center rounded-2xl border border-dashed border-gray-800 bg-[#191c22] px-5 text-center`}>
                <h2 className="text-lg font-bold uppercase tracking-wide text-white">Nothing Saved Here Yet</h2>
                <p className="mt-2 text-sm text-gray-400 sm:text-base"> Browse the library and add a lift to get today moving.</p>
                <Link href="/" className="btn mt-6 rounded-xl border-none bg-[#b8ff00] px-6 text-black hover:bg-[#a9eb00]">Go to workouts</Link>
            </div>

        </section>
    );
};

export default TabItem;