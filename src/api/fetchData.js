import Axios from "axios"

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = process.env.API_KEY;

export const fetchWeatherData = async (query) => {
    const { data } = await Axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY
        }
    });

    return data;
}
