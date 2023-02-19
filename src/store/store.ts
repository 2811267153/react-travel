import {createStore} from "redux"
import languagRedux from "./language/languagRedux";


const store = createStore(languagRedux)

export default store;