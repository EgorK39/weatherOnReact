import * as React from "react";
import "../styles/WeatherCity.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import WeatherCityNEW from "./WeatherCityNEW";


function WeatherCity() {
    const [cityName, setCityName] = React.useState('');
    const names = {
        "MSK": 'Москва',
        "SPB": 'Санкт-Петербург',
        "KLG": 'Калининград'
    }

    function changeCityName(nameFromReturn) {
        setCityName(nameFromReturn)
        console.log(cityName, 'cityName from changeCityName');
    }


    return (
        <>
            <div className={'div'}>
                <DropdownButton id="dropdown-basic-button" title="Название города">
                    <Dropdown.Item onClick={() => changeCityName(names.MSK)}
                                   href="#/action-1">Москва</Dropdown.Item>
                    <Dropdown.Item onClick={() => changeCityName(names.SPB)}
                                   href="#/action-2">Санкт-Петербург</Dropdown.Item>
                    <Dropdown.Item onClick={() => changeCityName(names.KLG)}
                                   href="#/action-3">Калининград</Dropdown.Item>
                </DropdownButton>
                <WeatherCityNEW nameCity={cityName}/>
            </div>
        </>
    )
}

export default WeatherCity;