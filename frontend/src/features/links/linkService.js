import axios from "axios"

const API_URL = '/api/links/'

// Create link
const createLink = async (link) => {
    const response = await axios.post(API_URL, link)

    return response.data
}

const linkService = {
    createLink
}

export default linkService