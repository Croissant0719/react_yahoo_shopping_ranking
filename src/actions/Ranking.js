import fetchJsonp from "fetch-jsonp";
import qs from "qs";

const API_URL =
  "https://shopping.yahooapis.jp/ShoppingWebService/V1/json/categoryRanking";
const APP_ID = "dj00aiZpPUlqOXpPQml2Z1B4OSZzPWNvbnN1bWVyc2VjcmV0Jng9MGU-";

// start request
const startRequest = categoryId => ({
  type: "START_REQUEST",
  payload: { categoryId }
});

// receive data
const receiveData = (categoryId, error, response) => ({
  type: "RECEIVE_DATA",
  payload: { categoryId, error, response }
});

// finish request
const finishRequest = categoryId => ({
  type: "FINISH_REQUEST",
  payload: { categoryId }
});

export const fetchRanking = categoryId => {
  return async dispatch => {
    dispatch(startRequest(categoryId));

    const queryString = qs.stringify({
      appid: APP_ID,
      category_id: categoryId
    });

    try {
      const responce = await fetchJsonp(`${API_URL}?$${queryString}`);
      const data = await responce.json();
      dispatch(receiveData(categoryId, null, data));
    } catch (err) {
      dispatch(receiveData(categoryId, err));
    }
    dispatch(finishRequest(categoryId));
  };
};
