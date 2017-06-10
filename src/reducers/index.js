import { SET_HYUNSIK } from '../actions';
import { combineReducers } from 'redux';

const initialState = {
    value: 0
};

/* nothing done for this. */
const extra = (state = { value: 'this_is_extra_reducer' }, action) => {
    switch(action.type) {
        default:
            return state;
    }
}


const switchHyunsik = (state = initialState, action) => {
    switch(action.type) {
    	case SET_HYUNSIK:
    		return Object.assign({}, state, {
                value: action.val
            });
        default:
            return state;
    }
}

const counterApp = combineReducers({
   	switchHyunsik,
   	extra
});

export default counterApp;