import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
    labels: ['USDT', 'NBST', 'EFT', 'WET'],
    datasets: [
        {
            data: [30, 50, 20], // Replace with your actual data values
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FFCE56'],
            hoverBackgroundColor: ['#FF477E', '#2C97F0', '#FFD740', '#FFD740'],
        },
    ],
};

const options = {
    maintainAspectRatio: false, // To prevent chart deformation
};

const DonutChart = () => {
    return (
        <div>
            <Doughnut data={data} options={options} />
        </div>
    );
};

export default DonutChart;