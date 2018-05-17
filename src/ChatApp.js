import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import styled from "styled-components";

import { createStore, firebaseMiddleware } from "blockchain-redux";
import * as firebase from "firebase";

import Messages from "./Messages";
import Input from "./Input";
import { ChatProvider } from "./ChatContext";
import chatReducer from "./reducer";
import { addMessage } from "./actions";

const ChatColumns = styled.div`
    display: flex;
    flex-direction: row;
`;

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
        console.log("Blockchain inited!");
        this.forceUpdate();
    };

    componentWillUnmount() {
        this.unsubscribe();
    }

    sendMessage = ({ username, message }) => {
        this.blockchain.dispatch(
            addMessage({
                username,
                message
            })
        );
    };

    render() {
        return (
            <MuiThemeProvider>
                <ChatProvider value={this.blockchain}>
                    <ChatColumns>
                        <Input send={this.sendMessage} />
                        <Messages />
                    </ChatColumns>
                </ChatProvider>
            </MuiThemeProvider>
        );
    }
}

export default ChatApp;
