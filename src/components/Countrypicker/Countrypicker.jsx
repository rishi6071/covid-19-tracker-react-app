import React, { useEffect, useState } from 'react';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './Countrypicker.css';
import { Container, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { url, fetchCountries } from '../../api/Api';

const Countrypicker = () => {
    // Countries List [useState Array for Countries Name List]
    const [countries, setCountries] = useState([]);

    // Current Country
    const [country, setCountry] = useState("global");

    useEffect(() => {
        async function getCountries() {
            const countryList = await fetchCountries();
            setCountries(countryList.countries);
        }

        getCountries();
    });
   
    return (
        <>
            <Container className="d-flex justify-content-center pt-2 mb-5">
                <FormControl justify="center" className="mt-4">
                    <InputLabel id="demo-simple-select-label">Choose a Country</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        className="country_select"
                        value={country}
                        onChange={(event) => {
                            setCountry(event.target.value);
                        }}
                    >
                        <MenuItem value={"global"}>Global</MenuItem>
                        {
                            countries.map((country, index, list) => {
                                return (
                                    <MenuItem value={country.iso3}>{country.name}</MenuItem>
                                );
                            })
                        }
                    </Select>
                </FormControl>
            </Container>
        </>
    );
}

export default Countrypicker;