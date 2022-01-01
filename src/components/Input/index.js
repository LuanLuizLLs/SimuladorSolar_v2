import React from "react";
import { Input, InputAdornment } from "@material-ui/core";
import { Cep, Real } from "../../functions/mask";

export function InputCep(props) {
    function handleKeyUp(e) {
        Cep(e);
    }
    return (
        <Input
            placeholder="00000-000"
            onKeyUp={ handleKeyUp }
            { ...props }
        />
    )
}

export function InputReal(props) {
    function handleKeyUp(e) {
        Real(e);
    }
    return (
        <Input
            placeholder="00,00"
            onKeyUp={ handleKeyUp }
            startAdornment={
                <InputAdornment position="start">R$</InputAdornment>
            }
            { ...props }
        />
    )
}