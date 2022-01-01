import React, { useEffect, useState } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Api from "../../services/api";
import Form from "../../components/Form";
import Result from "../../components/Result";
import { removerVirgula } from "../../functions/format";

const useStyles = makeStyles({
    container: {
        minHeight: '100vh'
    }
})

export default function Simulation() {
    const styles = useStyles();
    const params = (new URL(document.location)).searchParams;
    const [data, setData] = useState(false);

    useEffect(() => {
        if (params.has('estrutura') && params.has('valor') && params.has('cep')) {
            const [estrutura, valor, cep] = [
                params.get('estrutura'),
                removerVirgula(params.get('valor')),
                params.get('cep')
            ];
            const search = `busca-cep?estrutura=${estrutura}&valor_conta=${valor}&cep=${cep}`;
            Api.get(search).then((response) => {
                setData(response.data);
            }).catch((error) => {
                console.error(`Erro na consulta da API => ${error}`);
            })
        }
    })

    if (params.has('estrutura') && params.has('valor') && params.has('cep')) {
        return (
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                className={ styles.container }
            >
                <Grid item sm={8} xs={10}>
                    <Result data={ data } />
                </Grid>
            </Grid>
        )
    }
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            className={ styles.container }
        >
            <Grid>
                <Form />
            </Grid>
        </Grid>
    )
}