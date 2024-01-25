import httpClient from "@/services/http-common";
import type DailyTimeSeries from "@/types/DailyTimeSeries";

class ExchangeRateAPIService {
    async getDailyTimerSeries(currency: string): Promise<DailyTimeSeries> {
        const { data } = await httpClient.get<DailyTimeSeries>("/rates/timeseries/" + currency);
        return data;
    }
}

export default new ExchangeRateAPIService()