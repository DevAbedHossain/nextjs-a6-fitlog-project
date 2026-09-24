import { getFitLogs } from "@/lib/fitlogs";
import { IFitLog } from "@/types/FitType";
import FitLogCard from "../shared/FitLogCard";


const Library = async () => {

    const fitlogs = await getFitLogs();

    return (
        <section className="bg-black">
            <div className="container mx-auto py-15">
                <h2 className="text-3xl font-bold mb-2">THE LIBRARY</h2>
                <p className="text-[16px] text-[#9CA3AF]">Twelve lifts covering every major muscle group.</p>

                <div className="grid grid-cols-3 gap-5">
                    {
                        fitlogs.map((fitlog: IFitLog) => <FitLogCard key={fitlog.id} fitlog={fitlog} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Library;