import {FortniteData} from "../../types/FortniteData";

export const API_LOADING = "API_LOADING";
export const API_DATA = "API_DATA";
export const API_ERROR = "API_ERROR";

export interface ApiLoading {
    type: typeof API_LOADING;
}

export interface ApiError {
    type: typeof API_ERROR,
    payload: string
}

export interface ApiData {
    type: typeof API_DATA,
    payload: FortniteData[]
}

export type FortniteActionTypes = ApiLoading | ApiError | ApiData;