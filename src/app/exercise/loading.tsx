const ExerciseDetailsSkeleton = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

                {/* Image Skeleton */}
                <div className="skeleton h-87.5 w-full rounded-2xl lg:h-125" />

                {/* Content */}
                <div className="space-y-6">

                    {/* Title */}
                    <div className="skeleton h-10 w-3/4 rounded-lg" />

                    {/* Description */}
                    <div className="space-y-2">
                        <div className="skeleton h-4 w-full rounded" />
                        <div className="skeleton h-4 w-11/12 rounded" />
                        <div className="skeleton h-4 w-4/5 rounded" />
                    </div>

                    {/* Category badges */}
                    <div className="flex gap-2">
                        <div className="skeleton h-7 w-20 rounded-full" />
                        <div className="skeleton h-7 w-24 rounded-full" />
                    </div>

                    {/* Exercise information */}
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">

                        <div className="rounded-xl border border-base-300 p-4">
                            <div className="skeleton mb-2 h-3 w-20 rounded" />
                            <div className="skeleton h-5 w-24 rounded" />
                        </div>

                        <div className="rounded-xl border border-base-300 p-4">
                            <div className="skeleton mb-2 h-3 w-20 rounded" />
                            <div className="skeleton h-5 w-24 rounded" />
                        </div>

                        <div className="rounded-xl border border-base-300 p-4">
                            <div className="skeleton mb-2 h-3 w-16 rounded" />
                            <div className="skeleton h-5 w-20 rounded" />
                        </div>

                        <div className="rounded-xl border border-base-300 p-4">
                            <div className="skeleton mb-2 h-3 w-16 rounded" />
                            <div className="skeleton h-5 w-20 rounded" />
                        </div>

                        <div className="rounded-xl border border-base-300 p-4">
                            <div className="skeleton mb-2 h-3 w-20 rounded" />
                            <div className="skeleton h-5 w-20 rounded" />
                        </div>

                        <div className="rounded-xl border border-base-300 p-4">
                            <div className="skeleton mb-2 h-3 w-16 rounded" />
                            <div className="skeleton h-5 w-16 rounded" />
                        </div>

                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-3">
                        <div className="skeleton h-5 w-16 rounded" />
                        <div className="skeleton h-5 w-20 rounded" />
                    </div>

                    {/* Instructions */}
                    <div className="space-y-3">
                        <div className="skeleton h-6 w-32 rounded" />

                        <div className="space-y-2">
                            <div className="skeleton h-4 w-full rounded" />
                            <div className="skeleton h-4 w-full rounded" />
                            <div className="skeleton h-4 w-11/12 rounded" />
                            <div className="skeleton h-4 w-4/5 rounded" />
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col gap-3 sm:flex-row">
                        <div className="skeleton h-12 w-full rounded-lg sm:w-48" />
                        <div className="skeleton h-12 w-full rounded-lg sm:w-40" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ExerciseDetailsSkeleton;