import Link from "next/link";

const NotFound = () => {
    return (
        <main className="min-h-[calc(100vh-80px)] bg-[#0d0f12] px-4 text-white">
            <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-5xl items-center justify-center">

                <div className="w-full max-w-2xl text-center">
                    <h1 className="text-8xl font-black tracking-tight text-[#b8ff00] sm:text-9xl">404</h1>
                    <h2 className="mt-4 text-2xl font-bold sm:text-3xl">Workout Not Found</h2>
                    <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-gray-400 sm:text-base">Looks like this workout took a rest day. The page you're looking for doesn't exist or may have been moved.</p>

                    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                        <Link href="/" className="btn rounded-xl border-none bg-[#b8ff00] px-6 text-black hover:bg-[#a9eb00]">Back to Home</Link>
                        <Link href="/#library" className="btn rounded-xl border border-gray-700 bg-[#191c22] px-6 text-white hover:border-[#b8ff00] hover:bg-[#191c22]">Browse Workouts</Link>
                    </div>

                </div>
            </div>
        </main>
    );
};

export default NotFound;