const initialState = {
    ListHarga: [],
    isLoading: false,
    isRejected: false,
    isFulfilled: false
}

const shrimp = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_UDANG_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false,
            }
        case 'GET_UDANG_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            }
        case 'GET_UDANG_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                ListHarga: action.payload.data,
            }
        default:
            return state
    }
}
export default shrimp