import axios from "axios";

const baseUrl = 'http://127.0.0.1:8000/api';

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}

const login = async (email, password) => {
    const data = {email, password}
    const response = await axios.post(`${baseUrl}/login`, data, config)
    return response.data
}

const register = async (name, email, password, password_confirmation) => {
    const data = {name, email, password, password_confirmation}
    const response = await axios.post(`${baseUrl}/register`, data, config)
    return response.data
}

const logout = async (user) => {
    const data = {}
    const config2 =  {
        headers: { 
            'Authorization': `Bearer ${user.token}`,
            'Accept': 'application/json',
            'Content-Type' : 'application/json'
        }
    };

    console.log(config2)

    const response = await axios.post(`${baseUrl}/logout`, data, config2);
    return response;
}

const authService = { login, register, logout }

export default authService