import { createAction, createReducer } from '@reduxjs/toolkit'


export const login = createAction('user/login')
export const setUser = createAction('user/setUser')
export const logout = createAction('user/logout')


const initialState = { user:null }

export const userReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setUser, (state, action) => {
            state.user = action.payload
        })
})

