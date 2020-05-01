import React from "react"
import {FormControlLabel, Checkbox, Grid} from "@material-ui/core";

const areEqual=(prevprops,nextprops)=>{
    if(prevprops.rotate===nextprops.rotate){
        return true
    }
    else {
        return  false;
    }
}

const Rotate=(props)=>{
    return(
    <Grid item xs={3}>
        <FormControlLabel
            control={<Checkbox checked={props.rotate} onChange={props.handleRotate} name="rotate" />}
            label="Rotate"
        />
                </Grid>
)
}
export default Rotate