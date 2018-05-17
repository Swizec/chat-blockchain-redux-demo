import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import Messages from "./Messages";
import Input from "./Input";

class ChatApp extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <Messages />
                    <Input />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default ChatApp;
