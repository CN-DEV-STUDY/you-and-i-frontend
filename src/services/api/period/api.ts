import axios from "@/services/api/AxiosInstance.tsx";

export const savePeriodRequest = async (startedAt: string) => {
    const { data } = await axios.post(`/period?startedAt=${startedAt}`);
    return data;
};

export const getPeriod = async () => {
    const { data } = await axios.get("/period");
    return data;
};
