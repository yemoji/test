import React from "react";
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import {makeStyles} from "@material-ui/core/styles";

const areEqual = (prevProps, nextProps) => {
    if (prevProps.counter === nextProps.counter) {
        return true;
    } else {
        return false;
    }
};
const useStyles = makeStyles(() => ({
    paper: {
        alignSelf:'center',
        textAlign:'center'

    }}));


const ActionButton= React.memo(function ActionButton(props){
    const classes=useStyles()
    console.log('actionButton')
    return <AddCircleOutlineOutlinedIcon className={classes.paper} onClick={props.handelButton}/>
},areEqual)
export default ActionButton