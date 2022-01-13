import React, {Component} from 'react';
import Menu from "./components/menu";
import burger from "../images/burger.jpg";
import "../css/style.css";

class App extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <img src={burger}/>
                <button className="normal-btn btn">Login Btn</button>
            </div>
        );
    }
}

export default App;
