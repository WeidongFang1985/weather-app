const API_KEY = '205f8e27cca14e91b62222359232901';
const FETCH_CITY_URL = "https://api.weatherapi.com/v1/current.json";


export const fetchWeatherByCity = async (city) => {
    const url = new URL(FETCH_CITY_URL);
    url.searchParams.append("key",API_KEY);
    url.searchParams.append("q",city);
    url.searchParams.append("api",'no');

    const response = await fetch(url);
    return await response.json()
}