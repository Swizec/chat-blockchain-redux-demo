import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import { createStore, firebaseMiddleware } from "blockchain-redux";
import * as firebase from "firebase";

import Messages from "./Messages";
import Input from "./Input";
import { ChatProvider } from "./ChatContext";
import chatReducer from "./reducer";

class ChatApp extends React.Component {
    blockchain = {};

    componentDidMount = async () => {
        const FirebaseApp = firebase.initializeApp({
            apiKey: "AIzaSyB_QA9xmUVXbF79oW4ZJEcT4NDQTIXmJjM",
            databaseURL: "https://chatapp-blockchain.firebaseio.com/",
            projectId: "chatapp-blockchain"
        });

        this.blockchain = await createStore(
            chatReducer,
            firebaseMiddleware(FirebaseApp)
        );

        this.unsubscribe = this.blockchain.subscribe(() => {
            console.log("Update received");
            this.forceUpdate();
        });
        this.forceUpdate();
    };

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return (
            <MuiThemeProvider>
                <ChatProvider blockchain={this.blockchain}>
                    <div>
                        <Messages />
                        <Input />
                    </div>
                </ChatProvider>
            </MuiThemeProvider>
        );
    }
}

export default ChatApp;
