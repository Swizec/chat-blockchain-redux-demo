import React from "react";
import TextField from "material-ui/TextField";

class Input extends React.Component {
    render() {
        return (
            <form>
                <TextField floatingLabelText="username" />
            </form>
        );
    }
}

export default Input;
