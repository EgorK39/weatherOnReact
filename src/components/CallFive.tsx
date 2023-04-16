import * as React from "react";
import "../styles/CallFive.css";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import CallFiveTwo from "./CallFiveTwo";
import axios from "axios";


function CallFive() {
    const [cityName, setCityName] = React.useState('');
    const names = {
        "MSK": 'Москва',
        "SPB": 'Санкт-Петербург',
        "KLG": 'Калининград'
    }


    return (
        <>
            <div>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="secondary" onClick={() =>
                        setCityName(names.MSK)}>Москва</Button>
                    <Button variant="secondary" onClick={() =>
                        setCityName(names.SPB)}>Санкт-Петербург</Button>
                    <Button variant="secondary" onClick={() =>
                        setCityName(names.KLG)}>Калининград</Button>
                </ButtonGroup>
                <CallFiveTwo cityNameForCFT={cityName}/>
            </div>
        </>

    )
}


export default CallFive;
