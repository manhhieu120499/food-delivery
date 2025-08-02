import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
    name: 'AuthSlice',
    initialState: {
        user: {}
    },
    reducers: {
        login: (state, action) => {
            state.user = {...action.payload}
            return state
        },
        logout: (state) => {
            state.user = {}
            return state
        },
        updateToken: (state, action) => {
            let updateUser = {...state.user}
            updateUser = {
                ...updateUser,
                accessToken: action.payload.accessToken,
                refreshToken: action.payload.refreshToken
            }
            state = {user: updateUser}
            return state
        }
    }
})

export const {login, logout, updateToken} = AuthSlice.actions

export default AuthSlice.reducer