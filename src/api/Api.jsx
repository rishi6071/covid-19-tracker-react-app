import axios from "axios";

const url = `https://covid19.mathdro.id/api/`;

// Fetching [infected, recovered, deaths] Count for Cards
async function fetchData(country = "Global") {
  let covidData;

  try {
    if (country === "Global") {
      covidData = await axios.get(url);
    } else {
      covidData = await axios.get(`${url}countries/${country}`);
    }

    return {
      data: {
        confirmed: covidData.data.confirmed.value,
        recovered: covidData.data.recovered.value,
        deaths: covidData.data.deaths.value,
        lastUpdate: covidData.data.lastUpdate,
      },
    };
  } catch (error) {
    console.log(error);
  }
}

// Fetching Countries Names for CountryPicker
async function fetchCountries() {
  try {
    const countryList = await axios.get(`${url}countries/`);
    return countryList.data;
  } catch (error) {
    console.log(error);
  }
}

// Fetching Daily Data
// async function fetchDailyData() {
//   try {
//     const dailyData = await axios.get(`${url}daily`);
//     return dailyData.data;
//   } catch (error) {
//     console.log(error);
//   }
// }

export default fetchData;
export { url, fetchCountries, fetchData};
