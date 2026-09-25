import TabItem from "@/components/myplanpage/TabItem";
import TodayPlanCount from "@/components/myplanpage/WorkOutCount";


const MyPlanPage = () => {

    return (
        <section className="bg-black">
            <div className="container mx-auto py-15 space-y-2">
                <h2 className="text-3xl font-bold uppercase ">My Plan</h2>
                <p className="text-[16px] text-[#8A92A0]">Cap of five lifts for today. Finish them, then load more.</p>
                <TodayPlanCount />
                <TabItem />

            </div>
        </section>
    );
};

export default MyPlanPage;