const MyPlanSkeleton = () => {
    return (
        <main className="container mx-auto min-h-screen px-4 py-10">

            {/* Page Header */}
            <div className="mb-8 space-y-3">
                <div className="skeleton h-9 w-48 rounded-lg" />
                <div className="skeleton h-4 w-full max-w-xl rounded" />
            </div>


            {/* Tabs */}
            <div className="mb-8 flex gap-3">
                <div className="skeleton h-11 w-32 rounded-lg" />
                <div className="skeleton h-11 w-32 rounded-lg" />
            </div>


            {/* Section Header */}
            <div className="mb-6 flex items-center justify-between">
                <div className="skeleton h-7 w-40 rounded-lg" />
                <div className="skeleton h-9 w-24 rounded-lg" />
            </div>


            {/* Workout Cards */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div
                        key={item}
                        className="overflow-hidden rounded-2xl border border-base-300 bg-base-100"
                    >
                        {/* Image */}
                        <div className="skeleton h-48 w-full rounded-none" />

                        {/* Card Content */}
                        <div className="space-y-4 p-5">

                            {/* Title */}
                            <div className="skeleton h-6 w-4/5 rounded" />

                            {/* Description */}
                            <div className="space-y-2">
                                <div className="skeleton h-3 w-full rounded" />
                                <div className="skeleton h-3 w-11/12 rounded" />
                                <div className="skeleton h-3 w-3/4 rounded" />
                            </div>

                            {/* Tags */}
                            <div className="flex gap-2">
                                <div className="skeleton h-6 w-20 rounded-full" />
                                <div className="skeleton h-6 w-24 rounded-full" />
                            </div>

                            {/* Bottom Actions */}
                            <div className="flex items-center justify-between pt-2">
                                <div className="skeleton h-4 w-20 rounded" />
                                <div className="skeleton h-9 w-24 rounded-lg" />
                            </div>

                        </div>
                    </div>
                ))}

            </div>

        </main>
    );
};

export default MyPlanSkeleton;
