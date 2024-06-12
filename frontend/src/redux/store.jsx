// create redux store
import {configureStore} from '@reduxjs/toolkit'
import LoginReducer from './slices/LoginSlice'

export const store=configureStore({
    reducer:{
        LoginReducer:LoginReducer
    }
})