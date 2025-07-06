<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import type ApexChartsType from "apexcharts";

    let chartEl: HTMLDivElement;
    let chart: ApexChartsType | null = null;

    onMount(async () => {
        const ApexChartsModule = await import("apexcharts");
        const ApexCharts: typeof ApexChartsType = ApexChartsModule.default;

        const options: ApexChartsType.ApexOptions = {
            chart: {
                type: "area",
                height: 100,
                width: "100%",
                sparkline: { enabled: true }, 
            },
            series: [
                {
                    name: "Net",
                    data: [10, 30, 20, 40, 35],
                },
            ],
            colors: ["#22c55e"], 
            stroke: {
                curve: "smooth",
                width: 2,
                colors: ["#22c55e"],
            },
            fill: {
                type: "gradient",
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.6,
                    opacityTo: 0.1,
                    stops: [0, 90, 100],
                    colorStops: [
                        [
                            {
                                offset: 0,
                                color: "#22c55e",
                                opacity: 0.6
                            },
                            {
                                offset: 100,
                                color: "#22c55e",
                                opacity: 0.1
                            }
                        ]
                    ]
                },
            },
            tooltip: { enabled: false },
        };

        chart = new ApexCharts(chartEl, options);
        chart.render();
    });

    onDestroy(() => {
        if (chart) {
            chart.destroy();
            chart = null;
        }
    });
</script>

<div bind:this={chartEl}></div>
