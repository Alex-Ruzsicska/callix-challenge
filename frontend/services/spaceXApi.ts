import axios from 'axios'

const spaceXApi = axios.create({
    baseURL: process.env.SPACE_X_API_BASE_URL,
})

export default spaceXApi