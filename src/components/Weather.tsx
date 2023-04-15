import * as React from "react";
import Check from "./Check";
import "../styles/Weather.css";
import axios, {all} from "axios";

function Weather(props) {

    const [infoAboutWeather, setInfoAboutWeather] = React.useState([]);

    if (!infoAboutWeather.length) {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${props.lati}&lon=${props.longi}&appid=${process.env.REACT_APP_APIKEY}&units=metric&lang=ru`).then(res => {
            setInfoAboutWeather(res.data);
        });
    }
    // if (!infoAboutWeather.length) {
    //     axios.get('https://dbd7633a-aa26-47f0-81a0-e0707d050f2f.mock.pstmn.io/weather').then(res => {
    //         setInfoAboutWeather(res.data);
    //     });
    // }

    return (
        <>
            <p>Hello from Weather - {props.lati}{props.longi}</p>
            {JSON.stringify(infoAboutWeather)}



        </>


    )
}

export default Weather;