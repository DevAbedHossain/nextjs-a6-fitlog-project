import Link from "next/link";



const MyPlanPage = () => {
    return (
        <section className="bg-black">
            <div className="container mx-auto py-15 space-y-2">
                <h2 className="text-3xl font-bold uppercase ">My Plan</h2>
                <p className="text-[16px] text-[#8A92A0]">Cap of five lifts for today. Finish them, then load more.</p>

                <div className="bg-[#13161D] my-8 border border-[#232732] rounded-2xl px-7 py-2 grid grid-cols-3 gap-8 items-center">
                    <div className="border-r border-dotted border-[#ffffff4d] py-5">
                        <p className="text-[#8A92A0] text-[14px]">Exercises</p>
                        <h1 className="text-4xl font-bold text-[#CCFF00]">0</h1>
                    </div>
                    <div className="border-r border-dotted border-[#ffffff4d] py-5">
                        <p className="text-[#8A92A0] text-[14px]">Minutes</p>
                        <h1 className="text-4xl font-bold text-white">0</h1>
                    </div>
                    <div className="py-5">
                        <p className="text-[#8A92A0] text-[14px]">Calories</p>
                        <h1 className="text-4xl font-bold text-white">0</h1>
                    </div>
                </div>

                {/* name of each tab group should be unique */}
                <div role="tablist" className="tabs tabs-box w-fit rounded-2xl bg-[#1a1d23] p-1">

                    <input type="radio" name="my_tabs_1" className="tab rounded-xl px-4 text-sm text-gray-400 checked:bg-[#0d0f12] checked:text-[#b8ff00]" aria-label="Today's Plan" defaultChecked />
                    <div className="tab-content hidden">Today's Plan</div>



                    <input type="radio" name="my_tabs_1" className="tab rounded-xl px-4 text-sm text-gray-400 checked:bg-[#0d0f12] checked:text-[#b8ff00]" aria-label="Saved" />
                    <div className="tab-content hidden">Saved</div>

                </div>


                <div>
                    <div className="mt-8 flex min-h-64 flex-col items-center justify-center rounded-2xl border border-dashed border-gray-800 bg-[#191c22] text-center">
                        <h2 className="text-lg font-bold uppercase">
                            Nothing Here Yet
                        </h2>

                        <p className="mt-2 text-gray-400">
                            Browse the library and add a lift to get today moving.
                        </p>

                        <Link
                            href="/workouts"
                            className="btn mt-6 rounded-xl border-none bg-[#b8ff00] text-black hover:bg-[#a9eb00]"
                        >
                            Go to workouts
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MyPlanPage;