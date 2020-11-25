import axios from 'axios'

export const getData = () => async dispatch => {
  try {
    dispatch({
      type: "DATA_LOADING"
    })
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