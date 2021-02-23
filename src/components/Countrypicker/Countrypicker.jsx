import React from 'react';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle';

import './Countrypicker.css';
import { Container, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

const Countrypicker = () => {

    return (
        <>
            <Container className="d-flex justify-content-center pt-2">
                <FormControl justify="center" className="mt-4">
                    <InputLabel id="demo-simple-select-label">Choose a Country</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        className="country_select"
                    // value={}
                    // onChange={handleChange}
                    >
                        <MenuItem value={10}>Global</MenuItem>
                        <MenuItem value={20}>India</MenuItem>
                        <MenuItem value={30}>Australia</MenuItem>
                        <MenuItem value={40}>Austria</MenuItem>
                        <MenuItem value={50}>London</MenuItem>
                        <MenuItem value={60}>USA</MenuItem>
                        <MenuItem value={70}>Norway</MenuItem>
                        <MenuItem value={80}>Finland</MenuItem>
                        <MenuItem value={90}>England</MenuItem>
                        <MenuItem value={100}>Bhutan</MenuItem>
                    </Select>
                </FormControl>
            </Container>
        </>
    );
}

export default Countrypicker;