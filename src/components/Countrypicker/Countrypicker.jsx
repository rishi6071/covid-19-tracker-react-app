import React, { useEffect, useState, createContext } from 'react';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './Countrypicker.css';
import { Container, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { url, fetchCountries } from '../../api/Api';

// Creating Context for Country to export whereever we want
// It's not using Just for Concept {used localStorage as an Alternative}
const CountryName = createContext();

const Countrypicker = () => {
    // Countries List [useState Array for Countries Name List]
    const [countries, setCountries] = useState([]);

    // Current Country
    const [country, setCountry] = useState("Global");
    localStorage.setItem('countryName', country);

    useEffect(() => {
        async function getCountries() {
            const countryList = await fetchCountries();
            setCountries(countryList.countries);
        }

        getCountries();
    });

    return (
        <>
            <CountryName.Provider value={country}>
                <Container className="d-flex justify-content-center pt-2 mb-5">
                    <FormControl justify="center" className="mt-5">
                        <InputLabel id="demo-simple-select-label">Choose a Country</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            className="country_select"
                            value={country}
                            onChange={(event) => {
                                setCountry(event.target.value);
                                localStorage.setItem('countryName', event.target.value);
                            }}
                        >
                            <MenuItem value={"Global"}>Global</MenuItem>
                            {
                                countries.map((country, index, list) => {
                                    return (
                                        <MenuItem key={index} value={country.name}>{country.name}</MenuItem>
                                    );
                                })
                            }
                        </Select>
                    </FormControl>
                </Container>
            </CountryName.Provider>
        </>
    );
}

export default Countrypicker;
export { CountryName };