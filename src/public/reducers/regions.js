const initialState = {
    ListRegion: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
  };
  
  const region = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_REGION_PENDING':
        return {
          ...state,
          isLoading: true,
          isFulfilled: false,
          isRejected: false,
        };
      case 'GET_REGION_REJECTED':
        return {
          ...state,
          isLoading: false,
          isRejected: true,
        };
      case 'GET_REGION_FULFILLED':          
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          ListRegion: action.payload.data.data
        };
        default:
            return state
    }
}
export default region