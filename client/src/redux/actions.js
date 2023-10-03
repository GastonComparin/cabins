import axios from "axios";
const URL = "http://localhost:3001";
export const GET_CABINS = "GET_CABINS";
export const GET_USERS = "GET_USERS";
export const GET_CABIN_DETAIL = "GET_CABIN_DETAIL";

export const getCabins = () => {
  return async function (dispatch) {
    const data = await axios.get(`${URL}/cabins`);
    const cabins = data.data;
    dispatch({ type: GET_CABINS, payload: cabins });
  };
};
export const getUsers = () => {
  return async function (dispatch) {
    const data = await axios.get(`${URL}/users`);
    const users = data.data;
    dispatch({ type: GET_USERS, payload: users });
  };
};
export const getCabinDetail = (id) => {
  return async function (dispatch) {
    const apiData = await axios.get(`${URL}/cabins/${id}`);
    const cabin = apiData.data;
    dispatch({ type: GET_CABIN_DETAIL, payload: cabin });
  };
};
