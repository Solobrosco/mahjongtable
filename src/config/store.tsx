import {createStore, combineReducers, compose} from 'redux';
import playerReducer from '../features/player/reducer';

const rootReducer = combineReducers({
    player: playerReducer
})

const store = createStore(
    rootReducer,
    compose(
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    )
    
)

export default store;