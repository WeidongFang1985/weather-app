import './WeatherResult.css';

const WeatherResult = async (props) => {
    const city_region = await props.weatherData.location.name +", " + props.weatherData.location.region;
    const localTime = await props.weatherData.location.localtime;
    const imageUrl = await props.weatherData.current.condition.icon;
    return (
        <div>
            <p>{city_region}</p>
            <p>{localTime}</p>
            <p>{imageUrl}</p>
            {/*<p>{JSON.stringify(props.weatherData)}</p>*/}
        </div>
    );
};

export default WeatherResult;
