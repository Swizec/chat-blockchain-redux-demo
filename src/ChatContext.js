import React from 'react';

const ChatContext = React.createContext();

const ChatProvider = ChatContext.Provider,
    ChatConsumer = ChatContext.Consumer

export default ChatContext;

export {
    ChatProvider,
    ChatConsumer
}