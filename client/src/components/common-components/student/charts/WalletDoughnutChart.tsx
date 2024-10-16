// DoughnutChart.tsx
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    ChartData,
    ChartOptions,
} from 'chart.js';

// Register required elements in Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const WalletDoughnutChart: React.FC = () => {
    // TypeScript type for ChartData
    const data: ChartData<'doughnut'> = {
        labels: ['Total Wallet Amount', 'Used Amount', 'Remaining Amount'],
        datasets: [
            {
                label: 'Course Progress',
                data: [65, 25, 10], // Values for each category
                backgroundColor: [
                    'rgba(75, 192, 192, 0.6)', // Completed (light green)
                    'rgba(255, 206, 86, 0.6)',  // Ongoing (yellow)
                    'rgba(255, 99, 132, 0.6)',  // Not Started (red)
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    // TypeScript type for ChartOptions
    const options: ChartOptions<'doughnut'> = {
        responsive: true,
        plugins: {
            legend: {
                position: 'right', // Legend position
            },
            tooltip: {
                enabled: true, // Enable tooltips on hover
            },
        },
    };

    return (
            <Doughnut data={data} options={options} />    
    );
};

export default WalletDoughnutChart;