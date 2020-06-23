import {createStore, combineReducers, compose} from 'redux';
// Import all reducers
// import playerReducer from '../features/player/reducer';
import loggedIn from './reducers/loggedIn';

// Combine all the imported reducers into one
const rootReducer = combineReducers({
    isLogged: loggedIn
})

// Compose root
const store = createStore(
    rootReducer,
    compose(
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    )
    
)

export default store;