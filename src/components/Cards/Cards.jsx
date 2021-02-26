import React, { useContext, useEffect, useState } from 'react';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './Cards.css';
import CountUp from 'react-countup';
import { Container, Grid, Paper, CardContent, Typography } from '@material-ui/core';
import { url, fetchData } from '../../api/Api';
import Countrypicker, { CountryName } from '../Countrypicker/Countrypicker';
import Loader from '../Loader/Loader';

const Cards = () => {
    // Loading Confirmation
    const [loadConfirmation, setLoadConfirmation] = useState(false);

    // Current Country
    const countryName = useContext(CountryName);

    // useState for [confirmed, recovered, deaths] & lastUpdate
    const [covidData, setCovidData] = useState({
        confirmed: 0,
        recovered: 0,
        deaths: 0,
        lastUpdate: ""
    });

    useEffect(() => {
        async function getCount() {
            const covidData = await fetchData(localStorage.getItem("countryName"));
            setLoadConfirmation(true);
            setCovidData(covidData.data);
        }

        getCount();
    });

    // Last Updated Data's Date & Day
    const lastUpdated = () => {
        const date = new Date(covidData.lastUpdate.substr(0, 10));
        return date.toDateString();
    }

    // Checking Confirmation otherwise Loader will be shown
    if (!loadConfirmation) {
        return <Loader colorClass="info" />;
    }

    return (
        <>
            <Container>
                <Grid container spacing={5} justify="center">
                    <Grid item xs={10} md={3}>
                        <Paper className="infected">
                            <CardContent className="cases_content">
                                <Typography gutterBottom>Infected</Typography>
                                <Typography variant="h5" component="h2">
                                    <CountUp start={0} end={covidData.confirmed} duration={2} separator="," useEasing={true} />
                                </Typography>
                                <Typography color="textSecondary">{lastUpdated()}</Typography>
                                <Typography className="pt-1" variant="body2" component="p">Number of Active cases of Covid-19.</Typography>
                            </CardContent>
                        </Paper>
                    </Grid>

                    <Grid item xs={10} md={3}>
                        <Paper className="recovered">
                            <CardContent className="cases_content">
                                <Typography gutterBottom>Recovered</Typography>
                                <Typography variant="h5" component="h2">
                                    <CountUp start={0} end={covidData.recovered} duration={2} separator="," useEasing={true} />
                                </Typography>
                                <Typography color="textSecondary">{lastUpdated()}</Typography>
                                <Typography className="pt-1" variant="body2" component="p">Number of Recovered cases from Covid-19.</Typography>
                            </CardContent>
                        </Paper>
                    </Grid>

                    <Grid item xs={10} md={3}>
                        <Paper className="deaths">
                            <CardContent className="cases_content">
                                <Typography gutterBottom>Deaths</Typography>
                                <Typography variant="h5" component="h2">
                                    <CountUp start={0} end={covidData.deaths} duration={2} separator="," useEasing={true} />
                                </Typography>
                                <Typography color="textSecondary">{lastUpdated()}</Typography>
                                <Typography className="pt-1" variant="body2" component="p">Number of Deaths due to Covid-19.</Typography>
                            </CardContent>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default Cards;