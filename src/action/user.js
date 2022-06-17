import axios from 'axios';

export const registration = async (email, password) => {
    try {
        const response = await axios.post('', {
            email,
            password
        });
        alert(response.data.message)
    } catch (e) {
        alert(e)
    }
}