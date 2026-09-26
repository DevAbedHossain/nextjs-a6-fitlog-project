const HomeSkeleton = () => {
    return (
        <main>
            {/* ================= Hero Section ================= */}
            <section className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">

                    {/* Hero Content */}
                    <div className="space-y-6">
                        <div className="skeleton h-12 w-full max-w-xl rounded-lg" />
                        <div className="skeleton h-12 w-4/5 max-w-lg rounded-lg" />

                        <div className="space-y-2">
                            <div className="skeleton h-4 w-full max-w-xl rounded" />
                            <div className="skeleton h-4 w-11/12 max-w-lg rounded" />
                            <div className="skeleton h-4 w-3/4 max-w-md rounded" />
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <div className="skeleton h-12 w-36 rounded-lg" />
                            <div className="skeleton h-12 w-32 rounded-lg" />
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="skeleton h-[300px] w-full rounded-2xl lg:h-[400px]" />
                </div>
            </section>


            {/* ================= Stats Section ================= */}
            <section className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

                    {[1, 2, 3, 4].map((item) => (
                        <div
                            key={item}
                            className="rounded-xl border border-base-300 p-6 text-center"
                        >
                            <div className="skeleton mx-auto mb-3 h-8 w-20 rounded" />
                            <div className="skeleton mx-auto h-4 w-24 rounded" />
                        </div>
                    ))}

                </div>
            </section>


            {/* ================= Section Heading ================= */}
            <section className="container mx-auto px-4 py-12">
                <div className="mx-auto mb-10 max-w-2xl space-y-3 text-center">
                    <div className="skeleton mx-auto h-8 w-64 rounded-lg" />
                    <div className="skeleton mx-auto h-4 w-full max-w-lg rounded" />
                    <div className="skeleton mx-auto h-4 w-3/4 max-w-md rounded" />
                </div>


                {/* ================= Exercise Cards ================= */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                        <div
                            key={item}
                            className="overflow-hidden rounded-2xl border border-base-300 bg-base-100"
                        >
                            {/* Image */}
                            <div className="skeleton h-52 w-full rounded-none" />

                            {/* Content */}
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
                                    <div className="skeleton h-6 w-16 rounded-full" />
                                    <div className="skeleton h-6 w-20 rounded-full" />
                                </div>

                                {/* Bottom */}
                                <div className="flex items-center justify-between pt-2">
                                    <div className="skeleton h-4 w-20 rounded" />
                                    <div className="skeleton h-9 w-24 rounded-lg" />
                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            </section>


            {/* ================= CTA Section ================= */}
            <section className="container mx-auto px-4 py-12">
                <div className="rounded-2xl border border-base-300 p-8 md:p-12">

                    <div className="mx-auto max-w-2xl space-y-5 text-center">
                        <div className="skeleton mx-auto h-9 w-72 rounded-lg" />

                        <div className="skeleton mx-auto h-4 w-full max-w-lg rounded" />
                        <div className="skeleton mx-auto h-4 w-4/5 max-w-md rounded" />

                        <div className="skeleton mx-auto h-12 w-36 rounded-lg" />
                    </div>

                </div>
            </section>
        </main>
    );
};

export default HomeSkeleton;
