const workoutCards = Array.from({ length: 12 }, (_, index) => index);

function Skeleton({ className = "" }: { className?: string }) {
    return <div className={`skeleton motion-reduce:animate-none ${className}`} />;
}

export default function Loading() {
    return (
        <div data-theme="dark" className="min-h-screen bg-[#090909] text-white" aria-busy="true">
            <p className="sr-only" role="status">Loading workout library...</p>

            <div aria-hidden="true">
                <header className="h-12.75 border-b border-[#282a2d] bg-[#121315]">
                    <div className="mx-auto grid h-full w-full max-w-285 grid-cols-[1fr_auto] items-center px-4 md:grid-cols-[1fr_auto_1fr] xl:px-0">
                        <div className="flex items-center gap-2">
                            <Skeleton className="h-5 w-5 rounded bg-[#d2fc00]" />
                            <Skeleton className="h-3 w-14" />
                        </div>
                        <div className="hidden items-center gap-4 md:flex">
                            <Skeleton className="h-7 w-1705 rounded-full bg-[#333b1e]" />
                            <Skeleton className="h-3 w-12" />
                        </div>
                        <div className="flex items-center justify-self-end gap-2">
                            <Skeleton className="h-2.5 w-8" />
                            <Skeleton className="h-5 w-5 rounded-full" />
                            <Skeleton className="hidden h-2.5 w-8 sm:block" />
                            <Skeleton className="hidden h-5 w-5 rounded-full sm:block" />
                        </div>
                    </div>
                </header>

                <main className="mx-auto w-full max-w-285 px-4 xl:px-0">
                    <section className="mt-3.75 grid min-h-95 grid-cols-1 items-center gap-8 rounded-[13px] bg-[#1b1c20] p-6 sm:p-10 md:grid-cols-[minmax(0,1fr)_36%]">
                        <div className="w-full max-w-122.5">
                            <Skeleton className="mb-6 h-2.5 w-24 bg-[#a5c526]" />
                            <Skeleton className="mb-2 h-7 w-[95%] md:h-9.25" />
                            <Skeleton className="mb-5 h-7 w-[71%] md:h-9.25" />
                            <Skeleton className="mb-2 h-3 w-[81%]" />
                            <Skeleton className="h-3 w-[64%]" />
                            <Skeleton className="mt-5 h-10.5 w-44.75 rounded-sm bg-[#c6ee00]" />
                        </div>
                        <Skeleton className="mx-auto h-52.5 w-full max-w-69.5 rounded-[18px] md:h-72.5" />
                    </section>

                    <section className="mt-15.75">
                        <Skeleton className="mb-3 h-5.25 w-42.5" />
                        <Skeleton className="h-2.5 w-66.25 max-w-[85%]" />

                        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {workoutCards.map((card) => (
                                <article key={card} className="card overflow-hidden rounded-xl bg-[#1b1c20]">
                                    <Skeleton className="aspect-370/209 w-full rounded-none" />
                                    <div className="px-4.5 pb-4.75 pt-4.25">
                                        <div className="flex gap-1.5">
                                            <Skeleton className="h-5 w-12 rounded-full bg-[#c8f300]" />
                                            {card % 3 !== 2 && (
                                                <Skeleton className="h-5 w-11 rounded-full bg-[#c8f300]" />
                                            )}
                                        </div>
                                        <Skeleton className="mb-3 mt-3 h-3.25 w-[61%]" />
                                        <Skeleton className="mb-3 h-2.5 w-[39%]" />
                                        <div className="flex gap-4">
                                            <Skeleton className="h-2.5 w-12" />
                                            <Skeleton className="h-2.5 w-12" />
                                            <Skeleton className="h-2.5 w-9" />
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>
                </main>

                <footer className="mt-11 border-t border-[#242528]">
                    <div className="mx-auto flex min-h-12 w-full max-w-285 items-center justify-between gap-4 px-4 xl:px-0">
                        <Skeleton className="h-3 w-22.5" />
                        <Skeleton className="h-2.5 w-[min(260px,55%)]" />
                    </div>
                </footer>
            </div>
        </div>
    );
}
