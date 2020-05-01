import Main from "./Main";
import {connect} from 'react-redux'
import {bindActionCreators} from  'redux'
import * as actions from "./redux/actions";

function mapStateToProps(state) {
    return{
        users:state.users,
    }

}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions,dispatch)

}
const App=connect(mapStateToProps,mapDispatchToProps)(Main);
export default App;