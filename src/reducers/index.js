// Libs
import { combineReducers } from 'redux'

// Reducers
import dataStoreReducer from '../reducers/dataStoreReducer'
import showReducer from '../reducers/showReducer'

const rootReducers = combineReducers({
    dataStore: dataStoreReducer,
    showReducer: showReducer
})

export default rootReducers