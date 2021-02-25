import React from 'react';
import axios from 'axios';

const url = `https://covid19.mathdro.id/api/`;

// Fetching [infected, recovered, deaths] Count for Cards
async function fetchData(country = 'Global') {
    if (country == 'Global') {
        try {
            const covidData = await axios.get(url);

            return {
                data: {
                    confirmed: covidData.data.confirmed.value,
                    recovered: covidData.data.recovered.value,
                    deaths: covidData.data.deaths.value,
                    lastUpdate: covidData.data.lastUpdate
                }
            };
        }
        catch (error) {
            return error;
        }
    }
    else {
        const covidData = await axios.get(`${url}countries/${country}`);

        return {
            data: {
                confirmed: covidData.data.confirmed.value,
                recovered: covidData.data.recovered.value,
                deaths: covidData.data.deaths.value,
                lastUpdate: covidData.data.lastUpdate
            }
        };
    }
}

// Fetching Countries Names for CountryPicker
async function fetchCountries() {
    try {
        const countryList = await axios.get(`${url}countries/`);
        return countryList.data;
    }
    catch (error) {
        return error;
    }
}

export default fetchData;
export { url, fetchCountries, fetchData };