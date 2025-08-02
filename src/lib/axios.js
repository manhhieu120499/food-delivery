import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api',
    withCredentials: true
})

const refreshToken = async (email, fn) => {
    try{
        const res = await axiosInstance.post('/auth/refresh-token', {
            email
        })
        const {accessToken, refreshToken} = res.data.token
        return fn(accessToken, refreshToken)
    }catch(err) {
        throw new Error(err)
    }
}

export {refreshToken}

export default axiosInstance