import { Dispatch } from "redux";
import axios from "axios";
import { API_DATA, API_ERROR, API_LOADING } from "./fortniteActionTypes";

export const getData = () => async (dispatch: Dispatch) => {
  const BASE_URL = "https://official-joke-api.appspot.com/jokes/ten";

  try {
    dispatch({
      type: API_LOADING,
    });
    const { data } = await axios.get(BASE_URL);
    dispatch({
      type: API_DATA,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: API_ERROR,
      payload: "Error fetching the data.",
    });

    setTimeout(() => {
      dispatch({
        type: API_ERROR,
        payload: "",
      });
    }, 3000);
  }
};
