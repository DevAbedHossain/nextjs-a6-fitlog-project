import TabItem from "@/components/myplanpage/TabItem";


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

                <TabItem />

            </div>
        </section>
    );
};

export default MyPlanPage;