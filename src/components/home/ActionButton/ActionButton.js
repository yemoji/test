import React from "react";
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import {Wrapper} from "../Wrapper";

const areEqual = (prevProps, nextProps) => {
    if (prevProps.counter === nextProps.counter) {
        return true;
    } else {
        return false;
    }
};



const ActionButton= React.memo(function ActionButton(props){
    console.log('actionButton')
    return( <Wrapper><AddCircleOutlineOutlinedIcon  onClick={props.handelButton}/></Wrapper>)
},areEqual)
export default ActionButton