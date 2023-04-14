import * as React from "react";
import Check from "./Check";
import "../styles/Weather.css";
import axios from "axios";

function Weather(props) {
    const [infoAboutWeather, setInfoAboutWeather] = React.useState([]);

    const https = `https://api.openweathermap.org/data/2.5/weather?lat=${props.lati}&lon=${props.longi}&appid=${process.env.REACT_APP_APIKEY}&units=metric&lang=ru`;
    axios.get(https).then(res => {
        setInfoAboutWeather(res.data);
        console.log(infoAboutWeather);
    });


    return (
        <>
            <p>Hello from Weather - {props.lati}{props.longi}</p>
            <h2>{infoAboutWeather}</h2>

        </>


    )
}

export default Weather;