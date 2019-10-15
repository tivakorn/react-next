// Libs
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// Reducers
import reducers from '../reducers'

const createReduxStore = (initialState, options) => {

    const store = createStore(
        reducers,
        applyMiddleware(thunk)
    )

    return store
}

export default createReduxStore