import React from 'react';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle';

import './Cards.css';
import CountUp from 'react-countup';
import { Container, Grid, Paper, CardContent, Typography } from '@material-ui/core';

const Cards = () => {
    // Current Date & Day
    const today = () => {
        const date = new Date();
        return date.toDateString();
    }

    return (
        <>
            <Container className="grid_list">
                <Grid container spacing={5} justify="center">
                    <Grid item sm>
                        <Paper className="infected">
                            <CardContent className="cases_content">
                                <Typography gutterBottom>Infected</Typography>
                                <Typography variant="h5" component="h2">
                                    <CountUp start={0} end={111890818} duration={2.5} separator="," />
                                </Typography>
                                <Typography className="pt-2" color="textSecondary">{today()}</Typography>
                                <Typography variant="body2" component="p">Number of active cases of Covid-19.</Typography>
                            </CardContent>
                        </Paper>
                    </Grid>

                    <Grid item sm>
                        <Paper className="recovered">
                            <CardContent className="cases_content">
                                <Typography gutterBottom>Recovered</Typography>
                                <Typography variant="h5" component="h2">
                                    <CountUp start={0} end={111890818} duration={2.5} separator="," />
                                </Typography>
                                <Typography className="pt-2" color="textSecondary">{today()}</Typography>
                                <Typography variant="body2" component="p">Number of active cases of Covid-19.</Typography>
                            </CardContent>
                        </Paper>
                    </Grid>

                    <Grid item sm>
                        <Paper className="deaths">
                            <CardContent className="cases_content">
                                <Typography gutterBottom>Deaths</Typography>
                                <Typography variant="h5" component="h2">
                                    <CountUp start={0} end={111890818} duration={2.5} separator="," />
                                </Typography>
                                <Typography className="pt-2" color="textSecondary">{today()}</Typography>
                                <Typography variant="body2" component="p">Number of active cases of Covid-19.</Typography>
                            </CardContent>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default Cards;