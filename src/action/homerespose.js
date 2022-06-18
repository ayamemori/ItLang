import axios from 'axios';

export const home = async () => {
    try {
        const response = await axios.get('get/courses', {
        });
        
        console.log(response);
    } catch (e) {
        alert(e)
    }
}