import React from "react";
import {Grid} from "@material-ui/core";
import styled from "styled-components";

const areEqual = (prevProps, nextProps) => {
    if (prevProps.counter === nextProps.counter && prevProps.rotate===nextProps.rotate) {
        return true;
    } else {
        return false;
    }
};


const NumberView=React.memo(function NumberView(props){
    console.log(props)
    return(
        <Grid item xs={6} >
            <h1><NumView {...props}>{props.counter}</NumView></h1>
        </Grid>
    )
},areEqual);


const NumView=styled.h1`
font-size:10 rem;
transform:${props=>props.rotate? 'rotateY(180deg)': 'rotateY(0deg)'};
text-align:center;
`

export  default NumberView



