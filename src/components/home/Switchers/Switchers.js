import React from "react";
import {Switch} from "@material-ui/core";
import {Grid,FormControlLabel} from "@material-ui/core";


const areEqual = (prevProps, nextProps) => {
    if (prevProps.odd === nextProps.odd && prevProps.even===nextProps.even) {
        return true;
    } else {
        return false;
    }
};

const Switchers=React.memo(function  Switchers(props){
    return(
        <Grid item xs={3}>
            <FormControlLabel
                control={<Switch checked={props.odd} onChange={props.handleOdd} name="checkedA" />}
                label="Odd"
            />
            <FormControlLabel
                control={<Switch checked={props.even} onChange={props.handleEven} name="checkedA" />}
                label="Even"
            />
        </Grid>
    )
},areEqual);
export default Switchers