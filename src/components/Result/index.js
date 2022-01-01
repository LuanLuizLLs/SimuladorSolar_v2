import React, { useEffect, useState } from "react";
import { Box, Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { ArrowUpward, ArrowDownward } from "@material-ui/icons";
import { Real, Decimal } from "../../functions/format";
import Typography from "../Typography";
import Card from "../Card";
import List from "../List";

export default (props) => {
    const [data, setData] = useState(false);

    useEffect(() => {
        setData(props.data);
    })

    return (
        <div>
            <Grid container spacing={4}>
                <Grid item lg={4} xs={12}>
                    <Card>
                        <Box>
                            <Typography variant="h6" fontSize={14} fontWeight="bold">Potência:</Typography>
                            {
                                data ?
                                    <Typography variant="h4">{ data.potencial }</Typography> :
                                    <Typography variant="h4"><Skeleton /></Typography>
                            }
                        </Box>
                        <Box>
                            <Typography variant="h6" fontSize={14} fontWeight="bold">Irradiação:</Typography>
                            {
                                data ?
                                    <Typography variant="h4">{ data.irradiancia }</Typography> :
                                    <Typography variant="h4"><Skeleton /></Typography>
                            }
                            {
                                data ?
                                    <Box display="flex">
                                        <Box display="flex" alignItems="center" marginRight={1}>
                                            <ArrowUpward fontSize="small" />
                                            <Typography variant="body1">{ data.irradiancia_minima }</Typography>
                                        </Box>
                                        <Box display="flex" alignItems="center">
                                            <ArrowDownward fontSize="small" />
                                            <Typography variant="body1">{ data.irradiancia_maxima }</Typography>
                                        </Box>
                                    </Box> :
                                    <Box>
                                        <Typography variant="body1"><Skeleton /></Typography>
                                    </Box>
                            }
                        </Box>
                        <Box>
                            <Typography variant="h6" fontSize={14} fontWeight="bold">Redução de CO<sup>2</sup>:</Typography>
                            {
                                data ?
                                    <Typography variant="h6">{ Decimal(data.co2) } toneladas</Typography> :
                                    <Typography variant="h6"><Skeleton /></Typography>
                            }
                        </Box>
                    </Card>
                </Grid>
                <Grid item lg={8} xs={12}>
                    <Card>
                        <Typography variant="h6" fontSize={14} fontWeight="bold">Kit de Materiais:</Typography>
                        {
                            data ?
                                <List data={ data.kit } /> :
                                <Skeleton height={300} />
                        }
                    </Card>
                </Grid>
            </Grid>
            <Grid container spacing={4}>
                <Grid item lg={6} xs={12}>
                    <Card>
                        <Box display="flex">
                            <Box flex="auto" paddingX={2}>
                                <Typography variant="h6" fontSize={14} fontWeight="bold">Economia:</Typography>
                                {
                                    data ?
                                        <Typography variant="body1">{ Real(data.economia) }</Typography> :
                                        <Typography variant="body1"><Skeleton /></Typography>
                                }
                            </Box>
                            <Box flex="auto" paddingX={2}>
                                <Typography variant="h6" fontSize={14} fontWeight="bold">Valor da Instalação:</Typography>
                                {
                                    data ?
                                        <Typography variant="body1">{ Real(data.valor_instalacao) }</Typography> :
                                        <Typography variant="body1"><Skeleton /></Typography>
                                }
                            </Box>
                        </Box>
                    </Card>
                </Grid>
                <Grid item lg={6} xs={12}>
                    <Card>
                        <Typography variant="h6" fontSize={14} fontWeight="bold">Parcelamento:</Typography>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}