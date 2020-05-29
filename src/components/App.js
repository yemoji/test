import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./login/Login";
import Home from "./home/Home";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";
import { connect } from "react-redux";
import MyList from "./List/MyList";
import myMap from "./map/map";
function mapStateToProps(state = []) {
  return {
    users: state.users,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

function App(props) {
  return (
    <>
      <Switch>
        <Route exact path="/" render={() => <Login {...props} />} />
        <Route path="/login" render={() => <Login {...props} />} />
        <Route path="/home" component={Home} />
        <Route path="/list" component={MyList} />
        <Route path="/map" component={myMap} />
      </Switch>
    </>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
