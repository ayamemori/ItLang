import axios from 'axios';

export const login = async (username, password) => {
    try {
        const response = await axios.post('acc/login', {
            username: username,
            password: password
        });
        alert(`access:\n${response.data['access']}\n refresh:\n${response.data['refresh']}`)

    } catch (e) {
        alert(e)
    }
}