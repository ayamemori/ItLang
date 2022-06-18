import axios from 'axios';

export const home = async () => {
    try {
        const response = await axios.get('edu/get/courses', {
        });
        
        return response.data;
    } catch (e) {
        alert(e)
    }
}