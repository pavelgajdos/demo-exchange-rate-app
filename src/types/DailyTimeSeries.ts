import type DailyRateDictionary from "@/types/DailyRateDictionary";

export default interface DailyTimeSeries {
    from: Date,
    to: Date,
    baseCurrency: string,
    currency: string,
    rates: DailyRateDictionary
}