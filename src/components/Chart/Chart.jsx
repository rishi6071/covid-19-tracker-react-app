import React, { useEffect, useState } from 'react';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './Chart.css';
import { Container } from '@material-ui/core';
import { Bar } from 'react-chartjs-2';
import { fetchData } from '../../api/Api';
// import { CountryName } from '../Countrypicker/Countrypicker';
import Loader from '../Loader/Loader';

const Chart = () => {
    // Loading Confirmation
    const [loadConfirmation, setLoadConfirmation] = useState(false);

    // useState Object for [confirmed, recovered, deaths] Count & last update
    const [covidCount, setCovidCount] = useState({});

    // useState dailyData Object
    // const [dailyData, setDailyData] = useState([]);

    // useEffect for Bar
    useEffect(() => {
        async function getCovidData() {
            const getCovidData = await fetchData(localStorage.getItem("countryName"));
            setLoadConfirmation(true);
            setCovidCount(getCovidData.data);
        }

        getCovidData();
    });

    // useEffect for Line
    // useEffect(() => {
    //     async function getDailyCovidData() {
    //         const dailyData = await fetchDailyData();
    //         setDailyData(dailyData);
    //     }

    //     getDailyCovidData();
    // });

    // Data of Line
    // const dataLineChart = {
    //     labels: dailyData.map((dateData) => dateData.reportDate),
    //     datasets: [
    //         {
    //             label: "Infected",
    //             data: dailyData.map((dateData) => dateData.confirmed.total),
    //             fill: true,
    //             backgroundColor: "rgba(0, 0, 255, 0.2)",
    //             borderColor: "rgba(0, 0, 255, 0.2)"
    //         },
    //         {
    //             label: "Deaths",
    //             data: dailyData.map((dateData) => dateData.deaths.total),
    //             fill: false,
    //             borderColor: "rgba(255, 0, 0, 0.4)"
    //         }
    //     ]
    // };

    // Data of Bar
    const dataBarChart = {
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
            {
                label: "People",
                backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                data: [covidCount.confirmed, covidCount.recovered, covidCount.deaths],
            }
        ]
    }

    // Checking load confirmation otherwise Loader will be shown
    if(!loadConfirmation) {
        return <Loader colorClass="danger" />;
    }

    return (
        <>
            <Container container className="lineChart_width">
                <Bar data={dataBarChart} options={{
                    legend: { display: false },
                    title: { display: true, text: `Current state in ${localStorage.getItem("countryName")}` },
                }} />

                <div className="my-4 py-1"></div>

                {/* <Line data={dataLineChart} /> */}
            </Container>
        </>
    );
}

export default Chart;