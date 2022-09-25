import { createSlice } from "@reduxjs/toolkit";
import LoginAPI from "./login";

const authSlice = createSlice({
    name: 'auth',
    initialState: { userAuth: {} },
    reducers: {
        login (state, action) {
            console.log(action.payload)
            state.userAuth = action.payload
        },
        // logout (state, action) {
        //     state.isLoggedIn = false
        // }
    }
})

export const authActions = authSlice.actions;

export default authSlice;


// const notification = useSelector(state => state.ui.notification);