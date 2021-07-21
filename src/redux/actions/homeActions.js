import { actionTypes } from '../constants/actionTypes'

export const setHomes = (homes) => {
    return {
        type: actionTypes.SET_HOMES,
        payload: homes,
    };
};

export const selectedHome = (home) => {
    return {
        type: actionTypes.SELECTED_HOME,
        payload: home,
    };
};

export const removeSelectedHome = () => {
    return {
        type: actionTypes.REMOVE_SELECTED_HOME,
    };
};