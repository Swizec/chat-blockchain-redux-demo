import React from "react";
import CircularProgress from "material-ui/CircularProgress";
import { List, ListItem } from "material-ui/List";
import Avatar from "material-ui/Avatar";
import Divider from "material-ui/Divider";
import styled from "styled-components";

import { ChatConsumer } from "./ChatContext";

const Layouted = styled.div`
    flex: 2;
    text-align: left;
`;

const Messages = ({ messages }) => (
    <List>
        {messages.reverse().map(({ user, message }) => (
            <React.Fragment>
                <ListItem primaryText={message} secondaryText={user} />
                <Divider inset />
            </React.Fragment>
        ))}
    </List>
);

export default () => (
    <Layouted>
        <ChatConsumer>
            {blockchain =>
                blockchain && blockchain.getState ? (
                    <Messages messages={blockchain.getState().messages} />
                ) : (
                    <CircularProgress />
                )
            }
        </ChatConsumer>
    </Layouted>
);
