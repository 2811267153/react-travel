import {createStore} from "redux"
import languagRedux from "./language/languagRedux";


const store = createStore(languagRedux)
export type RootState = ReturnType <typeof store.getState>
export default store;