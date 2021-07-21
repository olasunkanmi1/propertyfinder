import { actionTypes } from "../constants/actionTypes";

const initialState = {
    homes: []
}

export const homeReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.SET_HOMES:
            return {...state, homes: payload};
        default:
            return state;
    }
}

export const selectedHomeReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case actionTypes.SELECTED_HOME:
            return {...state, ...payload};
        case actionTypes.REMOVE_SELECTED_HOME:
            return {};
        default:
            return state;
    }
}