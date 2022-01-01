import React from "react";
import { InputLabel } from "@material-ui/core";

export default (props) => {
    return (
        <InputLabel { ...props }>
            { props.label }
        </InputLabel>
    )
}