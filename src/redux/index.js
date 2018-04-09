import {createStore, combineReducers} from  "redux";
import trails from "./trails"

const rootReducer= (combineReducers({trails}));

let store = createStore(rootReducer);

store.subscribe(()=>{
    console.log(store.getState());
})

export default store;

