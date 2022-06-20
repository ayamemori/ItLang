import axios from 'axios';

export const login = async (username, password) => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/acc/login', {
            username: username,
            password: password
        });
        

        alert(response.data['access'])

    } catch (e) {
        alert(e)
    }
}