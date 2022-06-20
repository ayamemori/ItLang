import axios from 'axios';

export const login = async (username, password) => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/acc/login', {
            username: username,
            password: password
        });
        window.localStorage.setItem('token', response.data['access']);
        
        alert(response.data['access'])

    } catch (e) {
        alert(e)
    }
}

export const signup = async (first_name, last_name, username, email, password, confirm, group) => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/acc/reg', {
            first_name: first_name,
            last_name: last_name,
            username: username,
            email: email,
            password: password, 
            confirm: confirm,
            group: group
        });
    } catch (e) {
        alert(e)
    }
}