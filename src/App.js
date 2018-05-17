import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import ChatApp from "./ChatApp";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">
                        Chat app example built with blockchain-redux
                    </h1>
                </header>
                <ChatApp />
            </div>
        );
    }
}

export default App;
