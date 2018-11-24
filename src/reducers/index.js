// import {combineReducers} from 'redux';
// import {updateSemaphore, setSemaphoreState} from "../actions";

const initialState = {
    current:2,
    working:false
}

function semaphoreUpdater(state=initialState, action) {
    switch(action.type) {
        case 'UPDATE_SEMAPHORE':
            return Object.assign({},state,{
                current: Math.floor(Math.random() * 255)
            });
        case 'SET_SEMAPHORE_STATE':
            return Object.assign({},state,{
                working: action.nextState
            });

        default:
            return state
    }
}

export default semaphoreUpdater;

