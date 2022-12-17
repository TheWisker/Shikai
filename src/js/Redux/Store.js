import {legacy_createStore as createStore} from "redux";

import Reducer from "./Reducer";

//Import initial state // store = createStore(PrimaryReducer, initialState);

export default () => createStore(Reducer);