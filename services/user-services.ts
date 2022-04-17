import axios from "axios"
import { CreateUserDto, UserDto } from '../models/user-models';

const BASE_URL = "http://localhost:8080/"

export const getAllUsers = () => {
    return axios.get(BASE_URL + "users/all");
}

export const getUserById = (id: string) => {
    return axios.get(BASE_URL + "users/user/" + id)
}

export const saveUser = (createUserDto: CreateUserDto) => {
    return fetch(BASE_URL + "users/save", { body: JSON.stringify(createUserDto), headers: { 'Content-Type': 'application/json' }, method: "POST" })
}

export const updateUser = (updateUserDto: any, id: string) => {
    return fetch(BASE_URL + "users/user/update/" + id, { body: JSON.stringify(updateUserDto), headers: { 'Content-Type': 'application/json' }, method: "PUT" })
}

export const deleteUserById = (id: string) => {
    return axios.delete(BASE_URL + "users/user/" + id, { method: "DELETE" })
}

