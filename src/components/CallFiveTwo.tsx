import * as React from "react";
import "../styles/CallFiveTwo.css";
import axios from "axios";

function CallFiveTwo(props) {
    const day = new Date().getDay();
    const days = {
        0: "воскресенье",
        1: "понедельник",
        2: "вторник",
        3: "среда",
        4: "четверг",
        5: "пятница",
        6: "суббота"
    }
    console.log(day);
    console.log(typeof day);
    console.log(days[6]);
    console.log(days[day]);
    let [dateList, setDataList] = React.useState([]);

    function eventForRendering() {
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${props.cityNameForCFT}&appid=${process.env.REACT_APP_APIKEY}&units=metric&lang=ru0`).then(res => {
            console.log(res.data.list)
            setDataList(res.data.list)
        });
    }


    return (
        <>
            <h1>{props.cityNameForCFT}</h1>
            <div>
                <button onMouseDown={eventForRendering}>CLICK ME</button>

            </div>
            {dateList ?
                <table>
                    <tbody>
                    {dateList.map((city, index) =>
                        <tr key={city.dt}>
                            <td>{city.main.temp} °C</td>

                        </tr>
                    )}

                    </tbody>
                </table> : ''
            }
        </>
    )
}

export default CallFiveTwo;