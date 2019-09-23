const initialState = {
    ListHargaUdang: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
  };
  
  const shrimp = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_UDANG_PENDING':
        return {
          ...state,
          isLoading: true,
          isFulfilled: false,
          isRejected: false,
        };
      case 'GET_UDANG_REJECTED':
        return {
          ...state,
          isLoading: false,
          isRejected: true,
        };
      case 'GET_UDANG_FULFILLED':          
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          ListHargaUdang: action.payload.data.data
        };
        default:
            return state
    }
}
export default shrimp