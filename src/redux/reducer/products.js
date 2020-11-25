

const initialState = {
  data: [],
  errorMsg: "",
  loading: false
}

// A reducer function to receive the data from the API
const products = (state = initialState, action) => {
  switch (action.type) {
    case "DATA_LOADING":
    return {
      ...state,
      loading: true, 
      errorMsg: ""
    }

  case "DATA_GOTTEN_SUCCESSFUL":
    return {
      ...state,
      loading: false,
      data: action.payload,
      errorMsg: ""
    }

  case "ERROR_FETCHING":
    return {
      ...state,
      loading: false,
      errorMsg: "Unable to fetch data"
    }
    
  
    default:
      return state
  }
}

export default products