// Libs
import { combineReducers } from 'redux'

// Reducers
import dataStoreReducer from '../reducers/dataStoreReducer'

const rootReducers = combineReducers({
    dataStore: dataStoreReducer
})

export default rootReducers