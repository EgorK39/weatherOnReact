import * as React from "react";
import Header from "./Header";
import "../styles/App.css";
import "../fonts/Cormorant/Cormorant-SemiBold.ttf"
import Main from "./Main";
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component<any, any> {
    render() {
        return (
            <>
                <Header/>
                <Main/>
            </>

        );
    }
}

export default App;