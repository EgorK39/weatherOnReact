import * as React from "react";
import Map from "./Map";
import Weather from "./Weather";
import WeatherCity from "./WeatherCity";
import "../styles/Check.css";
import WeatherCityNEW from "./WeatherCityNEW";

function Check() {
    let [status, setStatus] = React.useState('');
    let [latitud, setLatitude] = React.useState(0);
    let [longitud, setLongitude] = React.useState(0);


    const success = function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setStatus(status = `Ваше текущее местоположение. 
        Широта: ${latitude}, Долгота: ${longitude}`);
        setLatitude(latitud = latitude);
        setLongitude(longitud = longitude);


    }
    const error = () => {
        setStatus(status = 'Включите geolocation в Вашем браузере для ' +
            'определения Вашего местоположения')
    };
    addEventListener('load', () => {
        if (!navigator.geolocation) {
            setStatus(status = "geolocation Вашим браузером не поддерживается");
        } else {
            setStatus(status = "Определяет");
            navigator.geolocation.getCurrentPosition(
                success, error
            );
        }
    });

    return (
        <>
            <h1>{status}</h1>
            <WeatherCity/>
            <Map latitud={latitud} longitud={longitud}/>
            {latitud && longitud ? <Weather lati={latitud} longi={longitud}/> :
                ''}

        </>

    )
}

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
export default Check;
