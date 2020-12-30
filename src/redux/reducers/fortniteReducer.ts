import {DefaultState} from "../../types/DefaultState";
import {API_DATA, API_ERROR, API_LOADING, FortniteActionTypes} from "../actions/fortniteActionTypes";

const initialState: DefaultState = {
    loading: false,
    data: []
}

const fortniteReducer = (state: DefaultState = initialState, action: FortniteActionTypes) => {
    switch (action.type) {
        case API_LOADING:
            return {
                ...state,
                loading: true
            }
        case API_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case API_DATA:
            return {
                ...state,
                loading: false,
                error: undefined,
                data: action.payload
            }
        default:
            return state;
    }
}

export default fortniteReducer;