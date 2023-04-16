import * as React from "react";
import Check from "./Check";
import "../styles/Weather.css";
import axios, {all} from "axios";

function Weather(props) {

    const [resDataWeathrMap, setDataWeatherMap] = React.useState('');
    const [resDataMainTemp, setDataMainTemp] = React.useState(0);


    function btnClick() {

        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${props.lati}&lon=${props.longi}&appid=${process.env.REACT_APP_APIKEY}&units=metric&lang=ru`).then(res => {
            console.log(res, 'res');
            console.log(res.data, 'res.data');
            console.log(res.data.weather, 'res.data.weather');
            console.log(res.data.weather.map(item => item.description), 'res.data.weather.map');
            console.log(res.data.main.temp, 'res.data.main.temp');

            setDataWeatherMap(res.data.weather.map(item => item.description));
            setDataMainTemp(res.data.main.temp);

        });

    }

    // {JSON.stringify(infoAboutWeather)}
    // function btnClick() {
    //     axios.get('https://dbd7633a-aa26-47f0-81a0-e0707d050f2f.mock.pstmn.io/weather').then(res => {
    //         console.log(res, 'res');
    //         console.log(res.data, 'res.data');
    //         console.log(res.data.weather, 'res.data.weather');
    //         console.log(res.data.weather.map(item => item.description), 'res.data.weather.map');
    //
    //
    //         setInfoAboutWeather(res.data);
    //     });
    // }


    return (
        <>
            <p>Определение погоды по Вашей геолокации
                - {props.lati}{props.longi}</p>
            <div>
                <button onClick={btnClick}>CLICK</button>
            </div>


            <table>
                <thead>
                <tr>
                    <th>ПОГОДА</th>
                </tr>
                </thead>
                {resDataWeathrMap && resDataMainTemp ? <tbody>
                {resDataWeathrMap ? <tr>
                    <td>
                        <h2>{resDataWeathrMap}</h2>
                    </td>
                </tr> : 'данных нет'}
                {resDataMainTemp ? <tr>
                    <td>
                        <h2>{resDataMainTemp}</h2>
                    </td>
                </tr> : 'данных нет'}

                </tbody> : ''}

            </table>


        </>


    )
}

export default Weather;