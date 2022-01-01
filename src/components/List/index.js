import React from "react";
import { List, ListItem, ListItemText, Avatar, Box } from "@material-ui/core";
import { Real } from "../../functions/format";

export default (props) => {
    return (
       <div>
           <Box maxHeight={300} overflow="auto">
               <List>
                   {
                       props.data ?
                           props.data.map((item, index) => (
                               <ListItem key={ index }>
                                   <Box px={2}>
                                       <Avatar alt={ item.titulo } src={ item.url } />
                                   </Box>
                                   <ListItemText primary={ `x${ item.qtde } ${ item.titulo }` } secondary={ Real(item.valor) } />
                               </ListItem>
                           )) : null
                   }
               </List>
           </Box>
       </div>
    )
}