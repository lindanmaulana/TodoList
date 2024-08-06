import axios from "axios"
import { axiosInstance } from "../lib/axiosInstance"

const baseUrl = import.meta.env.VITE_BASEURL

export const readTodoServices = async() => {
    try {
        const res = await axiosInstance.get('/users')

        return res.data
    } catch(err) {
        console.error("Gagal fetching data: ", err)
    }
}

export const postTodosServices = async(data) => {
    try {
        const res = await axiosInstance.post('/users', {
            name: data.name,
            address: data.address,
            biodata: {
                born: data.born,
                gender: data.gender,
                telepon: data.telepon
            }
        })

        return res.data
    } catch(err) {
        console.error("Gagal Post data: ", err)
    }
}

export const deleteTodoServices = async(id) => {
    try {
        const res = await axiosInstance.delete(`${baseUrl}/users/${id}`)

        return res.data
    } catch(err) {
        console.error("Gagal Menghapus data : ", err)
    }
}