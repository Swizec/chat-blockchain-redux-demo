import { combineReducers } from "redux";

const messageReducer = function(state = [], action) {
    switch (action.type) {
        case "ADD_MESSAGE":
            let { username, message } = action;
            return [
                ...state,
                {
                    user: username,
                    message
                }
            ];
        default:
            return state;
    }
};

export default combineReducers({
    messages: messageReducer
});
