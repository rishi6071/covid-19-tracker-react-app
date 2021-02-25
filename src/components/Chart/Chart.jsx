import React, { useEffect, useState, useContext } from 'react';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './Chart.css';
import { Container } from '@material-ui/core';
import { Line, Bar } from 'react-chartjs-2';
import { url, fetchCountryData } from '../../api/Api';
import { fetchData } from '../../api/Api';
import { CountryName } from '../Countrypicker/Countrypicker';

const Chart = () => {
    // Current Country
    const countryName = useContext(CountryName);

    // useState Object for [confirmed, recovered, deaths] Count & last update
    const [globalCount, setGlobalCount] = useState({});

    useEffect(() => {
        async function getGlobalData() {
            const getGlobalData = await fetchData(localStorage.getItem("countryName"));
            setGlobalCount(getGlobalData.data);
        }

        getGlobalData();
    });

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
                data: [globalCount.confirmed, globalCount.recovered, globalCount.deaths],
            }
        ]
    }

    return (
        <>
            <Container container className="lineChart_width">
                <Bar data={dataBarChart} options={{
                    legend: { display: false },
                    title: { display: true, text: `Current state in ${localStorage.getItem("countryName")}` },
                }} />

                <div className="my-5 py-1"></div>

                {/* <Line data={dataLineChart} /> */}
            </Container>
        </>
    );
}

export default Chart;