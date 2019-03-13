import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducer';

const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose);

const configureStore = (initialState) =>{
    let createStoreWithMiddlewares = composeEnhancers(
        applyMiddleware(thunk)       
    )(createStore);

    const store = createStoreWithMiddlewares(rootReducer, initialState);
    return store;
}

export default configureStore;