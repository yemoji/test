import React,{useReducer} from "react";
import Switchers from "./Switchers/Switchers";
import NumberView from "./NumberView/NumberView";
import Rotate from "./Rotate/Rotate";
import ActionButton from "./ActionButton/ActionButton";
import { Grid } from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(8),
        height:'800px',
        display: 'flex',
        justifyContent: 'center',
    }}));



const reducer=(state,action)=>{
    switch (action.type) {
        case 'COUNT':
            if(!state.odd&&!state.even){
                return{
                    counter: state.counter+1,
                    odd: state.odd,
                    even: state.even,
                    rotate: state.rotate
                }
        }
            else if(state.odd){
                let count=state.counter
                do{
                    count++
                }while (count%2==0)
                return {
                    counter: count,
                    odd: state.odd,
                    even: state.even,
                    rotate: state.rotate
                }

            }
            else {
                let count=state.counter
                do{
                    count++
                }while (count%2==1)
                return {
                    counter: count,
                    odd: state.odd,
                    even: state.even,
                    rotate: state.rotate
                }
            }
        case 'ODD':
            if(!state.odd && state.even ){
                return {
                    counter: state.counter,
                    rotate: state.rotate,
                    odd: !state.odd,
                    even: !state.even,

                };
            }
            else{
                return {
                    odd:!state.odd,
                    counter: state.counter,
                    rotate: state.rotate
                }
            };
        case'EVEN':
            if(!state.even && state.odd ){
                return {
                    counter: state.counter,
                    even:!state.even,
                    odd: !state.odd,
                    rotate: state.rotate
                };
            }
            else{
                return {
                    even:!state.even,
                    counter: state.counter,
                    rotate: state.rotate}
            };
        case 'ROTATE':return{
            rotate:!state.rotate,
            even: state.even,
            odd: state.odd,
            counter: state.counter
        };
        default:
            break;

    }
}

function Home() {
    const classes=useStyles

    const [state,dispatch]=useReducer(reducer,{
        counter:0,
        odd:true,
        even:false,
        rotate:false
    })

    const handleButton=()=>{
        dispatch({type:'COUNT'})
    }
    const handleOdd=()=>{
        dispatch({type:'ODD'})
    }
    const handleEven=()=>{
        dispatch({type:'EVEN'})
    }
    const handleRotate=()=>{
        dispatch({type:'ROTATE'})
    }
/*    const [counter, increase] = useState(0);
    const [odd, changeOdd] = useState(true);
    const [even, changeEven] = useState(false);
    const [rotate, changeRotate] = useState(false);*/



    return(
        <Grid container className={classes.container} >
            <Switchers
                odd={state.odd}
                even={state.even}
                handleEven={handleEven}
                handleOdd={handleOdd}/>
            <NumberView
                counter={state.counter}
                rotate={state.rotate}
            />
            <Rotate
                rotate={state.rotate}
                handleRotate={handleRotate}/>
            <ActionButton
                counter={state.counter}
                handelButton={handleButton}
            />
        </Grid>
    )

}
export default Home