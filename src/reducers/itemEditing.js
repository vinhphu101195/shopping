import * as types from './../constants/ActionType';

var initialState = {};

const itemEditing = (state = initialState, action) =>{
    switch(action.type){
        case types.EDIT_PRODUCT:
            return action.product;
        default:
            return state;
    }
}

export default itemEditing;