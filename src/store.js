import { createStore } from 'redux';
import reducer from './reducers';
import { getStateStorage, saveStateStorage } from './localstorage';

// const initialState = [];
const storageState = getStateStorage();

const store = createStore(
    reducer,
    storageState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//Actualizar State
store.subscribe(() => {
    saveStateStorage({
        dates: store.getState().dates
    })
})

export default store;
