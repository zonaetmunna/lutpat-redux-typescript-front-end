import { createStore, applyMiddleware } from 'redux';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers/rootReducer';
import ReduxThunk from 'redux-thunk'; // no changes here 😀
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';



const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = applyMiddleware(ReduxThunk);

const store = createStore(persistedReducer, composeWithDevTools(middleware));

export const persistor = persistStore(store);

export type AppState = ReturnType<typeof rootReducer>;

export default store;
