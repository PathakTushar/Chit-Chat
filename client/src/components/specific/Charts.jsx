import React from 'react'
import { Line, Doughnut } from "react-chartjs-2"
import { CategoryScale, Chart as ChartJS, Tooltip, Filler, LinearScale, PointElement, LineElement, ArcElement, Legend, plugins, scales } from "chart.js"
import { orange, orangeLight, purple, purpleLight } from '../../constants/color';
import { getLast7Days } from '../../lib/features';

ChartJS.register(CategoryScale, Tooltip, Filler, LinearScale, PointElement, LineElement, ArcElement, Legend)

const labels = getLast7Days()

const LineChartOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
    },
    scales: {
        x: {
            grid: {
                display: false,
            }
        },
        y: {
            beginAtZero: true,
            grid: {
                display: false,
            }
        },
    },
};

const LineChart = ({value = []}) => {
    const data = {
        labels,
        datasets: [
            {
                data: value,
                label: "Revenue2",
                fill: true,
                backgroundColor: purpleLight,
                borderColor: purple
            },
        ],
    }
    return (
        <Line data={data} options={LineChartOptions} />
    )
}

const DoughnutChartOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
    },
    cutout: 120,
    // scales: {
    //     x: {
    //         grid: {
    //             display: false,
    //         }
    //     },
    //     y: {
    //         beginAtZero: true,
    //         grid: {
    //             display: false,
    //         }
    //     },
    // },
};

const DoughnutChart = ({value = [], labels = []}) => {
    const data = {
        labels,
        datasets: [
            {
                data: value,
                backgroundColor: [purpleLight, orangeLight],
                borderColor: [purple, orange],
                hoverBackgroundColor: [purple, orange],
                offset: 30
            },
        ],
    }

    return (
        <Doughnut style={{zIndex: 10}} data={data} options={DoughnutChartOptions}/>
    )
}

export { LineChart, DoughnutChart }