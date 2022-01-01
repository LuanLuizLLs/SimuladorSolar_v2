import React, { useState } from "react";
import { FormGroup, FormControl } from "@material-ui/core";
import { useSearchParams } from "react-router-dom";
import { tipoEstrutura } from "../../model/data";
import Card from "../Card";
import Label from "../Label";
import Select from "../Select";
import Button from "../Button";
import Typography from "../Typography";
import { InputCep, InputReal }  from "../Input";

export default () => {
    const [data, setData] = useState({
        estrutura: '',
        valor: '',
        cep: ''
    });
    function handleChange(e) {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    }

    const [, setParams] = useSearchParams();
    function handleSubmit() {
        setParams(data);
    }

    return (
        <form onSubmit={ handleSubmit }>
            <Card>
                <Typography variant="h6" fontWeight="bold">
                    Preencha os dados e faça sua simulação:
                </Typography>
                <FormGroup>
                    <FormControl margin="normal">
                        <Label label="Tipos de Estrutura" />
                        <Select
                            name="estrutura"
                            value={ data.estrutura }
                            data={ tipoEstrutura }
                            onChange={ handleChange }
                            required
                        />
                    </FormControl>
                    <FormControl margin="normal">
                        <Label label="CEP" />
                        <InputCep
                            name="cep"
                            variant="standard"
                            onChange={ handleChange }
                            required
                        />
                    </FormControl>
                    <FormControl margin="normal">
                        <Label label="Valor da Conta de Luz" />
                        <InputReal
                            name="valor"
                            ariant="standard"
                            onChange={ handleChange }
                            required
                        />
                    </FormControl>
                    <Button type="submit" variant="contained" color="primary">
                        Enviar
                    </Button>
                </FormGroup>
            </Card>
        </form>
    )
}