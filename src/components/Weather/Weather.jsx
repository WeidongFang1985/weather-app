import './Weather.css';
import {useState} from "react";
import SearchCity from "./SearchCity/SearchCity";
import WeatherResult from "./WeatherResult/WeatherResult";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from "./Spinner/Spinner";


const Weather = () => {
    const [weather, setWeather] = useState();
    const [isLoading, setIsLoading] =useState(false);
    const getWeather = (data) => {
        setWeather(data);
    }

    return (
            <Card className="text-center">
                <Card.Header>
                    <h1>Weather App ✨</h1>
                </Card.Header>
                <Card.Body>
                    <SearchCity getWeather={getWeather} setLoading={setIsLoading}/>
                    {isLoading ? <Spinner/> : weather && <WeatherResult weatherData = {weather}/>}
                </Card.Body>
                <Card.Footer className="text-muted">
                    By Weidong
                </Card.Footer>
            </Card>
    );
};

export default Weather;
