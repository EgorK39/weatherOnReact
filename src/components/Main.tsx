import * as React from "react";
import Check from "./Check";
import CallFive from "./CallFive";
import "../styles/Main.css";

class Main extends React.Component<any, any> {
    render() {
        return (
            <main>

                <Check/>
                <CallFive/>

            </main>
        )

    }
}

export default Main;