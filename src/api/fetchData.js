import Axios from "axios"

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY='16f203bbe97b88f26e209268d9886b9a';

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