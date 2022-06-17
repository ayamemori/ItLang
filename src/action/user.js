import axios from 'axios';

export const registration = async (username, password) => {
    try {
        const response = await axios.post('http://178.62.56.162:8000/acc/login', {
            'username': username,
            'password': password
        });
        alert(response.data.message)

    } catch (e) {
        alert(e)
    }
}