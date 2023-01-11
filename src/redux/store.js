import {configureStore} from "@reduxjs/toolkit"
import data  from "./state"
export default configureStore({
    reducer:{
        cars:data,
    }
})