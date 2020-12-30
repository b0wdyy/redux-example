import {ErrorType} from "./ErrorType";
import {FortniteData} from "./FortniteData";

export interface DefaultState {
    loading: boolean;
    error?: ErrorType;
    data?: FortniteData[]
}