import React from "react";
import CircularProgress from "material-ui/CircularProgress";
import { List, ListItem } from "material-ui/List";
import Avatar from "material-ui/Avatar";
import Divider from "material-ui/Divider";

import { ChatConsumer } from "./ChatContext";

const Messages = ({ messages }) => (
    <List>
        {messages.map(({ user, message }) => (
            <React.Fragment>
                <ListItem primaryText={message} secondaryText={user} />
                <Divider inset />
            </React.Fragment>
        ))}
    </List>
);

export default () => (
    <ChatConsumer>
        {blockchain =>
            blockchain && blockchain.getState ? (
                <Messages messages={blockchain.getState().messages} />
            ) : (
                <CircularProgress />
            )
        }
    </ChatConsumer>
);
