<script setup lang="ts">
</script>

<template>

    <div class="wrapper">
        <Line v-if="loaded" :data="chartData" :options="chartOptions"/>
        <p v-if="!loaded && !error" class="loading"><i>Loading data...</i></p>
        <p v-if="!loaded && error" class="error"><b>Error loading data!</b><br>Please try again later.</p>
    </div>

</template>

<style scoped>


@media (min-width: 1024px) {
    .wrapper {
        min-height: 70vh;
        display: flex;
        align-items: center;
    }
}

.loading {
    width: 100%;
    text-align: center;
    color: #aaa;
}

.error {
    width: 100%;
    text-align: center;
    color: red;
}
.error b {
    font-weight: bold;
    font-size: larger;
}
</style>

<script lang="ts">
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import {Line} from 'vue-chartjs'
import ExchangeRateAPIService from "@/services/ExchangeRateAPIService"
import type DailyTimeSeries from "@/types/DailyTimeSeries";
import {LineChartDataset} from "@/types/LineChartDataset";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

export default {
    name: 'LineChart',
    components: {Line},
    data() {
        return {
            loaded: false,
            error: false,
            chartData: {
                labels: [],
                datasets: []
            },
            chartOptions: {
                responsive: true
            }
        }
    },
    methods: {
        retrieveRates() {
            ExchangeRateAPIService.getDailyTimerSeries("CZK")
                .then((response) => {

                    const dataset = transformData(response);


                    this.chartData.labels = dataset.labels;
                    this.chartData.datasets = [
                        {
                            label: 'Exchange rate CZK/EUR',
                            backgroundColor: '#018b13',
                            data: dataset.values
                        }
                    ]

                    this.error = false
                    this.loaded = true
                })
                .catch((e: Error) => {
                    this.error = true;
                    this.loaded = false;
                    console.log(e);
                });
        }
    },
    mounted() {
        this.retrieveRates();
    }
}

const transformData = (data: DailyTimeSeries): LineChartDataset => {
    let labels: string[] = []
    let values: Number[] = []
    for (const dateString in data.rates) {
        const rate = data.rates[dateString];
        labels.push(dateString)
        values.push(rate)
    }
    return new LineChartDataset(labels.reverse(), values.reverse());
};

</script>
