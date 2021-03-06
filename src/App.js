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
                        Chat app example built with{" "}
                        <a
                            href="https://github.com/Swizec/blockchain-redux"
                            style={{ color: "white" }}
                        >
                            blockchain-redux
                        </a>
                    </h1>
                </header>
                <ChatApp />
            </div>
        );
    }
}

export default App;
