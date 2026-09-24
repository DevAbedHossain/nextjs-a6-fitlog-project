export const getFitLogs = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await res.json();
    return data;
}

export const singleFitLog = async (id: string) => {
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`)
    const data = await res.json();
    return data;
}