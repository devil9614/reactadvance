import { configureStore } from "@reduxjs/toolkit";
import CommentReducer from './Features/Reducers/Comments'

export const store = configureStore({
    reducer:{
        comment:CommentReducer,
    }
})