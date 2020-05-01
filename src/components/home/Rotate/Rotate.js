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

const Rotate= React.memo(function Rotate (props){
    return(
    <div>
        <FormControlLabel
            control={<Checkbox checked={props.rotate} onChange={props.handleRotate} name="rotate" />}
            label="Rotate"
        />
                </div>
)
},areEqual);
export default Rotate