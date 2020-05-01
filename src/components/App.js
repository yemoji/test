import React, {Component} from "react";
import {Switch,Route} from "react-router-dom";
import Login from "./login/Login";
import Home from "./home/Home";
import {bindActionCreators} from "redux";
import * as actions from "../redux/actions";
import {connect} from "react-redux";
import {Container} from "@material-ui/core";

function mapStateToProps(state=[]) {
    return{
        users:state.users,
    }

}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions,dispatch)

}

function App(props) {



            return(

            <>
                <Switch>
                <Route path='/login' render={()=>(<Login {...props}/>)}/>
                <Route path='/home' component={Home}/>
                </Switch>
            </>
    )
}
export default connect(mapStateToProps,mapDispatchToProps)(App);