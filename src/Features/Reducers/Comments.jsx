import { createSlice } from "@reduxjs/toolkit";

const initialState = {value:[]}

const Comments = createSlice({
    name:"comment",
    initialState:initialState,
    reducers:{
        addComment : (state,action) => {
            state.value = [...state.value,action.payload]
        }
    }
})

export default Comments.reducer

export const {addComment} = Comments.actions