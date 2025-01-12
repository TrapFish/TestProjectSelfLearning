const initialState = {
    countShown : 0
}

export const ConuterReducer = (state = initialState, action)=>{
    switch (action.type) {
        case "INCREMENT":
              return   {...state, countShown: state.countShown + action.payload.increaseBy};
        case "DECREMENT":
              return   {...state, countShown: state.countShown - action.payload.decreasedBy};  
        default:
             return  state;
    }
}

export default ConuterReducer;