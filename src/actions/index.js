import axios from 'axios';

const API_KEY = '863bba00ab409cf782ca24877ebe7b0e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER =  'FETCH_WEATHER'

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city}.fr`;
    const req = axios.get(url); //promise

    return {
        type: FETCH_WEATHER,
        payload: req
    }
}