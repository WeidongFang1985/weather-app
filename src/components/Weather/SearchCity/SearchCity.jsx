import './SearchCity.css';
import {useState} from "react";
import {fetchWeatherByCity} from "../../../services/weatherService";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const SearchCity = (props) => {
    const [city, setCity] = useState('');

    const onCityInputChangeHandle = (event) => {
        const value = event.target.value;
        setCity(value);
    }

    const onSearchCityHandler = async (event) => {
        event.preventDefault();
        if(!city) {

            return;
        }

        try {
            props.setLoading(true);
            const weatherData = await fetchWeatherByCity(city);
            props.getWeather(weatherData);
        } catch (e) {
            console.log('Failed to fetch city weather due to error', e);
        } finally {
            props.setLoading(false);
        }







        // const response = fetch(url);
        // console.log(response);
        // fetch(url)
        //     .then(res => res.json())
        //     .then(value => console.log(value));
    }

    return (
        <>
            <Form onSubmit={onSearchCityHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Search a city" value={city} onChange={onCityInputChangeHandle}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Show air quality data" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Search
                </Button>
            </Form>
        </>

    );
};

export default SearchCity;
