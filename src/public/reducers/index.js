import { combineReducers } from 'redux'

import ShrimPrices from './shrimpPrices'
// import regions from './regions'

const appReducers = combineReducers({
    ShrimPrices,
    // regions,
})

export default appReducers