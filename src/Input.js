import React from "react";
import TextField from "material-ui/TextField";
import styled from "styled-components";
import RaisedButton from "material-ui/RaisedButton";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    padding: 1em;
`;

class Input extends React.Component {
    state = {
        username: "",
        message: ""
    };

    onUsernameChange = event =>
        this.setState({
            username: event.target.value
        });

    onMessageChange = event =>
        this.setState({
            message: event.target.value
        });

    onClickSend = () => {
        const { username, message } = this.state;

        this.props.send({
            username,
            message
        });
        this.setState({
            message: ""
        });
    };

    render() {
        const { username, message } = this.state;

        return (
            <Form>
                <TextField
                    floatingLabelText="username"
                    value={username}
                    onChange={this.onUsernameChange}
                />
                <TextField
                    floatingLabelText="say something"
                    multiLine
                    value={message}
                    onChange={this.onMessageChange}
                    rows={5}
                />
                <RaisedButton
                    label="Send message"
                    primary
                    onClick={this.onClickSend}
                />
            </Form>
        );
    }
}

export default Input;
