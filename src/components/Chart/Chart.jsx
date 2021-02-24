import React from 'react';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './Chart.css';
import { Container } from '@material-ui/core';
import { Line, Bar } from 'react-chartjs-2';

// Data of Line
const dataLineChart = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
        {
            label: "Infected",
            data: [33, 53, 85, 41, 44, 65],
            fill: true,
            backgroundColor: "rgba(0, 0, 255, 0.2)",
            borderColor: "rgba(0, 0, 255, 0.4)"
        },
        {
            label: "Deaths",
            data: [33, 25, 35, 51, 54, 76],
            fill: false,
            borderColor: "rgba(255, 0, 0, 0.5)"
        }
    ]
};

// Data of Bar
const dataBarChart = {
    labels: ["Infected", "Recovered", "Deaths"],
    datasets: [
        {
            label: "People",
            backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
            data: [2224, 333, 444],
        }
    ]
}

const Chart = () => {

    return (
        <>
            <Container container className="lineChart_width">
                <Bar data={dataBarChart} options={{
                    legend: { display: false },
                    title: { display: true, text: `Current state in ${"India"}` },
                }} />

                <div className="my-5 py-1"></div>

                {/* <Line data={dataLineChart} /> */}
            </Container>
        </>
    );
}

export default Chart;