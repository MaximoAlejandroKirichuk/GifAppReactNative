import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: { 
        value:{
            user: null,
            token: null,
            localId: null,
            imageCamera: null,
        }
     },
    reducers: { 
        setUser: (state, {payload}) => {
            state.value.user = payload.email,
            state.value.token = payload.idToken,
            state.value.localId = payload.localId
        },
        clearUser: (state) => {
            state.value.user = null,
            state.value.token = null

        },
        setCameraImage: (state, {payload} ) => {
            state.value.imageCamera = payload;
        }
     },
});

export const { clearUser, setUser , setCameraImage } = userSlice.actions;