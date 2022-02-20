import axios from "axios"

const API_URL = '/api/links/'

// Create link
const createLink = async (linkData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }

    const response = await axios.post(API_URL, linkData, config)

    return response.data
}

// Get user links
const getLinks = async (username) => {
    const response = await axios.get(API_URL + username)

    return response.data
}

const linkService = {
    createLink,
    getLinks
}

export default linkService