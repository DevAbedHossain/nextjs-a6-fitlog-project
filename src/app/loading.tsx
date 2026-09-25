const workoutCards = Array.from({ length: 12 }, (_, index) => index);

function Skeleton({ className = "" }: { className?: string }) {
    return <div className={`skeleton motion-reduce:animate-none ${className}`} />;
}

export default function Loading() {
    return (
        <div data-theme="dark" className="min-h-screen bg-[#090909] text-white" aria-busy="true">
            <p className="sr-only" role="status">Loading workout library...</p>

            <div aria-hidden="true">
                <header className="h-[51px] border-b border-[#282a2d] bg-[#121315]">
                    <div className="mx-auto grid h-full w-full max-w-[1140px] grid-cols-[1fr_auto] items-center px-4 md:grid-cols-[1fr_auto_1fr] xl:px-0">
                        <div className="flex items-center gap-2">
                            <Skeleton className="h-5 w-5 rounded bg-[#d2fc00]" />
                            <Skeleton className="h-3 w-14" />
                        </div>
                        <div className="hidden items-center gap-4 md:flex">
                            <Skeleton className="h-7 w-[70px] rounded-full bg-[#333b1e]" />
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

                <main className="mx-auto w-full max-w-[1140px] px-4 xl:px-0">
                    <section className="mt-[15px] grid min-h-[380px] grid-cols-1 items-center gap-8 rounded-[13px] bg-[#1b1c20] p-6 sm:p-10 md:grid-cols-[minmax(0,1fr)_36%]">
                        <div className="w-full max-w-[490px]">
                            <Skeleton className="mb-6 h-2.5 w-24 bg-[#a5c526]" />
                            <Skeleton className="mb-2 h-7 w-[95%] md:h-[37px]" />
                            <Skeleton className="mb-5 h-7 w-[71%] md:h-[37px]" />
                            <Skeleton className="mb-2 h-3 w-[81%]" />
                            <Skeleton className="h-3 w-[64%]" />
                            <Skeleton className="mt-5 h-[42px] w-[179px] rounded-sm bg-[#c6ee00]" />
                        </div>
                        <Skeleton className="mx-auto h-[210px] w-full max-w-[278px] rounded-[18px] md:h-[290px]" />
                    </section>

                    <section className="mt-[63px]">
                        <Skeleton className="mb-3 h-[21px] w-[170px]" />
                        <Skeleton className="h-2.5 w-[265px] max-w-[85%]" />

                        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {workoutCards.map((card) => (
                                <article key={card} className="card overflow-hidden rounded-xl bg-[#1b1c20]">
                                    <Skeleton className="aspect-[370/209] w-full rounded-none" />
                                    <div className="px-[18px] pb-[19px] pt-[17px]">
                                        <div className="flex gap-1.5">
                                            <Skeleton className="h-5 w-12 rounded-full bg-[#c8f300]" />
                                            {card % 3 !== 2 && (
                                                <Skeleton className="h-5 w-11 rounded-full bg-[#c8f300]" />
                                            )}
                                        </div>
                                        <Skeleton className="mb-3 mt-3 h-[13px] w-[61%]" />
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
                    <div className="mx-auto flex min-h-12 w-full max-w-[1140px] items-center justify-between gap-4 px-4 xl:px-0">
                        <Skeleton className="h-3 w-[90px]" />
                        <Skeleton className="h-2.5 w-[min(260px,55%)]" />
                    </div>
                </footer>
            </div>
        </div>
    );
}
