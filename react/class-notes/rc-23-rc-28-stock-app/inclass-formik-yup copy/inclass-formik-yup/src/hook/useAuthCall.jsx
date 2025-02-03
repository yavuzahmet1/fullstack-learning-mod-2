import React from 'react'
import axios from "axios"
import { useDispatch } from "react-redux"
import { fetchFail, fetchStart, registerSuccess } from "../features/authSlice"

const useAuthCall = () => {
    const dispatch = useDispatch()

    const register = async () => {
        dispatch(fetchStart())
        try {
            const { data } = await axios.post("https://16142.fullstack.clarusway.com/users", userInfo)
            console.log(data)
            dispatch(registerSuccess())
        } catch (error) {
            dispatch(fetchFail())
        }
    }
    return { register }
}

export default useAuthCall