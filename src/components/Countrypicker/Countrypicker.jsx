import React, { useEffect, useState, createContext } from 'react';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './Countrypicker.css';
import { Container, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { url, fetchCountries } from '../../api/Api';
import Loader from '../Loader/Loader';

// Creating Context for Country to export whereever we want
// It's not using Just for Concept {used localStorage as an Alternative}
const CountryName = createContext();

const Countrypicker = () => {
    // Loading Confirmation
    const [loadConfirmation, setLoadConfirmation] = useState(false);

    // Countries List [useState Array for Countries Name List]
    const [countries, setCountries] = useState([]);

    // Current Country
    const [country, setCountry] = useState("Global");
    localStorage.setItem('countryName', country);

    useEffect(() => {
        async function getCountries() {
            const countryList = await fetchCountries();
            setLoadConfirmation(true);
              setCountries(countryList.countries);
        }

        getCountries();
    });

    // Checking Loading Confirmation otherwise Loader will be shown
    if(!loadConfirmation) {
        return <Loader colorClass="warning" />;
    }
    
    return (
        <>
            <CountryName.Provider value={country}>
                <Container className="d-flex justify-content-center pt-2 mb-5">
                    <FormControl justify="center" className="mt-5">
                        <label for="demo-simple-select" className="country_label">Choose a Country*</label>
                        <select
                            id="demo-simple-select"
                            className="country_select custom-select"
                            value={country}
                            onChange={(event) => {
                                setCountry(event.target.value);
                                localStorage.setItem('countryName', event.target.value);
                            }}
                        >
                            <option value={"Global"}>Global</option>
                            {
                                countries.map((country, index, list) => {
                                    return (
                                        <option key={index} value={country.name}>{country.name}</option>
                                    );
                                })
                            }
                        </select>
                    </FormControl>
                </Container>
            </CountryName.Provider>
        </>
    );
}

export default Countrypicker;
export { CountryName };