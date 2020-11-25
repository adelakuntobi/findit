import axios from 'axios'

export const getData = () => async dispatch => {
  try {

    const res = await axios.get(`https://fakestoreapi.com/products`)
    dispatch({
      type: "DATA_GOTTEN_SUCCESSFUL",
      payload: res.data,
    });

  } catch (error) {
    dispatch({
      type: "ERROR_FETCHING"
    });

  }

}