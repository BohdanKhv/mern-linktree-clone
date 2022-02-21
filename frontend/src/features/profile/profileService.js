import axios from "axios";

const API_URL = '/api/users/'

// Get user profile
const getProfile = async (username) => {
    const response = await axios.get(API_URL + username)

    return response.data
}

const profileService = {
    getProfile
}

export default profileService