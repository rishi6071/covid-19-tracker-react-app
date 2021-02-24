import React from 'react';
import axios from 'axios';

const url = `https://covid19.mathdro.id/api/`;

// Fetching [infected, recovered, deaths] Count
async function fetchData() {
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

// Fetching Countries Names
async function fetchCountries() {
    const countryList = await axios.get(`${url}countries`);

    return countryList.data;
}

// Fetching Particular Country Data
async function fetchCountryData() {
}

export default fetchData;
export { url, fetchCountries, fetchData };