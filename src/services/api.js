import axios from "axios"

const api = axios.create({
    baseURL: 'http://192.168.2.116:3333'
})

export default api