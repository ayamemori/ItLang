import axios from 'axios';

export const login = async (username, password) => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/acc/login', {
            username: username,
            password: password
        });
        localStorage.setItem('JWT', response.data['access'])
    } catch (e) {
        alert('Incorrect username or password')
    }
}

export const signup = async (user_array) => {
    try {
        let FormData = require('form-data')
        let data = new FormData()
        data.append('first_name', user_array[0])
        data.append('last_name', user_array[1])
        data.append('username', user_array[2])
        data.append('email', user_array[3])
        data.append('password', user_array[4])
        data.append('confirm', user_array[5])
        data.append('group', user_array[6])
        const response = await axios.post('http://127.0.0.1:8000/acc/reg', data);
    } catch (e) {
        alert(e)
    }
}