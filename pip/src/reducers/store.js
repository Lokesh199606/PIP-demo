import { createStore } from "redux";
import personalReducer from "../reducers/personalReducer";

function configureStore(state = { personalData: {} }) {
    return createStore(personalReducer, state);
}

export default configureStore;