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

// Edit link
const editLink = async (linkData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }

    const response = await axios.put(API_URL + linkData.id, linkData, config)

    return response.data
}

// Delete link
const deleteLink = async (linkId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }

    const response = await axios.delete(API_URL + linkId, config)

    return response.data
}


// Get user links
const getLinks = async (username) => {
    const response = await axios.get(API_URL + 'user/' + username)

    return response.data
}

const linkService = {
    createLink,
    getLinks,
    editLink,
    deleteLink
}

export default linkService