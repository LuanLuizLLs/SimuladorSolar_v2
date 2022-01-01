import React from "react";
import { Select, MenuItem } from "@material-ui/core";

export default (props) => {
    return (
        <Select { ...props }>
            <MenuItem value="">{ props.initial || "Selecionar" }</MenuItem>
            {
                props.data ?
                props.data.map((item, index) => (
                    <MenuItem key={ index } value={ item.value }>{ item.label }</MenuItem>
                )) : null
            }
        </Select>
    )
}