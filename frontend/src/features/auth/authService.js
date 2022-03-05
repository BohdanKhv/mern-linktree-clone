import axios from 'axios'

const API_URL = '/api/users/'

// Register user
const register = async (userData) => {
    const response = await axios.post(API_URL, userData)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// Logout
const logout = () => {
    localStorage.removeItem('user')
}

// Login
const login = async (userData) => {
    const response = await axios.post(`${API_URL}login`, userData)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// Edit user
const editUser = async (userData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }

    const response = await axios.put(API_URL, userData, config)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// Increment profile view count
export const incrementViewCount = async (id) => {
    const response = await axios.get(API_URL + id + '/view')
    return response.data
}

const authService = {
    register,
    logout,
    login,
    editUser,
    incrementViewCount
}

export default authService