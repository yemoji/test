const rootReducer=function users(state=[],action) {
    if (action.type==='SUBMIT-FORM') {
        return [...state,action.user]
    }
        else
            {return state}


};
export default rootReducer;