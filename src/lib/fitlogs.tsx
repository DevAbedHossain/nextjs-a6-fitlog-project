export const getFitLogs = async () => {
    const res = await fetch("https://api.api-store.workers.dev/api/fitlog");
    if (!res.ok) {
        throw new Error("faild data fetch fitlog");
    }
    const data = await res.json();
    return data;
}

export const singleFitLog = async (id: string) => {
    const res = await fetch(`https://api.api-store.workers.dev/api/fitlog/${id}`)
    const data = await res.json();
    return data;
}
