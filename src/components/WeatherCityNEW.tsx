import * as React from "react";
import "../styles/WeatherCityNEW.css";
import axios from "axios";

function WeatherCityNEW(props) {
    const [mainTemp, setMainTemp] = React.useState(0);
    const [weatherDescription, setWeatherDescription] = React.useState('');
    const [coords, setCoords] = React.useState({});

    function weatherCityFunc() {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${props.nameCity}&appid=${process.env.REACT_APP_APIKEY}&units=metric&lang=ru`).then(res => {
                console.log(res)
                setMainTemp(res.data.main.temp);
                setWeatherDescription(res.data.weather.map(item =>
                    item.description));
                setCoords(res.data.coords);
            }
        );
    }

    return (
        <React.Fragment>
            <h1>{props.nameCity}</h1>
            <button onClick={weatherCityFunc}>CITY</button>

            {
                mainTemp && weatherDescription ?
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                {mainTemp}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {weatherDescription}
                            </td>
                        </tr>

                        </tbody>

                    </table>
                    :
                    ''

            }

        </React.Fragment>

    )
}

export default WeatherCityNEW;