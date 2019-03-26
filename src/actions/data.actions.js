import axios from "axios";

import { GET_DATA } from '../reducers/data.reducer.js'
import { BASE_URL, TIME_FRAMES } from '../constants'

export const getData = (timeFrame = TIME_FRAMES[0]) => {
  return dispatch => {
    axios
      .get(BASE_URL, { headers: { 'Content-Type': 'application/json' }, data: {}, params: { t: timeFrame } })
      .then((response) => {
        console.log(response.data[0])
        dispatch({
          type: GET_DATA,
          payload: {
            items: response.data,
          }
        })
      })
      .catch((error) => {});
  }
}
